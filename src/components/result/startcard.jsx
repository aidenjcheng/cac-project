import React from "react";
const StartCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex items-center gap-3 w-[25%]">
      <img src={imgSrc} className="size-[3rem]" alt="a Number 1 Graphic" />
      <div className="flex flex-col gap-1">
        <p className="med">{title} </p>
        <p className="text-[13px] text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default StartCard;
