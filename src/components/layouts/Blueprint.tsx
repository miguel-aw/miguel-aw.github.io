import Image from "next/image";
import { Architects_Daughter, IBM_Plex_Sans_Condensed } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./blueprint.css";

const hand = Architects_Daughter({ subsets: ["latin"], weight: "400", variable: "--font-bp-hand", display: "swap" });
const plex = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-bp-tech", display: "swap" });

const t = dict.pt;
const w = t.worlds;

// Linha de cota: setas nas pontas e a medida no meio.
function Dim({ label, vertical }: { label: string; vertical?: boolean }) {
  return (
    <span className={`bp-dim ${vertical ? "bp-dim--v" : ""}`} aria-hidden="true">
      <span>{label}</span>
    </span>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return href ? (
    <a className="bp-get" href={href} target="_blank" rel="noreferrer">
      {label} ↗
    </a>
  ) : (
    <span className="bp-get bp-get--off">{w.soon}</span>
  );
}

const PARTS = [
  {
    no: "01",
    name: w.penumbra.name,
    tag: w.penumbra.tag,
    pitch: w.penumbra.pitch,
    body: w.penumbra.body,
    notes: w.penumbra.bullets,
    stats: w.penumbra.stats,
    img: w.penumbra.shots[0],
    dims: ["1708 px", "960 px"],
    href: links.penumbra,
    cta: w.penumbra.cta,
    dark: true,
  },
  {
    no: "02",
    name: w.aventura.name,
    tag: w.aventura.tag,
    pitch: w.aventura.pitch,
    body: w.aventura.body,
    notes: [] as string[],
    stats: w.aventura.stats,
    img: w.aventura.shots[0],
    dims: ["1600 px", "900 px"],
    href: links.pedraAventura,
    cta: w.aventura.cta,
    dark: false,
  },
];

export function Blueprint() {
  return (
    <div className={`bp ${hand.variable} ${plex.variable}`}>
      <div className="bp-sheet">
        {/* ---------- folha de rosto ---------- */}
        <header className="bp-hero">
          <p className="bp-label">Desenho nº MP-001 · Folha de rosto</p>
          <div className="bp-name-wrap">
            <Dim label="14 anos" />
            <h1 className="bp-name">Miguel Paula</h1>
            <span className="bp-note bp-note--name" aria-hidden="true">
              ← programa, modela e toca piano
            </span>
          </div>
          <p className="bp-lead">{t.hero.sub}</p>

          <ul className="bp-lanes">
            {t.hero.lanes.map((l, i) => (
              <li key={l.id}>
                <span className="bp-balloon">{i + 1}</span>
                <b>{l.label}</b>
                <span>{l.note}</span>
              </li>
            ))}
          </ul>

          <table className="bp-cartouche">
            <tbody>
              <tr>
                <th>Título</th>
                <td colSpan={3}>Portfólio · {t.hero.lead}</td>
              </tr>
              <tr>
                <th>Escala</th>
                <td>1:1</td>
                <th>Revisão</th>
                <td>out. 2026</td>
              </tr>
              <tr>
                <th>Desenho</th>
                <td>M. Paula</td>
                <th>Folha</th>
                <td>1 / 1</td>
              </tr>
            </tbody>
          </table>
        </header>

        {/* ---------- peças ---------- */}
        <section className="bp-sec" id="bp-pecas">
          <h2 className="bp-h2" data-reveal>
            <span>A</span> {w.title}
          </h2>
          <p className="bp-intro" data-reveal>
            {w.intro}
          </p>

          {PARTS.map((p) => (
            <article key={p.no} className="bp-part" data-reveal>
              <div className="bp-drawing">
                <Dim label={p.dims[0]} />
                <div className="bp-drawing-row">
                  <figure className={`bp-img ${p.dark ? "bp-img--dark" : ""}`}>
                    <Image src={p.img.src} alt={p.img.caption} width={1708} height={960} sizes="(max-width: 900px) 90vw, 50vw" />
                    <span className="bp-callout bp-callout--1">1</span>
                    <span className="bp-callout bp-callout--2">2</span>
                  </figure>
                  <Dim label={p.dims[1]} vertical />
                </div>
                <p className="bp-caption">
                  Vista frontal · {p.img.caption}
                </p>
              </div>
              <div className="bp-spec">
                <p className="bp-label">
                  Peça {p.no} · {p.tag}
                </p>
                <h3>{p.name}</h3>
                <p className="bp-hand">{p.pitch}</p>
                <p>{p.body}</p>
                {p.notes.length > 0 && (
                  <ol className="bp-notes">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ol>
                )}
                <table className="bp-table">
                  <caption>Ficha técnica</caption>
                  <tbody>
                    {p.stats.map((s) => (
                      <tr key={s.label}>
                        <th>{s.label}</th>
                        <td>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Get href={p.href} label={p.cta} />
              </div>
            </article>
          ))}

          {/* Pedra Shaders: vistas */}
          <article className="bp-views" data-reveal>
            <div className="bp-views-head">
              <p className="bp-label">Peça 03 · {w.shaders.tag}</p>
              <h3>{w.shaders.name}</h3>
              <p className="bp-hand">{w.shaders.pitch}</p>
              <p>{w.shaders.body}</p>
              <p className="bp-mini">{w.shaders.stats.map((s) => `${s.value} ${s.label}`).join(" · ")}</p>
              <Get href={links.pedraShaders} label={w.shaders.cta} />
            </div>
            <ul className="bp-view-grid">
              {w.shaders.shots.slice(0, 6).map((s, i) => (
                <li key={s.src}>
                  <figure className="bp-img">
                    <Image src={s.src} alt={s.caption} width={1920} height={1080} sizes="(max-width: 900px) 45vw, 20vw" />
                  </figure>
                  <span className="bp-caption">
                    Vista {String.fromCharCode(65 + i)} · {s.caption}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bp-wip" data-reveal>
            <p className="bp-label">Peça 04 · {w.boost.tag}</p>
            <h3>{w.boost.name}</h3>
            <p>{w.boost.body}</p>
            <span className="bp-stamp bp-stamp--wip">Em projeto</span>
          </article>
          <p className="bp-hand bp-rule" data-reveal>
            obs.: {w.rule}
          </p>
        </section>

        {/* ---------- lista de materiais ---------- */}
        <section className="bp-sec" id="bp-clientes">
          <h2 className="bp-h2" data-reveal>
            <span>B</span> {t.code.title}
          </h2>
          <p className="bp-intro" data-reveal>
            {t.code.intro}
          </p>
          <div className="bp-bom-wrap" data-reveal>
            <table className="bp-bom">
              <caption>Lista de projetos</caption>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Projeto</th>
                  <th>Descrição</th>
                  <th>Material</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {t.code.cases.map((c, i) => (
                  <tr key={c.name}>
                    <td>{String(i + 1).padStart(2, "0")}</td>
                    <td>
                      <b>
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noreferrer">
                            {c.name} ↗
                          </a>
                        ) : (
                          c.name
                        )}
                      </b>
                      <small>{c.kind}</small>
                    </td>
                    <td>{c.summary}</td>
                    <td>{c.stack}</td>
                    <td className={c.href ? "bp-live" : ""}>{c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bp-how" data-reveal>
            <p className="bp-label">{t.code.howTitle}</p>
            {t.code.how.map((h) => (
              <p key={h}>{h}</p>
            ))}
          </div>
        </section>

        {/* ---------- detalhes ---------- */}
        <section className="bp-sec" id="bp-detalhes">
          <h2 className="bp-h2" data-reveal>
            <span>C</span> {t.offscreen.title}
          </h2>
          <p className="bp-intro" data-reveal>
            {t.offscreen.intro}
          </p>
          <ul className="bp-details">
            {t.offscreen.hobbies.map((h, i) => (
              <li key={h.title} data-reveal>
                <span className="bp-det">
                  DET.
                  <b>{String.fromCharCode(65 + i)}</b>
                </span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- aprovação ---------- */}
        <section className="bp-sec bp-contact" id="bp-contato" data-reveal>
          <h2 className="bp-h2">
            <span>D</span> {t.contact.title}
          </h2>
          <p className="bp-intro">{t.contact.body}</p>
          <a className="bp-mail" href={`mailto:${links.email}`}>
            {links.email}
          </a>
          <p className="bp-mini">{t.contact.company}</p>
          <span className="bp-stamp">Aprovado</span>
          <p className="bp-hand bp-faith">{t.footer.faith}</p>
        </section>
      </div>

      <Reveal />
      <Switcher current="/layouts/blueprint" />
    </div>
  );
}
