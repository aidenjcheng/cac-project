import { animate, stagger, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PolaroidPhoto from "./hero/polaroidphoto";
import Carousel from "./hero/carousel";

const HeroSection = () => {
  const [activeSpan, setActiveSpan] = useState(-1);
  const spanColors = ["#23ffbd", "#8323ff", "#0275ff"];
  const spanDurations = [3000, 3000, 3000];
  const delayBetweenSpans = 500;
  const startupDelay = 1000; // 1-second startup delay

  useEffect(() => {
    let timeoutId;
    let currentSpan = 0;

    const animateNextSpan = () => {
      setActiveSpan(currentSpan);

      timeoutId = setTimeout(() => {
        setActiveSpan(-1);
        currentSpan = (currentSpan + 1) % 3;

        timeoutId = setTimeout(animateNextSpan, delayBetweenSpans);
      }, spanDurations[currentSpan]);
    };

    // Start the animation after the startup delay
    timeoutId = setTimeout(animateNextSpan, startupDelay);

    return () => {
      clearTimeout(timeoutId);
      setActiveSpan(-1);
    };
  }, []);

  useEffect(() => {
    const heroItems = document.querySelectorAll(".hero-item");
    if (heroItems.length > 0) {
      animate(
        heroItems,
        {
          opacity: 1,
          filter: "blur(0px)",
          transform: "translate3d(0px, 0px, 0px)",
        },
        { delay: stagger(0.2) },
        { ease: "cubic-bezier(0.29, 1.28, 0.47, 0.99)", duration: 5 },
      );
    }
  }, []);

  useEffect(() => {
    const heroPhotos = document.querySelectorAll(".hero-photo");
    if (heroPhotos.length > 0) {
      animate(
        heroPhotos,
        {
          opacity: 1,
          scale: 1,
        },
        { delay: stagger(0.5) },
        { ease: "cubic-bezier(0.87, 0, 0.13, 1)", duration: 5 },
      );
    }
  }, []);

  return (
    <div className="flex flex-col justify-start pt-[250px] px-[100px] text-center z-40 ">
      <div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img1.jpg"
            className=" left-[17vw] top-[150px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "5deg" }}
            name={"GUN"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img1.jpg"
            className=" left-[17vw] top-[150px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "5deg" }}
            name={"KNIFE"}
          />
          <PolaroidPhoto
            photo="./heroimages/img1.jpg"
            className=" left-[17vw] top-[150px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "5deg" }}
            name={"THREAT"}
          />
        </div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img2.jpg"
            className=" left-[10vw] top-[325px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "25deg" }}
            name={"GUN"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img2.jpg"
            className=" left-[10vw] top-[325px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "25deg" }}
            name={"KNIFE"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img2.jpg"
            className=" left-[10vw] top-[325px] absolute rotate-[5deg]"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "25deg" }}
            name={"THREAT"}
          />{" "}
        </div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img3.jpg"
            className=" left-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "-8deg" }}
            name={"GUN"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img3.jpg"
            className=" left-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "-8deg" }}
            name={"KNIFE"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img3.jpg"
            className=" left-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "-8deg" }}
            name={"THREAT"}
          />{" "}
        </div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img4.jpg"
            className="  right-[17vw] top-[150px] absolute"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "-5deg" }}
            name={"GUN"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img4.jpg"
            className="  right-[17vw] top-[150px] absolute"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "-5deg" }}
            name={"KNIFE"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img4.jpg"
            className="  right-[17vw] top-[150px] absolute"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "-5deg" }}
            name={"THREAT"}
          />{" "}
        </div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="   right-[10vw] top-[325px] absolute"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "-25deg" }}
            name={"GUN"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="   right-[10vw] top-[325px] absolute"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "-25deg" }}
            name={"KNIFE"}
          />{" "}
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="   right-[10vw] top-[325px] absolute"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "-25deg" }}
            name={"THREAT"}
          />{" "}
        </div>
        <div>
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="    right-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#23ffbd" }}
            activeSpan={activeSpan}
            spanNumber={0}
            initial={{ opacity: 0, scale: 0.95, rotate: "8deg" }}
            name={"GUN"}
          />
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="    right-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#8323ff" }}
            activeSpan={activeSpan}
            spanNumber={1}
            initial={{ opacity: 0, scale: 0.95, rotate: "8deg" }}
            name={"KNIFE"}
          />
          <PolaroidPhoto
            photo="./heroimages/img5.jpg"
            className="    right-[16vw] top-[500px] absolute"
            tagColor={{ backgroundColor: "#0275ff" }}
            activeSpan={activeSpan}
            spanNumber={2}
            initial={{ opacity: 0, scale: 0.95, rotate: "8deg" }}
            name={"THREAT"}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-7 ">
        <motion.h1
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translateY(10px)",
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transform: "translateY(0px)",
          }}
          transition={{
            duration: 0.5,
          }}
          className="bold hero-item w-[60vw] cursor-pointer text-[#2b2b2b]"
          style={{
            fontSize: "4.5rem",
            lineHeight: "0.9em",
            letterSpacing: "-2%",
          }}
        >
          AI video analysis for <br />
          <motion.span
            animate={{ color: activeSpan === 0 ? spanColors[0] : "#2b2b2b" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bold"
            style={{
              fontSize: "4.5rem",
              lineHeight: "0.9em",
              letterSpacing: "-2%",
            }}
          >
            guns
          </motion.span>
          ,{" "}
          <motion.span
            animate={{ color: activeSpan === 1 ? spanColors[1] : "#2b2b2b" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bold"
            style={{
              fontSize: "4.5rem",
              lineHeight: "0.9em",
              letterSpacing: "-2%",
            }}
          >
            knives
          </motion.span>
          , and <br />
          <motion.span
            animate={{ color: activeSpan === 2 ? spanColors[2] : "#2b2b2b" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bold"
            style={{
              fontSize: "4.5rem",
              lineHeight: "0.9em",
              letterSpacing: "-2%",
            }}
          >
            threats in security footage
          </motion.span>
        </motion.h1>

        <div className="flex flex-row gap-2 ">
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              transform: "translateY(10px)",
            }}
            className="hero-item"
          >
            <Link to="/signin" className="btn-big box-content">
              Start for free
            </Link>
          </motion.div>
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default HeroSection;
