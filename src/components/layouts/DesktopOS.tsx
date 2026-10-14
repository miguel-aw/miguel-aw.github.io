"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode, type PointerEvent as RPointerEvent } from "react";
import { dict, links } from "@/content/site";

const t = dict.pt;
const w = t.worlds;

type WinId = "sobre" | "mods" | "fotos" | "clientes" | "notas" | "mail";
type Win = { open: boolean; min: boolean; z: number; x: number; y: number; px: boolean };

const APPS: { id: WinId; name: string; file: string; icon: string; width: number }[] = [
  { id: "sobre", name: "Sobre", file: "sobre.txt", icon: "📄", width: 440 },
  { id: "mods", name: "Mods", file: "Mods.app", icon: "🧱", width: 680 },
  { id: "fotos", name: "Fotos", file: "Fotos.app", icon: "🖼️", width: 620 },
  { id: "clientes", name: "Clientes", file: "Clientes.app", icon: "💼", width: 640 },
  { id: "notas", name: "Notas", file: "Notas.app", icon: "🗒️", width: 420 },
  { id: "mail", name: "Mail", file: "Mail.app", icon: "✉️", width: 480 },
];

// Posição inicial em % da área de trabalho, até a janela ser arrastada (aí vira px).
const START: Record<WinId, Win> = {
  sobre: { open: true, min: false, z: 3, x: 4, y: 6, px: false },
  mods: { open: true, min: false, z: 4, x: 32, y: 14, px: false },
  fotos: { open: false, min: false, z: 1, x: 20, y: 10, px: false },
  clientes: { open: false, min: false, z: 1, x: 26, y: 18, px: false },
  notas: { open: false, min: false, z: 1, x: 60, y: 8, px: false },
  mail: { open: false, min: false, z: 1, x: 40, y: 22, px: false },
};

function Clock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(new Date().toLocaleString("pt-BR", { weekday: "short", hour: "2-digit", minute: "2-digit" }));
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 15000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);
  return <span className="os-clock">{now}</span>;
}

