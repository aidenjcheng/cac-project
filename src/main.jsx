import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header/header.jsx";
import HeroSection from "./components/hero.jsx";
import Demo from "./components/demo/demo.jsx";
import Faq from "./components/faq/faq.jsx";
import Footer from "./components/footer/footer.jsx";
import { ThemeProvider } from "./components/themeprovider";
import HeroDemo from "./HeroDemo.jsx";

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex flex-col items-center">
        <Header />
        <HeroSection />
        <div>
          <Demo />
        </div>
        <Faq />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

//z300 x50

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
