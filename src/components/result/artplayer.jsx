import React, { useEffect, useRef, useState, useCallback } from "react";
import Artplayer from "artplayer";
import Card from "./card";
import StartCard from "./startcard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { X } from "lucide-react";

const ArtPlayerComponent = ({ userEmail, videoUrl, markers }) => {
  console.log("ArtPlayerComponent rendering...");
  console.log("Received videoUrl:", videoUrl);
  console.log("Received markers:", markers);

  const artRef = useRef();
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);
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

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail);
    }
  }, [userEmail]);
  const handleXClick = () => {
    setIsWelcomeVisible(false);
  };
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

  // Calculation
  const gunDetectionRatio = overallTotalGunOccurrences
    ? (overallTotalGunOccurrences - totalGunDetections) /
      overallTotalGunOccurrences
    : 0;
  const knifeDetectionRatio = overallTotalKnifeDetections
    ? (overallTotalKnifeDetections - totalKnifeDetections) /
      overallTotalKnifeDetections
    : 0;

  return (
    <div className="h-full w-full flex flex-wrap gap-3 flex-col">
      {isWelcomeVisible && (
        <div className="flex flex-col gap-3 w-full border-b border-[#e5e5e5] pb-5">
          <div className=" flex justify-between w-full">
            <h2>
              <strong
                className="text-[1.5rem]"
                style={{ lineHeight: "2rem", letterSpacing: "-0.025em" }}
              >
                Welcome
              </strong>
            </h2>
            <X
              className="hover:stroke-[#f03d3d] duration-300 ease-in-out transition-colors cursor-pointer"
              onClick={() => handleXClick()}
            />
          </div>
          <div className="flex gap-4 w-full">
            <StartCard
              imgSrc={"./svgs/1.svg"}
              title={"Click on Detect and upload a video"}
              description={"On the side bar."}
            />
            <StartCard
              imgSrc={"./svgs/2.svg"}
              title={"Download the processed video"}
              description={"Will come in a .zip file"}
            />
            <StartCard
              imgSrc={"./svgs/3.svg"}
              title={"Upload the video by clicking the +"}
              description={"Optionally upload the JSON file too."}
            />
            <StartCard
              imgSrc={"./svgs/4.svg"}
              title={"Watch the video"}
              description={"By clicking on the video in the dashboard."}
            />
          </div>
        </div>
      )}

      <div className=" flex w-full flex-wrap gap-3 pt-5">
        <div className="rounded-[10px] overflow-hidden w-[calc(700px*0.9)] h-[calc(400px*0.9)] flex items-center justify-center bg-white border-black/10 border-solid border">
          <div
            ref={artRef}
            className="w-[calc(100%-20px)] h-[calc(100%-20px)]"
          ></div>
        </div>
        <div className="flex flex-col gap-2">
          <Card
            totalDetections={overallTotalGunOccurrences}
            title="Overall Total Gun Detections"
            progress={"100"}
            percentIncrease={"100"}
          />
          <Card
            totalDetections={totalGunDetections}
            title="Current Video Gun Detections"
            progress={gunDetectionRatio * 100}
            percentIncrease={gunDetectionRatio}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Card
            totalDetections={overallTotalKnifeDetections}
            title="Overall Total knife Detections"
            progress={"100"}
            percentIncrease={"100"}
          />
          <Card
            totalDetections={totalKnifeDetections}
            title="Current Video Knife Detections"
            progress={knifeDetectionRatio * 100}
            percentIncrease={knifeDetectionRatio}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtPlayerComponent;
