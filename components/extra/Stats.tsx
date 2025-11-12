"use client";
import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLHeadingElement>(".counter");
    const speed = 200;

    const animateCounters = (counter: HTMLHeadingElement) => {
      const target = +counter.getAttribute("data-target")!;
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc).toString();
        setTimeout(() => animateCounters(counter), 10);
      } else {
        counter.innerText = target.toString();
      }
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            animateCounters(entry.target as HTMLHeadingElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <StatItem target={500} label="Happy Students" />
          <StatItem target={25} label="Qualified Teachers" delay="0.2s" />
          <StatItem target={15} label="Modern Classrooms" delay="0.4s" />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  target,
  label,
  delay,
}: {
  target: number;
  label: string;
  delay?: string;
}) {
  return (
    <div className="reveal" style={{ transitionDelay: delay }}>
      <h2 data-target={target} className="counter text-5xl font-bold text-[#06304A]">
        0
      </h2>
      <p className="text-lg text-gray-600 mt-2">{label}</p>
    </div>
  );
}
