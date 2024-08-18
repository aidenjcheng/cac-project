import React, { useEffect, useRef, useState, useCallback } from "react";
import Artplayer from "artplayer";
import GunChart from "./gunchart";
import KnifeChart from "./knifechart";
import GunKnifeChart from "./gun&knifechart";
import Card from "./card";

const ArtPlayerComponent = ({ userEmail, videoUrl, markers }) => {
  console.log("ArtPlayerComponent rendering...");
  console.log("Received videoUrl:", videoUrl);
  console.log("Received markers:", markers);

  const artRef = useRef();
  const [email, setEmail] = useState(
    userEmail || localStorage.getItem("userEmail")
  );
  const [overallTotalGunOccurrences, setOverallTotalGunOccurrences] =
    useState(0);
  const [totalGunDetections, setTotalGunDetections] = useState(() => {
    const storedValue = localStorage.getItem("totalGunDetections");
    return storedValue ? parseInt(storedValue, 10) : 0;
  });
  const [overallTotalKnifeDetections, setOverallTotalKnifeDetections] =
    useState(0);
  const [totalKnifeDetections, setTotalKnifeDetections] = useState(() => {
    const storedValue = localStorage.getItem("totalKnifeDetections");
    return storedValue ? parseInt(storedValue, 10) : 0;
  });
  //I know the detections and occurrences is not consistent btw

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail);
    }
  }, [userEmail]);

  const fetchTotalStats = useCallback(async () => {
    const currentEmail = email || localStorage.getItem("userEmail");
    console.log("Artplayer line 42, Current user email is ", currentEmail);
    if (!currentEmail) {
      console.error("User email is not available");
      return;
    }

    try {
      const response = await fetch(
        `https://cac-project-l5nu9.ondigitalocean.app/api/get_total_stats?email=${encodeURIComponent(
          currentEmail
        )}`
      );
      console.log("Artplayer line 54, CurrentEmail:", currentEmail);
      const data = await response.json();
      if (response.ok) {
        console.log("Set overall total gun occurrences and knife detections");
        setOverallTotalGunOccurrences(data.total_gun_occurrences || 0);
        setOverallTotalKnifeDetections(data.total_knife_occurrences || 0);
      } else {
        console.error("Failed to fetch total stats:", data.error);
      }
    } catch (error) {
      console.error("Error fetching total stats:", error);
    }
  }, [email]);

  useEffect(() => {
    fetchTotalStats();
  }, [fetchTotalStats]);

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
        state: "<img width='60px' height='60px' src='/pause.svg' />",
        fullscreenWebOn: "<img width='25px' height='25px' src='/d.svg' />",
        fullscreenWebOff:
          "<img width='25px' height='25px' src='/fullscreen.svg' />",
      },
      fullscreenWeb: true,
      controls: [
        {
          position: "right",
          index: 1,
          html: "<img width='25px' height='25px' src='/speedup.svg' />",
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
    <div className="h-full w-full flex flex-wrap gap-3">
      <div className="rounded-[20px] overflow-hidden w-[calc(700px*0.9)] h-[calc(400px*0.9)] flex items-center justify-center bg-[#f5f7f9] border-black/10 border-solid border">
        <div
          ref={artRef}
          className="w-[calc(100%-20px)] h-[calc(100%-20px)]"
        ></div>
      </div>
      <GunChart
        totalDetections={overallTotalGunOccurrences}
        title="Overall Total Gun Detections"
      />
      <GunKnifeChart />
      <GunChart
        totalDetections={totalGunDetections}
        title="Current Video Gun Detections"
      />
      <KnifeChart
        totalDetections={totalKnifeDetections}
        title="Current Video Knife Detections"
      />
      <KnifeChart
        totalDetections={overallTotalKnifeDetections}
        title="Overall Total Knife Detections"
      />
      <Card
        totalDetections={overallTotalGunOccurrences}
        title="Overall Total knife Detections"
      />
    </div>
  );
};

export default ArtPlayerComponent;
