import Image from "next/image";
import { Abril_Fatface, Libre_Franklin, Source_Serif_4 } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./editorial.css";

const mast = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--font-ed-mast", display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-ed-serif", display: "swap" });
const sans = Libre_Franklin({ subsets: ["latin"], variable: "--font-ed-sans", display: "swap" });

const t = dict.pt;
const w = t.worlds;

function Fig({ src, alt, credit, w: width, h, dark, className = "" }: { src: string; alt: string; credit: string; w: number; h: number; dark?: boolean; className?: string }) {
  return (
    <figure className={`ed-fig ${dark ? "ed-fig--dark" : ""} ${className}`}>
      <Image src={src} alt={alt} width={width} height={h} sizes="(max-width: 900px) 100vw, 50vw" />
      <figcaption>
        {alt}. <span>{credit}</span>
      </figcaption>
    </figure>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="ed-get" href={href} target="_blank" rel="noreferrer">
      {label} →
    </a>
  ) : (
    <span className="ed-get ed-get--off">{w.soon}</span>
  );
}

export function Editorial() {
  const interview = [
    { q: "Como você trabalha?", a: t.code.how[0] },
    { q: "E a organização dos projetos?", a: t.code.how[1] },
    { q: "Qual a regra dos seus mods?", a: w.rule },
    { q: "E fora da tela?", a: t.offscreen.intro },
  ];

  return (
    <div className={`ed ${mast.variable} ${serif.variable} ${sans.variable}`}>
      {/* ---------- capa ---------- */}
      <header className="ed-cover">
        <div className="ed-issue">
          <span>Edição 01</span>
          <span>Outubro de 2026</span>
          <span>Portfólio</span>
        </div>
        <h1 className="ed-mast">Multitarefa</h1>
        <div className="ed-cover-grid">
          <figure className="ed-cover-img">
            <Image src={w.shaders.shots[0].src} alt={w.shaders.shots[0].caption} width={1920} height={1080} priority sizes="(max-width: 900px) 100vw, 66vw" />
          </figure>
          <div className="ed-cover-head">
            <p className="ed-kicker">Perfil</p>
            <h2>
              {t.hero.lead}, 14 anos: apps, mods e piano
            </h2>
            <p>{t.hero.sub}</p>
          </div>
          <ul className="ed-lines">
            <li>
              <b>{w.penumbra.name}</b> {w.penumbra.pitch}
            </li>
            <li>
              <b>{w.penumbra.stats[1].value}</b> {w.penumbra.stats[1].label}
            </li>
            <li>
              <b>{w.shaders.name}</b> {w.shaders.pitch}
            </li>
            <li>
              <b>Entrevista</b> {t.code.howTitle.toLowerCase()}
            </li>
          </ul>
        </div>
        <div className="ed-barcode" aria-hidden="true">
          <span />
          <small>0 14 2026 01</small>
        </div>
      </header>

      {/* ---------- sumário ---------- */}
      <nav className="ed-toc" aria-label="Nesta edição">
        <p className="ed-kicker">Nesta edição</p>
        <ol>
          <li>
            <a href="#ed-materia">
              <span>04</span> Muitas pistas ao mesmo tempo
            </a>
          </li>
          <li>
            <a href="#ed-trabalhos">
              <span>12</span> Portfólio de trabalhos
            </a>
          </li>
          <li>
            <a href="#ed-entrevista">
              <span>16</span> Entrevista
            </a>
          </li>
          <li>
            <a href="#ed-contato">
              <span>20</span> {t.contact.title}
            </a>
          </li>
        </ol>
      </nav>

      {/* ---------- matéria ---------- */}
      <article className="ed-article" id="ed-materia">
        <header className="ed-article-head" data-reveal>
          <p className="ed-kicker">{w.title} · Mods de Minecraft</p>
          <h2>Muitas pistas ao mesmo tempo</h2>
          <p className="ed-deck">{w.intro}</p>
          <p className="ed-byline">Texto e capturas de tela: {t.hero.lead}</p>
        </header>

        <div className="ed-body">
          <div className="ed-cols" data-reveal>
            <h3 className="ed-sub">{w.penumbra.name}</h3>
            <p className="ed-drop">{w.penumbra.body}</p>
            <ul className="ed-bullets">
              {w.penumbra.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="ed-small">
              {w.penumbra.tag}. {w.penumbra.rating}. <Get href={links.penumbra} label={w.penumbra.cta} />
            </p>
            <blockquote className="ed-pull">“{w.penumbra.pitch}”</blockquote>
            <h3 className="ed-sub">{w.shaders.name}</h3>
            <p>{w.shaders.body}</p>
            <p className="ed-small">
              {w.shaders.tag}. <Get href={links.pedraShaders} label={w.shaders.cta} />
            </p>
            <h3 className="ed-sub">{w.aventura.name}</h3>
            <p>{w.aventura.body}</p>
            <p className="ed-small">
              {w.aventura.tag}. <Get href={links.pedraAventura} label={w.aventura.cta} />
            </p>
            <h3 className="ed-sub">{w.boost.name}</h3>
            <p>{w.boost.body}</p>
            <p className="ed-small">{w.boost.tag}.</p>
          </div>

          <aside className="ed-side" data-reveal>
            <div className="ed-box">
              <p className="ed-kicker">Ficha</p>
              <dl>
                {[...w.penumbra.stats, ...w.shaders.stats.slice(0, 1), ...w.aventura.stats].map((s) => (
                  <div key={s.label}>
                    <dt>{s.value}</dt>
                    <dd>{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Fig src={w.penumbra.shots[0].src} alt={w.penumbra.shots[0].caption} credit={`Captura: ${w.penumbra.name}`} w={1708} h={960} dark />
          </aside>
        </div>

        <div className="ed-spread" data-reveal>
          <Fig className="ed-spread-big" src={w.shaders.shots[1].src} alt={w.shaders.shots[1].caption} credit={`Captura: ${w.shaders.name}, perfil Alto`} w={1920} h={1080} />
          <Fig src={w.shaders.shots[5].src} alt={w.shaders.shots[5].caption} credit={`Captura: ${w.shaders.name}`} w={1920} h={1080} />
          <Fig src={w.aventura.shots[0].src} alt={w.aventura.shots[0].caption} credit={`Captura: ${w.aventura.name}`} w={1600} h={900} />
        </div>
      </article>

      {/* ---------- trabalhos ---------- */}
      <section className="ed-section" id="ed-trabalhos">
        <header className="ed-section-head" data-reveal>
          <p className="ed-kicker">{t.code.title}</p>
          <h2>Portfólio de trabalhos</h2>
          <p className="ed-deck">{t.code.intro}</p>
        </header>
        <ol className="ed-works">
          {t.code.cases.map((c, i) => (
            <li key={c.name} data-reveal>
              <span className="ed-work-no">{String(i + 1).padStart(2, "0")}</span>
              <h3>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.name}
                  </a>
                ) : (
                  c.name
                )}
              </h3>
              <p className="ed-small">
                {c.kind} · {c.stack} · <strong>{c.status}</strong>
              </p>
              <p>{c.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- entrevista ---------- */}
      <section className="ed-section ed-interview" id="ed-entrevista">
        <header className="ed-section-head" data-reveal>
          <p className="ed-kicker">Entrevista</p>
          <h2>“Eu decido o que construir e por quê”</h2>
        </header>
        <div className="ed-qa" data-reveal>
          {interview.map((it) => (
            <div key={it.q}>
              <p className="ed-q">{it.q}</p>
              <p className="ed-a">{it.a}</p>
            </div>
          ))}
          <ul className="ed-hobbies">
            {t.offscreen.hobbies.map((h) => (
              <li key={h.title}>
                <b>{h.title}.</b> {h.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- contracapa ---------- */}
      <section className="ed-back" id="ed-contato" data-reveal>
        <p className="ed-kicker">Classificados</p>
        <h2>{t.contact.title}</h2>
        <p className="ed-deck">{t.contact.body}</p>
        <a className="ed-mail" href={`mailto:${links.email}`}>
          {links.email}
        </a>
        <p className="ed-small">{t.contact.company}</p>
        <footer className="ed-colophon">
          <span>Multitarefa · Edição 01 · © 2026 {t.hero.lead}</span>
          <em>{t.footer.faith}</em>
        </footer>
      </section>

      <Reveal />
      <Switcher current="/layouts/editorial" />
    </div>
  );
}
