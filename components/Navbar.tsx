"use client";

import { useState } from "react";

const links = [
  { label: "Image", menu: true },
  { label: "Video", menu: true },
  { label: "Photoshoot", menu: true },
  { label: "Photo Editor", menu: true },
  { label: "Use Cases", menu: true },
  { label: "Models", menu: false },
  { label: "Pricing", menu: false, badge: "30% OFF" },
];

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 3.5 5 6.5 8 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Logo() {
  return (
    <a href="/" className="logo" aria-label="Schrif home">
      <img src="/logo.png" alt="Schrif" width={150} height={32} />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <Logo />

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} href="#" className="nav__link">
              {l.label}
              {l.menu && <Chevron />}
              {l.badge && <span className="nav__badge">{l.badge}</span>}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__icon" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="m12.5 12.5 3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <a href="#" className="nav__login">
            Log in
          </a>
          <a href="#" className="btn btn--lime nav__cta">
            Get started
          </a>
          <button
            className="nav__burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}