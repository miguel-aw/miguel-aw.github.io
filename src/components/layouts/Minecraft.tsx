import { Pixelify_Sans, Silkscreen } from "next/font/google";
import { dict, links } from "@/content/site";
import { MinecraftInventory, type McItem } from "./MinecraftInventory";
import { Reveal } from "../Reveal";
import { Switcher } from "./Switcher";
import "./minecraft.css";

const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-mc-body", display: "swap" });
const title = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mc-title", display: "swap" });

const t = dict.pt;
const w = t.worlds;

const ITEMS: McItem[] = [
  {
    id: "penumbra",
    name: w.penumbra.name,
    color: "#ff5555",
    tag: w.penumbra.tag,
    pitch: w.penumbra.pitch,
    body: w.penumbra.body,
    stats: w.penumbra.stats,
    icon: "/img/logos/penumbra.webp",
    shot: { src: w.penumbra.shots[0].src, caption: w.penumbra.shots[0].caption, w: 1708, h: 960 },
    href: links.penumbra,
    cta: w.penumbra.cta,
  },
  {
    id: "shaders",
    name: w.shaders.name,
    color: "#ffaa00",
    tag: w.shaders.tag,
    pitch: w.shaders.pitch,
    body: w.shaders.body,
    stats: w.shaders.stats,
    icon: "/img/logos/pedra-shaders.webp",
    shot: { src: w.shaders.shots[0].src, caption: w.shaders.shots[0].caption, w: 1920, h: 1080 },
    href: links.pedraShaders,
    cta: w.shaders.cta,
  },
  {
    id: "aventura",
    name: w.aventura.name,
    color: "#55ff55",
    tag: w.aventura.tag,
    pitch: w.aventura.pitch,
    body: w.aventura.body,
    stats: w.aventura.stats,
    icon: "/img/aventura/acab2-01-carregamento-inicio.webp",
    shot: { src: w.aventura.shots[0].src, caption: w.aventura.shots[0].caption, w: 1600, h: 900 },
    href: links.pedraAventura,
    cta: w.aventura.cta,
  },
  {
    id: "boost",
    name: w.boost.name,
    color: "#55ffff",
    tag: w.boost.tag,
    pitch: w.boost.tag,
    body: w.boost.body,
    stats: [],
    icon: "/img/aventura/acab2-05-pedraboost.webp",
    shot: { src: w.aventura.shots[1].src, caption: w.aventura.shots[1].caption, w: 1600, h: 900 },
    href: null,
    cta: w.boost.name,
  },
];

const ADVANCEMENTS = [
  { title: "Terror por clima", text: `${w.penumbra.name}: ${w.penumbra.tag}` },
  { title: "Testador incansável", text: `${w.penumbra.stats[1].value} ${w.penumbra.stats[1].label}` },
  { title: "Céu de verdade", text: `${w.shaders.stats[0].value} ${w.shaders.stats[0].label}` },
  { title: "Colecionador", text: `${w.aventura.stats[0].value} ${w.aventura.stats[0].label}` },
  { title: "Zero conflitos", text: `${w.aventura.stats[1].value} ${w.aventura.stats[1].label}` },
  { title: "Prestador de serviços", text: `${t.code.cases.length} projetos de cliente pela AW-Solutions` },
];

const HOBBY_ICON = ["🎹", "🖨️", "🧩", "🥋"];

