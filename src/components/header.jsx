import React, { useState } from "react";
import Chevron from "./svg/chevron";
import { motion, AnimatePresence } from "framer-motion";
import Card from "./luxe/CardRevealedPointer";
import CardCopy from "./luxe/test";
import HeaderItem from "./headeritem";

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
              zIndex: 10,
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="flex flex-col w-4/5 mx-auto border border-solid m-3 rounded-3xl fixed"
        onMouseEnter={() => isHovered && setIsHovered(true)}
        onMouseLeave={() => isHovered && setIsHovered(false)}
        style={{
          borderColor: isHovered ? "#202225" : "transparent",
          zIndex: isHovered ? 20 : 10,
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
              ? "1.5rem 1.5rem 0px 0px"
              : "1.5rem 1.5rem 1.5rem 1.5rem",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <a className="w-min text-white medium" href="index.html">
            detect
          </a>
          <ul className="header__list text-white flex gap-10">
            <motion.li className="header__item">
              <motion.a
                initial={{ color: "#aaafb5" }}
                whileHover={{ color: "#fff" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                href="about.html"
              >
                about
              </motion.a>
            </motion.li>
            <motion.li className="header__item text-secondary">
              <motion.a
                href="help.html"
                initial={{ color: "#aaafb5" }}
                whileHover={{ color: "#fff" }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                help
              </motion.a>
            </motion.li>
            <motion.li className="header__item text-secondary">
              <motion.a
                href="resources.html"
                className="flex flex-row items-center"
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onHoverStart={() => HandleChevronHover(true)}
                style={{ color: isHovered ? "#fff" : "#aaafb5" }}
              >
                resources
                <Chevron isHovered={isHovered} />
              </motion.a>
            </motion.li>
          </ul>
          <motion.div className="flex flex-row gap-2">
            <a className="btn-secondary" href="index.html">
              get started
            </a>
            <a className="btn" href="index.html">
              sign in
            </a>
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
                    {["./career.html", "career", "description"]}
                  </HeaderItem>
                </li>
                <li>
                  <HeaderItem>
                    {["./changelog.html", "changelog", "description"]}
                  </HeaderItem>
                </li>
                <li>
                  <HeaderItem>
                    {["./enterprise.html", "enterprise", "description"]}
                  </HeaderItem>
                </li>
              </ul>
              <div
                style={{ width: "70%" }}
                className="flex flex-wrap flex-row gap-2"
              >
                <a href="howitworks.html">
                  <CardCopy />
                </a>
                <div className="flex flex-col gap-2">
                  <a href="test.html">
                    <Card />
                  </a>
                  <a href="test.html">
                    <Card />
                  </a>
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
