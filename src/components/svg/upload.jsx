import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const Upload = ({ handleUploadButtonClick, handleClickOutside }) => {
  const uploadVariants = {};
  return (
    <motion.div
      onClick={() => handleUploadButtonClick(true)}
      className="w-[25rem] h-[18rem] flex items-center justify-center border-dashed border-white/10 border rounded-3xl flex-col gap-2"
    >
      <p>upload a video</p>
      <Plus />
    </motion.div>
  );
};

export default Upload;
