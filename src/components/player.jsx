import React, { useState, useEffect } from "react";
import SidebarItem from "./result/sidebar.jsx";
import SearchBox from "./result/searchbox.tsx";
import User from "./result/user.tsx";
import { motion } from "framer-motion";

import ArtPlayerComponent from "./result/artplayer.jsx"; // Importing the ArtPlayer component

function App({ children }) {
  const [userEmail, setUserEmail] = useState(null);
  const [activePage, setActivePage] = useState("dashboard");
  const isDashboardPage = children[0]?.props?.children?.[0] === "./result";

  useEffect(() => {
    fetch('http://localhost:5000/api/current_user', {
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        console.log("Received user data:", data);
        if (data.email) {
          setUserEmail(data.email);
          localStorage.setItem('userEmail', data.email);
          console.log("User email set and stored:", data.email);
        }
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  return (
    <div className="flex w-full h-full gap-[10px] box-border pt-5 pl-5">
      <div className="flex flex-col w-[20%] min-w-[250px] max-w-[15vw] gap-5 bg-[#181818] p-2 rounded-3xl justify-between border border-solid border-white/5">
        <motion.div className="flex flex-col w-full h-full">
          <User />
          <div className="flex flex-col gap-5 h-[80%]">
            <SearchBox />
            <div className="h-full w-full rounded-xl">
              <ul className="w-full h-full text-[1rem] flex flex-col gap-2 rounded-xl">
                <SidebarItem 
                variant={children[0]}
                onClick={() => setActivePage("dashboard")}>
                  {[
                    "./result",
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 group-hover:fill-white/65 transition-colors duration-300 ease-in-out fill-white/50"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 11.5999V9.13007C0 7.98136 0 7.40701 0.148055 6.87807C0.279203 6.40953 0.494731 5.96886 0.784054 5.57768C1.11067 5.13608 1.56404 4.78346 2.47078 4.07822L5.07078 2.056C6.47608 0.962984 7.17873 0.416478 7.95461 0.206403C8.63921 0.0210428 9.36079 0.0210428 10.0454 0.206403C10.8213 0.416478 11.5239 0.962988 12.9292 2.056L15.5292 4.07822C16.436 4.78346 16.8893 5.13608 17.2159 5.57768C17.5053 5.96886 17.7208 6.40953 17.8519 6.87807C18 7.40701 18 7.98136 18 9.13007V11.5999C18 13.8401 18 14.9603 17.564 15.8159C17.1805 16.5685 16.5686 17.1805 15.816 17.564C14.9603 17.9999 13.8402 17.9999 11.6 17.9999H6.4C4.15979 17.9999 3.03969 17.9999 2.18404 17.564C1.43139 17.1805 0.819467 16.5685 0.435974 15.8159C0 14.9603 0 13.8401 0 11.5999ZM5.85355 13C5.62718 13 5.41007 13.0899 5.25 13.25V13.25C5.08993 13.4101 5 13.6272 5 13.8536V14V14.1464C5 14.3728 5.08993 14.5899 5.25 14.75V14.75C5.41007 14.9101 5.62718 15 5.85355 15H12.1464C12.3728 15 12.5899 14.9101 12.75 14.75V14.75C12.9101 14.5899 13 14.3728 13 14.1464V13.8536C13 13.6272 12.9101 13.4101 12.75 13.25V13.25C12.5899 13.0899 12.3728 13 12.1464 13H5.85355Z"
                      />
                    </svg>,
                    "Dashboard",
                  ]}
                </SidebarItem>

                <SidebarItem 
                variant={children[1]}
                onClick={() => setActivePage("upload")}>
                  {[
                    "./upload",
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-6 group-hover:fill-white/65 transition-colors duration-300 ease-in-out fill-white/50"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                        clipRule="evenodd"
                      />
                    </svg>,
                    "Upload",
                  ]}
                </SidebarItem>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="flex flex-col gap-2">
          <SidebarItem>
            {[
              "./Settings.html",
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6 group-hover:fill-white/65 transition-colors duration-300 ease-in-out fill-white/50"
              >
                <path
                  fillRule="evenodd"
                  d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clipRule="evenodd"
                />
              </svg>,
              "Settings",
            ]}
          </SidebarItem>
          <SidebarItem>
            {[
              "./Help.html",

              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                className="size-6 group-hover:stroke-white/65 transition-colors duration-300 ease-in-out stroke-white/50"
              >
                <path
                  d="M9.96701 10.75C10.967 9.75 11.967 9.35457 11.967 8.25C11.967 7.14543 11.0716 6.25 9.96699 6.25C9.03507 6.25 8.25202 6.88739 8.03 7.75M9.96701 13.75H9.97701M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                  stroke="currentcolor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>,
              "Help",
            ]}
          </SidebarItem>
        </div>
      </div>
      <div className="flex w-[85%] bg-[#1d1d1d] rounded-3xl box-border flex-col gap-5 border border-solid border-white/5">
        <div className="border-b border-white/10 w-full pl-[20px] pt-[20px] mx-auto flex flex-col h-fit pb-3">
          <p>Hey, Aiden!</p>
          <p className="text-sm text-secondary">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="w-full h-full p-5 box-border">
        {isDashboardPage ? (
            <ArtPlayerComponent userEmail={userEmail} />
          ) : null}
          {children[3]}
        </div>
      </div>
    </div>
  );
}

export default App;
