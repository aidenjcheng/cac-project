import React from "react";

function Icon({ setIsUploadVisible }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      className="cursor-pointer absolute top-[1.5rem] right-[1.5rem] opacity-[0.7] hover:opacity-100 transition-opacity duration-200 ease-in-out"
      onClick={() => setIsUploadVisible(false)}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 1L1 11M1 1l10 10"
      ></path>
    </svg>
  );
}

export default Icon;
