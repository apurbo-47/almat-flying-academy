type ImageCardProps = {
  title: string;
  description: string;
};

const InfoCard = ({ title, description }: ImageCardProps) => {
  return (
    <div className="max-w-330 mx-auto">
      <div className="group rounded-[20px] overflow-hidden bg-white  transition-all duration-300 px-10 py-5 ">
        <h3 className="text-center text-[clamp(16px,1.5vw,20px)] font-medium text-black-80">
          {title}
        </h3>

        <p className="text-center text-[clamp(24px,3vw,40px)] font-bold bg-linear-to-b from-[#006FFFB2] to-[#000000] bg-clip-text text-transparent px-8">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
