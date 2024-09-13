import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-3">
      <div className="border-[1px] border-b-zinc-300 mt-6"></div>
      <div className="w-[90vw] mx-auto mt-14">
        <div className=" grid grid-rows-3  ">
          <div className="">
            <h1 className="capitalize text-4xl font-semibold w-36   ">
              soundz
            </h1>
          </div>

          <div className="grid grid-cols-3 -mt-9">
            <div>
              <ul className="capitalize font-medium">
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

            <div>
              <h1 className="capitalize font-semibold">education</h1>
              <ul className="">
                <li>Offers for Students and teachers </li>
                <li>Soundz for the Classroom</li>
                <li> Soundz for Colleges and Universities</li>
              </ul>
            </div>

            <div>
              <h1 className="capitalize font-semibold">
                Sign up to our newsletter
              </h1>
              <p className="text-base font-medium">
                Enter your email address to stay up to date with the latest
                offers, tutorials, downloads, surveys and more.
              </p>
              <div className="mt-4">
                {" "}
                <input
                  className="bg-zinc-100 p-3 w-[22vw]"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="p-3 bg-[#0000ff] text-white" title="button">
                  Sign up
                </button>
              </div>
            </div>

            <div>
              <h1 className="capitalize font-semibold">community</h1>
              <ul>
                <li>Find Soundz user Groups</li>
                <li>Find Certified Training</li>
                <li></li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <h1 className="font-semibold">Language and Location</h1>
              </div>
              <div className="w-[30vw] flex space-x-6">
                <div>
                  {" "}
                  <select
                    className="w-full bg-zinc-100 rounded-lg p-1"
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
                    className="w-[15vw] bg-zinc-100 rounded-lg p-1"
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
      <div className="flex items-center justify-between px-10 text-zinc-600   ">
        <h1>
          Development by{" "}
          <span className="underline underline-offset-2  transform">
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
