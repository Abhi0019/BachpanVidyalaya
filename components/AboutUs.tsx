"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      document.querySelectorAll("#about .reveal").forEach((el) => el.classList.add("show"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("#about .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-[linear-gradient(180deg,#fbfdff_0%,#f5f8fb_100%)] overflow-hidden"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Jolly+Lodger&family=Inter:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Decorative Blobs */}
      <div className="absolute -left-28 -top-20 w-96 h-96 rounded-full bg-linear-to-tr from-[#FFDDA8] via-[#FFC947]/60 to-[#FF9AA3]/20 blur-3xl opacity-90 pointer-events-none" />
      <div className="absolute -right-24 bottom-8 w-80 h-80 rounded-full bg-linear-to-bl from-[#6AD3FF]/20 to-[#63c2b5]/6 blur-2xl opacity-80 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/10 transform rotate-1 shadow-[0_25px_60px_rgba(6,48,74,0.07)]"></div>

            <img
              src="/images/1.jpeg"
              alt={t("about.imageAlt")}
              loading="lazy"
              className="relative rounded-3xl shadow-2xl w-full h-[420px] sm:h-[480px] object-cover object-center transform transition-transform duration-600 hover:-translate-y-3"
            />

            <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#FFC947]/80 blur-sm opacity-90 animate-float-slow pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-10 h-10 rounded-full bg-[#6AD3FF]/70 blur-sm opacity-80 animate-float-slower pointer-events-none" />
          </div>

          {/* Text */}
          <div>
            <div className="bg-white/70 backdrop-blur-md ring-1 ring-white/30 rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(6,48,74,0.06)] reveal">
              <h2 className="font-[Jolly_Lodger] text-3xl sm:text-4xl md:text-5xl leading-normal mb-4">
                <span className="block text-[#06304A]">{t("about.welcome")}</span>
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-[#FFC947] via-[#FF9A76] to-[#FF6B9B]">
                  {t("about.schoolName")}
                </span>
              </h2>
              <p className="text-gray-700 text-lg md:text-xl mb-4">{t("about.description1")}</p>
              <p className="text-gray-600 mb-6">{t("about.description2")}</p>

              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#FFC947] text-black font-semibold px-5 py-3 rounded-full shadow hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-[#FFC947]/30"
                >
                  {t("about.contactCTA")}
                </a>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-400">{t("about.footerNote")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
