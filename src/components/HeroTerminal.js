import React, { useEffect, useState } from "react";
import "./heroTerminal.css";

const script = [
  { type: "command", text: "build --stack full" },
  { type: "output", text: "compiled successfully" },
  { type: "command", text: "automate --workflow" },
  { type: "output", text: "repetitive steps simplified" },
  { type: "command", text: "ship --env production" },
  { type: "output", text: "live on Vercel" },
];

const TYPE_DELAY = 55;
const OUTPUT_DELAY = 420;
const LINE_DELAY = 500;
const RESTART_DELAY = 3200;
const VISIBLE_LINES = 4;

function HeroTerminal() {
  const [lines, setLines] = useState([]);
  const [typed, setTyped] = useState("");
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion) {
      setLines(script.slice(0, VISIBLE_LINES));
      return undefined;
    }

    let cancelled = false;
    let timer;
    const wait = (ms) =>
      new Promise((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const run = async () => {
      while (!cancelled) {
        setLines([]);
        for (const entry of script) {
          if (cancelled) return;
          if (entry.type === "command") {
            for (let i = 1; i <= entry.text.length; i += 1) {
              if (cancelled) return;
              setTyped(entry.text.slice(0, i));
              await wait(TYPE_DELAY);
            }
            await wait(LINE_DELAY);
            setTyped("");
            setLines((current) => [...current, entry].slice(-VISIBLE_LINES));
          } else {
            await wait(OUTPUT_DELAY);
            setLines((current) => [...current, entry].slice(-VISIBLE_LINES));
          }
        }
        await wait(RESTART_DELAY);
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [reduceMotion]);

  return (
    <div className="home-terminal" aria-hidden="true">
      <div className="home-terminal__bar">
        <span />
        <span />
        <span />
        <small>~/portfolio</small>
      </div>
      <div className="home-terminal__body">
        {lines.map((line, index) => (
          <p
            className={line.type === "command" ? "home-terminal__cmd" : "home-terminal__out"}
            key={`${index}-${line.text}`}
          >
            {line.text}
          </p>
        ))}
        {!reduceMotion && (
          <p className="home-terminal__cmd home-terminal__typing">
            {typed}
            <i />
          </p>
        )}
      </div>
    </div>
  );
}

export default HeroTerminal;
