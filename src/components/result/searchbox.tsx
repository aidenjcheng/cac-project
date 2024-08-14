"use client";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import {
  Calculator,
  CircleAlert,
  Contact,
  Hash,
  HelpCircle,
  Home,
  Rocket,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../components/ui/command";
import { IconQuestionMark } from "@tabler/icons-react";

export function CommandDialogDemo({
  isSidebarOpen,
}: {
  isSidebarOpen: boolean;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      } // Missing closing brace added here
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <motion.div>
      <div
        className="flex gap-2 w-full bg-[#ebedef]  py-2"
        onClick={() => setOpen(true)}
        style={{ borderRadius: isSidebarOpen ? "0.75rem" : "9999px" }}
      >
        <div
          className="w-[90%] mx-auto flex group h-full items-center cursor-pointer"
          style={{
            justifyContent: isSidebarOpen ? "space-between" : "center",
          }}
        >
          <div className="flex text-[#545454] items-center gap-3 group-hover:text-white/70 transition-colors duration-300 ease-in-out">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 group-hover:stroke-black/[0.5] transition-colors duration-300 ease-in-out stroke-[#9899a2]"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div>
                  <span
                    style={{
                      opacity: isSidebarOpen ? "100%" : "0%",
                      display: isSidebarOpen ? "block" : "none",
                    }}
                    className="text-secondary"
                  >
                    Search
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 stroke-[#686979] bg-white rounded-md p-1 box-content"
                  style={{
                    opacity: isSidebarOpen ? "100%" : "0%",
                  }}
                >
                  <path
                    d="M7 22L17 2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem value="/aboutus">
              <IconQuestionMark className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem value="/contact">
              <Contact className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </CommandItem>
            <CommandItem value="/crisisnumbers">
              <Hash className="mr-2 h-4 w-4" />
              <span>Crisis Numbers</span>
            </CommandItem>
            <CommandItem value="/gunsafety">
              <CircleAlert className="mr-2 h-4 w-4" />
              <span>Gun Safety</span>
            </CommandItem>
            <CommandItem value="/">
              <Home className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem value="/knifesafety">
              <CircleAlert className="mr-2 h-4 w-4" />
              <span>Knife Safety</span>
            </CommandItem>
            <CommandItem value="/mission">
              <Rocket className="mr-2 h-4 w-4" />
              <span>Mission</span>
            </CommandItem>
            <CommandItem value="/whatyoucando">
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>What You Can Do</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </motion.div>
  );
}
export default CommandDialogDemo;
