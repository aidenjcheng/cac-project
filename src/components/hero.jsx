import React from "react";
import ShinyText from "./ShinyText";
import ChevronRight from "./svg/chevronright";
import { Cpu, ShieldPlus, Sword } from "lucide-react";
import Upload from "./svg/upload";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 mx-auto gap-10 h-screen">
      <a href="index.html" className="cursor-pointer">
        <ShinyText />
      </a>
      <h1
        className="bold text-center"
        style={{ fontSize: "6rem", lineHeight: "6.4rem" }}
      >
        Ensure protection in <br />
        your community.
        <br />
      </h1>
      <h3 className="text-center text-lg text-secondary w-3/4">
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
        <strong> weapons </strong>{" "}
        <span className="inline-block align-middle">
          <Sword color="#ffffff" className="size-4 stroke-red-400" />
        </span>{" "}
        in real-time through security camera footage, ensuring a
        <strong> safer environment for everyone.</strong>
      </h3>
      <div className="flex flex-row gap-2">
        <a href="getstarted.html" className="btn-big">
          enhance your security now
        </a>
        <div className="group">
          <a href="signin.html" className="btn-secondary-big ">
            how it works
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
