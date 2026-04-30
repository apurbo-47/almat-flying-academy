"use client";
import React from "react";

const SectionBadge = ({
  text,
  className,
  textClassName,
  containerClassName,
  icon,
  shadowColor = "#0088FF05",
  hoverShadowColor = "#0F5BF1",
}: {
  text: string;
  className?: string;
  containerClassName?: string;
  textClassName?: string;
  icon?: React.ReactNode;
  shadowColor?: string;
  hoverShadowColor?: string;
}) => {
  return (
    <div className={`inline-flex rounded-full  ${containerClassName}`}>
      <div
        className={`flex items-center bg-white justify-center w-fit sm:py-2 py-1 sm:px-4 px-3 rounded-full transition-all duration-300 ${className}`}
        style={{
          ["--shadow-color" as string]: shadowColor,
          ["--hover-shadow-color" as string]: hoverShadowColor,
        }}
      >
        {icon && <span>{icon}</span>}
        {text && (
          <span
            className={`text-[clamp(14px,2.5vw,16px)] text-[#0F5BF1] ${textClassName}`}
          >
            {text}
          </span>
        )}
        <style jsx>{`
          div {
            box-shadow: inset 0 0 10px 1px var(--shadow-color);
          }
          div:hover {
            box-shadow: inset 0 0 10px 0 var(--hover-shadow-color);
          }
        `}</style>
      </div>
    </div>
  );
};

export default SectionBadge;
