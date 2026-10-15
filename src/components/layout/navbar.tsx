"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useRef } from "react";
import { Brand, ButtonLink } from "@/components/ui/primitives";

const links = [{ href: "/courses", label: "Courses" }, { href: "/learn/react-native", label: "Learning roadmap" }, { href: "/projects", label: "Projects" }];
export function Navbar({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();
  const drawer = useRef<HTMLDetailsElement>(null);
  const navigation = links.map(({ href, label }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => { if (drawer.current) drawer.current.open = false; }}>{label}</Link>);
  return <header className="site-header"><div className="container nav"><Brand /><nav aria-label="Main navigation" className="desktop-nav">{navigation}</nav><div className="row">{children}<div className="desktop-nav"><ButtonLink href="/learn/react-native">Start learning</ButtonLink></div><details className="mobile-nav" ref={drawer} onKeyDown={event => { if (event.key === "Escape" && drawer.current) { drawer.current.open = false; drawer.current.querySelector("summary")?.focus(); } }}><summary className="icon-button" aria-label="Toggle navigation"><Menu size={20} /></summary><nav aria-label="Mobile navigation">{navigation}<Link href="/learn/react-native/lessons/javascript-values" onClick={() => { if (drawer.current) drawer.current.open = false; }}>Start learning</Link></nav></details></div></div></header>;
}
