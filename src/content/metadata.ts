import type { Metadata } from "next";
import { dict, type Lang } from "./site";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function metadataFor(lang: Lang): Metadata {
  const d = dict[lang].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: d.title,
    description: d.description,
    icons: { icon: "/icon.svg", apple: "/apple-touch-icon.png" },
    alternates: { canonical: lang === "pt" ? "/" : "/en/", languages: { "pt-BR": "/", en: "/en/" } },
    openGraph: {
      title: d.title,
      description: d.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Miguel Paula" }],
      locale: lang === "pt" ? "pt_BR" : "en_US",
      type: "website",
      siteName: "Miguel Paula",
    },
    twitter: { card: "summary_large_image", title: d.title, description: d.description, images: ["/og.jpg"] },
  };
}

// Layouts alternativos: visíveis por link, fora da busca.
export const variantRobots: Metadata["robots"] = { index: false, follow: true };
