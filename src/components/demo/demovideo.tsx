import React, { useEffect, useRef } from "react";

interface DemoVideoProps {
  src: string;
  isActive: boolean;
}

const DemoVideo: React.FC<DemoVideoProps> = ({ src, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      className="w-full h-full object-cover smallboxshadow rounded-2xl"
    />
  );
};

export default DemoVideo;
