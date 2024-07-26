import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/themeprovider";
import Player from "./components/player";

const Result = () => {
  const length = 10;

  return (
    <ThemeProvider>
      <div className="h-full w-full">
        <Player />
      </div>
    </ThemeProvider>
  );
};

const rootElement3 = document.getElementById("d");
const root3 = createRoot(rootElement3);
root3.render(<Result />);
