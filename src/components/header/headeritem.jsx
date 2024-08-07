import React from "react";
import { motion, easeInOut } from "framer-motion";
import { Link } from "react-router-dom";

const HeaderItem = ({ children }) => {
  return (
    <Link to={children[0]}>
      <motion.div
        className="flex flex-row gap-2 p-3 rounded-lg group "
        initial={{ background: "rgba(0,0,0,0)" }}
        whileHover={{ background: "#232323" }}
      >
        <div className="fill-[rgb(180,180,180)] group-hover:fill-white transition-colors duration-100 ease-in-out">
          {children[3]}
        </div>
        <div className="flex flex-col">
          <a
            href={children[0]}
            className="text-[rgb(180,180,180)] group-hover:text-white transition-colors duration-100 ease-in-out"
          >
            {children[1]}
          </a>
          <p className="text-secondary relative">{children[2]}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default HeaderItem;
