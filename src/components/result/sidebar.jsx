import React from "react";
import { motion } from "framer-motion";

const SidebarItem = ({ children, variant = "default" }) => {
  const baseClasses =
    "flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out group";

  const variantClasses = {
    default: "hover:bg-white/5 hover:box-shadow",
    active: "bg-white/5 text-white",
  };

  const baseClassesInner =
    "flex items-center gap-3 transition-colors duration-300 ease-in-out";

  const variantClassesInner = {
    default: "text-white/50 group-hover:text-white/85",
    active: "text-white",
  };
  return (
    <motion.li
      // className="flex w-full p-2 rounded-xl pl-4 group hover:bg-white/5 transition-colors duration-300 ease-in-out cursor-pointer"
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
      <div className={`${baseClassesInner} ${variantClassesInner[variant]}`}>
        {children}
      </div>
    </motion.li>
  );
};

export default SidebarItem;
