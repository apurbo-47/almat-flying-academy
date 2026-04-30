import { assets_home } from "@/assets/home-assets";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const BookNow = () => {
  return (
    <div className="relative max-w-330 mx-auto bg-primary rounded-[20px] mb-15 overflow-hidden">
      <div className="absolute  right-0 top-0 md:block hidden">
        <Image src={assets_home.rectangle} alt="" className="object-cover ]" />
      </div>

      <div className="absolute  left-0 top-0 md:block hidden">
        <Image src={assets_home.rectangle2} alt="" className="object-cover " />
      </div>

      <div className="absolute right-0 bottom-0 md:block hidden">
        <Image src={assets_home.bg_img} alt="" className="object-cover  " />
      </div>

      <div className="absolute left-0 bottom-0 md:block hidden ">
        <Image src={assets_home.bg_img2} alt="" className="object-cover " />
      </div>

      <div className="max-w-2xl mx-auto py-10 text-white text-center">
        <h1 className="text-[clamp(24px,4vw,50px)] font-bold leading-tight mb-5">
          Book Your <br /> Free Consultation
        </h1>
        <p className="text-[clamp(12px,1.5vw,14)]">
          Providing information required to make an informed decision about
          which licence and training route will work for you, along with
          practical budgeting advice. Read the information below to check you
          qualify and if so fill in the form below.
        </p>
        <button className="px-4 py-2 border bg-white/60 border-[#FFFFFF33] mt-4.5 rounded-full hover:bg-white hover:text-black cursor-pointer">
          <span className="flex gap-2.5 items-center">
            <IconArrowUpRight size={20} />
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default BookNow;
