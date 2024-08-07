import React, { useState } from "react";
import Chevron from "../svg/chevron";
import { motion, AnimatePresence } from "framer-motion";
import KnifeCard from "../luxe/KnifeCard";
import GunCard from "../luxe/GunCard";
import BigCard from "../luxe/test";
import HeaderItem from "./headeritem";
import Logo1 from "../svg/logo";
import Support from "../svg/support";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

import { Rocket } from "lucide-react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const HandleChevronHover = (hovering) => {
    if (!isAnimating) {
      setIsHovered(hovering);
    }
  };

  return (
    <AnimatePresence>
      <AnimatePresence>
        {isHovered && (
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
              zIndex: 42,
            }}
            className="w-full h-full"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="flex flex-col w-4/5 mx-auto border border-solid m-3 rounded-2xl fixed"
        onMouseEnter={() => isHovered && setIsHovered(true)}
        onMouseLeave={() => isHovered && setIsHovered(false)}
        style={{
          borderColor: isHovered ? "#202225" : "transparent",
          zIndex: isHovered ? 60 : 50,
        }}
      >
        <motion.div
          className="header__section flex flex-row justify-between px-7 py-3 border border-solid items-center backdrop-blur-sm"
          style={{
            borderColor: isHovered ? "transparent" : "#202225",
            backgroundColor: isHovered
              ? "rgba(12, 12, 12, 1)"
              : "rgba(9, 9, 9, 0.9)",
            borderRadius: isHovered
              ? "1rem 1rem 0px 0px"
              : "1rem 1rem 1rem 1rem",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div>
            <a
              className="flex flex-row justify-center gap-1 items-center"
              href="index"
            >
              <Logo1 />
              <span className="text-white sans text-lg">aegis</span>
            </a>
          </div>

          <ul className="header__list text-white flex gap-10">
            <motion.li className="header__item">
              <motion.a
                initial={{ color: "#aaafb5" }}
                whileHover={{ color: "#fff" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="about"
              >
                About
              </motion.a>
            </motion.li>
            <motion.li className="header__item text-secondary">
              <motion.a
                href="contact"
                initial={{ color: "#aaafb5" }}
                whileHover={{ color: "#fff" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                Contact
              </motion.a>
            </motion.li>
            <motion.li className="header__item text-secondary">
              <motion.a
                href="resources"
                className="flex flex-row items-center"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onHoverStart={() => HandleChevronHover(true)}
                style={{ color: isHovered ? "#fff" : "#aaafb5" }}
              >
                Resources
                <Chevron isHovered={isHovered} />
              </motion.a>
            </motion.li>
          </ul>
          <motion.div className="flex flex-row gap-2">
            <Link className="btn-secondary" to="/howitworks">
              How it works
            </Link>
            <Link className="btn" to="/signin">
              Start now
            </Link>
          </motion.div>
        </motion.div>
        <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
          {isHovered && (
            <motion.div
              className="flex w-full justify-between py-2 rounded-b-2xl"
              style={{
                backgroundColor: isHovered ? "rgb(9, 9, 9)" : "rgb(9, 9, 9)",
              }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              initial={{ opacity: 0, filter: "blur(30px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(30px)" }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <ul
                style={{ width: "20%" }}
                className="flex flex-col justify-center pl-4"
              >
                <li>
                  <HeaderItem>
                    {[
                      "/mission",
                      "Mission",
                      "Why we created Aegis.",
                      <span className="inline-flex align-middle ">
                        <Rocket className="size-4 stroke-[rgb(180,180,180)] group-hover:stroke-white transition-colors duration-100 ease-in-out" />
                      </span>,
                    ]}
                  </HeaderItem>
                </li>
                <li>
                  <HeaderItem>
                    {[
                      "/crisisnumbers",
                      "Crisis Numbers",
                      "Information on crisis numbers.",
                      <span className="inline-flex align-middle">
                        <Phone className="size-4 stroke-[rgb(180,180,180)] group-hover:stroke-white transition-colors duration-100 ease-in-out" />
                      </span>,
                    ]}
                  </HeaderItem>
                </li>
                <li>
                  <HeaderItem>
                    {[
                      "/whatyoucando",
                      "What You Can Do",
                      "How you can help your community.",
                      <span className="inline-flex align-middle">
                        <Support className="size-4 stroke-[rgb(180,180,180)] group-hover:stroke-white transition-colors duration-100 ease-in-out" />
                      </span>,
                    ]}
                  </HeaderItem>
                </li>
              </ul>
              <div
                style={{ width: "70%" }}
                className="flex flex-row justify-end gap-2 pr-2"
              >
                <div className="w-1/2 h-full">
                  <Link to="/howitworks" className="w-full h-full">
                    <BigCard />
                  </Link>
                </div>
                <div className="flex flex-col gap-2 w-1/2 h-full">
                  <Link to="/gunsafety" className="h-1/2">
                    <GunCard />
                  </Link>
                  <Link to="/knifesafety" className="h-1/2">
                    <KnifeCard />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
