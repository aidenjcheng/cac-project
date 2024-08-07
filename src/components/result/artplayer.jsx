import React, { useEffect, useRef, useState } from "react";
import Artplayer from "artplayer";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { initializeApp } from "firebase/app";

// Initialize Firebase (you'll need to replace this with your own config)

const ArtPlayerComponent = ({ userEmail }) => {
  console.log("ArtPlayerComponent rendering...");

  const artRef = useRef();
  const [art, setArt] = useState(null);
  const [videoUrl, setVideoUrl] = useState(
    "https://artplayer.org/assets/sample/video.mp4"
  );
  const [markers, setMarkers] = useState([]);
  const [didUpload, setDidUpload] = useState(false);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    console.log("Upload button clicked");
    if (fileInputRef.current) {
      console.log("Triggering file input click");
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };
  useEffect(() => {
    const speeds = [1.0, 1.25, 1.5, 1.75, 2.0];
    let currentSpeedIndex = 0;
    const art = new Artplayer({
      container: artRef.current,
      url: videoUrl,
      theme: "#fff",
      cssVar: {
        "--art-border-radius": "50px",
      },
      icons: {
        state:
          "<img width='60px' height='60px' src='../../public/pause.svg' />",
        fullscreenWebOn:
          "<img width='25px' height='25px' src='../../public/d.svg' />",
        fullscreenWebOff:
          "<img width='25px' height='25px' src='../../public/fullscreen.svg' />",
      },
      fullscreenWeb: true,
      controls: [
        {
          position: "right",
          index: 1,
          html: "<img width='25px' height='25px' src='../../public/speedup.svg' />",
          click: function () {
            currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
            const newSpeed = speeds[currentSpeedIndex];
            newArt.playbackRate = newSpeed;
            this.innerHTML = newSpeed.toFixed(2) + "x";
          },
        },
      ],
      settings: [
        {
          html: "Speed",
          selector: speeds.map((speed) => ({
            html: `${speed.toFixed(2)}x`,
            value: speed,
          })),
          onSelect: function (item) {
            newArt.playbackRate = item.value;
            const speedButton = newArt.controls.querySelector(
              ".art-control-playbackRate"
            );
            if (speedButton) {
              speedButton.innerHTML = item.html;
            }
          },
        },
      ],
      highlight: markers,
    });

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, [videoUrl, markers]);

  const validateJSON = (json) => {
    console.log("Validating JSON:", JSON.stringify(json, null, 2));
    const requiredFields = [
      "statistics",
      "statistics.total_gun_occurrences",
      "statistics.total_knife_occurrences",
      "statistics.total_seconds_gun_detected",
      "statistics.total_seconds_knife_detected",
      "statistics.total_seconds_nothing_detected",
    ];

    for (const field of requiredFields) {
      console.log(`Checking field: ${field}`);
      const value = field
        .split(".")
        .reduce((obj, key) => obj && obj[key], json);
      if (value === undefined) {
        console.error(`Missing required field: ${field}`);
        return false;
      }
      console.log(`Field ${field} found with value:`, value);
    }

    console.log("JSON validation successful");
    return true;
  };

  const updateUserStats = async (statistics) => {
    if (!userEmail) {
      console.error("User email is not available");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/update_stats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, statistics }),
      });

      if (response.ok) {
        console.log("User stats updated successfully");
      } else {
        console.error("Failed to update user stats");
      }
    } catch (error) {
      console.error("Error updating user stats:", error);
    }
  };

  const handleFileUpload = (event) => {
    console.log("File upload event triggered");
    const files = event.target.files;
    console.log("Number of files selected:", files.length);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(`Processing file ${i + 1}:`, file.name, file.type);

      if (file.type.startsWith("video/")) {
        console.log("Video file detected. Setting video URL");
        setVideoUrl(URL.createObjectURL(file));
        console.log("Video URL set:", URL.createObjectURL(file));
      } else if (file.type === "application/json") {
        console.log("JSON file detected. Starting to read file");
        const reader = new FileReader();
        reader.onload = (e) => {
          console.log("JSON file read complete");
          try {
            console.log("Parsing JSON content");
            const json = JSON.parse(e.target.result);
            console.log(
              "JSON parsed successfully:",
              JSON.stringify(json, null, 2)
            );

            if (validateJSON(json)) {
              console.log(
                "JSON validation passed. Setting markers and updating user stats"
              );
              setMarkers(json.detections || []);
              console.log("Markers set:", json.detections || []);
              updateUserStats(json.statistics);
            } else {
              throw new Error("Invalid JSON structure");
            }
          } catch (error) {
            console.error("Error processing JSON file:", error);
            console.error(
              "Error details:",
              JSON.stringify(error, Object.getOwnPropertyNames(error))
            );
            alert(
              "Error processing JSON file. Please make sure it's a valid JSON format with the required statistics."
            );
          }
        };
        reader.onerror = (error) => {
          console.error("Error reading JSON file:", error);
          console.error(
            "Error details:",
            JSON.stringify(error, Object.getOwnPropertyNames(error))
          );
        };
        console.log("Starting to read JSON file as text");
        reader.readAsText(file);
      } else {
        console.warn("Unsupported file type:", file.type);
      }
    }
  };

  console.log("Rendering ArtPlayerComponent JSX");
  return (
    <div className="h-full w-full">
      <div className="rounded-[20px] overflow-hidden h-[70%]">
        <div ref={artRef} className="w-[60%] h-[100%]"></div>
      </div>
      <div className="upload-container flex gap-4" onClick={handleUploadClick}>
        <motion.div className="w-[25rem] h-[18rem] flex items-center justify-center border-dashed border-white/10 border rounded-3xl flex-col gap-2 bg-black/[0.10]">
          <p>upload a video</p>
          <Plus />
        </motion.div>
      </div>
      <input
        type="file"
        onChange={handleFileUpload}
        hidden
        accept="video/*, application/json"
        multiple
        ref={fileInputRef}
      />
    </div>
  );
};

export default ArtPlayerComponent;
