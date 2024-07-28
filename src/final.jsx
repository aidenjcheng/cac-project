import React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from "./components/player.jsx";
import Upload from "./components/upload/upload";
import ArtPlayer from "./components/result/artplayer";

const StatsPage = () => {
  return (
    <Dashboard>
      {[
        "active",
        "default",
        null,
        <ArtPlayer
          option={{
            url: "../../public/blackscreen.mp4",
          }}
          style={{
            width: "calc(700px*1.2)",
            height: "calc(400px*1.2)",
            borderRadius: "var(--art-border-radius)",
          }}
          getInstance={(art) => console.info(art)}
        />,
      ]}
    </Dashboard>
  );
};

const realuploadRoot2 = document.getElementById("root");
const upload12 = createRoot(realuploadRoot2);
upload12.render(<StatsPage />);
