import React from "react";
import Accordion from "./accordion";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="flex flex-row justify-center w-2/3 mx-auto gap-10 mt-[40vh] mb-[40vh]">
      <div className="h-min w-1/2 flex flex-col items-start gap-4 ">
        <div className="z-10 flex items-center justify-center scale-90">
          <div
            className={cn(
              "group rounded-full border text-base primary transition-all ease-in hover:cursor-pointer  border-black/10 bg-white hover:border-black/15"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
              <span className="flex items-center gap-1 primary">
                <span
                  className="font-sans inline-flex items-center rounded-full font-semibold leading-tight tracking-widest h-4 px-1.5 text-[9px]"
                  style={{
                    backgroundColor: "rgb(227,227,227)",
                    color: "#8e8d91",
                  }}
                >
                  ?
                </span>
                Frequently Asked Questions
              </span>
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="text-7xl w-full text-wrap bold text-white primary">
          Have any questions?
        </h1>
      </div>
      <div className="h-min w-1/2">
        <Accordion />
      </div>
    </div>
  );
};

export default FAQ;
