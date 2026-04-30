import InfoSection from "@/components/cards/InfoSection";
import FAQSection from "@/components/shared/FAQ_Section";
import BookNow from "@/components/ui/BookNow";
import FreeLearn from "@/components/ui/FreeLearn";
import Hero from "@/components/ui/Hero";

export default async function Home() {
  return (
    <div>
      <Hero />
      <FreeLearn />
      <InfoSection />
      <BookNow />
      <FAQSection />
    </div>
  );
}
