import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface DemoItemProps {
  title: string;
  description: string;
  linkTo: string;
  linkText: string;
  index: number;
  activeIndex: number;
}

const DemoItem: React.FC<DemoItemProps> = ({
  title,
  description,
  linkTo,
  linkText,
  index,
  activeIndex,
}) => {
  return (
    <div
      className={`w-full p-[36px] flex flex-col gap-[16px] h-full relative cursor-pointer`}
    >
      <div className="flex flex-col gap-[8px]">
        <span className="med primary">{title}</span>
        <span className="text-secondary">{description}</span>
      </div>
      <Link to={linkTo} className="text-[#0275ff] group">
        {linkText}{" "}
        <span className="inline-flex align-middle group-hover:translate-x-[3px] transition-transform duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="12"
            fill="none"
            viewBox="0 0 14 12"
            className="size-[10px]"
          >
            <path
              stroke="#0275ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              d="M1 6h12m0 0L8 1m5 5l-5 5"
            ></path>
          </svg>
        </span>
      </Link>
      <div className="h-[1px] w-full bg-black/10 absolute bottom-0 left-0">
        <motion.div
          className="h-full w-full bg-[#0275ff]"
          style={{
            transformOrigin: "left",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: index === activeIndex ? 1 : 0 }}
          transition={{ duration: 10, ease: "linear" }}
        ></motion.div>
      </div>
    </div>
  );
};

export default DemoItem;
