import React from "react";
import SectionBadge from "./Section-Badge";
import { IconPointFilled } from "@tabler/icons-react";
import CardSection from "../cards/CardSection";

const FreeLearn = () => {
  return (
    <div className="mt-10 md:mt-20 mb-10">
      <div className="max-w-2xl mx-auto mb-8 md:mb-15 p-4 md:p-0">
        <div className="text-center">
          <SectionBadge
            text="Free Learn"
            icon={<IconPointFilled className="text-[#0F5BF1]" />}
            containerClassName=""
            shadowColor="#0F5BF1"
          />
        </div>
        <h2 className="text-[clamp(24px,4vw,46px)] text-black-80 font-bold text-center mt-5">
          Learn to <span className="text-primary">Fly–Free</span> Information
        </h2>
        <p className="max-w-xl mx-auto text-[clamp(12px,1.5vw,14px)] text-center mt-4">
          Based at Coventry and Sywell Aerodrome, Northamptonshire, we
          deliver commercial-level professionalism in a friendly, club
          environment. Wether you want to train, rent aircraft or hour build, we
          can help.
        </p>
      </div>
      <div>
        <CardSection />
      </div>
    </div>
  );
};

export default FreeLearn;
