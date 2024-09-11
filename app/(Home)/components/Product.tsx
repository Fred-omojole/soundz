import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Product = () => {
  return (
    <section className="mt-28">
      <div className="container mx-auto w-[52vw]  flex flex-col gap-3 mb-20">
        <div className="text-2xl font-semibold leading-loose">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </div>

        <p className="text-base font-medium  leading-loose">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>

      <div className="flex items-center justify-center h-[600px] ">
        <Image
          className="object-cover h-full rounded-lg "
          src="/images/bag.jpg"
          width={1200}
          height={600}
          alt="bag"
        />
      </div>

      <div className=" w-[52vw] container mx-auto flex flex-col gap-5 mt-24 ">
        <div className="font-semibold text-2xl tracking-wider leading-loose  ">
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </div>

        <p className="text-base font-medium leading-loose">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="text-base font-medium leading-loose">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>

      <div className=" flex items-center justify-center h-[100vh]  mt-20">
        <div className=" absolute w-[68vw] h-[100vh] bg-[#d5b3ff] flex items-center justify-center">
          <div className="relative right-20">
            {" "}
            <Image
              className="rounded-lg "
              src="/images/jocker.jpg"
              alt="jocker"
              width={800}
              height={700}
            />
          </div>

          <div className="relative left-72">
            {" "}
            <Image
              className="h-[600px] rounded-lg "
              src="/images/bucket.jpg"
              alt="jocker"
              width={900}
              height={700}
            />
          </div>
        </div>
      </div>

      <div className=" container mx-auto flex flex-col w-[52vw] mt-24 gap-3">
        <div className="font-semibold text-2xl leading-loose tracking wide">
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </div>
        <p className="text-base font-medium leading-loose ">
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation
          and paperwork. We’ll even provide you with free German or English
          lessons. Plus, working in Germany means you can expect comprehensive
          health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but it’s not
          all work; we have several company and team outings throughout the year
          as well as a variety of fun, informal small-group activities.
        </p>
      </div>

      <div className="grid grid-cols-2 mx-auto h-[90vh] px-20 py-10 rounded-lg mt-20 mb-20">
        <div className="rounded-l-lg object-cover">
          <Image
            className="object-cover w-full rounded-l-lg"
            src="/images/igor.jpg"
            width={900}
            height={900}
            alt="igor"
          />
        </div>
        <div className="bg-[#b1c5ff] rounded-r-lg flex flex-col gap-4 items-center justify-center">
          <div className="text-2xl font-semibold  leading-loose tracking-wide flex items-center justify-center w-[30vw]">
            We&apos;re really proud of the work we&apos;ve done so far. But
            there&apos;s so much more to come. If you&apos;d like to be a part
            of it, please join us.
          </div>
          <p className="text-[#0000ff] font-semibold text-start w-[30vw] text-2xl flex items-center ">
            {" "}
            See latest jobs{" "}
            <span className="text-[#0000ff] font-semibold">
              <IoIosArrowForward className="text-2xl font-semibold"/>
            </span>{" "}
          </p>
        </div>
      </div>


      
    </section>
  );
};

export default Product;
