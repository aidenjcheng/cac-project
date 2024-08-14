import React from "react";
import "./contact.css";

const AboutUs = () => {
  return (
    <section
      className="aboutus__section h-full w-full flex flex-col items-center gap-24 mt-[5rem]"
      style={{ gap: "250px" }}
    >
      <PersonSection
        name="Aiden"
        email="aidenjcheng12@gmail.com"
        role="front-end development"
        githubUrl="https://github.com/aidenjcheng"
      />
      <PersonSection
        name="Kevin"
        email="kevinx8017@gmail.com"
        role="back-end development"
        githubUrl="https://github.com/ephemeralwx"
      />
    </section>
  );
};

const PersonSection = ({ name, email, role, githubUrl }) => {
  const iconSvg =
    role === "front-end development" ? (
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 7H1M13 15.5L15.5 13L13 10.5M9 10.5L6.5 13L9 15.5M1 5.8L1 14.2C1 15.8802 1 16.7202 1.32698 17.362C1.6146 17.9265 2.07354 18.3854 2.63803 18.673C3.27976 19 4.11984 19 5.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V5.8C21 4.11984 21 3.27977 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1L5.8 1C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8Z"
          stroke="rgba(0, 0, 0, 0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ) : (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5H5.01M5 17H5.01M4.2 9H17.8C18.9201 9 19.4802 9 19.908 8.78201C20.2843 8.59027 20.5903 8.28431 20.782 7.90798C21 7.48016 21 6.92011 21 5.8V4.2C21 3.0799 21 2.51984 20.782 2.09202C20.5903 1.71569 20.2843 1.40973 19.908 1.21799C19.4802 1 18.9201 1 17.8 1H4.2C3.07989 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V5.8C1 6.92011 1 7.48016 1.21799 7.90798C1.40973 8.28431 1.71569 8.59027 2.09202 8.78201C2.51984 9 3.0799 9 4.2 9ZM4.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V16.2C21 15.0799 21 14.5198 20.782 14.092C20.5903 13.7157 20.2843 13.4097 19.908 13.218C19.4802 13 18.9201 13 17.8 13H4.2C3.07989 13 2.51984 13 2.09202 13.218C1.71569 13.4097 1.40973 13.7157 1.21799 14.092C1 14.5198 1 15.0799 1 16.2V17.8C1 18.9201 1 19.4802 1.21799 19.908C1.40973 20.2843 1.71569 20.5903 2.09202 20.782C2.51984 21 3.0799 21 4.2 21Z"
          stroke="rgba(0, 0, 0, 0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  return (
    <div className="aiden__section mx-auto flex flex-row">
      <div className="flex flex-row w-[100%] justify-center items-center gap-[5%]">
        <div className="flex flex-col w-[60%]">
          <span className="aboutus__title bold"> ABOUT ME </span>
          <span className="aboutus__aiden primary">
            Hi, I'm {name}. I'm a fifteen year old highschool student living on
            the east coast 🏖️.
            <br />
            <br />I worked primarily on the {role}{" "}
            <span className="inline-flex align-middle">{iconSvg}</span> of this
            project. You can contact me at{" "}
            <a
              href={`mailto:${email}`}
              target="_blank"
              className="text-blue-400 hover:text-blue-500 ease-in-out duration-200 transition-colors"
            >
              {email}
            </a>
            , or click the button.
          </span>
          <a className="btn-big w-min mt-10" href={`mailto:${email}`}>
            Contact me
          </a>
        </div>
        <a
          target="_blank"
          href={githubUrl}
          className="scale-[0.5] hover:scale-[0.55] ease-[cubic-bezier(0.29, 1.28, 0.47, 0.99)] transition-all duration-200"
        >
          <div className="rounded-[2.5rem] border-2 border-solid border-white/20 bg-black p-5">
            <img src="./github.svg" className="scale-[0.7]" alt="GitHub" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
