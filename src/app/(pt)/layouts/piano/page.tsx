import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Piano } from "@/components/layouts/Piano";

export const metadata: Metadata = { title: "Miguel Paula · layout Piano", robots: variantRobots };

export default function Page() {
  return <Piano />;
}
