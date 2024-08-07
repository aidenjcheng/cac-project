import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "../player.jsx";
import ArtPlayer from "../result/artplayer";
import GunChart from '../result/gunchart.tsx';


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
            autoplay: false,
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
export default StatsPage;
