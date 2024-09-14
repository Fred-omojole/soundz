"use client";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface NavMobileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
interface navRouteProps {
  name: string;
  icon?: JSX.Element;
}

const navRoutes: navRouteProps[] = [
  { name: "live" },
  { name: " push" },
  { name: "note" },
  { name: "link" },
  { name: "shop" },
  { name: "packs" },
  { name: "help" },
  { name: "try live 12 for free" },
  { name: "log in or signup" },
];

const containerVariant = {
  open: {
    y: 0, 
    transition: {
      y: { duration: 0.6 },
      staggerChildren: 0.1,
      delayChildren: 0.7,
    },
  },
  closed: {
    y: "-100%", 
    transition: {
      y: { duration: 0.6, delay: 0.7 }, 
      staggerChildren: 0.025,
    },
  },
};



const itemVariant = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavMobile = ({ open, setOpen }: NavMobileProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup when the component unmounts or when open changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="block lg:hidden">
      <div className="" onClick={() => setOpen(!open)}>
        <h1
          className={`${
            open ? "text-white text-2xl " : "  font-semibold  text-xl"
          }   relative z-50 flex items-center gap-1`}
        >
          Menu
          <span className="font-semibold mt-1">
            {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </h1>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariant}
            className=" z-40 fixed bg-orange-400 h-screen w-screen  top-0 left-0 overflow-hidden"
          >
            <div className="w-full h-full  px-8 flex justify-between py-4 flex-col mt-20  ">
              {navRoutes.map((route, index) => {
                return (
                  <motion.ul className="" key={index}>
                    <motion.li
                      variants={itemVariant}
                      whileHover={{ scale: 1.2 }}
                      className="text-white font-semibold text-3xl  capitalize"
                    >
                      {route.name}
                    </motion.li>
                  </motion.ul>
                );
              })}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;
