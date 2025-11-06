// app/layout.tsx
"use client";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import "../i18n"; // <-- import i18n initialization

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
 const metadata = {
  title: "Bachpan Vidyalay | School in Patan for LKG - Std 8",
  description:
    "Bachpan Vidyalay in Patan, Gujarat offers a safe, joyful learning environment with experienced teachers focused on holistic development. Admissions open!",
  openGraph: {
    title: "Bachpan Vidyalay | School in Patan for LKG - Std 8",
    description:
      "Bachpan Vidyalay in Patan, Gujarat offers a safe, joyful learning environment with experienced teachers focused on holistic development. Admissions open!",
    url: "https://www.bachpanvidyalaypatan.com",
    siteName: "Bachpan Vidyalay",
    type: "website",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/images/logopng.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-white`}>
        {children}
        <script src="https://unpkg.com/feather-icons" async></script>
      </body>
    </html>
  );
}
