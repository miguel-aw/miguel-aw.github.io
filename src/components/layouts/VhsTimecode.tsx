"use client";

import { useEffect, useState } from "react";

// Timecode da fita: avança conforme a rolagem (a página inteira = 00:42:00).
const TOTAL_SECONDS = 42 * 60;

function format(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export function VhsTimecode() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setSec(max > 0 ? (window.scrollY / max) * TOTAL_SECONDS : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <span className="vh-time">{format(sec)}</span>;
}
