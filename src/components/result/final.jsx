import React, { useEffect, useState } from "react";
import Dashboard from "../player.jsx";
import ArtPlayerComponent from "../result/artplayer";

const StatsPage = () => {
  const [videoUrl, setVideoUrl] = useState("../../public/blackscreen.mp4");
  const [markers, setMarkers] = useState([]);
  const [userEmail, setUserEmail] = useState(null);
  const [totalGunDetections, setTotalGunDetections] = useState(0);

  useEffect(() => {
    console.log("Checking for stored video URL...");
    const storedUrl = localStorage.getItem("processedVideoUrl");
    if (storedUrl) {
      console.log("Found stored video URL:", storedUrl);
      setVideoUrl(storedUrl);
      localStorage.removeItem("processedVideoUrl");
    } else {
      console.log("No stored video URL found");
    }

    const storedTotalGunDetections = localStorage.getItem("totalGunDetections");
    if (storedTotalGunDetections) {
      setTotalGunDetections(parseInt(storedTotalGunDetections, 10));
    }

    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

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

    const currentEmail = userEmail || localStorage.getItem("userEmail");
    console.log("Attempting to update user stats for email:", currentEmail);

    console.log("Statistics being sent:", JSON.stringify(statistics, null, 2));

    try {
      const response = await fetch(
        "https://cac-project-l5nu9.ondigitalocean.app/update_stats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: currentEmail, statistics }),
        }
      );

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
              const newTotalGunDetections =
                json.statistics.total_gun_occurrences;
              const newTotalKnifeDetections =
                json.statistics.total_knife_occurrences;
              setTotalGunDetections(newTotalGunDetections);
              localStorage.setItem(
                "totalGunDetections",
                newTotalGunDetections.toString()
              );
              console.log(
                "gun set localstorage to, ",
                newTotalGunDetections.toString()
              );
              localStorage.setItem(
                "totalKnifeDetections",
                newTotalKnifeDetections.toString()
              );
              console.log(
                "knife set localstorage to, ",
                newTotalKnifeDetections.toString()
              );
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

  return (
    <Dashboard handleFileUpload={handleFileUpload} setUserEmail={setUserEmail}>
      {[
        "active",
        "default",
        null,
        <ArtPlayerComponent
          userEmail={userEmail}
          videoUrl={videoUrl}
          markers={markers}
          getInstance={(art) => {
            console.log("ArtPlayer instance:", art);
            console.log("Current video URL:", art.option.url);
          }}
        />,
      ]}
    </Dashboard>
  );
};

export default StatsPage;
