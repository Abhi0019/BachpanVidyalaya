"use client";

import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] to-[#cbe4ff] py-24"
    >
      {/* TOP WAVE */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-10"
        aria-hidden="true"
      >
        <svg
          className="block w-full h-28"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#eef9ff"
            d="M0,64L60,74.7C120,85,240,107,360,133.3C480,160,600,192,720,213.3C840,235,960,245,1080,234.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Floating Blobs */}
      <div
        className="absolute -left-24 -top-24 w-72 h-72 bg-[#FFD9C0]/30 rounded-full blur-3xl animate-blob-slow -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -right-28 -bottom-24 w-96 h-96 bg-[#A0E7FF]/24 rounded-full blur-3xl animate-blob-slower -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute left-1/2 top-24 w-44 h-44 bg-[#FFEEAA]/20 rounded-full blur-2xl animate-blob-slow -z-10"
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-school-blue mb-3">
            Admissions are open
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Ready to join the Bachpan Vidyalay family? Send us an enquiry and
            our admissions team will help with next steps, tours and application
            details.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-school-blue mb-3">
                Contact details
              </h3>
              <p className="text-gray-600 mb-4">
                Prefer to call or visit? We're available during office hours and
                happy to schedule Appointment.
              </p>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <img
                    src="/images/location.png"
                    alt=""
                    className="w-5 h-5 mt-1"
                  />
                  <div>
                    <div className="font-medium text-sm">Address</div>
                    <div className="text-sm text-gray-600">
                      Rajlaxmi Society, Patan, Gujarat 384266
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <img
                    src="/images/telephone.png"
                    alt=""
                    className="w-5 h-5 mt-1"
                  />
                  <div>
                    <div className="font-medium text-sm">Phone</div>
                    <div className="text-sm text-gray-600">
                      +91 12345 67890
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <img src="/images/email.png" alt="" className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium text-sm">Email</div>
                    <div className="text-sm text-gray-600">
                      info@bachpanvidyalaya.com
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-school-blue mb-2">
                Office hours
              </h4>
              <p className="text-gray-600 text-sm">
                Mon – Fri: 9:00 AM – 3:30 PM
                <br />
                Sat: 9:00 AM – 1:00 PM
              </p>
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <form
                action="#"
                method="POST"
                className="space-y-4"
                aria-label="Admission enquiry form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    placeholder="Parent's name"
                    className="input-field"
                    required
                  />
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="Student's name"
                    className="input-field"
                    required
                  />
                </div>

                <input
                  id="klass"
                  name="klass"
                  type="text"
                  placeholder="Class applying for (e.g., LKG, 5th)"
                  className="input-field"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email address"
                    className="input-field"
                    required
                  />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    className="input-field"
                    required
                  />
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message (questions, preferred Appointment date, etc.)"
                  className="input-field"
                ></textarea>

                <div className="flex items-center gap-3">
                  <button type="submit" className="btn-primary">
                    Submit enquiry
                  </button>
                  <button type="reset" className="btn-ghost">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Global Styles */}
      <style jsx global>{`
        :root {
          --school-blue: #06304a;
          --accent: #ffd86f;
        }

        .input-field {
          width: 100%;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(15, 23, 42, 0.06);
          box-shadow: 0 6px 18px rgba(6, 48, 74, 0.04);
          background: #fff;
          transition: transform 180ms ease, box-shadow 200ms ease,
            border-color 150ms ease;
          font-size: 0.95rem;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 8px 22px rgba(6, 48, 74, 0.06);
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(90deg, var(--accent), #ff9a76);
          color: #062b35;
          padding: 0.85rem 1.25rem;
          border-radius: 0.75rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(255, 154, 118, 0.12);
          border: none;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 200ms ease;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(255, 154, 118, 0.12);
        }

        .btn-ghost {
          background: transparent;
          color: var(--school-blue);
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(6, 48, 74, 0.06);
          cursor: pointer;
          transition: background 150ms ease, transform 150ms ease;
        }
        .btn-ghost:hover {
          background: rgba(6, 48, 74, 0.03);
          transform: translateY(-2px);
        }

        @keyframes blobSlow {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(6px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes blobSlower {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-6px) translateX(-6px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-blob-slow {
          animation: blobSlow 6s ease-in-out infinite;
        }
        .animate-blob-slower {
          animation: blobSlower 9s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .input-field {
            font-size: 0.95rem;
            padding: 0.75rem;
          }
          .btn-primary,
          .btn-ghost {
            width: auto;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-blob-slow,
          .animate-blob-slower {
            animation: none !important;
            transform: none !important;
          }
          .input-field,
          .btn-primary,
          .btn-ghost {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
