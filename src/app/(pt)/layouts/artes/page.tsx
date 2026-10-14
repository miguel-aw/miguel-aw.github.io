import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Artes } from "@/components/layouts/Artes";

export const metadata: Metadata = { title: "Miguel Paula · layout Artes", robots: variantRobots };

export default function Page() {
  return <Artes />;
}
