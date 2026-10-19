"use client";

import { useState } from "react";
import Terminal from "./Terminal";

const modes = ["Video", "Photo", "Logo", "Music"];

const tools = [
  { label: "Image", d: "M4 6a2 2 0 0 1 2-2h8M20 10v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6m0 11 4.5-4.5 3 3L15 11l5 5M17 3v4M15 5h4" },
  { label: "Video", d: "M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Zm0 0 2-4h4L8 8m3 0 2-4h4l-2 4M10 13l4 2.5-4 2.5v-5Z" },
  { label: "Photoshoot", d: "M12 4a8 8 0 1 0 8 8M12 8a4 4 0 1 0 4 4M17 3l.7 1.8L19.5 5.5l-1.8.7L17 8l-.7-1.8-1.8-.7 1.8-.7L17 3Z" },
  { label: "Photo Editor", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3 6 3 3m0 0 3-3m-3 3v5M8 14h.01M16 14h.01" },
  { label: "Audio", d: "M5 10v4M8.5 7v10M12 4v16M15.5 8v8M19 11v2M20 5l.6 1.4L22 7l-1.4.6L20 9l-.6-1.4L18 7l1.4-.6L20 5Z" },
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
            Headshots, product shots, video ads and more, made in seconds from a
            single prompt or photo. Trusted by 500,000+ creators.
          </p>

          <form className="prompt" onSubmit={(e) => e.preventDefault()}>
            <input
              className="prompt__input"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A dog skateboarding in nyc..."
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

          <dl className="stats">
            <div><dt>500K+</dt><dd>Creators</dd></div>
            <div><dt>50M+</dt><dd>Images generated</dd></div>
            <div><dt>8M+</dt><dd>Videos generated</dd></div>
          </dl>

          <div className="trust">
            <a href="#" className="trust__rating">
              <span className="trust__star">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="m7 1.5 1.6 3.4 3.7.4-2.8 2.5.8 3.7L7 9.6 3.7 11.5l.8-3.7L1.7 5.3l3.7-.4L7 1.5Z" fill="#0B0B0B" />
                </svg>
              </span>
              Rated 4.7/5 on Trustpilot from 38 reviews
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
