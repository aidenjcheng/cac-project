import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import "./blog.css";
import Logo1 from "../svg/logowithbg.jsx";

const Mission = () => {
  return (
    <div className="w-screen">
      <div className="fixed w-full flex justify-center">
        <Header />
      </div>
      <Blog>
        {[
          <Logo1 />,
          "Our Mission",
          "Mission",
          "Our Ambitions and Goals with Aegis",
          <div className="w-full text-secondary">
            At Aegis, we are committed to reinventing school safety through
            state-of-the-art AI and computer vision technologies.{" "}
            <ul className="text-secondary">
              We focus on:
              <li className="li">
                {" "}
                <strong>Proactive Protection:</strong> Build and deploy
                cutting-edge early detection systems for potential
                threats—mainly around firearms and edged weapons. Continuous
                Innovation: Staying ahead of the best AI and machine learning
                technologies, continuously evolving our detection capabilities
                to keep pace with the dynamic nature of security challenges.{" "}
              </li>
              <li className="li">
                <strong>Privacy and Ethics:</strong> Ensuring high standards for
                data privacy and the ethical use of AI technologies that offer
                respect to individual rights, consideration of collective
                safety. We do not store/keep ANY video file that comes our way.
                Accessible Security: Making advanced safety technology
                accessible to every school, regardless of its size and
                resources, because every student deserves to be in a safe
                learning environment.
              </li>{" "}
            </ul>
            <br />
            Aegis is dedicated to these ideals with relentless commitment and
            leadership in the creation of safe educational spaces where students
            and staff can learn, grow, and accomplish.
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
