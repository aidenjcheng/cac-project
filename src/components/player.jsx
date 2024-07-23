import React from "react";
import ArtPlayer from "./artplayer.jsx";

function App() {
  return (
    <div>
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
      />
    </div>
  );
}

export default App;
