"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Duas oitavas a partir do Dó central. Teclas do computador: A S D F G H J K L ; e W E T Y U O P.
type Key = { note: string; freq: number; black: boolean; kb?: string };

const NAMES = ["Dó", "Dó#", "Ré", "Ré#", "Mi", "Fá", "Fá#", "Sol", "Sol#", "Lá", "Lá#", "Si"];
const KB_WHITE = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
const KB_BLACK = ["w", "e", "t", "y", "u", "o", "p"];

function buildKeys(): Key[] {
  const keys: Key[] = [];
  let wi = 0;
  let bi = 0;
  for (let i = 0; i < 24; i++) {
    const black = [1, 3, 6, 8, 10].includes(i % 12);
    const freq = 261.63 * Math.pow(2, i / 12);
    const k: Key = { note: `${NAMES[i % 12]}${4 + Math.floor(i / 12)}`, freq, black };
    if (black) k.kb = KB_BLACK[bi++];
    else k.kb = KB_WHITE[wi++];
    keys.push(k);
  }
  return keys;
}
const KEYS = buildKeys();

export function PianoKeys() {
  const [sound, setSound] = useState(false);
  const [lit, setLit] = useState<number | null>(null);
  const ctx = useRef<AudioContext | null>(null);
  const soundRef = useRef(false);

  const play = useCallback((i: number, force = false) => {
    setLit(i);
    window.setTimeout(() => setLit((cur) => (cur === i ? null : cur)), 260);
    if (!soundRef.current && !force) return;
    if (!ctx.current) ctx.current = new AudioContext();
    const ac = ctx.current;
    if (ac.state === "suspended") void ac.resume();
    const now = ac.currentTime;
    const out = ac.createGain();
    const filter = ac.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2200;
    out.gain.setValueAtTime(0.0001, now);
    out.gain.exponentialRampToValueAtTime(0.22, now + 0.008);
    out.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
    filter.connect(out).connect(ac.destination);
    for (const [type, mult, vol] of [
      ["triangle", 1, 1],
      ["sine", 2, 0.35],
    ] as const) {
      const o = ac.createOscillator();
      const g = ac.createGain();
      o.type = type;
      o.frequency.value = KEYS[i].freq * mult;
      g.gain.value = vol;
      o.connect(g).connect(filter);
      o.start(now);
      o.stop(now + 1.7);
    }
  }, []);

  const toggle = () => {
    const next = !soundRef.current;
    soundRef.current = next;
    setSound(next);
    if (next) play(7, true);
  };

  // Teclado do computador
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, [contenteditable]")) return;
      const i = KEYS.findIndex((k) => k.kb === e.key.toLowerCase());
      if (i >= 0) play(i, true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [play]);

  // Cada movimento que entra na tela soa uma nota (se o som estiver ligado)
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-pn-note]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) play(Number((e.target as HTMLElement).dataset.pnNote));
      },
      { threshold: 0.5 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [play]);

  const whites = KEYS.map((k, i) => ({ ...k, i })).filter((k) => !k.black);

  return (
    <div className="pn-keyboard">
      <button type="button" className="pn-sound" aria-pressed={sound} onClick={toggle}>
        <span aria-hidden="true">{sound ? "🔊" : "🔇"}</span> {sound ? "Som ligado" : "Ligar o som"}
      </button>
      <div className="pn-keys" role="group" aria-label="Teclado de piano">
        {whites.map((k, wIdx) => {
          const next = KEYS[k.i + 1];
          return (
            <span key={k.note} className="pn-keyslot">
              <button
                type="button"
                className={`pn-white ${lit === k.i ? "is-lit" : ""}`}
                aria-label={k.note}
                onPointerEnter={() => play(k.i)}
                onClick={() => play(k.i, true)}
              >
                {wIdx < 10 && <small aria-hidden="true">{k.kb?.toUpperCase()}</small>}
              </button>
              {next?.black && (
                <button
                  type="button"
                  className={`pn-black ${lit === k.i + 1 ? "is-lit" : ""}`}
                  aria-label={next.note}
                  onPointerEnter={() => play(k.i + 1)}
                  onClick={() => play(k.i + 1, true)}
                />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
