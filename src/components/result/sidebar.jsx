import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SidebarItem = ({ children, variant = "default", isSidebarOpen }) => {
  const baseClasses =
    "flex items-center gap-3 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out group w-[100%] mx-auto";

  const variantClasses = {
    default:
      "hover:bg-white hover:border-[#e4e6e8] border border-solid border-transparent",
    active: "bg-white border-[#e4e6e8] border border-solid",
  };

  const baseClassesInner =
    "flex items-center gap-3 transition-colors duration-300 ease-in-out w-[80%] mx-auto py-2";

  const variantClassesInner = {
    default: "text-white/50 group-hover:text-white/85",
    active: "text-white",
  };
  return (
    <Link to={children[0]} className="group">
      <motion.li
        className={`${baseClasses} ${variantClasses[variant]}`}
        initial={{
          boxShadow:
            variant === "active"
              ? "rgba(255, 255, 255, 0.3) 0px 0px 2px"
              : "rgba(255, 255, 255, 0.0) 0px 0px 2px",
        }}
        whileHover={{
          boxShadow:
            variant === "active"
              ? "rgba(255, 255, 255, 0.3) 0px 0px 2px"
              : "rgba(255, 255, 255, 0.3) 0px 0px 2px",
        }}
      >
        <div
          className={`${baseClassesInner} ${variantClassesInner[variant]}`}
          style={{ justifyContent: isSidebarOpen ? "left" : "center" }}
        >
          {children[1]}
          <AnimatePresence>{isSidebarOpen && children[2]}</AnimatePresence>
        </div>
      </motion.li>
    </Link>
  );
};

export default SidebarItem;
