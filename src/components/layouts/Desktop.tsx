import { Manrope } from "next/font/google";
import { DesktopOS } from "./DesktopOS";
import { Switcher } from "./Switcher";
import "./desktop.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-os", display: "swap" });

export function Desktop() {
  return (
    <div className={`os ${manrope.variable}`}>
      <DesktopOS />
      <Switcher current="/layouts/desktop" />
    </div>
  );
}
