import React from "react";

function Icon() {
  return (
    <div
      className="size-[80px] p-2 rounded-xl"
      style={{
        background:
          "linear-gradient(180deg, hsla(0, 0%, 91%, 1) 0%,  hsla(0, 0%, 91%, 1) 40%, hsla(0, 0%, 100%, 1) 100%)",
      }}
    >
      <div
        className="border border-solid border-[#c3c3c3] p-1 rounded-xl boxshadow"
        style={{
          background:
            "linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%,  hsla(0, 0%, 100%, 1) 40%, #ebebeb 100%)",
        }}
      >
        <div
          className=" p-2 rounded-xl"
          style={{
            background:
              "linear-gradient(180deg, hsla(0, 0%, 91%, 1) 0%,  hsla(0, 0%, 91%, 1) 40%, hsla(0, 0%, 100%, 1) 100%)",
          }}
        >
          <div className="bg-[#ececec] border-[#d9d9d9] rounded-full p-2 border-solid border boxshadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#8d8d8d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 16l4-4m0 0l4 4m-4-4v9m8-4.257A5.5 5.5 0 0016.5 7a.62.62 0 01-.534-.302 7.5 7.5 0 10-11.78 9.096"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icon;
