import type { ReactNode } from "react";
import { archivo, mono } from "@/app/fonts";
import type { Lang } from "@/content/site";

export function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={`${archivo.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
