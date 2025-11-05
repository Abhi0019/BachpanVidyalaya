"use client";
import { useEffect } from "react";

export default function PrincipalMessage() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll("#principal .reveal");

    if (prefersReduced) {
      reveals.forEach((el) => el.classList.add("show"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(i * 80, 240)}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="principal"
      className="relative py-16 md:py-24 bg-linear-to-b from-white to-[#f7fbff] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 items-center">
          {/* Portrait */}
          <div className="relative flex justify-center md:justify-start">
            <div
              className="group relative rounded-full p-1 bg-white/50 ring-4 ring-black shadow-[0_20px_50px_rgba(6,48,74,0.06)] transition-all duration-700 reveal hover:scale-105"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <img
                src="/images/1.jpeg"
                alt="Principal Anjali Mehta, Bachpan Vidyalay"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover object-center block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <div className="bg-white/75 backdrop-blur-md ring-1 ring-black/40 rounded-2xl p-6 md:p-10 shadow-[0_20px_50px_rgba(6,48,74,0.06)] reveal">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#06304A] mb-3">
                A Message from Our Principal
              </h3>
              <blockquote className="text-gray-700 italic text-lg md:text-xl leading-relaxed mb-4 pl-4 border-l-4 border-[#FFC947]/60">
                “Welcome to the Bachpan Vidyalay family — where every child’s curiosity is welcomed,
                their uniqueness celebrated, and learning is a joyful journey.”
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="font-bold text-[#06304A] text-lg">Mrs. Anjali Mehta</p>
                  <p className="text-sm text-gray-500">M.A., B.Ed. — Principal</p>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-28 h-10" viewBox="0 0 200 60" fill="none" aria-hidden="true">
                    <path
                      d="M6 40c20-22 46-18 66-4 16 12 42 20 70-2"
                      stroke="#0b3b52"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.95"
                    />
                    <path
                      d="M24 46c14-6 28-10 52-6"
                      stroke="#0b3b52"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      opacity="0.9"
                    />
                  </svg>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#FFC947] text-black font-semibold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform focus:ring-4 focus:ring-[#FFC947]/30"
                  >
                    Meet the Principal
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-xs text-gray-400">
              Committed to nurturing curious, confident learners.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
