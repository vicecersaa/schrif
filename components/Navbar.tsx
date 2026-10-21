"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Image", href: "/#image" },
  { label: "Video", href: "/#video" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Models", href: "/#models" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/#pricing", badge: "30% OFF" },
];

function Logo() {
  return <Link href="/" className="logo" aria-label="Schrif home"><img src="/logo.png" alt="Schrif" width={150} height={32} /></Link>;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="nav">
      <div className="nav__inner">
        <Logo />
        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((link) => <Link key={link.label} href={link.href} className="nav__link" onClick={() => setOpen(false)}>{link.label}{link.badge && <span className="nav__badge">{link.badge}</span>}</Link>)}
          <Link href="/connect" className={`nav__link nav__link--connect ${pathname === "/connect" ? "is-active" : ""}`} onClick={() => setOpen(false)}>Connect</Link>
        </nav>
        <div className="nav__actions">
          <button className="nav__icon" aria-label="Search"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" /><path d="m12.5 12.5 3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg></button>
          <Link href="/connect" className="nav__login">Log in</Link>
          <Link href="/connect" className="btn btn--lime nav__cta">Ready to Build <span aria-hidden="true">↗</span></Link>
          <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
