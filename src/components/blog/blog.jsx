import React from "react";
import { createRoot } from "react-dom/client";
import { Rocket } from "lucide-react";
import Logo from "../svg/borderlogo.jsx";
import Logo1 from "../svg/logo.jsx";

const Blog = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center w-[60%] mx-auto h-full gap-4 mt-52 border-b border-neutral-800 pb-20">
        <div>{children[0]}</div>
        <h3
          className="sf"
          style={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "17px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
            background:
              "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%) text",
            webkitBoxdecorationBreak: "clone",
            webkitTextfillColor: "transparent",
            color: "transparent",
            backgroundClip: "text",
            backgroundSize: "cover",
          }}
        >
          {children[1]}
        </h3>
        <h1 className="bold text-[36px] w-3/5 text-center">{children[2]}</h1>
        <p className="text-[#e3e4e6] w-3/4 text-center text-lg">
          {children[3]}
        </p>
      </div>
      <div className="flex justify-center mt-10 w-3/5 mx-auto text-lg">
        {children[4]}
      </div>
      <footer className="flex items-center justify-center w-full h-[calc(100vh-5rem)] flex-col overflow-hidden mt-[10rem] border-t-[1px] border-t-white/10 border-solid pt-[2rem] relative z-0">
        <div className="h-[calc(100%-20px)] w-full overflow-hidden relative">
          <div className="flex flex-row mx-10 gap-[80px]">
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex items-center gap-1 sans text-lg">
                <Logo1 />
                aegis
              </div>
              <p className="text-secondary">Ensuring a more safe environment</p>
              <a className="btn-big w-min" href="./upload">
                Start now
              </a>
            </div>
            <div className=" mt-10">
              <ul className="flex-col flex gap-5">
                <li className="text-white med">Navigation</li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="./aboutus">About</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="contact">Contact</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="howitworks">How it works</a>
                </li>
              </ul>
            </div>
            <div className=" mt-10">
              <ul className="flex-col flex gap-5">
                <li className="text-white med">Resources</li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="./Mission">Mission</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="gunsafety">Gun Safety</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="knifesafety">Knife Safety</a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden"
            style={{ height: "50%" }}
          >
            <div className="absolute bottom-0 w-screen transform -translate-x-1/2 left-1/2">
              <span
                className="flex items-center justify-center gap-1 sans text-transparent text-[20rem] w-full max-w-[80vw] mx-auto"
                style={{
                  WebkitTextStrokeColor: "#202123",
                  WebkitTextStrokeWidth: "1.5px",
                  transform: "translateY(40%)",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                <Logo />
                aegis
              </span>
            </div>
          </div>
        </div>
        <div className="h-[60px] w-full border-t border-b-white/10 border-solid box-border p-5 flex items-center">
          <p className="text-secondary">
            Made by{" "}
            <a
              href="mailto:aidenjcheng12@gmail.com"
              className="hover:underline"
            >
              {" "}
              Aiden
            </a>{" "}
            and{" "}
            <a href="mailto:kevinx8017@gmail.com" className="hover:underline">
              Kevin{" "}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
