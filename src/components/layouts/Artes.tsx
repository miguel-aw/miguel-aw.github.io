import Image from "next/image";
import type { ReactNode } from "react";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./artes.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });

const t = dict.pt;
const w = t.worlds;

function Frame({
  src,
  alt,
  w: width = 1920,
  h = 1080,
  dark,
  sizes = "(max-width: 900px) 90vw, 50vw",
  className = "",
}: {
  src: string;
  alt: string;
  w?: number;
  h?: number;
  dark?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`frame ${dark ? "frame--dark" : ""} ${className}`}>
      <div className="frame-mat">
        <Image src={src} alt={alt} width={width} height={h} sizes={sizes} />
      </div>
    </div>
  );
}

function Label({
  title,
  meta,
  children,
  no,
}: {
  title: string;
  meta: string[];
  children?: ReactNode;
  no?: string;
}) {
  return (
    <div className="label">
      {no && <span className="label-no">{no}</span>}
      <h3>
        <em>{title}</em>, 2026
      </h3>
      {meta.map((m) => (
        <p className="label-meta" key={m}>
          {m}
        </p>
      ))}
      {children && <div className="label-text">{children}</div>}
    </div>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="get" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  ) : (
    <span className="get get--off">{w.soon}</span>
  );
}

function Room({ no, title, children, id }: { no: string; title: string; children: ReactNode; id: string }) {
  return (
    <section className="room" id={id}>
      <header className="room-head" data-reveal>
        <span className="room-no">Sala {no}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

// Pauta: [posição horizontal %, degrau na pauta (0 = linha de baixo, sobe de meio em meio)]
const MELODY: [number, number][] = [
  [12, 2], [16, 4], [20, 6], [24, 5], [28, 4], [36, 3], [41, 5], [46, 7], [51, 8], [59, 6],
  [64, 4], [69, 5], [74, 3], [82, 2], [87, 4], [92, 1],
];

export function Artes() {
  const staffY = (step: number) => 80 - step * 7.5;
  return (
    <div className={`gal ${bodoni.variable} ${hanken.variable}`}>
      <nav className="gal-nav">
        <a href="#entrada" className="gal-brand">
          Miguel Paula
        </a>
        <span className="gal-nav-rooms">
          <a href="#mundos">I · Mundos</a>
          <a href="#codigo">II · Código</a>
          <a href="#musica">III · Música</a>
          <a href="#maos">IV · Mãos</a>
        </span>
        <a href="#saida">Contato</a>
      </nav>

      <header className="gal-hero" id="entrada">
        <div className="gal-hero-text">
          <p className="gal-kicker">Exposição individual · quatro salas</p>
          <h1>
            Miguel
            <br />
            <em>Paula</em>
          </h1>
          <p className="gal-wall">{t.hero.sub}</p>
          <ol className="gal-index">
            {["Mundos", "Código", "Música", "Mãos"].map((r, i) => (
              <li key={r}>
                <span>{["I", "II", "III", "IV"][i]}</span> {r}
              </li>
            ))}
          </ol>
        </div>
        <figure className="gal-hero-art">
          <Frame
            src={w.shaders.shots[0].src}
            alt={w.shaders.shots[0].caption}
            sizes="(max-width: 900px) 90vw, 45vw"
          />
          <figcaption>
            <em>{w.shaders.shots[0].caption}</em>, 2026. Pedra Shaders, perfil Alto.
          </figcaption>
        </figure>
      </header>

      <Room no="I" title="Mundos" id="mundos">
        <p className="room-intro" data-reveal>
          {w.intro}
        </p>

        {/* Penumbra */}
        <div className="work work--penumbra" data-reveal>
          <div className="penumbra-wall">
            <Frame src={w.penumbra.shots[0].src} alt={w.penumbra.shots[0].caption} w={1708} h={960} dark />
            <div className="penumbra-pair">
              {w.penumbra.shots.slice(1).map((s) => (
                <Frame key={s.src} src={s.src} alt={s.caption} w={1708} h={960} dark sizes="(max-width: 900px) 45vw, 22vw" />
              ))}
            </div>
          </div>
          <Label
            no="01"
            title={w.penumbra.name}
            meta={["Mod para Minecraft Java · Fabric 1.21.1", "Shader, áudio, roteiro e vozes", w.penumbra.rating]}
          >
            <p className="label-pitch">{w.penumbra.pitch}</p>
            <p>{w.penumbra.body}</p>
            <ul>
              {w.penumbra.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <Get href={links.penumbra} label={w.penumbra.cta} />
          </Label>
        </div>

        {/* Pedra Shaders: parede de salão */}
        <div className="work work--salon" data-reveal>
          <Label no="02" title={w.shaders.name} meta={["Shaderpack · GLSL", "Série de oito paisagens, perfil Alto"]}>
            <p className="label-pitch">{w.shaders.pitch}</p>
            <p>{w.shaders.body}</p>
            <Get href={links.pedraShaders} label={w.shaders.cta} />
          </Label>
          <div className="salon">
            {w.shaders.shots.slice(1, 8).map((s, i) => (
              <figure key={s.src} className={`salon-${i}`}>
                <Frame src={s.src} alt={s.caption} sizes="(max-width: 900px) 45vw, 25vw" />
                <figcaption>
                  {i + 2}. <em>{s.caption}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Pedra Aventura: díptico */}
        <div className="work work--diptych" data-reveal>
          <div className="diptych">
            {w.aventura.shots.slice(0, 2).map((s) => (
              <figure key={s.src}>
                <Frame src={s.src} alt={s.caption} w={1600} h={900} sizes="(max-width: 900px) 90vw, 32vw" />
                <figcaption>
                  <em>{s.caption}</em>
                </figcaption>
              </figure>
            ))}
          </div>
          <Label
            no="03"
            title={w.aventura.name}
            meta={["Modpack · 203 itens", "Curadoria e configuração de mais de 200 mods"]}
          >
            <p className="label-pitch">{w.aventura.pitch}</p>
            <p>{w.aventura.body}</p>
            <Get href={links.pedraAventura} label={w.aventura.cta} />
          </Label>
        </div>

        {/* Pedra Boost: estudo */}
        <div className="work work--study" data-reveal>
          <div className="study">
            <span>estudo em andamento</span>
            <svg viewBox="0 0 400 120" aria-hidden="true">
              <path d="M10 100 C 80 96, 120 70, 170 64 S 260 40, 300 30 S 370 14, 390 12" />
              <path d="M10 100 L390 100 M10 100 L10 10" className="axis" />
            </svg>
          </div>
          <Label no="04" title={w.boost.name} meta={[w.boost.tag, "Otimização · Java"]}>
            <p>{w.boost.body}</p>
          </Label>
        </div>

        <p className="room-note" data-reveal>
          {w.rule}
        </p>
      </Room>

      <Room no="II" title="Código" id="codigo">
        <p className="room-intro" data-reveal>
          {t.code.intro}
        </p>
        <ol className="catalog">
          {t.code.cases.map((c, i) => (
            <li key={c.name} data-reveal>
              <span className="cat-no">Cat. {String(i + 5).padStart(2, "0")}</span>
              <h3>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    <em>{c.name}</em> ↗
                  </a>
                ) : (
                  <em>{c.name}</em>
                )}
              </h3>
              <p className="cat-meta">
                {c.kind} · {c.stack} · {c.status}
              </p>
              <p>{c.summary}</p>
            </li>
          ))}
        </ol>
        <blockquote className="statement" data-reveal>
          <p>{t.code.how[0]}</p>
          <footer>{t.code.how[1]}</footer>
        </blockquote>
      </Room>

      <Room no="III" title="Música" id="musica">
        <div className="score" data-reveal>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="score-lines">
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="0" x2="100" y1={80 - i * 15} y2={80 - i * 15} />
            ))}
          </svg>
          <span className="clef" aria-hidden="true">
            𝄞
          </span>
          {MELODY.map(([x, step], i) => (
            <span
              key={i}
              className={`sn ${step >= 4 ? "sn--down" : ""}`}
              style={{ left: `${x}%`, top: `${staffY(step)}%`, animationDelay: `${i * 0.12}s` }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="music-text" data-reveal>
          <h3>
            <em>{t.offscreen.hobbies[0].title}</em>
          </h3>
          <p>{t.offscreen.hobbies[0].text}</p>
        </div>
      </Room>

      <Room no="IV" title="Mãos" id="maos">
        <p className="room-intro" data-reveal>
          {t.offscreen.intro}
        </p>
        <div className="plinths">
          {t.offscreen.hobbies.slice(1).map((h, i) => (
            <figure className="plinth" key={h.title} data-reveal>
              <div className={`object object--${i}`} aria-hidden="true">
                {i === 1 && Array.from({ length: 9 }, (_, k) => <i key={k} />)}
              </div>
              <div className="plinth-base" aria-hidden="true" />
              <figcaption>
                <em>{h.title}</em>
                <span>{h.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Room>

      <section className="exit" id="saida" data-reveal>
        <p className="gal-kicker">Livro de visitas</p>
        <h2>
          {t.contact.title.split(" ")[0]} <em>{t.contact.title.split(" ").slice(1).join(" ")}</em>
        </h2>
        <p>{t.contact.body}</p>
        <a href={`mailto:${links.email}`} className="exit-mail">
          {links.email}
        </a>
        <p className="exit-small">{t.contact.company}</p>
      </section>

      <footer className="gal-foot">
        <span>© 2026 Miguel Paula</span>
        <em>{t.footer.faith}</em>
      </footer>

      <Reveal />
      <Switcher current="/layouts/artes" />
    </div>
  );
}
