"use client";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
const subscribe = (callback: () => void) => { window.addEventListener("academy-theme", callback); return () => window.removeEventListener("academy-theme", callback); };
export function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, () => document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches), () => false);
  return <button type="button" className="icon-button" aria-label={`Switch to ${dark ? "light" : "dark"} theme`} onClick={() => { const theme = dark ? "light" : "dark"; document.documentElement.dataset.theme = theme; try { localStorage.setItem("abtech-theme", theme); } catch { /* Theme remains usable without storage. */ } window.dispatchEvent(new Event("academy-theme")); }}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>;
}
