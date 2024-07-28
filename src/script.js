import JSZip from "jszip";

export async function processVideo(videoFile) {
  const apiUrl = "https://655e-173-79-221-112.ngrok-free.app/process_video";
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

      // Get the zip file as an ArrayBuffer
      const zipArrayBuffer = await response.arrayBuffer();

      // Use JSZip to unzip the file
      const zip = await JSZip.loadAsync(zipArrayBuffer);

      // Extract and save the video file
      const videoBlob = await zip.file("processed_video.mp4").async("blob");
      const videoUrl = URL.createObjectURL(videoBlob);
      downloadFile(videoUrl, "processed_video.mp4");

      // Extract and save the JSON file
      const jsonText = await zip.file("knife_detections.json").async("text");
      const jsonBlob = new Blob([jsonText], { type: "application/json" });
      const jsonUrl = URL.createObjectURL(jsonBlob);
      downloadFile(jsonUrl, "knife_detections.json");

      console.log(
        "Processed video and detection data extracted and downloaded."
      );
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
