import { IconArrowUpRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

type ImageCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

const ImageCard = ({ image, title, description }: ImageCardProps) => {
  return (
    <div className="max-w-330 mx-auto">
      <div className="group rounded-[20px] overflow-hidden bg-white  transition-all duration-300 p-2.5">
        {/* Image */}
        <div className="relative w-full lg:h-90 md:h-70 h-60 overflow-hidden border border-black-10 rounded-[20px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex justify-between ">
          <div className="p-5 space-y-2.5">
            <h3 className="text-[clamp(14px,1.5vw,16px)] font-bold ">
              {title}
            </h3>
            <p className="text-[clamp(12px,1.5vw,16px)] ">{description}</p>
          </div>
          <div className="px-2.5 py-2.5 m-5 w-10 h-10 rounded-full bg-[#5EA4FFB2] text-black ">
            <IconArrowUpRight className="" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
