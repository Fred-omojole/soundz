"use client";
import React from "react";
import { Video } from "./Video";
import Image from "next/image";

const About = () => {
  return (
    <section className=" overflow-hidden">
      <div className="container w-[52vw] mx-auto flex flex-col gap-3 mb-28">
        <div className="text-2xl tracking wider font-semibold  leading-relaxed ">
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </div>
        <p className="text-base font-medium leading-relaxed ">
          We feel the same way about making Soundz products. The driving force
          behind Soundz is our passion for what we make, and the people we make
          it for.
        </p>
      </div>

      <div className="flex items-center justify-center w-[100vw]">
        <Video />
      </div>

      <div className="container w-[52vw] mx-auto flex flex-col gap-3 mt-28">
        <div className="text-2xl tracking wider font-demibold leading-relaxed">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </div>
        <p className="text-base font-medium leading-relaxed">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>

      <div className="grid grid-cols-2 h-[150vh] mt-28">
        <div className="bg-[#B6FFC0] flex flex-col gap-16 items-center justify-center ">
          <div className="flex flex-col gap-20">
            <Image
             className="rounded-lg"
              src="/images/stuff.jpg"
              width={600}
              height={400}
              alt="image"
            />

            <Image
             className="rounded-lg"
              src="/images/heroo.png"
              width={600}
              height={400}
              alt="image"
            />
          </div>
          {/* <div>

          </div> */}
        </div>
        <div className="flex items-center justify-between ">
          <Image
            className=" relative right-10 h-[650px] rounded-lg"
            src="/images/shout.jpg"
            alt="shout"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
