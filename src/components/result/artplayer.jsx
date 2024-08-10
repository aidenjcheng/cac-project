import React, { useEffect, useRef, useState } from "react";
import Artplayer from "artplayer";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { initializeApp } from "firebase/app";
import GunChart from "./gunchart";
import KnifeChart from "./knifechart";
import GunKnifeChart from "./gun&knifechart";
import { ThemeProvider } from "../themeprovider.tsx";

const ArtPlayerComponent = ({ userEmail, videoUrl, markers }) => {
  console.log("ArtPlayerComponent rendering...");
  console.log("Received videoUrl:", videoUrl);
  console.log("Received markers:", markers);

  const artRef = useRef();

  useEffect(() => {
    if (!videoUrl) {
      console.error("videoUrl is required but got undefined");
      return;
    }

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
    });

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, [videoUrl, markers]);

  console.log("Rendering ArtPlayerComponent JSX");
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-full w-full flex flex-wrap gap-3">
        <div className="rounded-[20px] overflow-hidden w-[calc(700px*0.9)] h-[calc(400px*0.9)] flex items-center justify-center bg-[#181818] border-black/10 border-solid border">
          <div
            ref={artRef}
            className="w-[calc(100%-20px)] h-[calc(100%-20px)]"
          ></div>
        </div>
        <GunChart />
        <GunKnifeChart />

        <KnifeChart />
      </div>
    </ThemeProvider>
  );
};

export default ArtPlayerComponent;
