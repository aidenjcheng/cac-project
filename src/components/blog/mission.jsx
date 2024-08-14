import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import Chart from "./chart.tsx";

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
