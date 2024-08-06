import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "../../components/themeprovider";
import AnimatedTabs from "./animatedtabs";
import { AnimatePresence, motion, animate, stagger } from "framer-motion";

import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../../components/ui/checkbox";

const Login = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  useEffect(() => {
    animate(
      ".animate-stagger",
      {
        opacity: [0, 1],
        filter: ["blur(5px)", "blur(0px)"],
        transform: ["translateY(20px)", "translateY(0px)"],
      },
      {
        delay: stagger(0.1),
        ease: [0.5, 0, 0, 1],
        duration: 1,
      }
    );
  }, []);
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
        credentials: "include", // This is crucial for setting the session cookie
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = data.redirect;
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        console.log("Signup successful:", data.message);
        setActiveTab("login");
      } else {
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatePresence>
        <div className="w-full lg:grid  lg:grid-cols-2 h-full">
          <div className="flex items-center justify-center py-12 flex-col gap-[20px]">
            <motion.div className="absolute top-[30px] animate-stagger">
              <a
                className=" flex flex-row justify-center gap-1 items-center"
                href="index"
              >
                <svg
                  width="42"
                  height="38"
                  viewBox="0 0 42 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2286 -0.000488281C12.0132 -0.000488281 9.04205 1.7149 7.43435 4.49951L1.66085 14.4995C0.0531559 17.2841 0.053153 20.7149 1.66085 23.4995L7.43435 33.4995C9.04205 36.2841 12.0132 37.9995 15.2286 37.9995H26.7756C29.991 37.9995 32.9621 36.2841 34.5698 33.4995L40.3433 23.4995C41.951 20.7149 41.951 17.2841 40.3433 14.4995L34.5698 4.49951C32.9621 1.7149 29.991 -0.000488281 26.7756 -0.000488281H15.2286ZM26.7756 5.99951L19.5587 5.99951C18.404 5.99951 17.6825 7.2494 18.2607 8.2489C20.0447 11.3327 21.8329 14.4142 23.6143 17.4995C24.1502 18.4277 24.1502 19.5713 23.6143 20.4995C21.8329 23.5849 20.0447 26.6663 18.2607 29.7501C17.6825 30.7496 18.404 31.9995 19.5587 31.9995H26.7756C27.8474 31.9995 28.8378 31.4277 29.3737 30.4995L35.1472 20.4995C35.6831 19.5713 35.6831 18.4277 35.1472 17.4995L29.3737 7.49951C28.8378 6.57131 27.8474 5.99951 26.7756 5.99951Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white sans text-[1.875rem]">aegis</span>
              </a>
            </motion.div>
            <motion.div className="mx-auto grid w-[350px] gap-6">
              {activeTab === "login" && (
                <motion.div
                  className="grid gap-2 text-center animate-stagger "
                  initial={{ opacity: 0, filter: "blur(5px)", y: "20px" }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: "0px" }}
                  transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
                >
                  <h1 className="text-3xl font-bold">Welcome Back</h1>
                  <p className="text-balance text-secondary">
                    Enter your email below to login to your account
                  </p>
                </motion.div>
              )}
              {activeTab === "signup" && (
                <motion.div
                  className="grid gap-2 text-center animate-stagger"
                  initial={{ opacity: 0, filter: "blur(5px)", y: "20px" }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: "0px" }}
                  transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
                >
                  <h1 className="text-3xl font-bold">Create an Account</h1>
                  <p className="text-balance text-secondary">
                    Enter your email below to login to your account
                  </p>
                </motion.div>
              )}
              <AnimatedTabs activeTab={activeTab} onTabChange={setActiveTab} />
              {
                // LOGIN PAGE
              }{" "}
              {activeTab === "login" && (
                <motion.div
                  className="grid gap-6 animate-stagger"
                  initial={{ opacity: 0, filter: "blur(5px)", y: "20px" }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: "0px" }}
                  transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
                >
                  <form
                    id="loginFormElement"
                    onSubmit={handleLogin}
                    className="grid gap-6"
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@xyz.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="aidenawsum12!"
                      />
                    </div>
                    <button type="submit" className=" btn-big w-full">
                      Login
                    </button>
                  </form>
                </motion.div>
              )}
              {
                //END OF LOGIN PAGE // SIGN UP PAGE
              }
              {activeTab === "signup" && (
                <motion.div
                  className="grid gap-6 animate-stagger"
                  initial={{ opacity: 0, filter: "blur(5px)", y: "20px" }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: "0px" }}
                  transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
                >
                  <form
                    id="signupFormElement"
                    onSubmit={handleSignup}
                    className="grid gap-6"
                  >
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@xyz.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="aidenawsum12!"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="group">
                          Accept{" "}
                          <a
                            href="./public/terms&conditions.pages"
                            className="group-hover:underline "
                          >
                            terms and conditions
                          </a>
                        </Label>
                      </div>
                    </div>
                    {/* //button */}
                    <button type="submit" className="btn-big w-full">
                      Sign up
                    </button>
                  </form>
                </motion.div>
              )}
              {
                //END OF SIGN UP PAGe
              }{" "}
            </motion.div>
          </div>
          <div className="hidden bg-muted lg:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
};

const loginElement = document.getElementById("root");
const LoginRoot = createRoot(loginElement!);
LoginRoot.render(<Login />);
