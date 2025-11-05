"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Sticky header on scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <Link href="#" id="logo-link" className="flex items-center">
            <Image
              src="/images/logopng.png"
              alt="logo"
              width={80}
              height={80}
              className="h-20 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            id="nav-links"
            className="hidden md:flex items-center space-x-8 transition-colors duration-300"
          >
            <a
              href="#"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              About Us
            </a>
            <a
              href="#academics"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              Academics
            </a>
            <a
              href="#campus-life"
              className={`nav-link ${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-school-blue transition-colors duration-300`}
            >
              Campus
            </a>

            <a
              href="#contact"
              className="admissions-btn bg-[#FFC947] text-black font-semibold px-5 py-2 rounded-full border-2 border-transparent transition shadow-sm hover:bg-transparent hover:border-[#FFC947] hover:text-white"
            >
              Admissions
            </a>
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
            Home
          </a>
          <a
            href="#about"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            About Us
          </a>
          <a
            href="#academics"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            Academics
          </a>
          <a
            href="#campus-life"
            className="block py-3 px-4 text-sm text-gray-600 hover:bg-gray-100"
          >
            Campus
          </a>
          <a
            href="#contact"
            className="block py-3 px-4 text-sm font-semibold text-school-blue bg-yellow-100 hover:bg-yellow-200"
          >
            Admissions
          </a>
        </div>
      )}
    </header>
  );
}
