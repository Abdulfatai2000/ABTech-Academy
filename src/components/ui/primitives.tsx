import Link from "next/link";
import { ArrowRight, ChevronRight, CodeXml } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`button${secondary ? " secondary" : ""}`} href={href}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="ABTech Academy home">
      <span className="brand-mark">
        <CodeXml size={23} aria-hidden="true" />
      </span>
      <span>
        ABTech <span>Academy</span>
      </span>
    </Link>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, i) => (
        <span className="row" key={item.label}>
          {i > 0 && <ChevronRight size={12} aria-hidden="true" />}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function LearningCallout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}
export function EmptyState({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
export function LoadingState() {
  return (
    <div className="loading" role="status">
      Preparing your learning space…
    </div>
  );
}
