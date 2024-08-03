import ShinyText from "./ShinyText";
import ChevronRight from "./svg/chevronright";
import { Cpu, ShieldPlus } from "lucide-react";
import { animate, stagger, motion } from "framer-motion";
import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    animate(
      ".hero-item",
      { opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" },
      { delay: stagger(0.3) },
      { ease: "cubic-bezier(0.5, 0, 0, 1)", duration: 5 }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center w-3/4 mx-auto gap-7 h-[85vh] items-center text-center">
      <motion.a
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          transform: "translateY(10px)",
        }}
        href="index.html"
        className="cursor-pointer hero-item"
      >
        <ShinyText />
      </motion.a>
      <motion.h1
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          transform: "translateY(10px)",
        }}
        className="med text-white  hero-item"
        style={{
          fontSize: "5rem",
          lineHeight: "5.2rem",
        }}
      >
        Ensure protection <br /> in your community.
        <br />
      </motion.h1>
      <motion.h3
        initial={{
          opacity: 0,
          filter: "blur(10px)",
          transform: "translateY(10px)",
        }}
        className=" text-lg text-secondary w-3/4 hero-item"
      >
        Enhance your <strong>security</strong>{" "}
        <span className="inline-block align-middle">
          <ShieldPlus className="size-4 stroke-green-400" />
        </span>{" "}
        with our cutting-edge
        <strong> AI-powered object recognition technology</strong>{" "}
        <span className="inline-block align-middle ">
          <Cpu color="#ffffff" className="size-4 stroke-blue-400" />
        </span>
        . Detect
        <strong> weapons </strong>
        in real-time through security camera footage, ensuring a
        <strong> safer environment for everyone.</strong>
      </motion.h3>
      <div className="flex flex-row gap-2 ">
        <motion.a
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translateY(10px)",
          }}
          href="getstarted.html"
          className="btn-big hero-item"
        >
          enhance your security now
        </motion.a>
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translateY(10px)",
          }}
          className="group hero-item"
        >
          <a href="signin.html" className="btn-secondary-big">
            how it works
            <ChevronRight color="#aaafb5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
