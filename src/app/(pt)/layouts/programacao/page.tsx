import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Programacao } from "@/components/layouts/Programacao";

export const metadata: Metadata = { title: "Miguel Paula · layout Programação", robots: variantRobots };

export default function Page() {
  return <Programacao />;
}
