"use client";

import { useTranslation } from "react-i18next";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-blue-700 text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">{t("cta.title")}</h2>
      <p className="text-lg mb-6">{t("cta.description")}</p>
      <a
        href="#contact"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
      >
        {t("cta.button")}
      </a>
    </section>
  );
}
