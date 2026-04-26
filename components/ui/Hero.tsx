import { IconArrowNarrowRight, IconPlaneArrival } from "@tabler/icons-react";
import React from "react";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <div className=" bg-white pt-16 mb-10 rounded-b-[60px]">
      <div className=" text-center -mb-15 relative z-10">
        <div>
          <h2 className="text-[clamp(24px,3vw,48px)] text-[#333333] font-bold  inline-block ">
            <span className="text-[#C51230]">Flying</span> Academy {""}
            <span className="inline-flex justify-center items-center w-12 h-12 bg-linear-to-b from-[#FF1B42] to-[#4C0001] text-white rotate-10 rounded-[10px]">
              <IconPlaneArrival />
            </span>{" "}
            {""}
            Turn Your <br /> Dreams into{" "}
            <span className="text-[#C51230]">Reality</span>
          </h2>
        </div>
        <p className="text-base mt-2">
          Based at Coventry and Sywell Aerodrome, Northamptonshire, we deliver{" "}
          <br />
          commercial-level professionalism{" "}
          <span className="text-lg font-bold">Read more</span>
        </p>
        <button className=" flex gap-1.5 items-center mx-auto mt-6 px-4 py-2 bg-[#C51230] text-white rounded-full hover:bg-[#FF1B42] transition-colors duration-300">
          Contact Us
          <span>
            <IconArrowNarrowRight />
          </span>
        </button>
      </div>
      <HeroSection />
    </div>
  );
};

export default Hero;
