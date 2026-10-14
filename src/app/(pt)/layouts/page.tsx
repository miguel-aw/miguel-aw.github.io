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
];

export default function Page() {
  return (
    <main className="pk">
      <h1>Escolha o layout</h1>
      <p className="pk-lead">Mesmo conteúdo, quatro jeitos de contar. Abra cada um e compare.</p>
      <ul>
        {LAYOUTS.map((l, i) => (
          <li key={l.href}>
            <a href={l.href} className={`pk-card ${l.cls}`}>
              <span className="pk-thumb" aria-hidden="true">
                <b>Miguel Paula</b>
              </span>
              <span className="pk-num">0{i + 1}</span>
              <strong>{l.name}</strong>
              <span className="pk-desc">{l.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
