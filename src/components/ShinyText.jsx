import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const ShinyText = () => {
  return (
    <div className="z-10 flex min-h-[5rem] items-center justify-center">
      <div
        className={cn(
          "group rounded-full border text-base text-white transition-all ease-in hover:cursor-pointer  border-white/10 bg-neutral-900 hover:border-white/15"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:duration-300 hover:text-neutral-400">
          <span className="flex items-center gap-1">
            <span
              className="font-sans inline-flex items-center rounded-full font-semibold leading-tight tracking-widest h-4 px-1.5 text-[9px]"
              style={{ backgroundColor: "#2e2e2e", color: "#8e8d91" }}
            >
              AI
            </span>
            Introducing Weapon Detection
          </span>
          <div
            className="flex items-center justify-center p-1 rounded-full ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            style={{ backgroundColor: "#2e2e2e" }}
          >
            <ArrowRightIcon className="size-3" />
          </div>
        </AnimatedShinyText>
      </div>
    </div>
  );
};
export default ShinyText;
