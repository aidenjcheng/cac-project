"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/ui/command";

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleItemClick = (path: string) => {
    setOpen(false);
    window.location.href = path;
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="group flex gap-2 w-full justify-between p-2 pl-5 bg-[#1d1d1d] rounded-xl items-center cursor-pointer "
        onClick={() => setOpen(true)}
      >
        <div className="flex text-[#454545] items-center gap-3 group-hover:text-white/70 transition-colors duration-300 ease-in-out">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 group-hover:stroke-white/70 transition-colors duration-300 ease-in-out stroke-[#454545]"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Search
        </div>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 group-hover:stroke-white transition-colors duration-300 ease-in-out stroke-white/70 bg-white/10 rounded-md p-1 box-content"
        >
          <path
            d="M7 22L17 2"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem value="/emoji">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="text-white">Calendar</span>
            </CommandItem>
            <CommandItem value="/emoji">
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="/emoji">
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
export default CommandDialogDemo;
