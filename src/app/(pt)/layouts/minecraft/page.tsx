import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Minecraft } from "@/components/layouts/Minecraft";

export const metadata: Metadata = { title: "Miguel Paula · layout Minecraft", robots: variantRobots };

export default function Page() {
  return <Minecraft />;
}
