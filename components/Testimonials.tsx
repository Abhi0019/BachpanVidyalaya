"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `"Bachpan Vidyalay has been a second home for my child. The teachers are incredibly supportive and the focus on overall development is amazing."`,
    name: "Sunita Patel, Parent",
  },
  {
    text: `"We are so happy we chose this school. The campus is safe, and the quality of education is top-notch. Highly recommended!"`,
    name: "Ramesh Sharma, Parent",
  },
  {
    text: `"The school's events and activities are fantastic. It's wonderful to see my daughter so engaged and happy to go to school every day."`,
    name: "Meena Desai, Parent",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#06304A] mb-12">
          What Parents Say
        </h2>
        <div className="max-w-3xl mx-auto transition-all duration-700">
          <p className="text-lg text-gray-700 italic mb-4">
            {testimonials[index].text}
          </p>
          <p className="font-semibold text-[#06304A]">
            — {testimonials[index].name}
          </p>
        </div>
      </div>
    </section>
  );
}
