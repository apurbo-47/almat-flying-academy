// components/Footer.tsx
"use client";

import Image from "next/image";
import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { assets } from "@/assets";
import { assets_home } from "@/assets/home-assets";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#B70825] to-[#000000] text-white p-6 md:p-10 lg:p-15 relative overflow-hidden">
      <div className="max-w-330 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="col-span-2">
          <Image src={assets.logo2} alt="logo" className="object-cover " />
          <p className="text-[clamp(14px,2vw,18px)] text-white leading-relaxed mt-4 mb-4 md:mb-6">
            We imagine and build experiences, products and businesses that
            disrupt the status quo, win hearts and realize the future. Explore
            how we work
          </p>

          <div className="flex items-center justify-between bg-white/10 border border-white/30 rounded-[20px] overflow-hidden max-w-sm">
            <div className="flex gap-2 items-center px-4 py-2">
              <IconMail size={24} />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent  text-sm outline-none w-full placeholder:text-white/60"
              />
            </div>
            <button className="bg-white text-primary text-sm px-4 py-2 rounded-[20px] m-1">
              <span className="flex gap-1 items-center">
                Subscribe <IconArrowRight size={20} />{" "}
              </span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-[clamp(16px,2vw,20px)] font-medium mb-4">
            QUICK LINK
          </h3>
          <ul className="space-y-2 text-[clamp(12px,1.5vw,16px)] text-white/80">
            <li>Home</li>
            <li>About</li>
            <li>Free Info</li>
            <li>Trial Lessons & Experiences</li>
            <li>Flying School</li>
            <li>Hour Building</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[clamp(16px,2vw,20px)] font-medium mb-4">
            QUICK LINK
          </h3>
          <ul className="space-y-2 text-[clamp(12px,1.5vw,16px)] text-white/80">
            <li>Club</li>
            <li>Electric Trial Flying Lesson</li>
            <li>Trial Flying Lessons</li>
            <li>Free PPL / LAPL guide</li>
            <li>FREE CPL guide</li>
            <li>Experiences</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[clamp(16px,2vw,20px)] font-medium mb-4">
            CONTACT
          </h3>
          <ul className="space-y-2 text-[clamp(12px,1.5vw,16px)] text-white/80">
            <li className="flex items-center gap-2">
              <IconMapPin size={16} /> Noakhali Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <IconMail size={16} /> hello@expertsquad.net
            </li>
            <li className="flex items-center gap-2">
              <IconPhone size={16} /> +880 1812027211
            </li>
            <li className="flex items-center gap-2">
              <IconPhone size={16} /> +880 1812027211
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-330 mx-auto mt-5 md:mt-10">
        <div className=" overflow-hidden">
          <Image
            src={assets_home.footer_img}
            alt="plane"
            className=" object-cover w-full h-30 md:h-full"
          />
        </div>
      </div>

      <div className="max-w-330 mx-auto px-5 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
        <p>© Copyright 2025 your brand - All Rights Reserved</p>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-full">
            <IconBrandYoutube size={16} />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-full">
            <IconBrandInstagram size={16} />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-full">
            <IconBrandFacebook size={16} />
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-white/40 rounded-full">
            <IconBrandLinkedin size={16} />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />
    </footer>
  );
};

export default Footer;
