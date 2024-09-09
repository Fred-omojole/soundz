"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
const Header = () => {
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);

  interface MoreListProps {
    name: string;
  }

  interface AboutListProps {
    name: string;
    label: string;
  }

  const moreLists: MoreListProps[] = [
    {
      name: "Blog",
    },
    {
      name: "Soundz for the Classroom",
    },
    {
      name: "Soundz for the Colleges and Universities",
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

  return (
    <header className="border-b-zinc-300 border-b-[2px]">
      <div className="py-2 px-6">
        <div className="flex items-center gap-8">
          {" "}
          <div className="flex items-center">
            <Image
              className="mt-2"
              src="logo.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <Image
              className="-m-2 "
              src="logo2.svg"
              width={40}
              height={40}
              alt="logo"
            />
          </div>
          <Navbar
            containerStyle="flex items-center gap-8 "
            linkStyle="capitalize font-semibold text-lg"
          />
        </div>
      </div>
      <div className="container ml-6 m-4">
        <h1 className="text-2xl font-semibold"> More on Soundz.com: </h1>
        <div className="flex mt-4 items-center gap-3">
          {moreLists.map((list, index) => {
            return (
              <div className="" key={index}>
                {index === moreLists.length - 3 ? (
                  <span className="text-orange-400">{list.name}</span>
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
      <div className="ml-6 m-4 mb-16 gap-8 grid grid-cols-4">
        {aboutLists.map((list, index) => {
          return (
            <>
              <div key={index} className="capitalize">
                <div className="mb-4">
                  <h1 className="font-semibold">{list.name}</h1>
                </div>
                {/* <div> */}
                  {" "}
                  <p>{list.label}</p>
                {/* </div> */}
              </div>
            </>
          );
        })}{" "}
      </div>
    </header>
  );
};

export default Header;