export function Minecraft() {
  return (
    <div className={`mc ${pixel.variable} ${title.variable}`}>
      {/* Tela de título */}
      <header className="mc-title-screen">
        <div className="mc-panorama" aria-hidden="true" />
        <div className="mc-title-box">
          <h1 className="mc-logo" aria-label={t.hero.lead}>
            <span>MIGUEL</span>
            <span>PAULA</span>
          </h1>
          <p className="mc-edition">EDIÇÃO PORTFÓLIO</p>
          <p className="mc-splash">Agora com 14 anos!</p>
        </div>
        <nav className="mc-menu" aria-label="Menu">
          <a className="mc-btn mc-btn--wide" href="#mc-mods">
            Mods
          </a>
          <a className="mc-btn mc-btn--wide" href="#mc-clientes">
            Clientes
          </a>
          <div className="mc-menu-row">
            <a className="mc-btn" href="#mc-fora">
              Fora da tela
            </a>
            <a className="mc-btn" href="#mc-contato">
              Contato
            </a>
          </div>
        </nav>
        <p className="mc-intro">{t.hero.sub}</p>
        <p className="mc-corner mc-corner--l">Portfólio 2026</p>
        <p className="mc-corner mc-corner--r">Projeto independente. Não afiliado à Mojang.</p>
      </header>

      {/* Inventário de mods */}
      <section className="mc-sec" id="mc-mods">
        <h2 className="mc-h2" data-reveal>
          Inventário
        </h2>
        <p className="mc-lead" data-reveal>
          {w.intro}
        </p>
        <div data-reveal>
          <MinecraftInventory items={ITEMS} soon={w.soon} title="Mods do Miguel" />
        </div>
        <p className="mc-hint">Clique num item para ver os detalhes.</p>
      </section>

      {/* Conquistas */}
      <section className="mc-sec mc-sec--adv">
        <h2 className="mc-h2" data-reveal>
          Conquistas
        </h2>
        <ul className="mc-adv">
          {ADVANCEMENTS.map((a, i) => (
            <li key={a.title} className="mc-toast" data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="mc-toast-icon" aria-hidden="true">
                ★
              </span>
              <span>
                <b>Conquista feita!</b>
                <strong>{a.title}</strong>
                <em>{a.text}</em>
              </span>
            </li>
          ))}
        </ul>
        <p className="mc-rule" data-reveal>
          {w.rule}
        </p>
      </section>

      {/* Clientes: placas */}
      <section className="mc-sec" id="mc-clientes">
        <h2 className="mc-h2" data-reveal>
          Clientes
        </h2>
        <p className="mc-lead" data-reveal>
          {t.code.intro}
        </p>
        <div className="mc-signs">
          {t.code.cases.map((c) => (
            <article key={c.name} className="mc-sign" data-reveal>
              <div className="mc-sign-board">
                <h3>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.name} ↗
                    </a>
                  ) : (
                    c.name
                  )}
                </h3>
                <p className="mc-sign-kind">{c.kind}</p>
                <p>{c.summary}</p>
                <p className="mc-sign-meta">
                  {c.stack} · <span className={c.href ? "mc-live" : ""}>{c.status}</span>
                </p>
              </div>
              <span className="mc-sign-post" aria-hidden="true" />
            </article>
          ))}
        </div>
        <div className="mc-panel mc-book" data-reveal>
          <h3>{t.code.howTitle}</h3>
          {t.code.how.map((h) => (
            <p key={h}>{h}</p>
          ))}
        </div>
      </section>

      {/* Fora da tela: barra de atalhos */}
      <section className="mc-sec" id="mc-fora">
        <h2 className="mc-h2" data-reveal>
          Fora da tela
        </h2>
        <p className="mc-lead" data-reveal>
          {t.offscreen.intro}
        </p>
        <ul className="mc-hotbar" data-reveal>
          {t.offscreen.hobbies.map((h, i) => (
            <li key={h.title} className="mc-hot">
              <span className="mc-hot-slot" aria-hidden="true">
                {HOBBY_ICON[i]}
                <small>{i + 1}</small>
              </span>
              <span>
                <b>{h.title}</b>
                {h.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contato: chat */}
      <section className="mc-sec mc-sec--chat" id="mc-contato">
        <h2 className="mc-h2" data-reveal>
          {t.contact.title}
        </h2>
        <div className="mc-chat" data-reveal>
          <p>
            <span className="mc-chat-name">&lt;Miguel&gt;</span> {t.contact.body}
          </p>
          <p className="mc-chat-sys">{t.contact.company}</p>
          <a className="mc-chat-input" href={`mailto:${links.email}`}>
            <span aria-hidden="true">/msg</span> {links.email}
            <span className="mc-caret" aria-hidden="true" />
          </a>
        </div>
        <p className="mc-foot">
          © 2026 Miguel Paula · {t.footer.faith}
        </p>
      </section>

      <Reveal />
      <Switcher current="/layouts/minecraft" />
    </div>
  );
}
