export async function processVideo(videoFile) {
  const apiUrl = "https://8247-173-79-221-112.ngrok-free.app/process_video";
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

        let videoUrl;
        for (const part of parts) {
          const filename = getFilenameFromContentDisposition(
            part.headers["content-disposition"]
          );
          if (filename) {
            console.log("Processing file:", filename);
            if (filename.endsWith(".mp4") && !videoUrl) {
              videoUrl = URL.createObjectURL(part.content);
              console.log("Video URL created:", videoUrl);
              try {
                // Check if localStorage is available
                if (typeof localStorage !== "undefined") {
                  localStorage.setItem("processedVideoUrl", videoUrl);
                  console.log("Video URL stored in localStorage");
                } else {
                  console.error("localStorage is not available");
                }
              } catch (error) {
                console.error("Error storing video URL:", error);
              }
            }
            downloadFile(URL.createObjectURL(part.content), filename);
          }
        }

        console.log("Processing complete. Results saved as separate files.");

        // Check if the URL was actually stored
        if (typeof localStorage !== "undefined") {
          const storedUrl = localStorage.getItem("processedVideoUrl");
          if (storedUrl) {
            console.log("Video URL confirmed in localStorage:", storedUrl);

            // Redirect to result.html
            setTimeout(() => {
              console.log("Redirecting to result.html...");
              window.location.href = "result.html";
            }, 2000); // Increased delay to 2 seconds
          } else {
            console.error("Failed to store video URL in localStorage");
            if (!videoUrl) {
              console.error("No video URL was created");
            }
          }
        } else {
          console.error("localStorage is not available for verification");
        }
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

// The rest of your code remains the same

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
