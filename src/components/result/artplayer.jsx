import { useEffect, useRef, useState } from "react";
import Artplayer from "artplayer";

export default function Player({ option, getInstance, ...rest }) {
  const artRef = useRef();
  const [art, setArt] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const speeds = [1.0, 1.25, 1.5, 1.75, 2.0];
    let currentSpeedIndex = 0;
    const art = new Artplayer({
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
            art.playbackRate = newSpeed;
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
            art.playbackRate = item.value;
            const speedButton = art.controls.querySelector(
              ".art-control-playbackRate"
            );
            if (speedButton) {
              speedButton.innerHTML = item.html;
            }
          },
        },
      ],
      highlight: markers,
      ...option,
      container: artRef.current,
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);
  const handleUpload = () => {
    const videoInput = document.getElementById("video-upload");
    const jsonInput = document.getElementById("json-upload");
    const videoFile = videoInput.files[0];
    const jsonFile = jsonInput.files[0];

    if (videoFile) {
      const videoUrl = URL.createObjectURL(videoFile);

      if (jsonFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
          try {
            const newMarkers = JSON.parse(e.target.result);
            setMarkers(newMarkers);
            initArtPlayer(videoUrl);
          } catch (error) {
            console.error("Error parsing JSON file:", error);
            alert(
              "Error parsing JSON file. Please make sure it's a valid JSON format."
            );
            initArtPlayer(videoUrl);
          }
        };
        reader.readAsText(jsonFile);
      } else {
        setMarkers([]);
        initArtPlayer(videoUrl);
      }
    } else {
      alert("Please select a video file first.");
    }
  };

  return (
    <div className="">
      <div className="rounded-[20px] overflow-hidden">
        <div
          ref={artRef}
          {...rest}
          className="h-[calc(1.1*500px)] w-[calc(1.1*930px)]"
        ></div>
      </div>
      <div className="upload-container">
        <input type="file" id="video-upload" accept="video/*" />
        <input type="file" id="json-upload" accept="application/json" />
        <button onClick={handleUpload}>Upload and Play</button>
      </div>
    </div>
  );
}
