"use client";

import { useEffect, useState } from "react";

// The reference animation is around six seconds. Preserve its sequence while
// keeping the website transition quick.
const MIN_VISIBLE_MS = 1800;
const LOADER_SEEN_KEY = "schrif-home-loader-seen";

export default function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isHardReload = navigation?.type === "reload";
    const hasSeenLoader = window.sessionStorage.getItem(LOADER_SEEN_KEY) === "true";

    // A first entry and a browser reload retain the full intro. Client-side
    // navigation back to Home stays immediate.
    if (!isHardReload && hasSeenLoader) return;

    window.sessionStorage.setItem(LOADER_SEEN_KEY, "true");
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), MIN_VISIBLE_MS);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`pageLoader ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div className="pageLoader__sequence">
        <div className="pageLoader__word" aria-label="Schrif">Schrif<i>&#9612;</i></div>
        <p className="pageLoader__command"><b>&gt;</b> <span>schrif --init creative</span><i>&#9612;</i></p>
      </div>
      <div className="pageLoader__progress" aria-hidden="true"><span /></div>
      <p className="pageLoader__percent">100%</p>
    </div>
  );
}
