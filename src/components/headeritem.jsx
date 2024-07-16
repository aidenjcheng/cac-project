import React from "react";
import { motion } from "framer-motion";

const HeaderItem = ({ children }) => {
  return (
    <a href={children[0]}>
      <motion.div
        className="flex flex-col gap-2 p-3 rounded-lg"
        initial={{ background: "#000000" }}
        whileHover={{ background: "#232323" }}
      >
        <a href={children[0]}>{children[1]}</a>
        <p className="text-secondary text-sm relative">{children[2]}</p>
      </motion.div>
    </a>
  );
};

export default HeaderItem;
