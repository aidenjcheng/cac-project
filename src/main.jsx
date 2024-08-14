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
import Faq from "./components/faq/faq.jsx";
import Footer from "./components/footer/footer.jsx";
import GunSafety from "./components/blog/GunSafety.jsx";
import KnifeSafety from "./components/blog/KnifeSafety.jsx";
import Mission from "./components/blog/mission.jsx";
import WhatYouCanDo from "./components/blog/wycdth.jsx";
import LogIn from "./components/login/login.tsx";
import UploadPage from "./upload";
import Final from "./final.jsx";
import Contact from "./components/blog/contact.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <HeroSection />
      <div>
        <Demo />
      </div>
      <Faq />
      <Footer />
    </div>
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
