// components/WhyUs.js

"use client";
import { useTranslation } from "react-i18next";
// 1. Import motion
import { motion } from "framer-motion";

// 2. DELETE the entire useEffect block

// 3. Define variants for the grid and cards
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09, 
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 }, 
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] as const }, 
  },
};

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <section
      id="why-us"
      className="relative py-16 md:py-24 bg-[linear-gradient(180deg,#f7fbff_0%,#eef7fb_100%)] overflow-hidden"
    >
      {/* ... Decorative blobs ... */}
      <div className="absolute -left-28 -top-16 w-80 h-80 rounded-full bg-linear-to-tr from-[#FFDDA8]/50 via-[#FFC947]/20 to-[#FF9AA3]/8 blur-3xl pointer-events-none"></div>
      <div className="absolute -right-24 -bottom-12 w-64 h-64 rounded-full bg-linear-to-bl from-[#6AD3FF]/16 to-[#63c2b5]/8 blur-2xl pointer-events-none"></div>
      <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[340px] h-[18px] bg-[linear-gradient(90deg,#FFF0D6,rgba(255,201,71,0.06),#E6FBFF)] blur-sm opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* 4. Animate the title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-10"
          style={{
            fontFamily:
              "Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial",
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <span className="block text-[#06304A]">{t("whyus.titleTop")}</span>
          <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#FFC947] via-[#FF9A76] to-[#FF6B9B] text-4xl md:text-5xl">
            {t("whyus.titleBottom")}
          </span>
        </motion.h2>

        {/* 5. Turn the grid into a <motion.div> */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }} // Your original threshold
        >
          {/* Card A */}
          {/* 6. Turn <article> into <motion.article> */}
          <motion.article
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_12px_30px_rgba(6,48,74,0.06)]" // 7. Removed CSS classes, added base shadow
            variants={cardVariants}
            // 8. Re-implemented your exact 3D hover effect
            whileHover={{
              y: -10,
              rotateX: "2deg",
              scale: 1.01,
              boxShadow: "0 30px 60px rgba(6, 48, 74, 0.1)",
            }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] as const }}
          >
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
            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">
              {t("whyus.cards.0.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("whyus.cards.0.desc")}
            </p>
          </motion.article>

          {/* Card B */}
          <motion.article
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_12px_30px_rgba(6,48,74,0.06)]"
            variants={cardVariants}
            whileHover={{
              y: -10,
              rotateX: "2deg",
              scale: 1.01,
              boxShadow: "0 30px 60px rgba(6, 48, 74, 0.1)",
            }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] as const }}
          >
            <div className="absolute -left-10 -bottom-8 w-36 h-36 rounded-full bg-[#6AD3FF]/10 blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E6FBFF] mx-auto mb-4 ring-1 ring-[#6AD3FF]/25">
              <svg
                className="w-8 h-8 text-[#0b9ccf]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
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
            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">
              {t("whyus.cards.1.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("whyus.cards.1.desc")}
            </p>
          </motion.article>

          {/* Card C */}
          <motion.article
            className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_12px_30px_rgba(6,48,74,0.06)]"
            variants={cardVariants}
            whileHover={{
              y: -10,
              rotateX: "2deg",
              scale: 1.01,
              boxShadow: "0 30px 60px rgba(6, 48, 74, 0.1)",
            }}
            transition={{ duration: 0.4, ease: [0.2, 0.9, 0.2, 1] as const }}
          >
            <div className="absolute -right-12 -bottom-10 w-40 h-40 rounded-full bg-[#FFCCD5]/8 blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFF1F4] mx-auto mb-4 ring-1 ring-[#FFCCD5]/22">
              <svg
                className="w-8 h-8 text-[#ff6b9b]"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 2l7 4v6c0 5-3.58 9.77-7 10-3.42-.23-7-5-7-10V6l7-4z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#06304A] mb-2">
              {t("whyus.cards.2.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t("whyus.cards.2.desc")}
            </p>
          </motion.article>
        </motion.div>

        <div className="mt-10 text-sm text-gray-500">{t("whyus.footer")}</div>
      </div>

      
    </section>
  );
}