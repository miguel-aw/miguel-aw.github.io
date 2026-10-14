import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Maximalismo } from "@/components/layouts/Maximalismo";

export const metadata: Metadata = { title: "Miguel Paula · layout Maximalismo", robots: variantRobots };

export default function Page() {
  return <Maximalismo />;
}
