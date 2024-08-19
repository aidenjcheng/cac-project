import React, { useRef, useEffect, useState, useCallback } from "react";
import Upload from "../svg/upload.jsx";
import { motion, AnimatePresence } from "framer-motion";
import UploadFile from "../svg/uploadfile.jsx";
import { Progress } from "../ui/progress";
import FileSVG from "../svg/file.jsx";
import { processVideo } from "../../script.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const App = () => {
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [progress, setProgress] = useState(13);
  const [showProgress, setShowProgress] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const fileInputRef = useRef(null);

  const handleFileUpload = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  }, []);

  const handleUploadClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleUploadButtonClick = useCallback((Visibility) => {
    setIsUploadVisible(Visibility);
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsUploadVisible(false);
    }
  }, []);

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (uploadedFile && !showProgress) {
        processVideo(uploadedFile);
      }
    },
    [uploadedFile, showProgress]
  );

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/check_login", {
          credentials: "include",
        });
        const data = await response.json();
        setIsAuthenticated(data.logged_in);
      } catch (error) {
        console.error("Error checking authentication:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (uploadedFile) {
      const timer1 = setTimeout(() => setProgress(66), 700);
      const timer2 = setTimeout(() => {
        setProgress(100);
        setTimeout(() => setShowProgress(false), 800);
      }, 1000);
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
  }, [handleClickOutside]);

  const ref = useRef(null);
  const fileType = uploadedFile ? uploadedFile.type.split("/")[0] : null;

  function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
    else return (bytes / 1073741824).toFixed(2) + " GB";
  }

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" h-screen">
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
      <div className="flex flex-col w-full h-full z-[60] m-5">
        <AnimatePresence>
          {isUploadVisible && (
            <motion.div
              className="w-[550px] h-[583px] fixed top-1/2 left-1/2 z-40 bg-white flex flex-col gap-4 items-center rounded-2xl border-[1px] justify-center border-black/10"
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
              <div
                className="w-[calc(100%-10px)] h-[calc(100%-10px)] mx-auto rounded-xl border-[1px] border-solid border-black/5"
                style={{
                  background:
                    "linear-gradient(180deg, hsla(0, 0%, 95%, 1) 0%, hsla(0, 0%, 100%, 1) 25%, hsla(0, 0%, 100%, 1) 100%)",
                }}
              >
                <form
                  onSubmit={handleFormSubmit}
                  className="flex flex-col justify-between w-full h-full pb-2"
                >
                  <div>
                    <motion.div className="p-5 mt-5 flex flex-col gap-2">
                      <h1 className="text-xl text-center med">
                        Upload a video
                      </h1>
                      <p className="text-secondary text-center w-[75%] mx-auto">
                        For best results, video uploads should be at least 1080p
                        (1920 x 1080 pixels) in MP4, PNG, WEBP, or JPG format.
                      </p>
                    </motion.div>
                    <motion.div
                      onClick={() => handleUploadClick(fileInputRef)}
                      className="w-[512px] h-[256px] mx-auto flex items-center justify-center flex-col gap-2 rounded-[20px] border-[1px] border-solid border-black/15 bg-transparent"
                    >
                      <input
                        type="file"
                        id="fileInput"
                        name="video"
                        accept="video/*"
                        required
                        hidden
                        ref={fileInputRef}
                        onChange={handleFileUpload}
                      />
                      <UploadFile />
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="text-center text-secondary text-[14px]">
                          <span className="primary">Click to upload </span>
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
                        <div className="relative h-10 w-[100%] flex items-center gap-2">
                          {uploadedFile ? (
                            <>
                              {fileType === "image" ? (
                                <FileSVG />
                              ) : fileType === "video" ? (
                                <FileSVG />
                              ) : (
                                <FileSVG />
                              )}
                            </>
                          ) : null}
                          <div className="w-full flex flex-col justify-center">
                            <div className="w-full h-full flex items-center  justify-between">
                              <p className="">{uploadedFile.name}</p>
                              <p className="text-sm text-secondary">
                                {formatFileSize(uploadedFile.size)}
                              </p>
                            </div>
                            <AnimatePresence>
                              {showProgress && (
                                <motion.div
                                  className="w-full flex items-center gap-2"
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
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div className="flex justify-between px-2">
                    <motion.p
                      className="btn-secondary cursor-pointer text-white"
                      style={{ backgroundColor: "#2c2c2c !important" }}
                      onClick={() => setIsUploadVisible(false)}
                    >
                      Close
                    </motion.p>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <input
                            className="btn primary"
                            id="upload"
                            type="submit"
                            value="Upload"
                            style={{
                              backgroundColor: showProgress
                                ? "rgba(0, 0, 0, 0.7)"
                                : "#0275ff",
                              color: showProgress
                                ? "#fff"
                                : "rgba(255, 255, 255, 1)",
                              cursor: showProgress ? "not-allowed" : "pointer",
                            }}
                          />
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
