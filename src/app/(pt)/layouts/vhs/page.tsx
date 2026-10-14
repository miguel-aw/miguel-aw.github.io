import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Vhs } from "@/components/layouts/Vhs";

export const metadata: Metadata = { title: "Miguel Paula · layout VHS", robots: variantRobots };

export default function Page() {
  return <Vhs />;
}
