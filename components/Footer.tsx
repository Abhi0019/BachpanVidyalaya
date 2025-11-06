"use client";

import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.schoolName")}</h3>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.quickLinksTitle")}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFC947] transition-colors duration-300"
                >
                  {t("footer.links.home")}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FFC947] transition-colors duration-300"
                >
                  {t("footer.links.about")}
                </a>
              </li>
              <li>
                <a
                  href="#academics"
                  className="hover:text-[#FFC947] transition-colors duration-300"
                >
                  {t("footer.links.academics")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#FFC947] transition-colors duration-300"
                >
                  {t("footer.links.admissions")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("footer.connectTitle")}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC947] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC947] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FFC947] transition-colors duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>{t("footer.copyright", { year: 2025 })}</p>
        </div>
      </div>
    </footer>
  );
}
