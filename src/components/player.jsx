import React, { useState, useEffect, useRef } from "react";
import SidebarItem from "./result/sidebar.jsx";
import SearchBox from "./result/searchbox.tsx";
import User from "./result/user.tsx";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

function Dashboard({ children, handleFileUpload, setUserEmail }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fileInputRef = useRef(null);
  const [user, setUser] = useState({ email: "", displayName: "" });

  const handleUploadClick = () => {
    console.log("Upload button clicked");
    if (fileInputRef.current) {
      console.log("Triggering file input click");
      fileInputRef.current.click();
    } else {
      console.error("File input ref is null");
    }
  };
  useEffect(() => {
    fetch("https://cac-project-l5nu9.ondigitalocean.app/api/current_user", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.email) {
          setUserEmail(data.email);
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user data...");
        const response = await fetch(
          "https://cac-project-l5nu9.ondigitalocean.app/api/current_user",
          {
            credentials: "include",
          }
        );
        console.log("Response status:", response.status);
        const text = await response.text();
        console.log("Response text:", text);

        if (response.ok) {
          try {
            const userData = JSON.parse(text);
            console.log("User data received:", userData);
            setUser(userData);
          } catch (e) {
            console.error("Error parsing JSON:", e);
          }
        } else {
          console.log("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex w-full h-full box-border bg-[#f5f7f9]">
      <motion.div
        className={`flex flex-col gap-5 p-2 rounded-3xl justify-between fixed h-screen bg-[#f5f7f9]`}
        style={{
          width: isSidebarOpen ? "15%" : "5%",
        }}
      >
        <motion.div className="flex flex-col gap-2">
          <User isSidebarOpen={isSidebarOpen} user={user} setUser={setUser} />
          <div className="flex flex-col gap-5 h-[80%]">
            <SearchBox isSidebarOpen={isSidebarOpen} />
            <div className="h-full w-full rounded-xl">
              <ul className="w-full h-full text-[1rem] flex flex-col gap-2 rounded-xl">
                <SidebarItem
                  variant={children[0]}
                  isSidebarOpen={isSidebarOpen}
                >
                  {[
                    "/result",
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 group-hover:fill-black/70 transition-colors duration-300 ease-in-out fill-black/60"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 11.5999V9.13007C0 7.98136 0 7.40701 0.148055 6.87807C0.279203 6.40953 0.494731 5.96886 0.784054 5.57768C1.11067 5.13608 1.56404 4.78346 2.47078 4.07822L5.07078 2.056C6.47608 0.962984 7.17873 0.416478 7.95461 0.206403C8.63921 0.0210428 9.36079 0.0210428 10.0454 0.206403C10.8213 0.416478 11.5239 0.962988 12.9292 2.056L15.5292 4.07822C16.436 4.78346 16.8893 5.13608 17.2159 5.57768C17.5053 5.96886 17.7208 6.40953 17.8519 6.87807C18 7.40701 18 7.98136 18 9.13007V11.5999C18 13.8401 18 14.9603 17.564 15.8159C17.1805 16.5685 16.5686 17.1805 15.816 17.564C14.9603 17.9999 13.8402 17.9999 11.6 17.9999H6.4C4.15979 17.9999 3.03969 17.9999 2.18404 17.564C1.43139 17.1805 0.819467 16.5685 0.435974 15.8159C0 14.9603 0 13.8401 0 11.5999ZM5.85355 13C5.62718 13 5.41007 13.0899 5.25 13.25V13.25C5.08993 13.4101 5 13.6272 5 13.8536V14V14.1464C5 14.3728 5.08993 14.5899 5.25 14.75V14.75C5.41007 14.9101 5.62718 15 5.85355 15H12.1464C12.3728 15 12.5899 14.9101 12.75 14.75V14.75C12.9101 14.5899 13 14.3728 13 14.1464V13.8536C13 13.6272 12.9101 13.4101 12.75 13.25V13.25C12.5899 13.0899 12.3728 13 12.1464 13H5.85355Z"
                      />
                    </svg>,
                    <motion.span>Dashboard</motion.span>,
                    ,
                  ]}
                </SidebarItem>

                <SidebarItem
                  variant={children[1]}
                  isSidebarOpen={isSidebarOpen}
                >
                  {[
                    "/upload",
                    <div className="size-6 flex justify-center items-center bg-black/60 rounded-[4px] group-hover:bg-black/70 transition-colors duration-300 ease-in-out">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-[16px] transition-colors duration-300 ease-in-out stroke-[#f5f7f9]"
                      >
                        <path
                          d="M1 9H1.01M5 9H5.01M13 9H13.01M9 9H9.01M17 9H17.01M5.5 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V5.5M12.5 1H13.8C14.9201 1 15.4802 1 15.908 1.21799C16.2843 1.40973 16.5903 1.71569 16.782 2.09202C17 2.51984 17 3.07989 17 4.2V5.5M17 12.5V13.8C17 14.9201 17 15.4802 16.782 15.908C16.5903 16.2843 16.2843 16.5903 15.908 16.782C15.4802 17 14.9201 17 13.8 17H12.5M1 12.5V13.8C1 14.9201 1 15.4802 1.21799 15.908C1.40973 16.2843 1.71569 16.5903 2.09202 16.782C2.51984 17 3.0799 17 4.2 17H5.5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>,
                    <motion.span>Detect</motion.span>,
                    ,
                  ]}
                </SidebarItem>
                <div>
                  <div
                    onClick={handleUploadClick}
                    className={`upload-container w-[80%] mx-auto flex items-center gap-3 cursor-pointer group  py-2 ${
                      isSidebarOpen ? "justify-left" : "justify-center"
                    }`}
                  >
                    <div
                      className={`flex justify-center items-center bg-black/60 rounded-full aspect-square size-6 group-hover:bg-black/70 transition-colors duration-300 ease-in-out`}
                    >
                      <Plus stroke="#f5f7f9" size={18} />
                    </div>
                    {isSidebarOpen && <motion.span>Upload</motion.span>}

                    <input
                      type="file"
                      onChange={handleFileUpload}
                      hidden
                      accept="video/*, application/json"
                      multiple
                      ref={fileInputRef}
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </motion.div>
        <div
          className={`w-full transition-colors duration-300 ease-in-out border-transparent rounded-xl ${
            isSidebarOpen
              ? "bg-white border-[#e4e6e8] border border-solid"
              : "hover:border-[#e4e6e8] hover:bg-white  border border-solid "
          }`}
        >
          <div
            onClick={() => setIsSidebarOpen((prevState) => !prevState)}
            className={`upload-container w-[80%] mx-auto flex items-center gap-3 cursor-pointer group  py-2 rounded-xl ${
              isSidebarOpen ? "justify-left " : "justify-center "
            }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#626364] group-hover:stroke-black/70 transition-colors duration-300 ease-in-out"
            >
              <path
                d="M7 1V19M5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {isSidebarOpen && <motion.span>Close</motion.span>}
          </div>
        </div>
      </motion.div>
      <div
        className="flex bg-white rounded-3xl box-border flex-col border border-solid border-black/15 overflow-y-scroll w-full"
        style={{ marginLeft: isSidebarOpen ? "15%" : "5%" }}
      >
        <div className="w-full h-screen p-5 box-border ">{children[3]}</div>
      </div>
    </div>
  );
}

export default Dashboard;
