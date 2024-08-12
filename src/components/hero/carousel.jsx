import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import HeroVideo from "./herovideo";

const ScrollCarousel = ({ scrollRange = 1000 }) => {
  const carouselRef = useRef(null);
  const [startScrollY, setStartScrollY] = useState(0);
  const { scrollY } = useScroll();
  const isInView = useInView(carouselRef, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      setStartScrollY(window.scrollY);
    }
  }, [isInView]);

  const input = useTransform(
    scrollY,
    [startScrollY, startScrollY + scrollRange],
    [0, 100]
  );
  const smoothInput = useSpring(input, { stiffness: 300, damping: 30 });
  const x = useTransform(smoothInput, [0, 100], ["0%", "-50%"]);

  const items = [
    { id: 1, src: "./vid.mp4" },
    { id: 2, src: "./herovideos/vid2.mp4" },
    { id: 3, src: "./herovideos/vid.mp4" },
    { id: 4, src: "./herovideos/vid2.mp4" },
    { id: 5, src: "./herovideos/vid3.mov" },
    { id: 6, src: "./herovideos/vid.mp4" },
    { id: 7, src: "./herovideos/vid3.mov" },
  ];

  return (
    <div
      ref={carouselRef}
      className="h-fit flex items-center overflow-hidden relative mt-[250px] w-[95vw] mx-auto"
    >
      <svg
        width="1462"
        height="61"
        viewBox="0 0 1462 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-1px] right-[50%] transform translate-x-1/2"
        style={{ zIndex: 3 }}
      >
        <path
          d="M743.746 61C1190.59 61 1462 3.5 1462 3.5V0.5H0V3.5C0 3.5 296.898 61 743.746 61Z"
          fill="#fff"
        />
      </svg>
      <svg
        width="1462"
        height="61"
        viewBox="0 0 1462 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute bottom-[-3px] right-[50%] transform translate-x-1/2 w-full"
        style={{ zIndex: 3 }}
      >
        <path
          d="M743.746 0C1190.59 0 1462 57.5 1462 57.5V60.5H0V57.5C0 57.5 296.898 0 743.746 0Z"
          fill="#fff"
        />
      </svg>
      <div
        className="h-full w-[250px] absolute opacity-[0.7] left-0"
        style={{
          zIndex: 2,
          backdropFilter: "blur(20px)",
          mask: "linear-gradient(270deg, #0000 0%, #000 95%)",
        }}
      ></div>
      <div
        className="h-full w-[250px] absolute opacity-[0.7] right-0 "
        style={{
          zIndex: 2,
          backdropFilter: "blur(100px)",
          mask: "linear-gradient(90deg, #0000 0%, #000 95%)",
        }}
      ></div>

      <motion.div className="flex space-x-4 gap-[24px]" style={{ x }}>
        {items.map((item) => (
          <div className={`w-[472px] h-[500px]`}>
            <HeroVideo
              key={item.id}
              src={item.src}
              className="w-full h-full object-cover z-[-10000]"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCarousel;
