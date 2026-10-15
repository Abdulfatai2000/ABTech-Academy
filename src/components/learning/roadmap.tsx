"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Circle, Flag, Sparkles } from "lucide-react";
import { modules } from "@/data/courses";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/use-progress";
import { moduleState } from "@/lib/progress";
import { ButtonLink, LearningCallout } from "@/components/ui/primitives";
import { LessonProgress } from "./lesson-progress";
import type { Module } from "@/types/course";

export function RoadmapNode({ module, index, status, selected, onSelect }: { module: Module; index: number; status: string; selected: boolean; onSelect: () => void }) { return <button className={`roadmap-node ${status.toLowerCase()}`} aria-pressed={selected} onClick={onSelect}><span className="node-symbol">{status === "Completed" ? <Check size={20} /> : status === "Current" ? <Flag size={20} /> : <Circle size={18} />}</span><span className="node-copy"><span className="node-level">LEVEL {index} · {status}</span><strong>{module.title}</strong><span className="small muted">{module.lessonSlugs.length ? `${module.lessonSlugs.length} published lessons` : "Curriculum preview"}</span></span></button>; }
export function RoadmapConnector() { return <span className="roadmap-connector" aria-hidden="true" />; }
export function Roadmap() {
  const { progress, temporary } = useProgress();
  const [selection, setSelection] = useState<string | null>(null);
  const [list, setList] = useState(false);
  const current = modules.find(module => module.lessonSlugs.some(slug => !progress.completed.includes(slug)));
  const selected = modules.find(module => module.slug === selection) ?? current ?? modules[0];
  const resume = lessons.find(lesson => lesson.slug === progress.lastLesson && !progress.completed.includes(lesson.slug)) ?? lessons.find(lesson => !progress.completed.includes(lesson.slug));
  const completed = lessons.filter(lesson => progress.completed.includes(lesson.slug)).length;
  return <><div className="roadmap-summary card"><div><p className="eyebrow">Your pace. Your path.</p><h2>{completed === lessons.length ? "A strong foundation. Keep exploring." : "Every small step counts."}</h2><p className="small">{temporary ? "Browser storage is unavailable. Progress lasts for this session only." : "Reading progress is saved in this browser only. It is not assessed mastery."}</p></div><div className="stack"><LessonProgress value={completed} max={lessons.length} label="Published lessons read" /><ButtonLink href={resume ? `/learn/react-native/lessons/${resume.slug}` : "/projects"}>{resume ? completed ? "Continue learning" : "Begin your journey" : "Explore project briefs"}</ButtonLink></div></div><div className="row between" style={{ marginBlock: 30 }}><span className="small muted">Choose a milestone to see what’s inside.</span><button className="filter" aria-pressed={list} onClick={() => setList(!list)}>{list ? "Show connected roadmap" : "Show simple list"}</button></div><div className={`roadmap-layout ${list ? "list-view" : ""}`}><ol className="roadmap-path" aria-label="Course modules in learning order">{modules.map((module, i) => <li key={module.slug}>{i > 0 && <RoadmapConnector />}<RoadmapNode module={module} index={i} status={moduleState(module, progress.completed, current?.slug)} selected={module.slug === selected.slug} onSelect={() => setSelection(module.slug)} />{i === 1 && <Link className="bonus-node" href="/learn/react-native/lessons/usestate?step=build"><Sparkles size={16} /> Bonus · Daily Water Tracker</Link>}</li>)}</ol><aside className="module-detail card" aria-label="Selected module details" aria-live="polite"><p className="eyebrow">Selected milestone</p><h2>{selected.title}</h2><p>{selected.description}</p><h3>What you’ll explore</h3><ul className="list">{selected.objectives.map(objective => <li key={objective}>{objective}</li>)}</ul><ButtonLink href={`/learn/react-native/modules/${selected.slug}`}>View module</ButtonLink>{!selected.lessonSlugs.length && <p className="small" style={{ marginTop: 20 }}>Lessons for this milestone are planned. You can explore its objectives and project brief now.</p>}<hr className="divider" /><LearningCallout><p className="small">The path offers a recommended order. You can explore any public lesson without unlocking earlier modules.</p></LearningCallout></aside></div></>;
}
