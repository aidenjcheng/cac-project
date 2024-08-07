import React from "react";

function Icon({ isHovered }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
      style={{
        top: "0.5px",
        position: "relative",
        scale: "0.9",
        rotate: isHovered ? "180deg" : "0deg",
        transition: "rotate 0.5s cubic-bezier(0.29, 1.48, 0.47, 0.99)",
      }}
    >
      <path
        style={{ transition: "fill 0.2s ease-in-out" }}
        fill={isHovered ? "#fff" : "#AAAFB5"}
        fillRule="evenodd"
        d="M9.97 6.47a.75.75 0 011.06 0l4.25 4.25a.75.75 0 11-1.06 1.06L10.5 8.06l-3.72 3.72a.75.75 0 01-1.06-1.06l4.25-4.25z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
