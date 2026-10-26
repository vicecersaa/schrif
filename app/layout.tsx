import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Schrif — Plan playfully",
  description:
    "Headshots, product shots, video ads and more, made in seconds from a single prompt or photo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}<CookieConsent /></body>
    </html>
  );
}
