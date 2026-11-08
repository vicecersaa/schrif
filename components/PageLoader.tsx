"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// The reference animation is around six seconds. Preserve its sequence while
// keeping the website transition quick.
const MIN_VISIBLE_MS = 1800;

export default function PageLoader() {
  const pathname = usePathname();
  const startedAt = useRef(Date.now());
  const hasMounted = useRef(false);
  const [visible, setVisible] = useState(true);
  const [run, setRun] = useState(0);

  const finish = () => {
    const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
    window.setTimeout(() => setVisible(false), remaining);
  };

  useEffect(() => {
    const fallback = window.setTimeout(finish, MIN_VISIBLE_MS);
    return () => window.clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }
    finish();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!anchor || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || anchor.target === "_blank") return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname) return;

      startedAt.current = Date.now();
      setRun((current) => current + 1);
      setVisible(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <div className={`pageLoader ${visible ? "is-visible" : ""}`} aria-hidden={!visible}>
      <div key={`sequence-${run}`} className="pageLoader__sequence">
        <div className="pageLoader__word" aria-label="Schrif">Schrif<i>&#9612;</i></div>
        <p className="pageLoader__command"><b>&gt;</b> schrif --init creative<i>&#9612;</i></p>
      </div>
      <div key={`progress-${run}`} className="pageLoader__progress" aria-hidden="true"><span /></div>
      <p key={`percent-${run}`} className="pageLoader__percent">100%</p>
    </div>
  );
}
