import { assets_home } from "@/assets/home-assets";
import ImageCard from "./ImageCards";

const CardSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <ImageCard
        image={assets_home.learn_card1}
        title="Free Consultation"
        description="Providing information required to make an informed decision about..."
      />

      <ImageCard
        image={assets_home.learn_card2}
        title="The Student Pilot Podcast"
        description="Providing information required to make an informed decision about..."
      />

      <ImageCard
        image={assets_home.learn_card3}
        title="The Ultimate Learn to Fly..."
        description="Providing information required to make an informed decision about..."
      />
    </div>
  );
};

export default CardSection;
