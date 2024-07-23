import React from "react";
import { createRoot } from "react-dom/client";
import { Rocket } from "lucide-react";

const Blog = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center w-[60%] mx-auto h-full gap-4 mt-52 border-b border-neutral-800 pb-20">
        <div className="p-5 bg-neutral-900 rounded-xl">{children[0]}</div>
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
    </div>
  );
};

export default Blog;
