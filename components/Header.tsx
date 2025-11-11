"use client";

import { useEffect, useState } from "react";
import { Menu, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../i18n"; // Import your i18n initialization

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const { t, i18n } = useTranslation();

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Change language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setMobileLangOpen(false);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md scrolled" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" id="logo-link" className="flex items-center">
            <Image
              src="/images/logopng.png"
              alt="logo"
              width={80}
              height={80}
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              {t("header.home")}
            </a>
            <a
              href="#about"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              {t("header.about")}
            </a>
            <a
              href="#academics"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              {t("header.academics")}
            </a>
            <a
              href="#campus-life"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              {t("header.campus")}
            </a>

            {/* Admissions Button */}
            <a
              href="#contact"
              className={`admissions-btn font-semibold px-5 py-2 rounded-full border-2 transition-all duration-300 shadow-sm
                ${
                  scrolled
                    ? "bg-[#FFC947] text-black border-transparent hover:bg-transparent hover:border-[#FFC947] hover:text-black"
                    : "bg-[#FFC947] text-black border-transparent hover:bg-transparent hover:border-[#FFC947] hover:text-white"
                }`}
            >
              {t("header.admissions")}
            </a>

            {/* 🌐 Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded hover:bg-gray-200"
              >
                <Globe size={18} />
                {i18n.language.toUpperCase()}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md overflow-hidden z-50">
                  <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    {t("header.language_english")}
                  </button>
                  <button
                    onClick={() => changeLanguage("hi")}
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    {t("header.language_hindi")}
                  </button>
                  <button
                    onClick={() => changeLanguage("gu")}
                    className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    {t("header.language_gujarati")}
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`transition-colors duration-300 ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t">
          <a
            href="#"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            {t("header.home")}
          </a>
          <a
            href="#about"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            {t("header.about")}
          </a>
          <a
            href="#academics"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            {t("header.academics")}
          </a>
          <a
            href="#campus-life"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            {t("header.campus")}
          </a>
          <a
            href="#contact"
            className="block py-3 px-4 text-sm font-semibold text-school-blue bg-yellow-100 hover:bg-yellow-200"
          >
            {t("header.admissions")}
          </a>

          {/* 🌐 Language Switcher for Mobile */}
          <div className="border-t py-3 px-4">
            <button
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="flex items-center gap-2 text-gray-700 font-medium"
            >
              <Globe size={18} />
              {i18n.language.toUpperCase()}
            </button>

            {mobileLangOpen && (
              <div className="mt-2 bg-gray-50 rounded-md shadow-inner">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("header.language_english")}
                </button>
                <button
                  onClick={() => changeLanguage("hi")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("header.language_hindi")}
                </button>
                <button
                  onClick={() => changeLanguage("gu")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {t("header.language_gujarati")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
