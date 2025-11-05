"use client";
import { useEffect } from "react";

export default function WhyUs() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = document.querySelectorAll(".why-card");

    if (prefersReduced) {
      cards.forEach((c) => c.classList.add("reveal", "show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idx = Array.from(cards).indexOf(el);
            el.classList.add("reveal");
            setTimeout(() => el.classList.add("show"), idx * 90);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => io.observe(card));
  }, []);

  return (
    <section
      id="why-us"
      className="relative py-16 md:py-24 bg-[linear-gradient(180deg,#f7fbff_0%,#eef7fb_100%)] overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute -left-28 -top-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FFDDA8]/50 via-[#FFC947]/20 to-[#FF9AA3]/8 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-24 -bottom-12 w-64 h-64 rounded-full bg-gradient-to-bl from-[#6AD3FF]/16 to-[#63c2b5]/8 blur-2xl pointer-events-none"></div>
      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[340px] h-[18px] bg-[linear-gradient(90deg,#FFF0D6,rgba(255,201,71,0.06),#E6FBFF)] blur-sm opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-10"
          style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial" }}
        >
          <span className="block text-[#06304A]">Why</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFC947] via-[#FF9A76] to-[#FF6B9B] text-4xl md:text-5xl">
            Bachpan Vidyalay?
          </span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card A */}
          <article className="why-card group relative bg-white rounded-2xl p-6 md:p-8 transform transition will-change-transform focus:outline-none">
            <div className="absolute -right-10 -top-8 w-36 h-36 rounded-full bg-[#FFC947]/8 blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF6E0] mx-auto mb-4 ring-1 ring-[#FFC947]/25">
              <svg
                className="w-8 h-8 text-[#FF9A76]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">Experienced Teachers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Caring, trained educators who give each child the attention and encouragement they need to flourish.
            </p>
          </article>

          {/* Card B */}
          <article className="why-card group relative bg-white rounded-2xl p-6 md:p-8 transform transition will-change-transform focus:outline-none">
            <div className="absolute -left-10 -bottom-8 w-36 h-36 rounded-full bg-[#6AD3FF]/10 blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E6FBFF] mx-auto mb-4 ring-1 ring-[#6AD3FF]/25">
              <svg className="w-8 h-8 text-[#0b9ccf]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 3v18h18"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 13l4-4 4 4 4-8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">Holistic Development</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A balanced programme of academics, arts & play that nurtures the whole child — head, heart and hands.
            </p>
          </article>

          {/* Card C */}
          <article className="why-card group relative bg-white rounded-2xl p-6 md:p-8 transform transition will-change-transform focus:outline-none">
            <div className="absolute -right-12 -bottom-10 w-40 h-40 rounded-full bg-[#FFCCD5]/8 blur-2xl pointer-events-none"></div>

            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF1F4] mx-auto mb-4 ring-1 ring-[#FFCCD5]/22">
              <svg className="w-8 h-8 text-[#ff6b9b]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 2l7 4v6c0 5-3.58 9.77-7 10-3.42-.23-7-5-7-10V6l7-4z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">Safe & Secure Campus</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A calm, secure environment and well-defined routines so parents feel reassured every day.
            </p>
          </article>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Trusted by families in Patan • Nurturing learners from LKG to Standard 8
        </div>
      </div>

      <style jsx>{`
        .why-card {
          transition: transform 400ms cubic-bezier(0.2, 0.9, 0.2, 1), box-shadow 400ms;
          box-shadow: 0 12px 30px rgba(6, 48, 74, 0.06);
        }
        .why-card:hover,
        .why-card:focus {
          transform: translateY(-10px) rotateX(2deg) scale(1.01);
          box-shadow: 0 30px 60px rgba(6, 48, 74, 0.1);
          outline: none;
        }
        .reveal {
          opacity: 0;
          transform: translateY(10px) scale(0.998);
          transition: opacity 600ms ease, transform 600ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }
        .reveal.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
