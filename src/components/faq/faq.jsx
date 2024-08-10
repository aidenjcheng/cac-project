import React from "react";
import Accordion from "./accordion";
import AnimatedShinyText from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";

const FAQ = () => {
  return (
    <div className="flex flex-row items-center justify-center w-2/3 mx-auto gap-10 h-screen">
      <div className="h-min w-1/2 flex flex-col items-start gap-4 ">
        <div className="z-10 flex items-center justify-center scale-90">
          <div
            className={cn(
              "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-black/10 bg-neutral-900 hover:border-black/15"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
              <span className="flex items-center gap-1">
                <span
                  className="font-sans inline-flex items-center rounded-full font-semibold leading-tight tracking-widest h-4 px-1.5 text-[9px]"
                  style={{ backgroundColor: "#2e2e2e", color: "#8e8d91" }}
                >
                  ?
                </span>
                Frequently Asked Questions
              </span>
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="text-7xl w-full text-wrap bold text-white">
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
