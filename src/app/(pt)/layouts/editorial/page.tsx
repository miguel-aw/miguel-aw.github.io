import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Editorial } from "@/components/layouts/Editorial";

export const metadata: Metadata = { title: "Miguel Paula · layout Editorial", robots: variantRobots };

export default function Page() {
  return <Editorial />;
}
