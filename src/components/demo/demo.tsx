import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils.ts";
import createGlobe from "cobe";
import { motion, useInView } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import DemoItem from "./demoitem.tsx";
import DemoVideo from "./demovideo.tsx";
import { Link } from "react-router-dom";

export default function FeaturesSectionDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const demoItems = [
    {
      title: "First Demo",
      description: "This is the first demo item",
      linkTo: "/demo1",
      linkText: "Learn More about Demo 1",
      duration: 10000,
    },
    {
      title: "Second Demo",
      description: "This is the second demo item",
      linkTo: "/demo2",
      linkText: "Learn More about Demo 2",
      duration: 10000,
    },
    {
      title: "Third Demo",
      description: "This is the third demo item",
      linkTo: "/demo3",
      linkText: "Learn More about Demo 3",
      duration: 10000,
    },
  ];
  const demoVideos = [
    {
      src: "../../../public/vid.mp4",
      duration: 10000,
    },
    {
      src: "../../../public/vid2.mp4",
      duration: 10000,
    },
    {
      src: "../../../public/vid3.mov",
      duration: 10000,
    },
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    stopTimerItems();
    startTimerItems();
  };

  useEffect(() => {
    if (isInView) {
      startTimerItems();
    } else {
      stopTimerItems();
    }

    return () => stopTimerItems();
  }, [isInView, activeIndex]);

  const startTimerItems = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % demoItems.length);
    }, demoItems[activeIndex].duration);
  };

  const stopTimerItems = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };
  useEffect(() => {
    if (isInView) {
      startTimerVideos();
    } else {
      stopTimerVideos();
    }

    return () => startTimerVideos();
  }, [isInView, activeIndex]);

  const startTimerVideos = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % demoVideos.length);
    }, demoVideos[activeIndex].duration);
  };

  const stopTimerVideos = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const features = [
    {
      title: "Comprehensive & Beautiful UI",
      description:
        "Intuitive. Intelligent. Learning our UI is simple and rewarding.",
      link: "/signin",
      linkText: "Learn More",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r border-black/10",
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      link: "/signin",
      linkText: "Learn More",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 ",
    },
    {
      title: "Gun safety",
      description: "Read more about gun safety",
      link: "/gunsafety",
      linkText: "Learn More",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r border-black/10",
    },
    {
      title: "Knife safety",
      description: "Read more about current knife safety.",
      link: "/knifesafety",
      linkText: "Learn More",
      skeleton: <SkeletonFour />,
      className:
        "col-span-1 lg:col-span-3 border-b lg:border-none border-black/10",
    },
  ];
  return (
    <div className="flex flex-col max-w-7xl">
      <div className="relative z-20 py-10 lg:py-40 w-full">
        <div className="px-8">
          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight med primary">
            Packed with thousands of features
          </h4>

          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-secondary text-center font-normal ">
            From Image generation to video generation, Everything AI has APIs
            for literally everything. It can even create this website copy for
            you.
          </p>
        </div>

        <div className="relative ">
          <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-3xl  border-black/10">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <Link
                  to={feature.link}
                  className="text-[#0275ff] group flex gap-1 items-center"
                >
                  {feature.linkText}
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
                <div className=" h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-full h-[115vh] flex items-center"
        style={{ padding: "124px 60px 48px" }}
        ref={containerRef}
      >
        <div className="w-full h-[calc(80%)] flex border-black/10 border-solid border box-border rounded-3xl overflow-hidden">
          <div className="flex flex-col w-1/2 h-full border-r border-black/10 border-solid">
            {demoItems.map((item, index) => (
              <motion.div
                key={item.title}
                animate={{
                  opacity: index === activeIndex ? 1 : 0.5,
                }}
                className="h-1/3"
                transition={{ duration: 0.3 }}
                onClick={() => handleItemClick(index)}
              >
                <DemoItem
                  title={item.title}
                  description={item.description}
                  linkTo={item.linkTo}
                  linkText={item.linkText}
                  index={index}
                  activeIndex={activeIndex}
                />
              </motion.div>
            ))}
          </div>
          <div className="w-1/2 h-full flex justify-center items-center p-4">
            <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] relative">
              {demoVideos.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 w-full h-full"
                  initial={{ opacity: 0, display: "none" }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    display: index === activeIndex ? "block" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <DemoVideo src={item.src} isActive={index === activeIndex} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight primary text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto text-secondary",
        "text-secondary text-center font-normal ",
        "text-left max-w-sm mx-0 md:text-sm my-2 text-secondary"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="/heroimages/dashboard.png"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white  via-white  to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white  via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        <img
          src="/heroimages/gun.png"
          alt="header"
          className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
        />{" "}
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        <img
          src="/heroimages/crisisnumbers.png"
          alt="header"
          className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
        />{" "}
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        <img
          src="/heroimages/knife.png"
          alt="header"
          className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
        />{" "}
      </div>
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
