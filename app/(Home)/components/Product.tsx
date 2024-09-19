import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Product = () => {
  return (
    <section className="lg:mt-28 mt-10  overflow-hidden">
      <div className="container mx-auto  lg:w-[52vw] w-[80vw] flex flex-col gap-3 lg:mb-20 mb-10">
        <div className="  text-sm  lg:text-2xl font-semibold leading-loose">
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </div>

        <p className="text-sm  lg:text-base font-medium  leading-loose">
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>

      <div className="flex items-center justify-center lg:h-[600px] h-[300px]  ">
        <Image
          className="object-cover h-full rounded-lg lg:block hidden "
          src="/images/bag.jpg"
          width={1200}
          height={600}
          alt="bag"
        />
        <Image
          className="object-cover h-full rounded-lg block lg:hidden px-4 "
          src="/images/bag.jpg"
          width={1200}
          height={600}
          alt="bag"
        />
      </div>

      <div className=" lg:w-[52vw] w-[80vw] container mx-auto flex flex-col gap-5 lg:mt-24 mt-10 ">
        <div className="font-semibold text-base  lg:text-2xl tracking-wider leading-loose  ">
          We&apos;re passionate about what we do, but we&apos;re equally
          passionate about improving who we are.
        </div>

        <p className="text-base font-medium lg:leading-loose leading-snug">
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p className="text-base font-medium lg:leading-loose leading-snug">
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>

      <div className=" flex items-center justify-center lg:h-[100vh] h-[35vh]  lg:mt-20   mt-10">
        <div className="  w-[68vw] lg:h-[100vh] h-[35vh] bg-[#d5b3ff] flex lg:gap-20 gap-4 items-center justify-center">
          {/* <div className=""> */}{" "}
          <Image
            className="rounded-lg hidden lg:block "
            src="/images/jocker.jpg"
            alt="jocker"
            width={400}
            height={400}
          />
          <Image
            className="rounded-lg lg:hidden block"
            src="/images/jocker.jpg"
            alt="jocker"
            width={200}
            height={200}
          />
          {/* </div> */}
          {/* <div className=""> */}{" "}
          <Image
            className="h-[600px] rounded-lg hidden lg:block"
            src="/images/bucket.jpg"
            alt="jocker"
            width={700}
            height={700}
          />
          <Image
            className="h-[205px] rounded-lg lg:hidden block relative left-10"
            src="/images/bucket.jpg"
            alt="jocker"
            width={200}
            height={200}
          />
          {/* </div> */}
        </div>
      </div>

      <div className=" container mx-auto flex flex-col lg:w-[52vw] w-[80vw] mt-24 gap-3">
        <div className="font-semibold text-base leading-snug tracking-wider  lg:text-2xl lg:leading-loose lg:tracking-wide">
          We want our employees to love it here. Since we&apos;re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </div>
        <p className="text-base  tracking-wider  font-medium lg:leading-loose ">
          If you&apos;re joining us in Berlin, we&apos;ll help with relocation
          and paperwork. We&apos;ll even provide you with free German or English
          lessons. Plus, working in Germany means you can expect comprehensive
          health insurance for you and your family, as well as generous
          maternity and paternity leave. Office hours are flexible, but
          it&apos;s not all work; we have several company and team outings
          throughout the year as well as a variety of fun, informal small-group
          activities.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 flex flex-col mx-auto  lg:px-20 lg:py-10 rounded-lg lg:mt-20 mt-10 px-5 ">
        <div className=" object-cover">
          <Image
            className=" h-[300px]  w-full rounded-t-lg block lg:hidden"
            src="/images/igor.jpg"
            width={500}
            height={500}
            alt="igor"
          />

          <Image
            className="object-cover w-full rounded-l-lg hidden lg:block"
            src="/images/igor.jpg"
            width={900}
            height={900}
            alt="igor"
          />
        </div>
        <div className="bg-[#b1c5ff] lg:rounded-r-lg  rounded-b-lg flex flex-col gap-4 items-center justify-center ">
          <div
            className=" lg:text-justify  p-2 lg:p-0 text-lg tracking-normal
           leading-snug lg:text-4xl font-semibold lg:leading-snug lg:tracking-wide flex items-center justify-center lg:w-[30vw] w-[55vw]"
          >
            We&apos;re really proud of the work we&apos;ve done so far. But
            there&apos;s so much more to come. If you&apos;d like to be a part
            of it, please join us.
          </div>
          <p className="text-[#0000ff]  font-semibold pb-2 lg:text-start text-center w-[55vw] text-base lg:w-[30vw] lg:text-3xl flex items-center ">
            {" "}
            See latest jobs{" "}
            <span className="text-[#0000ff] font-semibold">
              <IoIosArrowForward className="text-2xl font-semibold" />
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
