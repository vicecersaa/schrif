"use client";

import { useEffect, useState } from "react";

const LINES = [
  "schrif --connect",
  'echo "Every AI model. One plan."',
  'echo "Endless content. One creative workspace."',
  "load --tools images video audio",
  'create --from "a single prompt or photo"',
  'generate --output "Your next big idea"',
  'echo "Imagine it. Create it. Make it yours."',
  "status --creative-engine ready",
  'echo "Welcome to Schrif."',
];

const TYPE_MS = 18;
const LINE_PAUSE_MS = 140;
const START_DELAY_MS = 350;
const LOOP_PAUSE_MS = 1800; // jeda setelah selesai sebelum ngulang

const EMPTY = LINES.map(() => "");

export default function Terminal() {
  const [typed, setTyped] = useState<string[]>(EMPTY);
  const activeLine = typed.findIndex((value, index) => value !== LINES[index]);
  const cursorLine = activeLine === -1 ? LINES.length - 1 : activeLine;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(LINES);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => {
      timers.push(setTimeout(() => !cancelled && fn(), ms));
    };

    const typeLine = (line: number, char: number) => {
      if (line >= LINES.length) {
        // semua baris selesai: tunggu sebentar, kosongin, lalu ulang
        later(() => {
          setTyped(EMPTY);
          later(() => typeLine(0, 1), START_DELAY_MS);
        }, LOOP_PAUSE_MS);
        return;
      }
      if (char > LINES[line].length) {
        later(() => typeLine(line + 1, 0), LINE_PAUSE_MS);
        return;
      }
      setTyped((prev) => {
        const next = [...prev];
        next[line] = LINES[line].slice(0, char);
        return next;
      });
      later(() => typeLine(line, char + 1), TYPE_MS + Math.random() * 12);
    };

    later(() => typeLine(0, 1), START_DELAY_MS);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="terminal" aria-label="Schrif terminal demo" role="img">
      <div className="terminal__screen">
        <div className="terminal__stars" aria-hidden="true" />
        <p className="terminal__user">
          <span className="terminal__dot" />
          root@schrif:~
        </p>
        <ul className="terminal__lines" aria-hidden="true">
          {LINES.map((_, i) => (
            <li key={i}>
              <span className="terminal__prompt">$</span>
              <span>{typed[i]}{i === cursorLine && <span className="terminal__cursor">_</span>}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="terminal__caption">Welcome to Schrif, we ready to build!</p>
    </div>
  );
}
