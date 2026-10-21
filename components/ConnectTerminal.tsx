"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ schrif --start-conversation",
  "",
  "Input:",
  "idea.exe",
  "",
  "$ schrif --start-solution.exe",
  "solution.exe successfully executed in 5ms.",
  "---",
  "$ Let’s make the next move count.",
];
const empty = lines.map(() => "");
const TYPE_MS = 18;
const LINE_PAUSE_MS = 140;
const START_DELAY_MS = 350;
const LOOP_PAUSE_MS = 1800;

export default function ConnectTerminal() {
  const [typed, setTyped] = useState<string[]>(empty);
  const activeLine = typed.findIndex((value, index) => value !== lines[index]);
  const cursorLine = activeLine === -1 ? lines.length - 1 : activeLine;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(lines);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(() => !cancelled && fn(), ms));
    const write = (line: number, char: number) => {
      if (line >= lines.length) {
        later(() => {
          setTyped(empty);
          later(() => write(0, 1), START_DELAY_MS);
        }, LOOP_PAUSE_MS);
        return;
      }
      if (char > lines[line].length) {
        later(() => write(line + 1, 0), LINE_PAUSE_MS);
        return;
      }
      setTyped((current) => {
        const next = [...current];
        next[line] = lines[line].slice(0, char);
        return next;
      });
      later(() => write(line, char + 1), TYPE_MS + Math.random() * 12);
    };

    later(() => write(0, 1), START_DELAY_MS);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="connectTerminal" aria-label="Schrif project terminal">
      <div className="connectTerminal__top">root@schrif:~/contact <span>• • •</span></div>
      <div className="connectTerminal__body">
        <div className="connectTerminal__typed">
          {typed.map((line, index) => index === 7 ? <hr key={index} /> : <p key={index} className={index === 1 || index === 4 ? "spacer" : index === 2 || index === 6 ? "secondary" : index === 3 ? "command" : ""}>{line || "\u00a0"}{index === cursorLine && <span className="connectTerminal__cursor">_</span>}</p>)}
        </div>
      </div>
      <small>Built with intent.</small>
    </div>
  );
}
