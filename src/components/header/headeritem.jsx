import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderItem = ({ children }) => {
  return (
    <Link to={children[0]}>
      <motion.div
        className="flex flex-row gap-2 p-3 rounded-lg group "
        initial={{ background: "#fff" }}
        whileHover={{ background: "#f4f4f5" }}
      >
        <div className="secondary transition-colors duration-100 ease-in-out fill-[#7b7b7b] hover:fill-[#2b2b2b]">
          {children[3]}
        </div>
        <div className="flex flex-col">
          <a
            href={children[0]}
            className="group-hover:text-[#2b2b2b] transition-colors duration-100 ease-in-out text-[#7b7b7b]"
          >
            {children[1]}
          </a>
          <p className="text-[rgb(180,180,180)] relative">{children[2]}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default HeaderItem;
