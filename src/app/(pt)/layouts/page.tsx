import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import "@/components/layouts/picker.css";

export const metadata: Metadata = { title: "Miguel Paula · escolha o layout", robots: variantRobots };

const LAYOUTS = [
  {
    href: "/",
    name: "Multipista",
    desc: "Escuro e sério. O topo é um piano roll com as quatro pistas: código, mundos, música e mãos.",
    cls: "pk--multi",
  },
  {
    href: "/layouts/programacao",
    name: "Programação",
    desc: "O portfólio é um editor de código: explorador de arquivos, abas, linhas numeradas e terminal.",
    cls: "pk--prog",
  },
  {
    href: "/layouts/artes",
    name: "Artes",
    desc: "Uma exposição em quatro salas: obras emolduradas, etiquetas de parede, partitura e pedestais.",
    cls: "pk--art",
  },
  {
    href: "/layouts/maximalismo",
    name: "Maximalismo",
    desc: "Cores berrantes, letreiros rolando, adesivos, colagem com fita e fonte pixelada de Minecraft.",
    cls: "pk--max",
  },
  {
    href: "/layouts/minecraft",
    name: "Minecraft",
    desc: "O site como o jogo: tela de título, botões de pedra, inventário clicável com os mods, conquistas e placas.",
    cls: "pk--mc",
  },
  {
    href: "/layouts/desktop",
    name: "MiguelOS",
    desc: "Uma área de trabalho de verdade: janelas que abrem, arrastam e minimizam, dock e apps para cada assunto.",
    cls: "pk--os",
  },
  {
    href: "/layouts/vhs",
    name: "VHS",
    desc: "Uma fita achada numa TV de tubo, no clima do Penumbra: tela azul, REC, timecode, legendas e fitas cassete.",
    cls: "pk--vhs",
  },
  {
    href: "/layouts/piano",
    name: "Piano",
    desc: "A página é uma partitura em movimentos, com um teclado no rodapé que toca de verdade.",
    cls: "pk--pn",
  },
  {
    href: "/layouts/editorial",
    name: "Revista",
    desc: "Capa, chamadas, matéria em colunas, ficha técnica e entrevista. O mais sério de todos.",
    cls: "pk--ed",
  },
  {
    href: "/layouts/blueprint",
    name: "Blueprint",
    desc: "Planta técnica azul com cotas, carimbo, anotações à mão e os projetos como peças.",
    cls: "pk--bp",
  },
  {
    href: "/layouts/brutalista",
    name: "Brutalista",
    desc: "Preto e branco cru, tipografia enorme e grade aparente. As fotos ganham cor quando o mouse passa.",
    cls: "pk--br",
  },
];

export default function Page() {
  return (
    <main className="pk">
      <h1>Escolha o layout</h1>
      <p className="pk-lead">Mesmo conteúdo, vários jeitos de contar. Abra cada um e compare.</p>
      <ul>
        {LAYOUTS.map((l, i) => (
          <li key={l.href}>
            <a href={l.href} className={`pk-card ${l.cls}`}>
              <span className="pk-thumb" aria-hidden="true">
                <b>Miguel Paula</b>
              </span>
              <span className="pk-num">{String(i + 1).padStart(2, "0")}</span>
              <strong>{l.name}</strong>
              <span className="pk-desc">{l.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
