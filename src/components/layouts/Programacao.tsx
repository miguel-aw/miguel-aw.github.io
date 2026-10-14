import Image from "next/image";
import type { ReactNode } from "react";
import { dict, links } from "@/content/site";
import { Switcher } from "./Switcher";
import "./programacao.css";

const t = dict.pt;
const w = t.worlds;

// Uma linha do editor (o número vem do contador CSS).
function L({ children, className }: { children?: ReactNode; className?: string }) {
  return <span className={`l ${className ?? ""}`}>{children ?? " "}</span>;
}
const k = (s: string) => <span className="k">{s}</span>;
const s = (v: string) => <span className="s">&quot;{v}&quot;</span>;
const n = (v: string | number) => <span className="n">{v}</span>;
const p = (v: string) => <span className="p">{v}</span>;
const c = (v: string) => <span className="c">{v}</span>;
const f = (v: string) => <span className="f">{v}</span>;

function Tab({ icon, name, path }: { icon: string; name: string; path: string }) {
  return (
    <div className="tab">
      <span className={`ico ico--${icon}`} aria-hidden="true" />
      <strong>{name}</strong>
      <span className="tab-path">{path}</span>
    </div>
  );
}

function Preview({ src, alt, name, vhs }: { src: string; alt: string; name: string; vhs?: boolean }) {
  return (
    <figure className={`preview ${vhs ? "preview--vhs" : ""}`}>
      <figcaption>
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        preview: {name}
      </figcaption>
      <div className="preview-img">
        <Image src={src} alt={alt} width={1920} height={1080} sizes="(max-width: 900px) 100vw, 60vw" />
      </div>
    </figure>
  );
}

function Get({ href, label }: { href: string | null; label: string }) {
  return (
    <L>
      <span className="prompt">$</span>{" "}
      {href ? (
        <a className="cmd" href={href} target="_blank" rel="noreferrer">
          {label} ↗
        </a>
      ) : (
        <>
          <span className="cmd cmd--off">{label}</span> {c(`# ${w.soon}`)}
        </>
      )}
    </L>
  );
}

const TREE = [
  { href: "#readme", name: "README.md", icon: "md", depth: 0 },
  { folder: "mods", depth: 0 },
  { href: "#penumbra", name: "penumbra.md", icon: "md", depth: 1 },
  { href: "#shaders", name: "pedra-shaders.glsl", icon: "glsl", depth: 1 },
  { href: "#aventura", name: "pedra-aventura.json", icon: "json", depth: 1 },
  { href: "#boost", name: "PedraBoost.java", icon: "java", depth: 1 },
  { folder: "aw-solutions", depth: 0 },
  { href: "#clientes", name: "projetos.sh", icon: "sh", depth: 1 },
  { href: "#fora", name: "fora-da-tela.json", icon: "json", depth: 0 },
  { href: "#contato", name: "contato.sh", icon: "sh", depth: 0 },
];

