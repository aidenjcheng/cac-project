import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import HeroSection from "./components/hero.jsx";
import Demo from "./components/demo/demo.jsx";
import Accordion from "./components/accordion.jsx";
import { ThemeProvider } from "./components/themeprovider"


const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <Accordion />
      <Demo />
    </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
