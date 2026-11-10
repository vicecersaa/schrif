import type { Metadata } from "next";
import "./globals.css";
import "./solutions/solutions.css";
import "./solutions/hero-overrides.css";
import "./hero-home-overrides.css";
import "./container-overrides.css";
import CookieConsent from "@/components/CookieConsent";

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
    <html lang="en" style={{ "--font-manrope": 'Manrope, Arial, sans-serif' } as React.CSSProperties}>
      <body>{children}<CookieConsent /></body>
    </html>
  );
}
