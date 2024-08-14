import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
  return (
    <Link to={to} className="text-[#0275ff] group inline-flex items-center">
      {children}
      <span className="inline-flex align-middle group-hover:translate-x-[3px] transition-transform duration-300 ease-in-out ml-1">
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
  );
};

export default CustomLink;
