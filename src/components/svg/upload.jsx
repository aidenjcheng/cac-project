import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const Upload = ({ handleUploadButtonClick, handleClickOutside }) => {
  return (
    <motion.div
      onClick={() => handleUploadButtonClick(true)}
      className="w-[25rem] h-[18rem] flex items-center justify-center border-dashed border-black/10 border rounded-3xl flex-col gap-2 bg-[#f5f7f9]"
    >
      <p>Upload a Video</p>
      <Plus />
    </motion.div>
  );
};

export default Upload;
