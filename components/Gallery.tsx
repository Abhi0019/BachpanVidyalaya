"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const images = [
  { src: "/images/1.jpeg", category: "annual-day", altKey: "gallery.alt.annualDay" },
  { src: "/images/2.jpeg", category: "sports", altKey: "gallery.alt.race" },
  { src: "/images/3.jpeg", category: "science", altKey: "gallery.alt.scienceProject" },
  { src: "/images/4.jpeg", category: "activity", altKey: "gallery.alt.activity" },
  { src: "/images/1.jpeg", category: "sports", altKey: "gallery.alt.winners" },
  { src: "/images/2.jpeg", category: "annual-day", altKey: "gallery.alt.groupDance" },
  { src: "/images/3.jpeg", category: "activity", altKey: "gallery.alt.reading" },
  { src: "/images/4.jpeg", category: "science", altKey: "gallery.alt.volcano" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const categories = ["all", "annual-day", "sports", "science", "activity"];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#06304A] mb-4">
          {t("gallery.title")}
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          {t("gallery.description")}
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-[#06304A] text-white border-transparent"
                  : "bg-white text-[#06304A] border border-[#06304A]/30 hover:bg-[#06304A]/10"
              }`}
            >
              {t(`gallery.categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="transition-transform duration-300 transform hover:scale-105 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img.src}
                alt={t(img.altKey)}
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
