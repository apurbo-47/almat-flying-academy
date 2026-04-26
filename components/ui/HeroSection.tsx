"use client";

import Image from "next/image";
import HeroRatingCard from "./HeroRatingCard";
import { assets_home } from "@/assets/home-assets";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="">
        {/* Hero Container */}
        <div className="relative px-8 pb-6 overflow-hidden">
          {/* LEFT TEXT */}
          <div className="absolute left-12 top-10 max-w-65">
            <p className="text-[#333333] text-2xl leading-tight">
              Unlock the skies <br /> from novice to <br /> Navigator
            </p>

            <div className="mt-3 p-2.5 border border-[#E6E6E6] rounded-full">
              <div className="relative  w-40 h-62 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={assets_home.video_card}
                  alt="video"
                  fill
                  className="object-cover"
                />

                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-15 h-15 bg-[#FF2F2F] rounded-full flex items-center justify-center  cursor-pointer">
                    <IconPlayerPlayFilled className="text-white" size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center items-center ">
            <Image
              src={assets_home.plane}
              alt="plane"
              width={980}
              height={450}
              className="object-contain"
              priority
            />
          </div>

          {/* RIGHT RATING CARD */}
          <div className="absolute right-40 top-1/2 -translate-y-1/2 ">
            <HeroRatingCard />
          </div>

          {/* BOTTOM CURVE NOTCH */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="w-30 h-15 bg-[#F2F2F2] rounded-t-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
