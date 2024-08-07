import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/player.jsx";
import Upload from "./components/upload/upload";

const UploadPage = () => {
  return <Dashboard>{["default", "active", null, <Upload />]}</Dashboard>;
};

// const realuploadRoot = document.getElementById("root");
// const upload1 = createRoot(realuploadRoot);
// upload1.render(<UploadPage />);
export default UploadPage;
