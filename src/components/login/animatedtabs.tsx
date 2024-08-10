"use client";

import { motion } from "framer-motion";
import { cn } from "./../../lib/utils";

type AnimatedTabsProps = {
  activeTab: "login" | "signup";
  onTabChange: (tab: "login" | "signup") => void;
};

export function AnimatedTabs({ activeTab, onTabChange }: AnimatedTabsProps) {
  const tabs = [
    { title: "Login", value: "login" as const },
    { title: "Sign Up", value: "signup" as const },
  ];

  return (
    <motion.div className="h-full animate-stagger border border-black/10 border-solid rounded-2xl px-1 py-1 box-border w-[70%] mx-auto bg-white/[0.02]">
      <motion.div className="relative flex justify-between ">
        <motion.div
          className="absolute bottom-0 left-0 h-[100%] bg-white rounded-xl z-0 w-1/2"
          animate={{
            x: activeTab === "login" ? "0%" : "100%",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
        {tabs.map((tab) => (
          <motion.button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "relative px-4 py-2 z-10 w-1/2 flex items-center justify-center",
              activeTab === tab.value
                ? "text-black delay-100"
                : "text-secondary"
            )}
          >
            {tab.title}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default AnimatedTabs;
