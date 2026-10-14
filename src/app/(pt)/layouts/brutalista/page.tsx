import type { Metadata } from "next";
import { variantRobots } from "@/content/metadata";
import { Brutalista } from "@/components/layouts/Brutalista";

export const metadata: Metadata = { title: "Miguel Paula · layout Brutalista", robots: variantRobots };

export default function Page() {
  return <Brutalista />;
}
