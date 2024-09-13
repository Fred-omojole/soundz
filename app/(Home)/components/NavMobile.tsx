"use client";
import React from "react";
import { AnimatePresence, easeInOut } from "framer-motion";
import { motion } from "framer-motion";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface NavMobileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const NavMobile = ({ open, setOpen }: NavMobileProps) => {
  return (
    <nav className="block lg:hidden">
      <div className="" onClick={() => setOpen(!open)}>
        <h1
          className={`${
            open ? "text-white" : ""
          } text-xl font-semibold relative z-50 flex items-center gap-1`}
        >
          Menu
          <span className="font-semibold mt-1">
            {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </h1>
      </div>
      <AnimatePresence>
        {" "}
        {open && (
          <motion.aside
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween,", duration: 0.4, ease: easeInOut }}
            className=" z-40 fixed bg-orange-400 h-screen w-screen top-0 left-0 "
          ></motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;
