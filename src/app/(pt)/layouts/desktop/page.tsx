import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Desktop } from "@/components/layouts/Desktop";

export const metadata: Metadata = { title: "Miguel Paula · layout Sistema operacional", robots: variantRobots };

export default function Page() {
  return <Desktop />;
}
