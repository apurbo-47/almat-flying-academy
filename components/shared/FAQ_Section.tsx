import { faqData } from "@/constants/faqData";
import FAQHeader from "./FAQHeader";
import FAQList from "./FAQList";

export default function FAQSection() {
  return (
    <section className="max-w-330 mx-auto rounded-[20px] bg-white p-6 lg:p-15 mb-8 md:mb-15">
      <div className="">
        <FAQHeader />
        <FAQList data={faqData} />
      </div>
    </section>
  );
}
