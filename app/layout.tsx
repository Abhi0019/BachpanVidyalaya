// app/layout.tsx
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
// 1. Import your new component
import SmoothScroller from "./../components/SmoothScroller";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
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
  },
  icons: {
    icon: "/images/logopng.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} bg-white`}>
        {/* 2. Use your new SmoothScroller component here */}
        <SmoothScroller>
          {children}
        </SmoothScroller>
        <script src="https://unpkg.com/feather-icons" async></script>
      </body>
    </html>
  );
}