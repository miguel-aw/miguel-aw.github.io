"use client";

import Image from "next/image";
import { useState } from "react";

export type McItem = {
  id: string;
  name: string;
  color: string;
  tag: string;
  pitch: string;
  body: string;
  stats: { value: string; label: string }[];
  icon: string;
  shot: { src: string; caption: string; w: number; h: number };
  href: string | null;
  cta: string;
};

// Inventário: clicar (ou focar) num slot mostra o item no painel ao lado.
export function MinecraftInventory({ items, soon, title }: { items: McItem[]; soon: string; title: string }) {
  const [sel, setSel] = useState(0);
  const item = items[sel];
  const empty = 18 - items.length;

  return (
    <div className="mc-inv-wrap">
      <div className="mc-panel mc-inv">
        <p className="mc-inv-title">{title}</p>
        <div className="mc-slots" role="listbox" aria-label={title}>
          {items.map((it, i) => (
            <button
              key={it.id}
              type="button"
              role="option"
              aria-selected={i === sel}
              className={`mc-slot ${i === sel ? "is-sel" : ""}`}
              onClick={() => setSel(i)}
              onFocus={() => setSel(i)}
            >
              <Image src={it.icon} alt="" width={96} height={96} sizes="64px" />
              <span className="mc-tip" role="tooltip">
                <b style={{ color: it.color }}>{it.name}</b>
                <i>{it.tag}</i>
              </span>
            </button>
          ))}
          {Array.from({ length: empty }, (_, i) => (
            <span key={i} className="mc-slot mc-slot--empty" aria-hidden="true" />
          ))}
        </div>
      </div>

      <article className="mc-panel mc-detail" aria-live="polite">
        <figure className="mc-shot">
          <Image src={item.shot.src} alt={item.shot.caption} width={item.shot.w} height={item.shot.h} sizes="(max-width: 900px) 92vw, 46vw" />
          <figcaption>{item.shot.caption}</figcaption>
        </figure>
        <p className="mc-detail-tag">{item.tag}</p>
        <h3 style={{ color: item.color }}>{item.name}</h3>
        <p className="mc-detail-pitch">{item.pitch}</p>
        <p>{item.body}</p>
        <dl className="mc-xp">
          {item.stats.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
        {item.href ? (
          <a className="mc-btn" href={item.href} target="_blank" rel="noreferrer">
            {item.cta}
          </a>
        ) : (
          <span className="mc-btn mc-btn--off" aria-disabled="true">
            {soon}
          </span>
        )}
      </article>
    </div>
  );
}
