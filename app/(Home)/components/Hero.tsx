import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="lg:mb-40  overflow-hidden">
      <div className="flex items-center justify-center h-[700px] mb-10 ">
        <Image
          className=" hidden lg:block object-cover h-full rounded-lg"
          src="/images/william.png"
          width={1200}
          height={600}
          alt="william"
        />

        <Image
          className="object-cover h-[800px] rounded-lg sm:px-6 px-6 block lg:hidden"
          src="/images/williams.jpg"
          width={1200}
          height={600}
          alt="william"
        />
      </div>

      <div className="container lg:w-[58vw] w-[80vw] mt-20 mb-10 lg:mt-40 lg:mb-40 mx-auto">
        <div className="text-sm tracking-wide leading-loose font-semibold mb-3 lg:text-2xl lg:tracking-widest lg:mb-4 ">
          We make <span className="text-blue-500">Live</span>,
          <span className="text-blue-500">Push</span> ,{" "}
          <span className="text-blue-500">Note</span> and
          <span className="text-blue-500">Link</span> — unique software and
          hardware for music creation and performance. With these products, our
          community of users creates amazing things.
        </div>
        <p className="leading-loose font-medium text-sm lg:text-lg ">
          Soundz was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>

      <div className=" grid grid-cols-2 mb-10 lg:mb-0 ">
        <div className="flex items-center justify-center ">
          <Image
            className="relative  object-cover h-[200px] left-5 lg:h-[600px] lg:left-40 rounded-lg"
            src="/images/book.jpg"
            alt="book"
            width={590}
            height={900}
          />
        </div>
        <div className="bg-[#FBFFA7]  w-full h-[35vh] lg:h-[100vh]">
          <div className="flex items-center justify-center  h-full ml-5">
            <Image
              className="rounded-lg lg:hidden block   object-cover px-5 lg:px-0"
              alt="ground"
              src="/images/ground.jpg"
              width={190}
              height={190}
            />
            <Image
              className="rounded-lg  hidden lg:block  object-cover px-5 lg:px-0"
              alt="ground"
              src="/images/ground.jpg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
