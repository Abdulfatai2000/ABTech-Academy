"use client";
import { useMemo, useSyncExternalStore } from "react";
import { parseProgress } from "@/lib/progress";
import type { LearningProgress } from "@/types/course";
const key = "abtech-progress-v1";
let fallback: string | null = null;
let unavailable = false;
function snapshot() {
  try {
    return unavailable ? fallback : localStorage.getItem(key);
  } catch {
    unavailable = true;
    return fallback;
  }
}
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("academy-progress", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("academy-progress", callback);
  };
}
export function useProgress() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  const temporary = useSyncExternalStore(
    subscribe,
    () => unavailable,
    () => false,
  );
  const progress = useMemo(() => parseProgress(raw), [raw]);
  function update(change: (previous: LearningProgress) => LearningProgress) {
    const value = JSON.stringify(change(parseProgress(snapshot())));
    fallback = value;
    try {
      localStorage.setItem(key, value);
      unavailable = false;
    } catch {
      unavailable = true;
    }
    window.dispatchEvent(new Event("academy-progress"));
  }
  return {
    progress,
    temporary,
    complete: (slug: string) =>
      update((p) => ({
        ...p,
        completed: [...new Set([...p.completed, slug])],
      })),
    bookmark: (slug: string) =>
      update((p) => ({
        ...p,
        bookmarks: p.bookmarks.includes(slug)
          ? p.bookmarks.filter((v) => v !== slug)
          : [...p.bookmarks, slug],
      })),
    visit: (slug: string, step: number) =>
      update((p) => ({
        ...p,
        lastLesson: slug,
        steps: { ...p.steps, [slug]: step },
      })),
  };
}
