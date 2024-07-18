import React from "react";
import { motion, easeInOut } from "framer-motion";

const HeaderItem = ({ children }) => {
  return (
    <a href={children[0]}>
      <motion.div
        className="flex flex-row gap-2 p-3 rounded-lg"
        initial={{ background: "transparent" }}
        whileHover={{ background: "#232323" }}
      >
        <div>{children[3]}</div>
        <div className="flex flex-col">
          <a href={children[0]}>{children[1]}</a>
          <p className="text-secondary relative">{children[2]}</p>
        </div>
      </motion.div>
    </a>
  );
};

export default HeaderItem;
