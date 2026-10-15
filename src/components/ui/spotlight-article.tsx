"use client";

import type { PointerEvent, ReactNode } from "react";

/**
 * Decorative pointer spotlight for selected homepage cards only.
 * The pointer position is written directly to CSS variables to avoid
 * rerendering the card on each movement.
 */
export function SpotlightArticle({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - bounds.top}px`,
    );
  }

  return (
    <article
      className={`${className} home-spotlight`}
      onPointerMove={handlePointerMove}
    >
      {children}
    </article>
  );
}
