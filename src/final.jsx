import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/player.jsx";
import ArtPlayer from "./components/result/artplayer.jsx";

const StatsPage = () => {
  const [videoUrl, setVideoUrl] = useState("../../public/blackscreen.mp4");

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
  }, []);

  return (
    <Dashboard>
      {[
        "active",
        "default",
        null,
        <ArtPlayer
          option={{
            url: videoUrl,
            autoplay: true,
            url: videoUrl,
            autoplay: true,
          }}
          style={{
            width: "calc(700px*1.2)",
            height: "calc(400px*1.2)",
            borderRadius: "var(--art-border-radius)",
          }}
          getInstance={(art) => {
            console.log("ArtPlayer instance:", art);
            console.log("Current video URL:", art.option.url);
          }}
        />,
      ]}
    </Dashboard>
  );
};

const realuploadRoot2 = document.getElementById("root");
const upload12 = createRoot(realuploadRoot2);
upload12.render(<StatsPage />);
