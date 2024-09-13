"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
const Header = () => {
  // const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  // const [active, setActive] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setFixed(scrollY > 100);
      setHidden(scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  interface MoreListProps {
    name: string;
  }

  interface AboutListProps {
    name: string;
    label: string;
  }

  interface ExtraListProps {
    name: string;
  }

  const moreLists: MoreListProps[] = [
    {
      name: "Blog",
    },
    {
      name: "Soundz for the Classroom",
    },
    {
      name: "Soundz for  Colleges and Universities",
    },
    {
      name: "Certified Training",
    },
    {
      name: "About Soundz",
    },
    {
      name: "jobs",
    },
    {
      name: "Apprenticeships",
    },
  ];

  const aboutLists: AboutListProps[] = [
    {
      name: "loop",
      label:
        "Watch Talks, Performances and Features from Soundz's Summit for Music Makers",
    },
    {
      name: "learning music",
      label: "Learn the fundamentals of music making right in your browser.",
    },
    {
      name: "learning synths",
      label:
        "Get started with synthesis using a web-based synth and accompanying lessons.",
    },
    {
      name: "making music",
      label: " Some tips from 74 Creative Strategies for Electronic Producers.",
    },
  ];

  const extraList: ExtraListProps[] = [
    {
      name: " about",
    },
    {
      name: "jobs",
    },
    {
      name: "apprenticeships",
    },
  ];

  return (
    <>
      {" "}
      <header className="border-b-zinc-300 border-b-[2px]  overflow-hidden">
        <div className="py-2 px-6   ">
          <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
            {" "}
            <div className="flex items-center ">
              {open ? (
                <>
                  {" "}
                  <Image
                    className="z-50 mt-2 relative  lg:static "
                    src="logo11.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                  <Image
                    className=" z-50 -m-2 relative   lg:static"
                    src="logo22.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </>
              ) : (
                <>
                  {" "}
                  <Image
                    className="z-50 mt-2 relative    lg:static  "
                    src="logo.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                  <Image
                    className=" z-50 -m-2 relative lg:static"
                    src="logo2.svg"
                    width={40}
                    height={40}
                    alt="logo"
                  />
                </>
              )}
            </div>
            <NavMobile open={open} setOpen={setOpen} />
            <Navbar
              onShow={show}
              setShow={setShow}
              containerStyle="lg:flex lg:items-center   lg:gap-4 xl:gap-6 hidden w-[86vw] "
              linkStyle="capitalize  font-semibold md:text-base  lg:text-lg cursor-pointer hover:text-orange-400 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        <div onClick={() => setShow(!show)}>
          {show && (
            <>
              {" "}
              <div className="container ml-6 m-4">
                <h1 className="text-2xl font-semibold">
                  {" "}
                  More on Soundz.com:{" "}
                </h1>
                <div className="flex mt-4 items-center gap-6">
                  {moreLists.map((list, index) => {
                    return (
                      <div
                        className="cursor-pointer  hover:text-orange-400 transition-all duration-300 ease-in-out"
                        key={index}
                      >
                        {index === moreLists.length - 3 ? (
                          <span className="text-orange-400 ">{list.name}</span>
                        ) : (
                          list.name
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <h1 className=" ml-6 m-4 text-2xl mt-6 font-semibold">
                {" "}
                More from Soundz:{" "}
              </h1>
              <div className="ml-6 m-4 mb-16 gap-8 grid grid-cols-4 ">
                {aboutLists.map((list, index) => {
                  return (
                    <>
                      <div key={index} className="capitalize cursor-pointer">
                        <div className="mb-2">
                          <h1 className="font-semibold  hover:text-orange-400 transition-all duration-300 ease-in-out">
                            {list.name}
                          </h1>
                        </div>
                        {/* <div> */} <p>{list.label}</p>
                        {/* </div> */}
                      </div>
                    </>
                  );
                })}{" "}
              </div>
            </>
          )}
        </div>
      </header>
      <div
        className={`px-4 text-sm font-semibold flex items-center gap-4 transition-all ease-in-out  duration-200  ${
          fixed
            ? "fixed top-0 left-0  w-full bg-transparent backdrop-blur-md z-10 py-3 transition-all ease-in-out  duration-200 "
            : ""
        } ${
          hidden ? "opacity-0 transition-opacity duration-500" : "opacity-100"
        }`}
      >
        {extraList.map((list, index) => {
          return (
            <p
              className="capitalize py-4 cursor-pointer  hover:text-orange-400 transition-all duration-300 ease-in-out"
              key={index}
            >
              {index === extraList.length - 3 ? (
                <span className="text-orange-400">{list.name}</span>
              ) : (
                list.name
              )}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Header;
