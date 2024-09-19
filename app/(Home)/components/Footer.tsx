import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-3">
      <div className="border-[1px] border-b-zinc-300 mt-6"></div>
      <div className="w-[90vw] mx-auto lg:mt-14 mt-12">
        <div className=" grid lg:grid-rows-3 grid-cols-1  ">
          <div className="mb-16 lg:mb-0">
            <h1 className="capitalize text-5xl font-semibold lg:text-4xl lg:font-semibold lg:w-36   ">
              soundz
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-3 flex flex-col-reverse text-sm lg:text-base  -mt-9">
            <div className="mt-2 mb-2 lg:m-0 order-9 lg:order-none ">
              <ul className="capitalize font-medium  ">
                <li>register live or push</li>
                <li>about soundz</li>
                <li>jobs</li>
              </ul>

              <div className="flex gap-2 py-4">
                <Image src="/ing.png" width={40} height={40} alt="ing " />
                <Image src="/twi.png" width={40} height={40} alt=" twi" />
                <Image src="/facebook.png" width={40} height={40} alt=" face" />
                <Image src="/youtube.png" width={40} height={40} alt="you " />
              </div>
            </div>

            <div className=" order-8 lg:order-none mt-2 mb-2 lg:m-0">
              <h1 className="capitalize font-semibold">education</h1>
              <ul className="">
                <li>Offers for Students and teachers </li>
                <li>Soundz for the Classroom</li>
                <li> Soundz for Colleges and Universities</li>
              </ul>
            </div>

            <div className="order-10  lg:order-none mt-2 mb-2 lg:m-0">
              <h1 className="capitalize font-semibold">
                Sign up to our newsletter
              </h1>
              <p className=" font-medium">
                Enter your email address to stay up to date with the latest
                offers, tutorials, downloads, surveys and more.
              </p>
              <div className="mt-4 ">
                {" "}
                <input
                  className="bg-zinc-100 p-3 lg:w-[22vw] w-[71vw]"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="p-3 bg-[#0000ff] text-white" title="button">
                  Sign up
                </button>
              </div>
            </div>

            <div className="order-7 lg:order-none mt-2 mb-2 lg:m-0">
              <h1 className="capitalize font-semibold">community</h1>
              <ul>
                <li>Find Soundz user Groups</li>
                <li>Find Certified Training</li>
                <li></li>
              </ul>
            </div>

            <div className=" order-4 lg:order-none flex flex-col lg:gap-3 gap-2 mt-2 pb-4 lg:m-0 lg:p-0">
              <div>
                <h1 className="font-semibold">Language and Location</h1>
              </div>
              <div className="lg:w-[30vw]  flex lg:space-x-6 space-x-3">
                <div className="">
                  {" "}
                  <select
                    className="w-[30vw] lg:w-full bg-zinc-100 rounded-lg p-1"
                    title="select"
                  >
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Deutsch</option>
                    <option>Japanese</option>
                  </select>
                </div>

                <div>
                  <select
                    className="lg:w-[15vw] w-[50vw] bg-zinc-100 rounded-lg p-1"
                    title="select"
                  >
                    <option>Nigeria</option>
                    <option>Germany</option>
                    <option>Spain</option>
                    <option>Japan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between lg:px-10 px-4 text-zinc-600 text-xs lg:text-base pt-5 lg:pt-0   ">
        <h1>
          Development by{" "}
          <span className="underline underline-offset-2 cursor-pointer  transform">
            <a href="https://portfolio-t1.vercel.app/">Fred-Omojole</a>
          </span>
        </h1>

        <h1 className="flex items-center gap-1">
          {" "}
          Made in Nigeria{" "}
          <span className="">
            <Image
              className="rounded"
              src="/logot.png"
              alt="icon"
              width={40}
              height={40}
            />
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
