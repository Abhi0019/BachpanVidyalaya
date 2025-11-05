"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  { src: "/images/1.jpeg", category: "annual-day", alt: "Annual Day Performance" },
  { src: "/images/2.jpeg", category: "sports", alt: "Race at Sports Meet" },
  { src: "/images/3.jpeg", category: "science", alt: "Science Project" },
  { src: "/images/4.jpeg", category: "activity", alt: "Classroom Activity" },
  { src: "/images/1.jpeg", category: "sports", alt: "Winners on Podium" },
  { src: "/images/2.jpeg", category: "annual-day", alt: "Group Dance" },
  { src: "/images/3.jpeg", category: "activity", alt: "Reading Session" },
  { src: "/images/4.jpeg", category: "science", alt: "Volcano Model" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#06304A] mb-4">
          Glimpses of Our World
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Explore the vibrant moments that make our school a special place to learn and grow.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["all", "annual-day", "sports", "science", "activity"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${
                filter === cat
                  ? "bg-[#06304A] text-white border-transparent"
                  : "bg-white text-[#06304A] border border-[#06304A]/30 hover:bg-[#06304A]/10"
              }`}
            >
              {cat === "all" ? "All" : cat.replace("-", " ").toUpperCase()}
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
                alt={img.alt}
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