export function Programacao() {
  return (
    <div className="ide">
      <header className="ide-title">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ide-title-name">miguel-paula · portfolio</span>
      </header>

      <div className="ide-body">
        <aside className="ide-tree" aria-label="Arquivos">
          <p className="tree-head">Explorador</p>
          <ul>
            {TREE.map((item, i) =>
              "folder" in item ? (
                <li key={i} className="tree-folder">
                  <span aria-hidden="true">▾</span> {item.folder}/
                </li>
              ) : (
                <li key={i} style={{ paddingLeft: 12 + item.depth * 14 }}>
                  <a href={item.href}>
                    <span className={`ico ico--${item.icon}`} aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              ),
            )}
          </ul>
          <div className="tree-foot">
            <p>{c("// 14 anos")}</p>
            <p>{c("// feito com Next.js")}</p>
          </div>
        </aside>

        <main className="ide-editor">
          {/* README */}
          <section id="readme" className="file">
            <Tab icon="md" name="README.md" path="~/miguel-paula" />
            <div className="code code--prose">
              <L className="h1">
                <span className="mdh">#</span> <span className="type">{t.hero.lead}</span>
              </L>
              <L />
              <L className="quote">
                <span className="mdq">&gt;</span> {t.hero.sub}
              </L>
              <L />
              <L>{c("```ts")}</L>
              <L>
                {k("const")} {f("miguel")} = {"{"}
              </L>
              <L>
                {"  "}
                {p("idade")}: {n(14)},
              </L>
              <L>
                {"  "}
                {p("pistas")}: {"{"}
              </L>
              {t.hero.lanes.map((lane) => (
                <L key={lane.id}>
                  {"    "}
                  {p(lane.label.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""))}: {s(lane.note)},
                </L>
              ))}
              <L>{"  },"}</L>
              <L>
                {"  "}
                {p("empresa")}: {s("AW-Solutions")},
              </L>
              <L>
                {"  "}
                {p("disponivelParaProjetos")}: {k("true")},
              </L>
              <L>{"};"}</L>
              <L>{c("```")}</L>
              <L />
              <L>
                <a className="run" href="#penumbra">
                  ▶ {f("run")}({s("ver os projetos")})
                </a>
              </L>
            </div>
          </section>

          {/* Penumbra */}
          <section id="penumbra" className="file">
            <Tab icon="md" name="penumbra.md" path="mods/" />
            <div className="code code--prose">
              <L>{c(`<!-- ${w.penumbra.tag} · ${w.penumbra.rating} -->`)}</L>
              <L className="h2">
                <span className="mdh">##</span> {w.penumbra.name}
              </L>
              <L className="quote">
                <span className="mdq">&gt;</span> {w.penumbra.pitch}
              </L>
              <L />
              <L>{w.penumbra.body}</L>
              <L />
              {w.penumbra.bullets.map((b) => (
                <L key={b}>
                  <span className="mdq">-</span> {b}
                </L>
              ))}
              <L />
              <div className="previews">
                <Preview src={w.penumbra.shots[0].src} alt={w.penumbra.shots[0].caption} name="floresta-vhs.webp" vhs />
                <Preview src={w.penumbra.shots[1].src} alt={w.penumbra.shots[1].caption} name="relance.webp" vhs />
              </div>
              <L />
              <L>
                {k("export const")} {f("penumbra")} = {"{"} {p("capitulos")}: {n(3)}, {p("testes")}: {s("850+")},{" "}
                {p("regrasDeSom")}: {n(64)} {"};"}
              </L>
              <Get href={links.penumbra} label="baixar penumbra" />
            </div>
          </section>

          {/* Pedra Shaders */}
          <section id="shaders" className="file">
            <Tab icon="glsl" name="pedra-shaders.glsl" path="mods/" />
            <div className="code">
              <L>{c(`// ${w.shaders.name} ${w.shaders.tag.split("·")[1]?.trim() ?? ""}: ${w.shaders.pitch}`)}</L>
              <L>
                {k("#define")} {f("PERFIS")} {n(6)}
                {"            "}
                {c("// Mínimo até Pedra Max")}
              </L>
              <L>
                {k("#define")} {f("CODIGO_PROPRIO")} {n(1)}
                {"    "}
                {c("// 100%, nada copiado")}
              </L>
              <L />
              <L>
                {k("vec3")} {f("ceu")} = {f("porDoSol")}(tempo) * {f("nuvensVolumetricas")}();
              </L>
              <L>
                {k("float")} {f("noite")} = {f("max")}(estrelas, {n(0.35)}); {c("// noite enxergável, nunca escura")}
              </L>
              <L />
              <L className="prose">{c(`/* ${w.shaders.body} */`)}</L>
              <L />
              <L>{c(`// assets/ (${w.shaders.shots.length} capturas no perfil Alto)`)}</L>
              <div className="thumbs">
                {w.shaders.shots.map((shot, i) => (
                  <figure key={shot.src}>
                    <Image src={shot.src} alt={shot.caption} width={1920} height={1080} sizes="(max-width: 900px) 50vw, 22vw" />
                    <figcaption>
                      {String(i + 1).padStart(2, "0")}_{shot.caption.toLowerCase().replaceAll(" ", "-").replaceAll(",", "")}
                      .webp
                    </figcaption>
                  </figure>
                ))}
              </div>
              <Get href={links.pedraShaders} label="baixar pedra-shaders" />
            </div>
          </section>

          {/* Pedra Aventura */}
          <section id="aventura" className="file">
            <Tab icon="json" name="pedra-aventura.json" path="mods/" />
            <div className="split">
              <div className="code">
                <L>{"{"}</L>
                <L>
                  {"  "}
                  {p('"nome"')}: {s(w.aventura.name)},
                </L>
                <L>
                  {"  "}
                  {p('"versao"')}: {s("0.1.0-beta")},
                </L>
                <L>
                  {"  "}
                  {p('"minecraft"')}: {s("1.21.1")}, {p('"loader"')}: {s("fabric")},
                </L>
                {w.aventura.stats.map((st) => (
                  <L key={st.label}>
                    {"  "}
                    {p(`"${st.label}"`)}: {n(st.value)},
                  </L>
                ))}
                <L>
                  {"  "}
                  {p('"terror"')}: {k("false")},
                </L>
                <L>
                  {"  "}
                  {p('"inclui"')}: [{s("Pedra Shaders")}, {s("Pedra Boost")}],
                </L>
                <L>
                  {"  "}
                  {p('"resumo"')}: {s(w.aventura.pitch)}
                </L>
                <L>{"}"}</L>
                <L />
                <L className="prose">{c(`// ${w.aventura.body}`)}</L>
                <Get href={links.pedraAventura} label="baixar pedra-aventura" />
              </div>
              <div className="split-side">
                <Preview src={w.aventura.shots[0].src} alt={w.aventura.shots[0].caption} name="paisagem.webp" />
                <Preview src={w.aventura.shots[1].src} alt={w.aventura.shots[1].caption} name="pedra-boost-f7.webp" />
              </div>
            </div>
          </section>

          {/* Pedra Boost */}
          <section id="boost" className="file">
            <Tab icon="java" name="PedraBoost.java" path="mods/" />
            <div className="code">
              <L>{c(`// TODO: ${w.boost.tag.toLowerCase()}`)}</L>
              <L>
                {k("public final class")} {f("PedraBoost")} {"{"}
              </L>
              <L className="prose">
                {"    "}
                {c(`/** ${w.boost.body} */`)}
              </L>
              <L>
                {"    "}
                {k("boolean")} {f("tiraDetalhe")} = {k("false")}; {c("// sempre")}
              </L>
              <L>
                {"    "}
                {k("int")} {f("progresso")} = {n(62)}; <span className="bar" aria-hidden="true" />
              </L>
              <L>{"}"}</L>
              <L />
              <L>{c(`// ${w.rule}`)}</L>
            </div>
          </section>

          {/* Clientes */}
          <section id="clientes" className="file">
            <Tab icon="sh" name="projetos.sh" path="aw-solutions/" />
            <div className="term">
              <L>
                <span className="prompt">miguel@aw-solutions ~ $</span> projetos --listar
              </L>
              <L>{c(`# ${t.code.intro}`)}</L>
              <L />
              <div className="term-table" role="table" aria-label="Projetos de cliente">
                {t.code.cases.map((cs) => (
                  <div className="term-row" role="row" key={cs.name}>
                    <span role="cell" className={`term-status ${cs.href ? "is-live" : ""}`}>
                      {cs.href ? "● no ar" : "✓ entregue"}
                    </span>
                    <span role="cell" className="term-name">
                      {cs.href ? (
                        <a href={cs.href} target="_blank" rel="noreferrer">
                          {cs.name} ↗
                        </a>
                      ) : (
                        cs.name
                      )}
                      <small>{cs.kind}</small>
                    </span>
                    <span role="cell" className="term-sum">
                      {cs.summary}
                    </span>
                    <span role="cell" className="term-stack">
                      [{cs.stack}]
                    </span>
                  </div>
                ))}
              </div>
              <L />
              <L>
                <span className="prompt">miguel@aw-solutions ~ $</span> cat como-eu-trabalho.txt
              </L>
              {t.code.how.map((h) => (
                <L key={h} className="prose">
                  {h}
                </L>
              ))}
            </div>
          </section>

          {/* Fora da tela */}
          <section id="fora" className="file">
            <Tab icon="json" name="fora-da-tela.json" path="~/miguel-paula" />
            <div className="code">
              <L>{c(`// ${t.offscreen.intro}`)}</L>
              <L>{"{"}</L>
              {t.offscreen.hobbies.map((h, i) => (
                <L key={h.title}>
                  {"  "}
                  {p(`"${h.title}"`)}: {s(h.text)}
                  {i < t.offscreen.hobbies.length - 1 ? "," : ""}
                </L>
              ))}
              <L>{"}"}</L>
            </div>
          </section>

          {/* Contato */}
          <section id="contato" className="file">
            <Tab icon="sh" name="contato.sh" path="~/miguel-paula" />
            <div className="term term--contact">
              <L>
                <span className="prompt">$</span> echo {s(t.contact.title)}
              </L>
              <L className="big">{t.contact.title}</L>
              <L className="prose">{t.contact.body}</L>
              <L />
              <L>
                <span className="prompt">$</span> mail{" "}
                <a className="mail" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                <span className="caret" aria-hidden="true" />
              </L>
              <L>{c(`# ${t.contact.company} ${t.footer.faith}`)}</L>
            </div>
          </section>
        </main>
      </div>

      <footer className="ide-status">
        <span>⎇ main</span>
        <span>✓ 0 problemas</span>
        <span className="hide-sm">Ln 14, idade 14</span>
        <span className="hide-sm">UTF-8</span>
        <span>PT-BR</span>
      </footer>

      <Switcher current="/layouts/programacao" />
    </div>
  );
}
