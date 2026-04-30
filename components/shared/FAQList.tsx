"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

type FAQ = {
  question: string;
  answer: string;
};

type FAQListProps = {
  data: FAQ[];
};

export default function FAQList({ data }: FAQListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {data.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isActive={activeIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
}
