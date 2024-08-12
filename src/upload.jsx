import React, { useState } from "react";
import Dashboard from "./components/player.jsx";
import Upload from "./components/upload/upload";

const UploadPage = () => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <Dashboard setUserEmail={setUserEmail}>
      {["default", "active", null, <Upload />]}
    </Dashboard>
  );
};

// const realuploadRoot = document.getElementById("root");
// const upload1 = createRoot(realuploadRoot);
// upload1.render(<UploadPage />);

export default UploadPage;
