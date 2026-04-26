"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconSearch,
  IconUser,
  IconBell,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { assets } from "@/assets";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Free Info", href: "/free-info" },
  { name: "Trial Lessons & Experiences", href: "/trial-lessons" },
  { name: "Flying School", href: "/flying-school" },
  { name: "Hour Building", href: "/hour-building" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white relative">
      <div className="max-w-330 mx-auto flex items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src={assets.logo} alt="logo" width={250} height={40} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-5 text-[16px]  transition
                ${
                  isActive
                    ? "text-[#C51230] font-bold"
                    : "text-black hover:text-[#C51230]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2.5">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <IconSearch size={16} />
            </button>

            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <IconUser size={16} />
            </button>

            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <IconUser size={16} className="text-[#C51230]" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-between text-[16px] font-bold"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* mobile icons */}
          <div className="flex items-center gap-3 pt-3 border-t">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
              <IconSearch size={18} />
            </button>

            <button className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center">
              <IconUser size={18} className="text-pink-600" />
            </button>

            <button className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center">
              <IconBell size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
