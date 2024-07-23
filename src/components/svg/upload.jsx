import React, { useEffect } from "react";
import UploadSvg from "./uploadnew.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Upload = ({ handleUploadClick, handleClickOutside }) => {
  const uploadVariants = {
    animate: {
      scale: [1, 1.01, 1],
      boxShadow: [
        "rgba(255, 255, 255, 0.35) 0px 5px 15px",
        "rgba(255, 255, 255, 0.35) 0px 5px 30px",
        "rgba(255, 255, 255, 0.35) 0px 5px 15px",
      ],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="cursor-pointer rounded-full upload-svg"
      variants={uploadVariants}
      animate="animate"
      onClick={() => handleUploadClick(true)}
      transition={{ type: "spring", stiffness: 500, damping: 20 }}
    >
      <UploadSvg />
    </motion.div>
  );
};

export default Upload;
