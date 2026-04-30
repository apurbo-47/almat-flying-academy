import { IconPointFilled } from "@tabler/icons-react";
import SectionBadge from "../ui/Section-Badge";

export default function FAQHeader() {
  return (
    <div className="text-center mb-6 md:mb-10">
      {/* Badge */}
      <div className="text-center">
        <SectionBadge
          text="Free Learn"
          icon={<IconPointFilled className="text-[#0F5BF1]" />}
          containerClassName=""
          shadowColor="#0F5BF1"
        />
      </div>

      <h2 className="text-[clamp(24px,4vw,46px)] font-bold text-black-80 mt-3 mb-3">
        Frequently Asked Questions
      </h2>

      <p className=" text-[clamp(12px,1.5vw,14px)] text-black-70 max-w-xl mx-auto">
        Find quick answers to the most common questions about our flight
        training programs, aircraft, safety measures, and enrollment process.
      </p>
    </div>
  );
}
