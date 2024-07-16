import React from "react";
import UploadSvg from "./uploadnew.jsx";
import { motion } from "framer-motion";

const Upload = () => {
  return (
    <motion.div
      className="ripple-container cursor-pointer rounded-full"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <UploadSvg />
      <div className="ripple"></div>
      <div className="ripple" style={{ animationDelay: "1s" }}></div>
      <div className="ripple" style={{ animationDelay: "2s" }}></div>
      <div className="ripple" style={{ animationDelay: "3s" }}></div>
    </motion.div>
  );
};

export default Upload;
