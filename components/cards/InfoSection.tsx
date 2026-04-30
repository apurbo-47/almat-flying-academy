import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-15">
      <InfoCard title="Student" description="1500+" />

      <InfoCard title="Total Aircraft" description="10+" />
      <InfoCard title="Team Members" description="20+" />
      <InfoCard title="Years Experience" description="08+" />
    </div>
  );
};

export default InfoSection;
