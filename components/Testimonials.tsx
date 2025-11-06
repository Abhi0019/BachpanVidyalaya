"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true }) as {
    text: string;
    name: string;
  }[];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#06304A] mb-12">
          {t("testimonials.title")}
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
