import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.jsx";
import HeroSection from "./components/hero.jsx";
import Demo from "./components/demo/demo.jsx";
import Faq from "./components/faq.jsx";
import { ThemeProvider } from "./components/themeprovider";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center">
        <Header />
        <HeroSection />
        <div className="mt-52">
          <Demo />
        </div>
        <Faq />
      </div>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
