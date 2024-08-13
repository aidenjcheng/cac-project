export async function processVideo(videoFile) {
  const apiUrl =
    "https://d57d43bb4144e42be9d9ed796fedd8b3e.clg07azjl.paperspacegradient.com/process_video";

  const formData = new FormData();
  formData.append("video", videoFile, videoFile.name);

  console.log("Sending request to API...");

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Request successful!");
      const contentType = response.headers.get("Content-Type");

      if (contentType && contentType.includes("multipart/mixed")) {
        const blob = await response.blob();
        const parts = await splitMultipart(blob, contentType);

        for (const part of parts) {
          const filename = getFilenameFromContentDisposition(
            part.headers["content-disposition"]
          );
          if (filename) {
            console.log("Processing file:", filename);
            if (filename.endsWith(".mp4")) {
              const videoBlob = new Blob([part.content], { type: "video/mp4" });
              await saveFile(videoBlob, filename);
            } else if (filename === "spotted_occurrences.json") {
              const jsonContent = await part.content.text();
              console.log("JSON content:", jsonContent);
              // You can process the JSON data here if needed
              await saveFile(
                new Blob([jsonContent], { type: "application/json" }),
                filename
              );
            }
          }
        }

        console.log("Processing complete. Results saved as separate files.");
        alert(
          "Processing complete. Check your downloads folder for the results."
        );
      } else {
        console.log("Unexpected response format. Saving as single file.");
        const blob = await response.blob();
        await saveFile(blob, "processed_results");
      }
    } else {
      console.error(`Error: Received status code ${response.status}`);
      const errorText = await response.text();
      console.error(errorText);
      alert("An error occurred while processing the video. Please try again.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    alert("An error occurred while processing the video. Please try again.");
  }

  console.log("Process complete.");
}

async function splitMultipart(blob, contentType) {
  const boundary = contentType.split("boundary=")[1];
  const parts = [];
  const reader = new FileReader();
  reader.readAsArrayBuffer(blob);
  await new Promise((resolve) => (reader.onload = resolve));
  const buffer = reader.result;
  const view = new Uint8Array(buffer);
  const boundaryBytes = `--${boundary}`
    .split("")
    .map((char) => char.charCodeAt(0));
  let start = 0;

  while (start < view.length) {
    const end = findBoundary(view, boundaryBytes, start);
    if (end === -1) break;

    const part = buffer.slice(start, end);
    const partView = new Uint8Array(part);
    const headerEnd = findSequence(partView, [13, 10, 13, 10]);
    const headers = new TextDecoder().decode(part.slice(0, headerEnd));
    const content = part.slice(headerEnd + 4);

    const headerObj = {};
    headers.split("\r\n").forEach((header) => {
      const [key, value] = header.split(": ");
      headerObj[key.toLowerCase()] = value;
    });

    parts.push({
      headers: headerObj,
      content: new Blob([content], { type: headerObj["content-type"] }),
    });

    start = end + boundaryBytes.length;
  }

  return parts;
}

function findBoundary(view, boundaryBytes, start) {
  for (let i = start; i < view.length - boundaryBytes.length; i++) {
    if (view[i] === boundaryBytes[0]) {
      let found = true;
      for (let j = 1; j < boundaryBytes.length; j++) {
        if (view[i + j] !== boundaryBytes[j]) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }
  return -1;
}

function findSequence(view, sequence) {
  for (let i = 0; i < view.length - sequence.length; i++) {
    let found = true;
    for (let j = 0; j < sequence.length; j++) {
      if (view[i + j] !== sequence[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}

function getFilenameFromContentDisposition(contentDisposition) {
  if (!contentDisposition) return null;
  const filenameMatch = contentDisposition.match(/filename="?(.+?)"?(?:;|$)/i);
  if (filenameMatch) {
    let filename = filenameMatch[1];
    filename = filename.replace(/"/g, "").trim();
    return filename;
  }
  return null;
}

async function saveFile(content, filename) {
  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: filename,
        types: [
          {
            description: "File",
            accept: { "*/*": [".mp4", ".json"] },
          },
        ],
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      console.log(`File saved: ${filename}`);
    } catch (err) {
      console.error(`Error saving file: ${err}`);
      fallbackSaveFile(content, filename);
    }
  } else {
    fallbackSaveFile(content, filename);
  }
}

function fallbackSaveFile(content, filename) {
  const url = URL.createObjectURL(content);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    console.log("File selected:", file.name);
    processVideo(file);
  }
}

export function handleUploadClick(fileInputRef) {
  if (fileInputRef.current) {
    fileInputRef.current.click();
  }
}
