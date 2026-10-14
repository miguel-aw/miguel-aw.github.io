import Image from "next/image";
import { dict, links, type Lang } from "@/content/site";
import { Reveal } from "./Reveal";

// Notas de cada pista do "piano roll" do topo: [início %, largura %].
const ROLL: Record<string, [number, number][]> = {
  code: [
    [2, 14],
    [19, 6],
    [27, 18],
    [49, 9],
    [62, 22],
    [88, 9],
  ],
  worlds: [
    [6, 20],
    [30, 5],
    [38, 12],
    [54, 26],
    [84, 6],
    [92, 6],
  ],
  music: [
    [1, 4],
    [7, 3],
    [12, 5],
    [20, 3],
    [26, 8],
    [37, 4],
    [44, 3],
    [50, 6],
    [60, 3],
    [66, 9],
    [79, 4],
    [86, 3],
    [91, 7],
  ],
  hands: [
    [10, 8],
    [24, 12],
    [45, 6],
    [57, 14],
    [76, 10],
  ],
};

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className="stats">
      {items.map((s) => (
        <div key={s.label}>
          <dt>{s.value}</dt>
          <dd>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function Download({
  href,
  label,
  soon,
}: {
  href: string | null;
  label: string;
  soon: string;
}) {
  if (!href)
    return (
      <span className="btn btn--ghost" aria-disabled="true">
        {soon}
      </span>
    );
  return (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHead({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="sec-head" data-reveal>
      <span className="sec-index">{index}</span>
      <h2>{title}</h2>
      <p>{intro}</p>
    </header>
  );
}

export function Portfolio({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const w = t.worlds;

  return (
    <>
      <a className="skip" href="#main">
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>

      <nav
        className="topbar"
        aria-label={lang === "pt" ? "Seções" : "Sections"}
      >
        <a className="brand" href="#top">
          M<span>/</span>P
        </a>
        <div className="topbar-links">
          <a href="#mundos">{t.nav.worlds}</a>
          <a href="#codigo">{t.nav.code}</a>
          <a href="#fora">{t.nav.offscreen}</a>
          <a href="#contato">{t.nav.contact}</a>
        </div>
        <a
          className="lang"
          href={t.nav.switchHref}
          hrefLang={lang === "pt" ? "en" : "pt-BR"}
        >
          {t.nav.switchTo}
        </a>
      </nav>

      <main id="main">
        {/* ---------- HERO ---------- */}
        <section className="hero" id="top">
          <p className="kicker">{t.hero.kicker}</p>
          <h1 className="hero-name">{t.hero.lead}</h1>
          <p className="hero-sub">{t.hero.sub}</p>

          <div className="roll">
            <div className="roll-playhead" aria-hidden="true" />
            {t.hero.lanes.map((lane, i) => (
              <div
                className={`lane lane--${lane.id}`}
                key={lane.id}
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="lane-label">
                  <span className="lane-num">0{i + 1}</span>
                  <strong>{lane.label}</strong>
                  <em>{lane.note}</em>
                </div>
                <div className="lane-track" aria-hidden="true">
                  {ROLL[lane.id].map(([x, width], n) => (
                    <span
                      key={n}
                      className="note"
                      style={
                        {
                          "--x": x,
                          "--w": width,
                          "--n": n,
                        } as React.CSSProperties
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a className="hero-cta" href="#mundos">
            {t.hero.cta} <span aria-hidden="true">↓</span>
          </a>
        </section>

        {/* ---------- MUNDOS ---------- */}
        <section className="section" id="mundos">
          <SectionHead index={w.index} title={w.title} intro={w.intro} />

          {/* Penumbra */}
          <article className="mod mod--penumbra" data-reveal>
            <div className="penumbra-media">
              <div className="vhs">
                <Image
                  src={w.penumbra.shots[0].src}
                  alt={w.penumbra.shots[0].caption}
                  width={1708}
                  height={960}
                  sizes="(max-width: 900px) 100vw, 60vw"
                  priority={false}
                />
                <div className="vhs-overlay" aria-hidden="true">
                  <span className="vhs-play">▶ PLAY</span>
                  <span className="vhs-time">00:03:12</span>
                  <span className="vhs-band" />
                </div>
              </div>
              <div className="penumbra-strip">
                {w.penumbra.shots.slice(1).map((s) => (
                  <figure key={s.src}>
                    <Image
                      src={s.src}
                      alt={s.caption}
                      width={1708}
                      height={960}
                      sizes="(max-width: 900px) 50vw, 30vw"
                    />
                    <figcaption>{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mod-body">
              <p className="tag">{w.penumbra.tag}</p>
              <h3 className="mod-name glitch" data-text={w.penumbra.name}>
                {w.penumbra.name}
              </h3>
              <p className="pitch">{w.penumbra.pitch}</p>
              <p>{w.penumbra.body}</p>
              <ul className="ticks">
                {w.penumbra.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Stats items={w.penumbra.stats} />
              <div className="mod-foot">
                <Download
                  href={links.penumbra}
                  label={w.penumbra.cta}
                  soon={w.soon}
                />
                <span className="rating">{w.penumbra.rating}</span>
              </div>
            </div>
          </article>

          {/* Pedra Shaders */}
          <article className="mod mod--shaders" data-reveal>
            <div className="mod-body mod-body--wide">
              <div>
                <p className="tag">{w.shaders.tag}</p>
                <h3 className="mod-name">{w.shaders.name}</h3>
                <p className="pitch">{w.shaders.pitch}</p>
              </div>
              <div>
                <p>{w.shaders.body}</p>
                <Stats items={w.shaders.stats} />
                <div className="mod-foot">
                  <Download
                    href={links.pedraShaders}
                    label={w.shaders.cta}
                    soon={w.soon}
                  />
                </div>
              </div>
            </div>
            <div className="reel" tabIndex={0} aria-label={w.shaders.name}>
              {w.shaders.shots.map((s, i) => (
                <figure key={s.src}>
                  <Image
                    src={s.src}
                    alt={s.caption}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 900px) 85vw, 52vw"
                  />
                  <figcaption>
                    <span>{String(i + 1).padStart(2, "0")}</span> {s.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="reel-hint" aria-hidden="true">
              ← {w.shaders.hint} →
            </p>
          </article>

          {/* Pedra Aventura */}
          <article className="mod mod--aventura" data-reveal>
            <div className="aventura-grid">
              <figure className="aventura-main">
                <Image
                  src={w.aventura.shots[0].src}
                  alt={w.aventura.shots[0].caption}
                  width={1600}
                  height={900}
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
                <figcaption>{w.aventura.shots[0].caption}</figcaption>
              </figure>
              <div className="mod-body">
                <p className="tag">{w.aventura.tag}</p>
                <h3 className="mod-name">{w.aventura.name}</h3>
                <p className="pitch">{w.aventura.pitch}</p>
                <p>{w.aventura.body}</p>
                <Stats items={w.aventura.stats} />
                <div className="mod-foot">
                  <Download
                    href={links.pedraAventura}
                    label={w.aventura.cta}
                    soon={w.soon}
                  />
                </div>
              </div>
              <div className="aventura-side-row">
                {w.aventura.shots.slice(1).map((s) => (
                  <figure key={s.src}>
                    <Image
                      src={s.src}
                      alt={s.caption}
                      width={1600}
                      height={900}
                      sizes="(max-width: 900px) 50vw, 40vw"
                    />
                    <figcaption>{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>

          {/* Pedra Boost */}
          <aside className="boost" data-reveal>
            <span className="tag">{w.boost.tag}</span>
            <h3>{w.boost.name}</h3>
            <p>{w.boost.body}</p>
            <span className="boost-meter" aria-hidden="true">
              <i />
            </span>
          </aside>

          <p className="rule" data-reveal>
            {w.rule}
          </p>
        </section>

        {/* ---------- CÓDIGO ---------- */}
        <section className="section" id="codigo">
          <SectionHead
            index={t.code.index}
            title={t.code.title}
            intro={t.code.intro}
          />

          <div className="cases" role="table" aria-label={t.code.title}>
            <div className="case case--head" role="row">
              <span role="columnheader">{t.code.columns.project}</span>
              <span role="columnheader">{t.code.columns.what}</span>
              <span role="columnheader">{t.code.columns.stack}</span>
              <span role="columnheader">{t.code.columns.status}</span>
            </div>
            {t.code.cases.map((c) => (
              <div className="case" role="row" key={c.name} data-reveal>
                <span role="cell" className="case-name">
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.name} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    c.name
                  )}
                  <small>{c.kind}</small>
                </span>
                <span role="cell" className="case-summary">
                  {c.summary}
                </span>
                <span role="cell" className="case-stack">
                  {c.stack}
                </span>
                <span
                  role="cell"
                  className={`case-status ${c.href ? "is-live" : ""}`}
                >
                  {c.status}
                </span>
              </div>
            ))}
          </div>

          <div className="how" data-reveal>
            <h3>{t.code.howTitle}</h3>
            {t.code.how.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        {/* ---------- FORA DA TELA ---------- */}
        <section className="section" id="fora">
          <SectionHead
            index={t.offscreen.index}
            title={t.offscreen.title}
            intro={t.offscreen.intro}
          />
          <ul className="hobbies">
            {t.offscreen.hobbies.map((h, i) => (
              <li
                key={h.title}
                data-reveal
                className={i === 0 ? "hobby--piano" : undefined}
              >
                {i === 0 && (
                  <span className="keys" aria-hidden="true">
                    {Array.from({ length: 14 }, (_, k) => (
                      <i
                        key={k}
                        className={
                          [0, 1, 3, 4, 5, 7, 8, 10, 11, 12].includes(k)
                            ? "has-black"
                            : ""
                        }
                      />
                    ))}
                  </span>
                )}
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- CONTATO ---------- */}
        <section className="contact" id="contato" data-reveal>
          <span className="sec-index">{t.contact.index}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <a className="contact-mail" href={`mailto:${links.email}`}>
            <small>{t.contact.emailLabel}</small>
            {links.email}
          </a>
          <p className="contact-company">{t.contact.company}</p>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 · {t.footer.made}</span>
        <span className="faith">{t.footer.faith}</span>
      </footer>

      <Reveal />
    </>
  );
}
