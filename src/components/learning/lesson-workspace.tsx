"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Bookmark, Check, PanelLeft } from "lucide-react";
import type { Lesson, LearningStep, Module } from "@/types/course";
import { useProgress } from "@/hooks/use-progress";
import { Breadcrumbs, ButtonLink, LearningCallout } from "@/components/ui/primitives";
import { CodeBlock } from "./code-block";
import { ExerciseCard } from "./exercise-card";
import { KnowledgeCheck } from "./knowledge-check";
import { LessonProgress } from "./lesson-progress";
import { Playground } from "./playground";

export function LessonStep({ step }: { step: LearningStep }) { return <><p>{step.body}</p>{step.code && <><CodeBlock source={step.code.source} language={step.code.language} /><LearningCallout><strong className="small">Expected output · reference only</strong><p className="small">{step.code.output}</p></LearningCallout></>}{step.exercise && <ExerciseCard exercise={step.exercise} />}{step.code && step.id === "practice" && <Playground initialCode={step.code.source} output={step.code.output} />}{step.quiz && <KnowledgeCheck quiz={step.quiz} />}</>; }
export function LessonNavigation({ lesson, active, visit }: { lesson: Lesson; active: number; visit: (step: number) => void }) { return <nav className="lesson-outline" id="lesson-outline" aria-label="Lesson steps"><p className="eyebrow">In this lesson</p><ol>{lesson.steps.map((step, i) => <li key={step.id}><Link href={`?step=${step.id}`} scroll={false} aria-current={i === active ? "step" : undefined} onClick={() => visit(i)}><span>{String(i + 1).padStart(2, "0")}</span>{step.title}</Link></li>)}</ol></nav>; }
export function LessonWorkspace({ lesson, parent, requestedStep, nextLesson }: { lesson: Lesson; parent: Module; requestedStep?: string; nextLesson?: Lesson }) {
  const { progress, complete, bookmark, visit, temporary } = useProgress();
  const [outline, setOutline] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const requestedIndex = lesson.steps.findIndex(step => step.id === requestedStep);
  const index = requestedIndex >= 0 ? requestedIndex : Math.min(progress.steps[lesson.slug] ?? 0, lesson.steps.length - 1);
  const step = lesson.steps[index];
  const done = progress.completed.includes(lesson.slug);
  const bookmarked = progress.bookmarks.includes(lesson.slug);
  useEffect(() => { if (requestedStep) heading.current?.focus({ preventScroll: true }); }, [requestedStep]);
  const go = (i: number) => visit(lesson.slug, i);
  return <><div className="container" style={{ paddingTop: 28 }}><Breadcrumbs items={[{ label: "Roadmap", href: "/learn/react-native" }, { label: parent.title, href: `/learn/react-native/modules/${parent.slug}` }, { label: "Lesson" }]} /><div className="row between"><button className="button secondary small" aria-expanded={outline} aria-controls="lesson-outline" onClick={() => setOutline(!outline)}><PanelLeft size={16} />{outline ? "Hide" : "Show"} lesson outline</button><button className="button secondary small lesson-bookmark" aria-pressed={bookmarked} onClick={() => bookmark(lesson.slug)}><Bookmark size={16} fill={bookmarked ? "currentColor" : "none"} />{bookmarked ? "Bookmarked" : "Bookmark"}</button></div></div><div className={`container workspace ${outline ? "" : "no-outline"}`}>{outline && <LessonNavigation lesson={lesson} active={index} visit={go} />}<article className="lesson-content"><p className="eyebrow">{parent.title} · {lesson.minutes} min</p><h1>{lesson.title}</h1><LessonProgress value={index + 1} max={lesson.steps.length} label="Current learning step" /><section className="lesson-step" key={step.id}><p className="eyebrow">Step {index + 1}</p><h2 ref={heading} tabIndex={-1}>{step.title}</h2><LessonStep step={step} />{index === 0 && <details className="accordion"><summary>Learning objectives</summary><ul className="list">{lesson.objectives.map(objective => <li key={objective}>{objective}</li>)}</ul></details>}</section><div className="lesson-controls row between">{index > 0 ? <Link className="button secondary" href={`?step=${lesson.steps[index - 1].id}`} scroll={false} onClick={() => go(index - 1)}>← Previous</Link> : <Link className="text-link" href={`/learn/react-native/modules/${parent.slug}`}>← Back to module</Link>}{index < lesson.steps.length - 1 ? <Link className="button" href={`?step=${lesson.steps[index + 1].id}`} scroll={false} onClick={() => go(index + 1)}>Next step →</Link> : <button className="button" disabled={done} onClick={() => { complete(lesson.slug); go(index); }}><Check size={17} />{done ? "Lesson marked read" : "Complete lesson"}</button>}</div>{done && <div className="callout" role="status" style={{ marginTop: 25 }}><h3>Reading milestone complete</h3><p>This records reading, not assessed code mastery. Practice in a real environment to check your skills.</p><ButtonLink href={nextLesson ? `/learn/react-native/lessons/${nextLesson.slug}` : "/learn/react-native/modules/native-components"}>{nextLesson ? "Continue to next lesson" : "Explore the next module"}</ButtonLink></div>}<p className="small muted" style={{ marginTop: 24 }}>{temporary ? "Storage unavailable: progress and bookmarks will be lost when this session closes." : "Progress and bookmarks stay in this browser. Clearing browser data removes them."}</p></article></div></>;
}
