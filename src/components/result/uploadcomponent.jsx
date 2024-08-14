import React, { useRef, useEffect, useState } from "react";
import Upload from "../svg/upload.jsx";
import { motion, AnimatePresence } from "framer-motion";
import UploadFile from "../svg/uploadfile.jsx";
import { Progress } from "../ui/progress";
import { Video } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const App = ({ children }) => {
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [progress, setProgress] = React.useState(13);
  const fileType = uploadedFile ? uploadedFile.type.split("/")[0] : null;
  const [showProgress, setShowProgress] = useState(true);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(2) + " GB";
  }

  const ref = useRef(null);

  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleUploadButtonClick = (Visibility) => {
    setIsUploadVisible(Visibility);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsUploadVisible(false);
    }
  };

  React.useEffect(() => {
    if (uploadedFile) {
      const timer1 = setTimeout(() => setProgress(66), 700);
      const timer2 = setTimeout(() => {
        setProgress(100);
        setTimeout(() => setShowProgress(false), 1000);
      }, 0);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [uploadedFile]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div>
        {isUploadVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: "blur(15px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 40,
            }}
            className="w-full h-full"
          ></motion.div>
        )}
      </div>
      <div className="flex flex-col z-[60] m-5">
        <AnimatePresence>
          {isUploadVisible && (
            <motion.div
              className="w-[550px] h-[583px] fixed top-1/2 left-1/2 z-40 bg-[#141518] flex flex-col gap-4 items-center rounded-2xl border-[1px] justify-center border-black/10"
              style={{
                transform: "translate(-50%, -50%)",
              }}
              ref={ref}
              initial={{
                opacity: 0,
                y: "-50%",
                x: "-50%",
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: "-50%",
                x: "-50%",
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: "-50%",
                x: "-50%",
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
                ease: [0.29, 1.48, 0.47, 0.99],
              }}
            >
              <div className="w-[calc(100%-10px)] h-[calc(100%-10px)] mx-auto bg-[#181818] rounded-xl border-[1px] border-solid border-black/5">
                <form className="flex flex-col justify-between w-full h-full pb-2">
                  <div>
                    <motion.div className="p-5 mt-5 flex flex-col gap-2">
                      <h1 className="text-xl text-center">Upload a video</h1>
                      <p className="text-secondary text-center w-[75%] mx-auto">
                        For best results, video uploads should be at least 1080p
                        (1920 x 1080 pixels) in MP4, PNG, WEBP, or JPG format.
                      </p>
                    </motion.div>
                    <motion.div
                      onClick={() => handleUploadClick(fileInputRef)}
                      className="w-[512px] h-[256px] mx-auto flex items-center justify-center flex-col gap-2 rounded-[20px] border-[1px] border-solid border-black/15 bg-[#1c1c1c]"
                    >
                      <input
                        type="file"
                        id={children[0]}
                        name="video"
                        accept="video/*,.json"
                        multiple
                        required
                        hidden
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                      />
                      <UploadFile />
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-center text-secondary text-[14px]">
                          <span className="text-white">Click to upload </span>
                          or drag and drop
                        </h3>
                        <p className="text-[#7B7B7B] text-center mx-auto text-[14px]">
                          MP4, PNG, WEBP, or JPG
                        </p>
                        <p className="btn w-min mt-2 cursor-pointer">
                          Select files
                        </p>
                      </div>
                    </motion.div>
                    {uploadedFile && (
                      <motion.div
                        className="mt-4 w-[90%] mx-auto bg-#0f1012 h-[4rem] flex flex-row items-center rounded-xl border-black/20 border border-solid pl-4 gap-2 pr-4 justify-space bg-white/5"
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.29, 1.48, 0.47, 0.99],
                        }}
                      >
                        <div className="relative h-10 w-[80%] flex items-center gap-2">
                          {uploadedFile ? (
                            <div className="relative h-10 w-10 flex items-center justify-center border-black/20 border border-solid rounded-lg">
                              {fileType === "image" ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="size-6"
                                >
                                  <path
                                    d="M14.2 19H4.93137C4.32555 19 4.02265 19 3.88238 18.8802C3.76068 18.7763 3.69609 18.6203 3.70865 18.4608C3.72312 18.2769 3.93731 18.0627 4.36569 17.6343L12.8686 9.13137C13.2646 8.73536 13.4627 8.53735 13.691 8.46316C13.8918 8.3979 14.1082 8.3979 14.309 8.46316C14.5373 8.53735 14.7354 8.73535 15.1314 9.13137L19 13V14.2M14.2 19C15.8802 19 16.7202 19 17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362C19 16.7202 19 15.8802 19 14.2M14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H14.2C15.8802 1 16.7202 1 17.362 1.32698C17.9265 1.6146 18.3854 2.07354 18.673 2.63803C19 3.27976 19 4.11984 19 5.8V14.2M8.5 6.5C8.5 7.60457 7.60457 8.5 6.5 8.5C5.39543 8.5 4.5 7.60457 4.5 6.5C4.5 5.39543 5.39543 4.5 6.5 4.5C7.60457 4.5 8.5 5.39543 8.5 6.5Z"
                                    stroke="rgba(255, 255, 255, 0.5)"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : fileType === "video" ? (
                                <Video className="h-6 w-6 text-white" />
                              ) : (
                                <svg
                                  width="18"
                                  height="22"
                                  viewBox="0 0 18 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 1.26946V5.4C11 5.96005 11 6.24008 11.109 6.45399C11.2049 6.64215 11.3578 6.79513 11.546 6.89101C11.7599 7 12.0399 7 12.6 7H16.7305M17 8.98822V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H9.01178C9.74555 1 10.1124 1 10.4577 1.08289C10.7638 1.15638 11.0564 1.27759 11.3249 1.44208C11.6276 1.6276 11.887 1.88703 12.4059 2.40589L15.5941 5.59411C16.113 6.11297 16.3724 6.3724 16.5579 6.67515C16.7224 6.94356 16.8436 7.2362 16.9171 7.5423C17 7.88757 17 8.25445 17 8.98822Z"
                                    stroke="rgba(255, 255, 255, 0.5)"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                          ) : null}
                          <div className="w-[80%] h-full flex flex-col gap-[1px] ">
                            <p className="truncate">{uploadedFile.name}</p>
                            <p className="text-sm text-secondary">
                              {formatFileSize(uploadedFile.size)}
                            </p>
                          </div>
                        </div>
                        <AnimatePresence>
                          {showProgress && (
                            <motion.div
                              className="w-[20%] flex items-center gap-2"
                              initial={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.9,
                              }}
                              transition={{
                                duration: 0.3,
                                ease: [0.29, 1.48, 0.47, 0.99],
                              }}
                            >
                              <Progress
                                className="h-[5px] w-full"
                                value={progress}
                              />
                              <p className="text-secondary text-sm">
                                {progress}%
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-between px-2">
                    <motion.p
                      className="btn-secondary bg-visible cursor-pointer"
                      style={{ backgroundColor: "#2c2c2c !important" }}
                      onClick={() => setIsUploadVisible(false)}
                    >
                      Close
                    </motion.p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <p
                            className="btn"
                            id="upload"
                            style={{
                              backgroundColor: showProgress
                                ? "rgba(255, 255, 255, 0.6)"
                                : "rgba(255, 255, 255, 1)",
                              cursor: showProgress ? "not-allowed" : "pointer",
                            }}
                          >
                            Upload
                          </p>
                        </TooltipTrigger>
                        {showProgress && (
                          <TooltipContent>
                            <p>Upload a file first</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <Upload
          isUploadVisible={isUploadVisible}
          setIsUploadVisible={setIsUploadVisible}
          handleUploadButtonClick={handleUploadButtonClick}
          handleClickOutside={handleClickOutside}
        />
      </div>
    </div>
  );
};
export default App;
