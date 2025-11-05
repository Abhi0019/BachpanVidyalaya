"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // pause ticker on hover
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
      {/* Video Background */}
      <video
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 w-auto min-w-full min-h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(3,16,32,0.55)] via-[rgba(7,33,71,0.28)] to-[rgba(0,0,0,0.45)] animate-gradient-slow" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10" />

      {/* Floating shapes */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <div className="hidden md:block absolute -left-10 -top-16 w-48 h-48 rounded-full bg-[#FFC947]/20 blur-2xl animate-float-slow"></div>
        <div className="hidden lg:block absolute -right-10 top-20 w-40 h-40 rounded-full bg-[#6AD3FF]/12 blur-2xl animate-float-slower"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="font-jolly-lodger text-5xl md:text-7xl leading-normal drop-shadow-2xl text-transparent bg-clip-text bg-linear-to-r from-[#FFD27A] via-[#FF9A76] to-[#FF6B9B]">
          Bachpan Vidyalay
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-100/95 drop-shadow-md max-w-xl mx-auto">
          Nurturing curious little minds in Patan — a joyful place where children play, learn, explore and grow together.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="bg-[#FFC947] text-black font-semibold px-6 py-3 rounded-full text-lg shadow-xl transform transition-all hover:scale-105 focus:ring-4 focus:ring-[#FFC947]/40"
          >
            Enquire Now
          </a>
          <a
            href="#about"
            className="px-5 py-3 rounded-full border border-white/20 text-sm text-white/95 hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>

        {/* Highlights */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            <strong className="text-[#FFC947]">Admissions Open</strong> 2025–26
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            Play-based learning
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            Safe campus • Experienced teachers
          </span>
        </div>
      </div>

      {/* Decorative bottom wave */}
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

      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <div className="bg-[rgba(6,30,60,0.85)] py-2 sm:py-3 overflow-hidden">
          <div className="ticker-track whitespace-nowrap animate-tickerMove text-lg sm:text-xl font-medium">
            <span className="mx-8">
              Admissions for the 2025–2026 session are now open — limited seats available.
            </span>
            <span className="mx-8">
              Annual Sports Day on December 15 — Parents welcome.
            </span>
            <span className="mx-8">
              New Montessori classes starting this year — Book a tour.
            </span>
            <span className="mx-8">
              Small classroom sizes • Personalized attention.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
