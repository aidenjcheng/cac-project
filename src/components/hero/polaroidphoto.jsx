import React from "react";
import { cn } from "../../lib/utils";
import { animate, AnimatePresence, motion } from "framer-motion";

const PolaroidPhoto = ({
  photo,
  className,
  tagColor,
  activeSpan,
  spanNumber,
  name,
  initial,
}) => {
  // Debugging output
  console.log(
    `PolaroidPhoto: activeSpan=${activeSpan}, spanNumber=${spanNumber}`
  );

  return (
    <>
      <AnimatePresence>
        {activeSpan === spanNumber && (
          <motion.div
            className={cn("absolute overflow-hidden", className)}
            initial={initial}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <img
              src={photo}
              alt="polaroid"
              className="h-[100px] w-[100px] object-cover opacity-[0.9] border-[1.5px] border-[rgb(220,220,220)] border-solid rounded-xl"
            />
            <div
              className={
                "absolute bottom-3 left-3 text-[0.5rem] p-[5px] rounded-[5px]"
              }
              style={tagColor}
            >
              DECT. {name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PolaroidPhoto;
