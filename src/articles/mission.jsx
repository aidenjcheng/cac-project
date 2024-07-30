import Blog from "../components/blog/blog.jsx";
import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/header/header.jsx";
import Chart from "../components/blog/chart.tsx";
import { ThemeProvider } from "../components/themeprovider.tsx";

const Mission = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen">
        <div className="fixed w-full flex justify-center">
          <Header />
        </div>
        <Blog>
          {[
            "dsaodj",
            "dsajdiodj",
            "dsajiodj",
            "dsajiodj",
            <div className="w-full">
              <Chart />
            </div>,
          ]}
        </Blog>
      </div>
    </ThemeProvider>
  );
};

const missionRootElement = document.getElementById("mission");
const missionRoot = createRoot(missionRootElement);
missionRoot.render(<Mission />);
