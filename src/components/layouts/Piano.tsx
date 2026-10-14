import Image from "next/image";
import type { ReactNode } from "react";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import { dict, links } from "@/content/site";
import { PianoKeys } from "./PianoKeys";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./piano.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-pn-display",
  display: "swap",
});
const body = EB_Garamond({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-pn-body", display: "swap" });

const t = dict.pt;
const w = t.worlds;

function Movement({
  roman,
  title,
  tempo,
  dyn,
  bar,
  note,
  id,
  children,
}: {
  roman: string;
  title: string;
  tempo: string;
  dyn: string;
  bar: number;
  note: number;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section className="pn-mov" id={id} data-pn-note={note}>
      <header className="pn-mov-head" data-reveal>
        <span className="pn-bar">compasso {bar}</span>
        <p className="pn-tempo">
          <em>{tempo}</em>
        </p>
        <h2>
          <span className="pn-roman">{roman}.</span> {title}
        </h2>
        <span className="pn-dyn" aria-hidden="true">
          {dyn}
        </span>
      </header>
      {children}
    </section>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="pn-link" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  ) : (
    <span className="pn-link pn-link--off">{w.soon}</span>
  );
}

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="pn-stats">
      {items.map((s) => (
        <div key={s.label}>
          <dt>{s.value}</dt>
          <dd>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Piano() {
  return (
    <div className={`pn-root ${display.variable} ${body.variable}`}>
      <header className="pn-title" data-pn-note={0}>
        <p className="pn-dedication">Para quem gosta de fazer várias coisas ao mesmo tempo</p>
        <h1>Miguel Paula</h1>
        <p className="pn-opus">Op. 14 · para código, mundos e piano</p>
        <div className="pn-staff-hero" aria-hidden="true">
          <span className="pn-clef">𝄞</span>
        </div>
        <p className="pn-lead">{t.hero.sub}</p>
        <ol className="pn-program">
          <li>
            <a href="#pn-mundos">I. Mundos</a>
          </li>
          <li>
            <a href="#pn-codigo">II. Código</a>
          </li>
          <li>
            <a href="#pn-fora">III. Fora da tela</a>
          </li>
          <li>
            <a href="#pn-fine">Fine</a>
          </li>
        </ol>
        <p className="pn-hint">
          Toque nas teclas lá embaixo, ou use A S D F G H J K no teclado do computador.
        </p>
      </header>

      <Movement roman="I" title="Mundos" tempo={`${w.intro}`} dyn="mf" bar={1} note={4} id="pn-mundos">
        <div className="pn-piece pn-piece--dark" data-reveal data-pn-note={2}>
          <figure>
            <Image src={w.penumbra.shots[0].src} alt={w.penumbra.shots[0].caption} width={1708} height={960} sizes="(max-width: 900px) 100vw, 55vw" />
            <figcaption>{w.penumbra.shots[0].caption}</figcaption>
          </figure>
          <div>
            <p className="pn-marking">Lento e sombrio · pp</p>
            <h3>{w.penumbra.name}</h3>
            <p className="pn-pitch">{w.penumbra.pitch}</p>
            <p>{w.penumbra.body}</p>
            <Stats items={w.penumbra.stats} />
            <Get href={links.penumbra} label={w.penumbra.cta} />
            <p className="pn-small">{w.penumbra.rating}</p>
          </div>
        </div>

        <div className="pn-piece" data-reveal data-pn-note={11}>
          <div>
            <p className="pn-marking">Cantabile, luminoso · mf</p>
            <h3>{w.shaders.name}</h3>
            <p className="pn-pitch">{w.shaders.pitch}</p>
            <p>{w.shaders.body}</p>
            <Stats items={w.shaders.stats} />
            <Get href={links.pedraShaders} label={w.shaders.cta} />
          </div>
          <div className="pn-chords">
            {w.shaders.shots.slice(0, 6).map((s, i) => (
              <figure key={s.src} style={{ "--i": i } as React.CSSProperties}>
                <Image src={s.src} alt={s.caption} width={1920} height={1080} sizes="(max-width: 900px) 45vw, 18vw" />
              </figure>
            ))}
          </div>
        </div>

        <div className="pn-piece" data-reveal data-pn-note={16}>
          <figure>
            <Image src={w.aventura.shots[0].src} alt={w.aventura.shots[0].caption} width={1600} height={900} sizes="(max-width: 900px) 100vw, 55vw" />
            <figcaption>{w.aventura.shots[0].caption}</figcaption>
          </figure>
          <div>
            <p className="pn-marking">Allegro con brio · f</p>
            <h3>{w.aventura.name}</h3>
            <p className="pn-pitch">{w.aventura.pitch}</p>
            <p>{w.aventura.body}</p>
            <Stats items={w.aventura.stats} />
            <Get href={links.pedraAventura} label={w.aventura.cta} />
          </div>
        </div>

        <div className="pn-piece pn-piece--sketch" data-reveal data-pn-note={19}>
          <div>
            <p className="pn-marking">Accelerando · {w.boost.tag.toLowerCase()}</p>
            <h3>{w.boost.name}</h3>
            <p>{w.boost.body}</p>
          </div>
        </div>
        <p className="pn-footnote" data-reveal>
          * {w.rule}
        </p>
      </Movement>

      <Movement roman="II" title="Código" tempo={t.code.intro} dyn="f" bar={24} note={7} id="pn-codigo">
        <ol className="pn-measures">
          {t.code.cases.map((c, i) => (
            <li key={c.name} data-reveal>
              <span className="pn-measure-no">{24 + i * 4}</span>
              <h3>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer">
                    {c.name} ↗
                  </a>
                ) : (
                  c.name
                )}
              </h3>
              <p className="pn-small">
                {c.kind} · {c.stack} · {c.status}
              </p>
              <p>{c.summary}</p>
            </li>
          ))}
        </ol>
        <blockquote className="pn-quote" data-reveal>
          <p>{t.code.how[0]}</p>
          <footer>{t.code.how[1]}</footer>
        </blockquote>
      </Movement>

      <Movement roman="III" title="Fora da tela" tempo={t.offscreen.intro} dyn="p" bar={48} note={9} id="pn-fora">
        <ul className="pn-hobbies">
          {t.offscreen.hobbies.map((h, i) => (
            <li key={h.title} data-reveal className={i === 0 ? "is-solo" : ""}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
              {i === 0 && <span className="pn-solo">solo</span>}
            </li>
          ))}
        </ul>
      </Movement>

      <section className="pn-fine" id="pn-fine" data-pn-note={14} data-reveal>
        <p className="pn-marking">Fine</p>
        <h2>{t.contact.title}</h2>
        <p className="pn-lead">{t.contact.body}</p>
        <a className="pn-mail" href={`mailto:${links.email}`}>
          {links.email}
        </a>
        <p className="pn-small">{t.contact.company}</p>
        <p className="pn-faith">
          <em>{t.footer.faith}</em>
        </p>
        <span className="pn-final" aria-hidden="true" />
      </section>

      <PianoKeys />
      <Reveal />
      <Switcher current="/layouts/piano" />
    </div>
  );
}
