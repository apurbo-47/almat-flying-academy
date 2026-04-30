import React from "react";
import SectionBadge from "./Section-Badge";
import { IconPointFilled } from "@tabler/icons-react";

const TrialLesson = () => {
  return (
    <div className="max-w-330 mx-auto px-8 py-12 bg-white rounded-[20px] mb-15">
      <div>
        <div className="">
          <SectionBadge
            text="Trial lesson"
            icon={<IconPointFilled className="text-[#0F5BF1]" />}
            containerClassName=""
            shadowColor="#0F5BF1"
          />
        </div>
        <div className="flex  items-center justify-between">
          <h3 className="mt-3.5 text-[clamp(24px,4vw,40px)] text-black-80 font-bold leading-tight">
            Trial Flying <br />{" "}
            <span className="text-primary italic">Lessons</span>
          </h3>
          <p className="max-w-lg text-[clamp(14px,2vw,18px)]">
            Based at Coventry and Sywell Aerodrome, Northamptonshire, we
            deliver commercial-level professionalism in a friendly, club
            environment. Wether you want to train, rent aircraft or hour build,
            we can help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrialLesson;
