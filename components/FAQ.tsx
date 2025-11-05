"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What age group does Bachpan Vidyalay cater to?",
    answer: "We welcome students from Nursery to Grade 8.",
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide safe and convenient school bus facilities.",
  },
  {
    question: "What is the admission process?",
    answer: "Simply contact us via the form or visit our campus to know more about admissions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all bg-gray-50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium"
              >
                {faq.question}
                <span className="text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
