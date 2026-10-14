import "./switcher.css";

const OPTIONS = [
  { href: "/", label: "Multipista" },
  { href: "/layouts/programacao", label: "Programação" },
  { href: "/layouts/artes", label: "Artes" },
  { href: "/layouts/maximalismo", label: "Maximalismo" },
  { href: "/layouts/minecraft", label: "Minecraft" },
  { href: "/layouts/desktop", label: "MiguelOS" },
  { href: "/layouts/vhs", label: "VHS" },
  { href: "/layouts/piano", label: "Piano" },
  { href: "/layouts/editorial", label: "Revista" },
  { href: "/layouts/blueprint", label: "Blueprint" },
  { href: "/layouts/brutalista", label: "Brutalista" },
];

// Barra flutuante para comparar os layouts enquanto o Miguel escolhe.
export function Switcher({ current }: { current: string }) {
  return (
    <nav className="lx-switch" aria-label="Trocar de layout">
      <a href="/layouts" className="lx-switch-all">
        Layouts
      </a>
      {OPTIONS.map((o) => (
        <a key={o.href} href={o.href} aria-current={o.href === current ? "page" : undefined}>
          {o.label}
        </a>
      ))}
    </nav>
  );
}
