import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/header.jsx";
import HeroSection from "./components/hero.jsx";
import Demo from "./components/demo/demo.tsx";
import Faq from "./components/faq/faqdemo.jsx";
import Footer from "./components/footer/footer.jsx";
import GunSafety from "./components/blog/GunSafety.jsx";
import KnifeSafety from "./components/blog/KnifeSafety.jsx";
import Mission from "./components/blog/mission.jsx";
import WhatYouCanDo from "./components/blog/wycdth.jsx";
import LogIn from "./components/login/login.tsx";
import UploadPage from "./upload";
import Final from "./final.jsx";
import Contact from "./components/blog/contact.jsx";
import CrisisNumbers from "./components/blog/CrisisNumbers.jsx";
import HowItWorks from "./components/blog/howitworks.jsx";
import AboutUs from "./components/blog/aboutus.jsx";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div className="flex flex-col items-center">
        <Header />
        <HeroSection />
        <div>
          <Demo />
        </div>
        <Faq />
        <Footer />
      </div>
    </ReactLenis>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/index" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gunsafety" element={<GunSafety />} />
      <Route path="/crisisnumbers" element={<CrisisNumbers />} />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/knifesafety" element={<KnifeSafety />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/whatyoucando" element={<WhatYouCanDo />} />
      <Route path="/signin" element={<LogIn />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/result" element={<Final />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);
