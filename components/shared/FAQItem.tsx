"use client";

import { IconChevronDown } from "@tabler/icons-react";

type FAQItemProps = {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
};

export default function FAQItem({
  question,
  answer,
  isActive,
  onClick,
}: FAQItemProps) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isActive ? "bg-[#F7F7FB]  border-black-10" : "bg-white border-black-10"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer"
      >
        <span className="font-medium text-[clamp(16px,2vw,20px)] text-black-80">
          {question}
        </span>

        <IconChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isActive ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className=" text-sm ">{answer}</p>
      </div>
    </div>
  );
}
