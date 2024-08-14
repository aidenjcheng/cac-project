import Blog from "./blog.jsx";
import React from "react";
import Header from "../header/header.jsx";
import "./blog.css";
import CustomLink from "./customlink.jsx";
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
          "Our Backgrounds",
          "About Us",
          "Why We Created Aegis",
          <div className="w-full text-secondary">
            Aegis is a comprehensive tool to improve school safety.
            Specifically, using AI to spot firearms and knives that slip the
            human eye (see{" "}
            <CustomLink to="/howitworks">How It Works </CustomLink> for more
            detail).
            <ul className="text-secondary">
              How we came up with this idea:
              <li className="li">
                {" "}
                <strong>Kevin:</strong> I went to Takoma Park MS and currently
                go to Walt Whitman HS. During my time at TPMS, I heard a few
                incidents occurred at Montgomery Blair, a highschool that TPMS
                feeds into. When a few friends told me they were not going to go
                to Blair due to the knife incidents, I realized it was an issue
                that we needed to fix.
              </li>
              <li className="li">
                <strong>Aiden:</strong>I go to Walt Whitman HS. In my first year
                there, we had 2 bomb threats. Lots of my friends (and myself
                included) felt unsafe. I remember thinking that students deserve
                to feel safe in school, and that quality of education should not
                be affected due to feeling unsafe.
              </li>{" "}
            </ul>
            <br />
            <strong>
              This software is not for profit. We hope to make a lasting impact
            </strong>
            and improve education. See Mission for more details. Our tool can
            detect guns, knives and depth predictions using machine learning
            with our custom RESTful API. Additionally, when users sign up, they
            will be able to see their current video statistics along with their
            lifetime statistics (# of guns/knives detected). If they wish for
            more details, our API returns a JSON text file. At the bottom is a
            series of comprehensive statistics.
          </div>,
        ]}
      </Blog>
    </div>
  );
};

export default Mission;
