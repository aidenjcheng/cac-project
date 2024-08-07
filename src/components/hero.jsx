import ShinyText from "./ShinyText";
import ChevronRight from "./svg/chevronright";
import { Cpu, ShieldPlus } from "lucide-react";
import { animate, stagger, motion } from "framer-motion";
import React, { useEffect } from "react";
import HeroDemo from "../HeroDemo";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    animate(
      ".hero-item",
      {
        opacity: 1,
        filter: "blur(0px)",
        transform: "translate3d(0px, 0px, 0px)",
      },
      { delay: stagger(0.2) },
      { ease: "cubic-bezier(0.87, 0, 0.13, 1)", duration: 5 }
    );
  }, []);

  return (
    <div
      className="flex flex-col justify-start px-[12.5%] items-center text-center z-40 h-[calc(136vh+1600px)] bg-[#0F1012]
"
    >
      <div
        className="absolute top-0 left-0 w-full h-[calc(136vh+1600px)] z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(200deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4822303921568627) 55%, rgba(5, 5, 5, 1) 100%)",
        }}
      ></div>
      <div className="h-[85vh] flex flex-col items-center justify-center gap-7 ">
        <motion.a
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            transform: "translateY(10px)",
          }}
          href="index"
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
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              transform: "translateY(10px)",
            }}
            className="btn-big hero-item"
          >
            <Link to="getstarted">enhance your security now</Link>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              transform: "translateY(10px)",
            }}
            className="group hero-item"
          >
            <Link to="/signin" className="btn-secondary-big">
              How it Works
              <ChevronRight color="#aaafb5" />
            </Link>
          </motion.div>
        </div>
      </div>
      <HeroDemo />
    </div>
  );
};

export default HeroSection;
