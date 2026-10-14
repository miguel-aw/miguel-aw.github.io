import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Blueprint } from "@/components/layouts/Blueprint";

export const metadata: Metadata = { title: "Miguel Paula · layout Blueprint", robots: variantRobots };

export default function Page() {
  return <Blueprint />;
}
