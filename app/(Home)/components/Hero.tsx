import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mb-40  overflow-hidden">
      <div className="flex items-center justify-center h-[600px]">
        <Image
          className="object-cover h-full rounded-lg "
          src="/images/william.png"
          width={1200}
          height={600}
          alt="william"
        />
      </div>

      <div className="container w-[58vw] mt-40 mb-40 mx-auto">
        <div className="text-2xl tracking-widest leading-loose font-semibold mb-4">
          We make <span className="text-blue-500">Live</span>,
          <span className="text-blue-500">Push</span> ,{" "}
          <span className="text-blue-500">Note</span> and{" "}
          <span className="text-blue-500">Link</span> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </div>
        <p className="leading-loose font-medium ">
          Soundz was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>

      <div className=" grid grid-cols-2 ">
        <div className="flex items-center justify-center ">
          <Image
            className="relative left-40 object-cover h-[600px] rounded-lg"
            src="/images/book.jpg"
            alt="book"
            width={590}
            height={900}
          />
        </div>
        <div className="bg-[#FBFFA7]  w-full h-[100vh]">
          <div className="flex items-center justify-center h-full ml-5">
            <Image
            className="rounded-lg"
              alt="ground"
              src="/images/ground.jpg"
              width={500}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
