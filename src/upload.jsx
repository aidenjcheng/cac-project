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

export default UploadPage;
