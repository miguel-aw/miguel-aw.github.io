import Image from "next/image";
import { Archivo_Black, Space_Mono } from "next/font/google";
import { dict, links } from "@/content/site";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./brutalista.css";

const black = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-br-black", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-br-mono", display: "swap" });

const t = dict.pt;
const w = t.worlds;

const MODS = [
  { name: w.penumbra.name, tag: w.penumbra.tag, pitch: w.penumbra.pitch, body: w.penumbra.body, stats: w.penumbra.stats, img: w.penumbra.shots[0], wd: 1708, ht: 960, dark: true, href: links.penumbra, cta: w.penumbra.cta },
  { name: w.shaders.name, tag: w.shaders.tag, pitch: w.shaders.pitch, body: w.shaders.body, stats: w.shaders.stats, img: w.shaders.shots[0], wd: 1920, ht: 1080, dark: false, href: links.pedraShaders, cta: w.shaders.cta },
  { name: w.aventura.name, tag: w.aventura.tag, pitch: w.aventura.pitch, body: w.aventura.body, stats: w.aventura.stats, img: w.aventura.shots[0], wd: 1600, ht: 900, dark: false, href: links.pedraAventura, cta: w.aventura.cta },
];

export function Brutalista() {
  return (
    <div className={`br ${black.variable} ${mono.variable}`}>
      <header className="br-top">
        <span>MIGUEL PAULA</span>
        <span>PORTFÓLIO</span>
        <span>2026</span>
        <a href="#br-contato">CONTATO</a>
      </header>

      <section className="br-hero">
        <h1 className="br-name">
          MIGUEL
          <br />
          PAULA
        </h1>
        <div className="br-hero-grid">
          <p className="br-big">{t.hero.sub}</p>
          <table className="br-lanes">
            <tbody>
              {t.hero.lanes.map((l, i) => (
                <tr key={l.id}>
                  <td>0{i + 1}</td>
                  <th>{l.label.toUpperCase()}</th>
                  <td>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="br-sec" id="br-mods">
        <div className="br-sec-head">
          <span className="br-num">01</span>
          <h2>{w.title.toUpperCase()}</h2>
          <p>{w.intro}</p>
        </div>
        {MODS.map((m, i) => (
          <article key={m.name} className="br-mod" data-reveal>
            <div className="br-mod-index">{String(i + 1).padStart(2, "0")}</div>
            <figure className={`br-img ${m.dark ? "br-img--dark" : ""}`}>
              <Image src={m.img.src} alt={m.img.caption} width={m.wd} height={m.ht} sizes="(max-width: 900px) 100vw, 50vw" />
            </figure>
            <div className="br-mod-text">
              <p className="br-mono">{m.tag}</p>
              <h3>{m.name.toUpperCase()}</h3>
              <p className="br-pitch">{m.pitch}</p>
              <p>{m.body}</p>
              <table className="br-stats">
                <tbody>
                  {m.stats.map((s) => (
                    <tr key={s.label}>
                      <td>{s.value}</td>
                      <td>{s.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {m.href ? (
                <a href={m.href} target="_blank" rel="noreferrer">
                  {m.cta}
                </a>
              ) : (
                <span className="br-mono">[{w.soon}]</span>
              )}
            </div>
          </article>
        ))}
        <article className="br-mod br-mod--text" data-reveal>
          <div className="br-mod-index">04</div>
          <div className="br-mod-text">
            <p className="br-mono">{w.boost.tag}</p>
            <h3>{w.boost.name.toUpperCase()}</h3>
            <p>{w.boost.body}</p>
          </div>
        </article>
        <p className="br-mono br-rule">{w.rule}</p>
      </section>

      <section className="br-sec" id="br-codigo">
        <div className="br-sec-head">
          <span className="br-num">02</span>
          <h2>{t.code.title.toUpperCase()}</h2>
          <p>{t.code.intro}</p>
        </div>
        <div className="br-table-wrap" data-reveal>
          <table className="br-cases">
            <thead>
              <tr>
                <th>#</th>
                <th>{t.code.columns.project}</th>
                <th>{t.code.columns.what}</th>
                <th>{t.code.columns.stack}</th>
                <th>{t.code.columns.status}</th>
              </tr>
            </thead>
            <tbody>
              {t.code.cases.map((c, i) => (
                <tr key={c.name}>
                  <td>{i + 1}</td>
                  <td>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer">
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                  </td>
                  <td>{c.summary}</td>
                  <td>{c.stack}</td>
                  <td className={c.href ? "br-live" : ""}>{c.status.toUpperCase()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="br-how" data-reveal>
          {t.code.how.map((h) => (
            <p key={h}>{h}</p>
          ))}
        </div>
      </section>

      <section className="br-sec" id="br-fora">
        <div className="br-sec-head">
          <span className="br-num">03</span>
          <h2>{t.offscreen.title.toUpperCase()}</h2>
          <p>{t.offscreen.intro}</p>
        </div>
        <ul className="br-hobbies">
          {t.offscreen.hobbies.map((h) => (
            <li key={h.title} data-reveal>
              <h3>{h.title.toUpperCase()}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="br-contact" id="br-contato">
        <span className="br-num">04</span>
        <h2>{t.contact.title.toUpperCase()}</h2>
        <p>{t.contact.body}</p>
        <a className="br-mail" href={`mailto:${links.email}`}>
          {links.email}
        </a>
        <p className="br-mono">{t.contact.company}</p>
      </section>

      <footer className="br-foot">
        <span>© 2026 MIGUEL PAULA</span>
        <span>{t.footer.faith.toUpperCase()}</span>
      </footer>

      <Reveal />
      <Switcher current="/layouts/brutalista" />
    </div>
  );
}
