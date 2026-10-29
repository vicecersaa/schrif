import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "./solutions/solutions.css";
import "./solutions/hero-overrides.css";
import "./hero-home-overrides.css";
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
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}<CookieConsent /></body>
    </html>
  );
}
