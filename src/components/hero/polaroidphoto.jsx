import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const PolaroidPhoto = ({ photo, className, initial, animate }) => {
  return (
    <motion.div
      className={cn(
        "absolute border border-black/30 border-solid overflow-hidden px-2 pt-2 pb-6 bg-white hero-photo",
        className
      )}
      initial={{ scale: 0.95, opacity: 0, ...initial }}
      animate={animate}
    >
      <img
        src={photo}
        alt="polaroid"
        className="h-[100px] w-[100px] object-cover opacity-[0.9] border border-black/20 border-solid"
      />
    </motion.div>
  );
};

export default PolaroidPhoto;