function ModsApp() {
  const mods = [
    { name: w.penumbra.name, tag: w.penumbra.tag, pitch: w.penumbra.pitch, body: w.penumbra.body, stats: w.penumbra.stats, img: w.penumbra.shots[0].src, dark: true, href: links.penumbra, cta: w.penumbra.cta, icon: "/img/logos/penumbra.webp" },
    { name: w.shaders.name, tag: w.shaders.tag, pitch: w.shaders.pitch, body: w.shaders.body, stats: w.shaders.stats, img: w.shaders.shots[0].src, dark: false, href: links.pedraShaders, cta: w.shaders.cta, icon: "/img/logos/pedra-shaders.webp" },
    { name: w.aventura.name, tag: w.aventura.tag, pitch: w.aventura.pitch, body: w.aventura.body, stats: w.aventura.stats, img: w.aventura.shots[0].src, dark: false, href: links.pedraAventura, cta: w.aventura.cta, icon: "/img/aventura/acab2-01-carregamento-inicio.webp" },
    { name: w.boost.name, tag: w.boost.tag, pitch: w.boost.tag, body: w.boost.body, stats: [], img: w.aventura.shots[1].src, dark: false, href: null, cta: "", icon: "/img/aventura/acab2-05-pedraboost.webp" },
  ];
  const [i, setI] = useState(0);
  const m = mods[i];
  return (
    <div className="os-mods">
      <ul className="os-side" role="tablist" aria-label="Mods">
        {mods.map((mod, k) => (
          <li key={mod.name}>
            <button type="button" role="tab" aria-selected={k === i} onClick={() => setI(k)}>
              <Image src={mod.icon} alt="" width={64} height={64} />
              {mod.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="os-mod" role="tabpanel">
        <Image
          className={m.dark ? "is-dark" : ""}
          src={m.img}
          alt={m.name}
          width={1600}
          height={900}
          sizes="(max-width: 760px) 92vw, 420px"
        />
        <p className="os-kicker">{m.tag}</p>
        <h3>{m.name}</h3>
        <p className="os-pitch">{m.pitch}</p>
        <p>{m.body}</p>
        {m.stats.length > 0 && (
          <dl className="os-stats">
            {m.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
        {m.cta &&
          (m.href ? (
            <a className="os-btn" href={m.href} target="_blank" rel="noreferrer">
              {m.cta} ↗
            </a>
          ) : (
            <span className="os-btn os-btn--off">{w.soon}</span>
          ))}
      </div>
    </div>
  );
}

function FotosApp() {
  const [big, setBig] = useState<number | null>(null);
  const shots = w.shaders.shots;
  if (big !== null) {
    const s = shots[big];
    return (
      <div className="os-photo">
        <button type="button" className="os-link" onClick={() => setBig(null)}>
          ← Todas as fotos
        </button>
        <Image src={s.src} alt={s.caption} width={1920} height={1080} sizes="(max-width: 760px) 92vw, 600px" />
        <p>
          {s.caption} · {w.shaders.name}
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className="os-muted">
        {w.shaders.name}: {w.shaders.pitch}
      </p>
      <ul className="os-grid">
        {shots.map((s, k) => (
          <li key={s.src}>
            <button type="button" onClick={() => setBig(k)} aria-label={`Abrir ${s.caption}`}>
              <Image src={s.src} alt="" width={1920} height={1080} sizes="180px" />
              <span>{s.caption}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClientesApp() {
  return (
    <div>
      <p className="os-muted">{t.code.intro}</p>
      <ul className="os-list">
        {t.code.cases.map((c) => (
          <li key={c.name}>
            <div className="os-list-head">
              <strong>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.name} ↗
                  </a>
                ) : (
                  c.name
                )}
              </strong>
              <span className={`os-pill ${c.href ? "is-live" : ""}`}>{c.status}</span>
            </div>
            <p className="os-kicker">
              {c.kind} · {c.stack}
            </p>
            <p>{c.summary}</p>
          </li>
        ))}
      </ul>
      <div className="os-note">
        <strong>{t.code.howTitle}</strong>
        {t.code.how.map((h) => (
          <p key={h}>{h}</p>
        ))}
      </div>
    </div>
  );
}

function body(id: WinId): ReactNode {
  switch (id) {
    case "sobre":
      return (
        <div className="os-txt">
          <h2>{t.hero.lead}</h2>
          <p>{t.hero.sub}</p>
          <ul>
            {t.hero.lanes.map((l) => (
              <li key={l.id}>
                <b>{l.label}:</b> {l.note}
              </li>
            ))}
          </ul>
          <p className="os-muted">{w.rule}</p>
        </div>
      );
    case "mods":
      return <ModsApp />;
    case "fotos":
      return <FotosApp />;
    case "clientes":
      return <ClientesApp />;
    case "notas":
      return (
        <div>
          <p className="os-muted">{t.offscreen.intro}</p>
          <ul className="os-notes">
            {t.offscreen.hobbies.map((h) => (
              <li key={h.title}>
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "mail":
      return (
        <div className="os-mail">
          <p className="os-mail-row">
            <span>Para:</span> {links.email}
          </p>
          <p className="os-mail-row">
            <span>Assunto:</span> {t.contact.title}
          </p>
          <p className="os-mail-body">{t.contact.body}</p>
          <a className="os-btn" href={`mailto:${links.email}`}>
            Enviar e-mail
          </a>
          <p className="os-muted">{t.contact.company}</p>
        </div>
      );
  }
}

export function DesktopOS() {
  const [wins, setWins] = useState(START);
  const top = useRef(10);
  const area = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: WinId; dx: number; dy: number } | null>(null);

  const focus = (id: WinId) => {
    top.current += 1;
    const z = top.current;
    setWins((s) => ({ ...s, [id]: { ...s[id], open: true, min: false, z } }));
  };
  const close = (id: WinId) => setWins((s) => ({ ...s, [id]: { ...s[id], open: false } }));
  const minimize = (id: WinId) => setWins((s) => ({ ...s, [id]: { ...s[id], min: true } }));

  const onDown = (id: WinId) => (e: RPointerEvent<HTMLElement>) => {
    if (window.matchMedia("(max-width: 760px)").matches) return;
    if ((e.target as HTMLElement).closest("button")) return;
    const win = (e.currentTarget as HTMLElement).parentElement!;
    drag.current = { id, dx: e.clientX - win.offsetLeft, dy: e.clientY - win.offsetTop };
    e.currentTarget.setPointerCapture(e.pointerId);
    focus(id);
  };
  const onMove = (e: RPointerEvent<HTMLElement>) => {
    const d = drag.current;
    const box = area.current;
    if (!d || !box) return;
    const x = Math.min(Math.max(e.clientX - d.dx, -200), box.clientWidth - 120);
    const y = Math.min(Math.max(e.clientY - d.dy, 0), box.clientHeight - 40);
    setWins((s) => ({ ...s, [d.id]: { ...s[d.id], x, y, px: true } }));
  };
  const onUp = () => {
    drag.current = null;
  };

  return (
    <div className="os-screen">
      <header className="os-bar">
        <strong className="os-logo">◆ MiguelOS 14</strong>
        <nav className="os-bar-menu" aria-label="Apps">
          {APPS.map((a) => (
            <button key={a.id} type="button" onClick={() => focus(a.id)}>
              {a.name}
            </button>
          ))}
        </nav>
        <Clock />
      </header>

      <div className="os-desk" ref={area}>
        <ul className="os-icons" aria-label="Arquivos na área de trabalho">
          {APPS.map((a) => (
            <li key={a.id}>
              <button type="button" onDoubleClick={() => focus(a.id)} onClick={() => focus(a.id)}>
                <span className="os-icon-img" aria-hidden="true">
                  {a.icon}
                </span>
                <span>{a.file}</span>
              </button>
            </li>
          ))}
        </ul>

        {APPS.map((a) => {
          const st = wins[a.id];
          return (
            <section
              key={a.id}
              className={`os-win ${st.min ? "is-min" : ""}`}
              role="dialog"
              data-closed={st.open ? undefined : ""}
              aria-label={a.name}
              style={{
                left: st.px ? st.x : `${st.x}%`,
                top: st.px ? st.y : `${st.y}%`,
                zIndex: st.z,
                width: a.width,
              }}
              onPointerDown={() => focus(a.id)}
              onKeyDown={(e) => e.key === "Escape" && close(a.id)}
            >
              <header
                className="os-titlebar"
                onPointerDown={onDown(a.id)}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
              >
                <span className="os-lights">
                  <button type="button" className="os-l os-l--close" aria-label={`Fechar ${a.name}`} onClick={() => close(a.id)} />
                  <button type="button" className="os-l os-l--min" aria-label={`Minimizar ${a.name}`} onClick={() => minimize(a.id)} />
                </span>
                <span className="os-title">
                  <span aria-hidden="true">{a.icon}</span> {a.file}
                </span>
              </header>
              <div className="os-body">{body(a.id)}</div>
            </section>
          );
        })}
      </div>

      <nav className="os-dock" aria-label="Dock">
        {APPS.map((a) => (
          <button
            key={a.id}
            type="button"
            className={wins[a.id].open ? "is-open" : ""}
            onClick={() => focus(a.id)}
            aria-label={`Abrir ${a.name}`}
            title={a.name}
          >
            <span aria-hidden="true">{a.icon}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
