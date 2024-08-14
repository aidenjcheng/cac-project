import Blog from "./components/blog/blog.jsx";
import React from "react";
import Header from "./components/header/header.jsx";
import Chart from "./components/blog/chart.tsx";

const Mission = () => {
  return (
    <div className="w-screen">
      <div className="fixed w-full flex justify-center">
        <Header />
      </div>
      <Blog>
        {[
          "dsaodj",
          "dsajdiodj",
          "dsajiodj",
          "dsajiodj",
          <div className="w-full">
            <Chart />
          </div>,
        ]}
      </Blog>
    </div>
  );
};

// const missionRootElement = document.getElementById("mission");
// const missionRoot = createRoot(missionRootElement);
// missionRoot.render(<Mission />);

export default Mission;
