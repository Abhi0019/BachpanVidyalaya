"use client";

import { useTranslation } from "react-i18next";

export default function CampusLife() {
  const { t } = useTranslation();

  const activities = [
    {
      img: "/images/3.jpeg",
      titleKey: "campusLife.activities.sports.title",
      descKey: "campusLife.activities.sports.desc",
      icon: "/images/cricket.png",
    },
    {
      img: "/images/4.jpeg",
      titleKey: "campusLife.activities.creativeArts.title",
      descKey: "campusLife.activities.creativeArts.desc",
      icon: "/images/art.png",
    },
    {
      img: "/images/3.jpeg",
      titleKey: "campusLife.activities.stem.title",
      descKey: "campusLife.activities.stem.desc",
      icon: "/images/flask.png",
    },
    {
      img: "/images/3.jpeg",
      titleKey: "campusLife.activities.outdoor.title",
      descKey: "campusLife.activities.outdoor.desc",
      icon: "/images/beach.png",
    },
    {
      img: "/images/3.jpeg",
      titleKey: "campusLife.activities.reading.title",
      descKey: "campusLife.activities.reading.desc",
      icon: "/images/book.png",
    },
    {
      img: "/images/3.jpeg",
      titleKey: "campusLife.activities.music.title",
      descKey: "campusLife.activities.music.desc",
      icon: "/images/guitar.png",
    },
  ];

  return (
    <section
      id="campus-life"
      className="relative py-24 bg-linear-to-b from-[#f7fbff] to-[#e6f2ff] overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FFD9C0]/40 rounded-full filter blur-3xl animate-float-slow"></div>
      <div className="absolute top-1/3 -right-16 w-56 h-56 bg-[#A0E7FF]/30 rounded-full filter blur-2xl animate-float-slower"></div>
      <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-[#FFEEAA]/20 rounded-full filter blur-2xl animate-float-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#06304A] mb-4">
            {t("campusLife.title")}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            {t("campusLife.description")}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {activities.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 overflow-hidden"
            >
              <img
                src={item.img}
                alt={t(item.titleKey)}
                className="w-full h-72 object-cover object-center rounded-t-3xl"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#FFD86F]/20 flex items-center justify-center shadow-md">
                    <img src={item.icon} alt={t(item.titleKey)} className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#06304A]">
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="text-gray-600 text-base">{t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
