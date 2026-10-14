import Image from "next/image";
import { IM_Fell_English, VT323 } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import { VhsTimecode } from "./VhsTimecode";
import "./vhs.css";

const vcr = VT323({ subsets: ["latin"], weight: "400", variable: "--font-vh-vcr", display: "swap" });
const fell = IM_Fell_English({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-vh-fell", display: "swap" });

const t = dict.pt;
const w = t.worlds;

function Subtitle({ children }: { children: string }) {
  return (
    <p className="vh-sub" data-reveal>
      <span>{children}</span>
    </p>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="vh-btn" href={href} target="_blank" rel="noreferrer">
      ▶ {label}
    </a>
  ) : (
    <span className="vh-btn vh-btn--off">■ {w.soon}</span>
  );
}

const TAPES = [
  { no: "02", name: w.shaders.name, tag: w.shaders.tag, pitch: w.shaders.pitch, body: w.shaders.body, stats: w.shaders.stats, img: w.shaders.shots[1].src, alt: w.shaders.shots[1].caption, href: links.pedraShaders, cta: w.shaders.cta, w: 1920, h: 1080 },
  { no: "03", name: w.aventura.name, tag: w.aventura.tag, pitch: w.aventura.pitch, body: w.aventura.body, stats: w.aventura.stats, img: w.aventura.shots[0].src, alt: w.aventura.shots[0].caption, href: links.pedraAventura, cta: w.aventura.cta, w: 1600, h: 900 },
];

export function Vhs() {
  return (
    <div className={`vh ${vcr.variable} ${fell.variable}`}>
      {/* abertura da fita: some sozinha, só CSS */}
      <div className="vh-intro" aria-hidden="true">
        <span>PLAY ▶</span>
        <small>TRACKING...</small>
      </div>

      {/* HUD da câmera */}
      <div className="vh-hud" aria-hidden="true">
        <span className="vh-rec">● REC</span>
        <VhsTimecode />
        <span className="vh-mode">SP ▶ PLAY</span>
        <span className="vh-date">OUT. 14 2026</span>
      </div>
      <div className="vh-scan" aria-hidden="true" />

      <header className="vh-hero">
        <p className="vh-kicker">FITA 00 · ACHADA NUMA TV DE TUBO</p>
        <h1 className="vh-title" data-text="Miguel Paula">
          Miguel Paula
        </h1>
        <p className="vh-lead">{t.hero.sub}</p>
        <a className="vh-btn" href="#vh-penumbra">
          ▶ {t.hero.cta}
        </a>
      </header>

      <Subtitle>[ estática ]</Subtitle>

      {/* Penumbra: a fita principal */}
      <section className="vh-sec" id="vh-penumbra">
        <p className="vh-label" data-reveal>
          <span>FITA 01</span> {w.penumbra.tag}
        </p>
        <div className="vh-feature">
          <figure className="vh-screen" data-reveal>
            <Image src={w.penumbra.shots[0].src} alt={w.penumbra.shots[0].caption} width={1708} height={960} sizes="(max-width: 900px) 100vw, 60vw" />
            <figcaption>{w.penumbra.shots[0].caption}</figcaption>
          </figure>
          <div data-reveal>
            <h2 className="vh-h2" data-text={w.penumbra.name}>
              {w.penumbra.name}
            </h2>
            <p className="vh-pitch">{w.penumbra.pitch}</p>
            <p>{w.penumbra.body}</p>
            <ul className="vh-list">
              {w.penumbra.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <dl className="vh-stats">
              {w.penumbra.stats.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
            <div className="vh-row">
              <Get href={links.penumbra} label={w.penumbra.cta} />
              <span className="vh-warn">⚠ {w.penumbra.rating}</span>
            </div>
          </div>
        </div>
        <div className="vh-frames">
          {w.penumbra.shots.slice(1).map((s) => (
            <figure key={s.src} className="vh-screen vh-screen--sm" data-reveal>
              <Image src={s.src} alt={s.caption} width={1708} height={960} sizes="(max-width: 900px) 50vw, 30vw" />
              <figcaption>{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Subtitle>[ passos atrás de você ]</Subtitle>

      {/* Outras fitas */}
      <section className="vh-sec">
        <div className="vh-tapes">
          {TAPES.map((tp) => (
            <article key={tp.name} className="vh-tape" data-reveal>
              <figure className="vh-screen vh-screen--sm vh-screen--color">
                <Image src={tp.img} alt={tp.alt} width={tp.w} height={tp.h} sizes="(max-width: 900px) 100vw, 45vw" />
              </figure>
              <div className="vh-cassette">
                <span className="vh-reel" aria-hidden="true" />
                <div className="vh-cassette-label">
                  <span>FITA {tp.no}</span>
                  <h3>{tp.name}</h3>
                  <em>{tp.tag}</em>
                </div>
                <span className="vh-reel" aria-hidden="true" />
              </div>
              <p className="vh-pitch">{tp.pitch}</p>
              <p>{tp.body}</p>
              <p className="vh-mini">{tp.stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</p>
              <Get href={tp.href} label={tp.cta} />
            </article>
          ))}
        </div>
        <article className="vh-tape vh-tape--blank" data-reveal>
          <p className="vh-label">
            <span>FITA 04</span> {w.boost.tag}
          </p>
          <h3>{w.boost.name}</h3>
          <p>{w.boost.body}</p>
          <p className="vh-noise" aria-hidden="true">
            SEM SINAL
          </p>
        </article>
        <p className="vh-rule" data-reveal>
          {w.rule}
        </p>
      </section>

      <Subtitle>[ rádio velho chiando ]</Subtitle>

      {/* Clientes: arquivo de fitas */}
      <section className="vh-sec">
        <p className="vh-label" data-reveal>
          <span>ARQUIVO</span> {t.code.title}
        </p>
        <p className="vh-lead" data-reveal>
          {t.code.intro}
        </p>
        <ol className="vh-index">
          {t.code.cases.map((c, i) => (
            <li key={c.name} data-reveal>
              <span className="vh-index-no">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.name} ↗
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="vh-mini">
                  {c.kind} · {c.stack}
                </p>
                <p>{c.summary}</p>
              </div>
              <span className={`vh-status ${c.href ? "is-live" : ""}`}>{c.href ? "● AO VIVO" : "■ GRAVADO"}</span>
            </li>
          ))}
        </ol>
        <blockquote className="vh-quote" data-reveal>
          <p>{t.code.how[0]}</p>
          <footer>{t.code.how[1]}</footer>
        </blockquote>
      </section>

      <Subtitle>[ alguém cantarolando ]</Subtitle>

      {/* Fora da tela: cenas extras */}
      <section className="vh-sec">
        <p className="vh-label" data-reveal>
          <span>CENAS EXTRAS</span> {t.offscreen.title}
        </p>
        <p className="vh-lead" data-reveal>
          {t.offscreen.intro}
        </p>
        <ul className="vh-extras">
          {t.offscreen.hobbies.map((h, i) => (
            <li key={h.title} data-reveal>
              <span className="vh-mini">CENA {i + 1}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Fim da fita */}
      <section className="vh-end" data-reveal>
        <p className="vh-kicker">FIM DA FITA</p>
        <h2 className="vh-h2" data-text={t.contact.title}>
          {t.contact.title}
        </h2>
        <p className="vh-lead">{t.contact.body}</p>
        <a className="vh-mail" href={`mailto:${links.email}`}>
          {links.email}
        </a>
        <p className="vh-mini">{t.contact.company}</p>
        <a className="vh-rewind" href="#">
          ⏪ Rebobinar
        </a>
        <p className="vh-faith">{t.footer.faith}</p>
      </section>

      <Reveal />
      <Switcher current="/layouts/vhs" />
    </div>
  );
}
