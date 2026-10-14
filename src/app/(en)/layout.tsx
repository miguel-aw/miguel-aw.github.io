import "../globals.css";
import { Shell } from "@/components/Shell";
import { metadataFor } from "@/content/metadata";

export const metadata = metadataFor("en");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
