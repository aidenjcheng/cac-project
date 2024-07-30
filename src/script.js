export async function processVideo(videoFile) {
  const apiUrl = "https://0c1a-173-79-221-112.ngrok-free.app/process_video"; // Update this to your actual API URL
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
            downloadFile(URL.createObjectURL(part.content), filename);
          }
        }

        console.log("Processing complete. Results saved as separate files.");
      } else {
        console.log("Unexpected response format. Saving as single file.");
        const blob = await response.blob();
        downloadFile(URL.createObjectURL(blob), "processed_results");
      }
    } else {
      console.error(`Error: Received status code ${response.status}`);
      const errorText = await response.text();
      console.error(errorText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  console.log("Process complete.");
}

async function splitMultipart(blob, contentType) {
  const boundary = contentType.split("boundary=")[1];
  const text = await blob.text();
  const parts = text.split(`--${boundary}`).slice(1, -1);

  return parts.map((part) => {
    const [headers, ...contentArray] = part.trim().split("\r\n\r\n");
    const content = contentArray.join("\r\n\r\n");

    const headerObj = {};
    headers.split("\r\n").forEach((header) => {
      const [key, value] = header.split(": ");
      headerObj[key.toLowerCase()] = value;
    });

    return {
      headers: headerObj,
      content: new Blob([content], { type: headerObj["content-type"] }),
    };
  });
}

function getFilenameFromContentDisposition(contentDisposition) {
  if (!contentDisposition) return null;
  const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
  return filenameMatch ? filenameMatch[1] : null;
}

function downloadFile(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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
