// components/Hero.tsx

"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // <-- THIS IS THE FIX
    },
  },
};

export default function Hero() {
  const { t } = useTranslation();

  useEffect(() => {
    // ... ticker logic ...
    const ticker = document.querySelector(".ticker-track");
    if (ticker) {
      const track = ticker as HTMLElement;
      track.onmouseover = () => (track.style.animationPlayState = "paused");
      track.onmouseout = () => (track.style.animationPlayState = "running");
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[640px] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* ... Video, Overlays, Floating shapes ... */}
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-auto min-w-full min-h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(3,16,32,0.55)] via-[rgba(7,33,71,0.28)] to-[rgba(0,0,0,0.45)] animate-gradient-slow" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="hidden md:block absolute -left-10 -top-16 w-48 h-48 rounded-full bg-[#FFC947]/20 blur-2xl animate-float-slow"></div>
        <div className="hidden lg:block absolute -right-10 top-20 w-40 h-40 rounded-full bg-[#FFDDA8]/12 blur-2xl animate-float-slower"></div>
      </div>

      <motion.div
        className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={childVariants}
          className="font-jolly-lodger text-5xl md:text-7xl leading-normal drop-shadow-2xl text-transparent bg-clip-text bg-linear-to-r from-[#FFD27A] via-[#FF9A76] to-[#FF6B9B]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-4 text-lg md:text-xl text-gray-100/95 drop-shadow-md max-w-xl mx-auto"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="bg-[#FFC947] text-black font-semibold px-6 py-3 rounded-full text-lg shadow-xl transform transition-all hover:scale-105 focus:ring-4 focus:ring-[#FFC947]/40"
          >
            {t("hero.cta.enquire")}
          </a>
          <a
            href="#about"
            className="px-5 py-3 rounded-full border border-white/20 text-sm text-white/95 hover:bg-white/10 transition"
          >
            {t("hero.cta.learnMore")}
          </a>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={childVariants}
          className="mt-6 flex flex-wrap justify-center gap-3 text-sm"
        >
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            <strong className="text-[#FFC947]">
              {t("hero.highlights.admissions")}
            </strong>{" "}
            2025–26
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            {t("hero.highlights.playBased")}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            {t("hero.highlights.safeCampus")}
          </span>
        </motion.div>
      </motion.div>

      {/* ... Decorative bottom wave & News Ticker ... */}
      <svg
        className="absolute bottom-0 left-0 w-full z-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C240,120 360,0 720,40 C1080,80 1200,20 1440,60 L1440 120 L0 120 Z"
          fill="rgba(255,255,255,0.03)"
        />
      </svg>
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="bg-[rgba(6,30,60,0.85)] py-2 sm:py-3 overflow-hidden">
          <div className="ticker-track whitespace-nowrap animate-tickerMove text-lg sm:text-xl font-medium">
            <span className="mx-8">{t("hero.ticker.admissions")}</span>
            <span className="mx-8">{t("hero.ticker.sportsDay")}</span>
            <span className="mx-8">{t("hero.ticker.montessori")}</span>
            <span className="mx-8">{t("hero.ticker.smallClasses")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}