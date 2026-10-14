import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, alternates: { languages: { "pt-BR": `${SITE_URL}/`, en: `${SITE_URL}/en/` } } },
    { url: `${SITE_URL}/en/` },
  ];
}
