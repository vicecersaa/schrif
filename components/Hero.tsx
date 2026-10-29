"use client";

import { useState } from "react";
import Terminal from "./Terminal";

const modes = ["UI/UX", "Copywriting", "Logo", "Flow"];

const tools = [
  { label: "Web UI/UX", d: "M4 5h16v14H4V5Zm0 4h16M8 5v4M7 14h4m2 0h4" },
  { label: "SEO & Content", d: "m20 20-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" },
  { label: "Social Media", d: "M5 6h14v10H9l-4 3V6Zm3 4h8m-8 3h5" },
  { label: "Brand Identity", d: "m12 3 7 7-7 7-7-7 7-7Zm0 5v4m-2-2h4" },
  { label: "Campaigns", d: "M4 13h3l9 4V7l-9 4H4v2Zm3 0 1 6h3l-1-5" },
];

export default function Hero() {
  const [mode, setMode] = useState("Video");
  const [prompt, setPrompt] = useState("");

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__left">
          <h1 className="hero__title">
            <span>Plan playfully.</span>
            <span className="is-lime">One intent.</span>
            <span>Shape your needs.</span>
          </h1>

          <p className="hero__sub">
            Schrif shape your ideas into timeless websites that ensure connectivity.
            Steady progression and trusted delivery, ensuring your end product will be
            delivered with high quality.
          </p>

          <form className="prompt" onSubmit={(e) => e.preventDefault()}>
            <input
              className="prompt__input"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Hello Schrif, make me a website for my business"
              aria-label="Describe what you want to create"
            />
            <button type="submit" className="btn btn--lime prompt__btn">
              Create
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          <div className="chips" role="tablist" aria-label="Output type">
            {modes.map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={mode === m}
                className={`chip ${mode === m ? "is-active" : ""}`}
                onClick={() => setMode(m)}
              >
                {m}
              </button>
            ))}
          </div>

          <a href="#" className="hero__link">See What You Can Make</a>
        </div>

        <div className="hero__right">
          <div className="hero__console">
            <Terminal />

            <div className="tools">
              {tools.map((t) => (
                <a key={t.label} href="#" className="tool">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B5E853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={t.d} />
                  </svg>
                  <span>{t.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="trust">
            <a href="#" className="trust__rating">
              <span className="trust__star">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="m7 1.5 1.6 3.4 3.7.4-2.8 2.5.8 3.7L7 9.6 3.7 11.5l.8-3.7L1.7 5.3l3.7-.4L7 1.5Z" fill="#0B0B0B" />
                </svg>
              </span>
              Trusted partner for your idea
            </a>
            <span className="trust__secure">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B5E853" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 5 6v6c0 4.2 3 7.4 7 9 4-1.6 7-4.8 7-9V6l-7-3Zm-3 9 2.2 2.2L15.5 10" />
              </svg>
              Secure checkout, cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
