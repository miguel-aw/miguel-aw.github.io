import Image from "next/image";
import { Bricolage_Grotesque, Silkscreen } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./maximalismo.css";

const brico = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-brico",
  display: "swap",
});
const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel", display: "swap" });

const t = dict.pt;
const w = t.worlds;

function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = items.map((it) => `${it} ✦ `).join("");
  return (
    <div className={`mq ${className}`} aria-hidden="true">
      <div className="mq-track">
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}

function Wobble({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`wob ${className ?? ""}`} aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} aria-hidden="true" style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

function Big({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="bigstats">
      {stats.map((s, i) => (
        <div key={s.label} className={`bigstat bigstat--${i}`}>
          <strong>{s.value}</strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="mx-btn" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  ) : (
    <span className="mx-btn mx-btn--off">{w.soon}</span>
  );
}

export function Maximalismo() {
  const tags = ["CÓDIGO", "MODS", "PIANO", "IMPRESSÃO 3D", "CUBO MÁGICO", "KUNG-FU", "14 ANOS", "AW-SOLUTIONS"];
  return (
    <div className={`mx ${brico.variable} ${pixel.variable}`}>
      <Marquee items={tags} className="mq--top" />

      <header className="mx-hero">
        <p className="mx-pixel mx-kicker">▶ portfólio.exe · 2026</p>
        <h1 className="mx-name">
          <Wobble text="MIGUEL" className="mx-name-1" />
          <Wobble text="PAULA" className="mx-name-2" />
        </h1>
        <div className="mx-sub">
          <p>{t.hero.sub}</p>
          <a className="mx-btn mx-btn--big" href="#mundos">
            {t.hero.cta} ↓
          </a>
        </div>

        <span className="sticker sticker--age">
          <b>14</b>
          <i>anos!</i>
        </span>
        <span className="sticker sticker--orig">100% original</span>
        <span className="sticker sticker--claude">feito com o Claude 🤝</span>
        <span className="sticker sticker--piano" aria-hidden="true">
          🎹
        </span>
        <span className="sticker sticker--block" aria-hidden="true" />
      </header>

      <Marquee items={["MUNDOS", "MODS DE MINECRAFT", "PUBLICADOS", "FABRIC 1.21.1"]} className="mq--tilt" />

      <main id="mundos">
        {/* Penumbra */}
        <section className="mx-sec mx-sec--penumbra">
          <div className="mx-penumbra-grid">
            <div className="collage" data-reveal>
              {w.penumbra.shots.map((s, i) => (
                <figure key={s.src} className={`polaroid polaroid--dark p${i}`}>
                  <Image src={s.src} alt={s.caption} width={1708} height={960} sizes="(max-width: 900px) 80vw, 34vw" />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div data-reveal>
              <p className="mx-pixel mx-tag mx-tag--red">● REC · {w.penumbra.tag}</p>
              <h2 className="mx-h2 glitchy" data-text={w.penumbra.name.toUpperCase()}>
                {w.penumbra.name.toUpperCase()}
              </h2>
              <p className="mx-pitch">{w.penumbra.pitch}</p>
              <p>{w.penumbra.body}</p>
              <ul className="mx-list">
                {w.penumbra.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Big stats={w.penumbra.stats} />
              <div className="mx-row">
                <Get href={links.penumbra} label={w.penumbra.cta} />
                <span className="mx-pixel mx-warn">⚠ {w.penumbra.rating}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pedra Shaders */}
        <section className="mx-sec mx-sec--shaders">
          <div className="mx-head" data-reveal>
            <p className="mx-pixel mx-tag">☀ {w.shaders.tag}</p>
            <h2 className="mx-h2">
              PEDRA
              <br />
              <span className="outline">SHADERS</span>
            </h2>
            <p className="mx-pitch">{w.shaders.pitch}</p>
          </div>
          <div className="scatter">
            {w.shaders.shots.map((s, i) => (
              <figure key={s.src} className={`polaroid s${i}`} data-reveal>
                <Image src={s.src} alt={s.caption} width={1920} height={1080} sizes="(max-width: 900px) 45vw, 24vw" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mx-card mx-card--wide" data-reveal>
            <p>{w.shaders.body}</p>
            <Big stats={w.shaders.stats} />
            <Get href={links.pedraShaders} label={w.shaders.cta} />
          </div>
        </section>

        {/* Pedra Aventura */}
        <section className="mx-sec mx-sec--aventura">
          <div className="mx-aventura-grid">
            <div data-reveal>
              <p className="mx-pixel mx-tag">⚔ {w.aventura.tag}</p>
              <h2 className="mx-h2">
                PEDRA
                <br />
                AVENTURA
              </h2>
              <p className="mx-pitch">{w.aventura.pitch}</p>
              <p>{w.aventura.body}</p>
              <Big stats={w.aventura.stats} />
              <Get href={links.pedraAventura} label={w.aventura.cta} />
            </div>
            <div className="stack" data-reveal>
              {w.aventura.shots.map((s, i) => (
                <figure key={s.src} className={`polaroid a${i}`}>
                  <Image src={s.src} alt={s.caption} width={1600} height={900} sizes="(max-width: 900px) 80vw, 40vw" />
                  <figcaption>{s.caption}</figcaption>
                </figure>
              ))}
              <span className="sticker sticker--noterror">sem terror!</span>
            </div>
          </div>
        </section>

        {/* Pedra Boost */}
        <section className="mx-sec mx-sec--boost" data-reveal>
          <div className="tape-border">
            <p className="mx-pixel mx-tag">🚧 {w.boost.tag}</p>
            <h2 className="mx-h2 mx-h2--sm">PEDRA BOOST</h2>
            <p>{w.boost.body}</p>
            <div className="fps" aria-hidden="true">
              <span className="mx-pixel">FPS</span>
              <i />
            </div>
          </div>
          <p className="mx-pixel mx-rule">{w.rule}</p>
        </section>

        <Marquee items={["CÓDIGO", "APPS", "SITES", "FLUTTER", "JAVASCRIPT", "FIREBASE"]} className="mq--blue" />

        {/* Clientes */}
        <section className="mx-sec mx-sec--code" id="codigo">
          <div className="mx-head" data-reveal>
            <h2 className="mx-h2">CÓDIGO</h2>
            <p className="mx-pitch">{t.code.intro}</p>
          </div>
          <div className="cards">
            {t.code.cases.map((c, i) => (
              <article key={c.name} className={`mx-card case-card c${i}`} data-reveal>
                <span className={`mx-pixel badge ${c.href ? "badge--live" : ""}`}>{c.status}</span>
                <h3>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.name} ↗
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="mx-pixel case-kind">{c.kind}</p>
                <p>{c.summary}</p>
                <p className="case-stack">{c.stack}</p>
              </article>
            ))}
          </div>
          <div className="mx-card mx-card--how" data-reveal>
            <h3>{t.code.howTitle} 🤖➕🧠</h3>
            {t.code.how.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </div>
        </section>

        {/* Fora da tela */}
        <section className="mx-sec mx-sec--off" id="fora">
          <div className="mx-head" data-reveal>
            <h2 className="mx-h2">
              FORA DA <span className="outline">TELA</span>
            </h2>
            <p className="mx-pitch">{t.offscreen.intro}</p>
          </div>
          <div className="badges">
            {t.offscreen.hobbies.map((h, i) => (
              <div key={h.title} className={`hob hob--${i}`} data-reveal>
                <span className="hob-emoji" aria-hidden="true">
                  {["🎹", "🖨️", "🧩", "🥋"][i]}
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section className="mx-sec mx-sec--contact" id="contato" data-reveal>
          <h2 className="mx-contact-title">
            <span>VAMOS</span>
            <span className="outline">CONVERSAR</span>
          </h2>
          <p>{t.contact.body}</p>
          <a className="mx-mail" href={`mailto:${links.email}`}>
            ✉ {links.email}
          </a>
          <p className="mx-pixel mx-small">{t.contact.company}</p>
        </section>
      </main>

      <Marquee items={[t.footer.faith.toUpperCase(), "© 2026 MIGUEL PAULA", t.footer.made.toUpperCase()]} className="mq--foot" />

      <Reveal />
      <Switcher current="/layouts/maximalismo" />
    </div>
  );
}
