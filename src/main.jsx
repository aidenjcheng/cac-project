import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import HeroSection from "./components/hero.jsx";
import Upload from "./components/svg/upload.jsx";
import Accordion from "./components/accordion.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <Accordion />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
