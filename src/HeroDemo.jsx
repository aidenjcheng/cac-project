import { createRoot } from "react-dom/client";
import { motion, animate, stagger } from "framer-motion";
import React, { useEffect } from "react";
import Dashboard from "./components/playercopy.jsx";
import ArtPlayer from "./components/result/artplayer.jsx";

const HeroDemo = () => {
  return (
    <div
      className=" w-screen h-[1600px] absolute top-[60%] pointer-events-none"
      style={{
        contain: "strict",
        perspective: "4000px",
        perspectiveOrigin: "100% 0",
        transformStyle: "preserve-3d",
      }}
    >
      <div className="w-full" id="demo">
        <div className="absolute top-[6px] left-[6px] flex gap-1 z-[15]">
          <div className="bg-[#FF5F57] w-[10px] h-[10px] rounded-full box-border border border-solid border-black/50"></div>
          <div className="bg-[#FEBC2E] w-[10px] h-[10px] rounded-full box-border border border-solid border-black/50"></div>
          <div className="bg-[#28C840] w-[10px] h-[10px] rounded-full box-border border border-solid border-black/50"></div>
        </div>
        <motion.div
          className="w-full h-full pointer-events-none bg-[#0f1012] hero-item"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center",
          }}
          initial={{
            opacity: 0,
            filter: "blur(20px)",
          }}
        >
          <Dashboard>{["active", "default", null, <ArtPlayer />]}</Dashboard>{" "}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroDemo;
// const heroDemoElement = document.getElementById("demo");
// const heroDemoRoot = createRoot(heroDemoElement);
// heroDemoRoot.render(<HeroDemo />);
