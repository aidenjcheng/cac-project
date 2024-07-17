import React from "react";
import { createRoot } from "react-dom/client";
import Upload from "./components/svg/upload.jsx";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Upload />
    </div>
  );
};

const rootElement = document.getElementById("d");
const root = createRoot(rootElement);
root.render(<App />);
