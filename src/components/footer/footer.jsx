import React from "react";
import Logo from "../svg/borderlogo";
import Logo1 from "../svg/logo";

const Footer = () => {
  return (
    <>
      <header className="h-[calc(100vh-8rem)]  w-full flex flex-col border-b border-b-white/10 border-solid">
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="w-full">
            <h1 className="text-[4rem] medium text-center med w-[80%] mx-auto">
              Call to Action
            </h1>
            <p className="text-secondary text-center w-3/5 mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <button className="btn-big">Start now</button>
            <button className="btn-secondary-big">How it works</button>
          </div>
        </div>
      </header>
      <footer className="flex items-center justify-center w-full h-[calc(100vh-5rem)] flex-col overflow-hidden">
        <div className="h-[calc(100%-20px)] w-full overflow-hidden relative">
          <div className="flex flex-row mx-10 gap-[80px]">
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex items-center gap-1 sans text-lg">
                <Logo1 />
                aegis
              </div>
              <p className="text-secondary">Ensuring a more safe environment</p>
              <a className="btn-big w-min" href="./upload.html">
                Start now
              </a>
            </div>
            <div className=" mt-10">
              <ul className="flex-col flex gap-5">
                <li className="text-white med">Navigation</li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="./aboutus.html">About</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="howitworks.html">How it works</a>
                </li>
              </ul>
            </div>
            <div className=" mt-10">
              <ul className="flex-col flex gap-5">
                <li className="text-white med">Resources</li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="./Mission.html">Mission</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="gunsafety.html">Gun Safety</a>
                </li>
                <li className="text-secondary hover:text-white ease-in-out duration-300 transition-colors">
                  <a href="knifesafety.html">Knife Safety</a>
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
                  WebkitTextStrokeColor: "#27282a",
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
    </>
  );
};

export default Footer;
