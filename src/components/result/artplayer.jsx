import React, { useEffect, useRef, useState } from "react";
import Artplayer from "artplayer";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const ArtPlayerComponent = () => {
  const artRef = useRef();
  const [art, setArt] = useState(null);
  const [videoUrl, setVideoUrl] = useState(
    "https://artplayer.org/assets/sample/video.mp4"
  );
  const [markers, setMarkers] = useState([]);
  const [didUpload, setDidUpload] = useState(false);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
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

  const handleFileUpload = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith("video/")) {
        setVideoUrl(URL.createObjectURL(file));
      } else if (file.type === "application/json") {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const json = JSON.parse(e.target.result);
            setMarkers(json.detections || []);
          } catch (error) {
            console.error("Error parsing JSON file:", error);
            alert(
              "Error parsing JSON file. Please make sure it's a valid JSON format."
            );
          }
        };
        reader.readAsText(file);
      }
    }
  };

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
