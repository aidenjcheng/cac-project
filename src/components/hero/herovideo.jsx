import React from "react";

const HeroVideo = ({ src, className }) => {
  return (
    <video src={src} loop muted playsInline className={className} autoPlay />
  );
};

export default HeroVideo;
