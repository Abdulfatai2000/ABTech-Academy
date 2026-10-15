import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Brand } from "@/components/ui/primitives";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ABTech Academy — Learn. Build. Master.", template: "%s | ABTech Academy" },
  description: "Build your development skills one clear step at a time. Start with the React Native Masterclass at ABTech Academy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head><script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('abtech-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}` }} /></head>
      <body className="min-h-full flex flex-col"><a href="#main" className="skip-link">Skip to content</a><Suspense fallback={<header className="site-header"><div className="container nav"><Brand /></div></header>}><Navbar><ThemeToggle /></Navbar></Suspense><main id="main" className="flex-1">{children}</main><Footer /></body>
    </html>
  );
}
