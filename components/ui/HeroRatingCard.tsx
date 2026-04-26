import { assets_home } from "@/assets/home-assets";
import Image from "next/image";

const HeroRatingCard = () => {
  return (
    <div className="bg-[#EA00FF]/5 shadow-xl backdrop-blur-3xl rounded-[20px] p-5 ">
      <p className="text-lg font-bold  text-center">4.8/5</p>

      <div className="flex justify-center gap-1 text-[#C51230] text-sm mt-0.5">
        ★★★★★
      </div>

      {/* Avatars */}
      <div className="flex justify-center -space-x-2 mt-2.5">
        <Image
          src={assets_home.user}
          alt=""
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />
        <Image
          src={assets_home.user}
          alt=""
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />
        <Image
          src={assets_home.user}
          alt=""
          width={50}
          height={50}
          className="rounded-full border-2 border-white"
        />
      </div>

      <p className="text-center text-lg font-bold mt-2.5 ">1500+</p>
      <p className="text-center text-xs mt-1">Happy Student</p>
    </div>
  );
};

export default HeroRatingCard;
