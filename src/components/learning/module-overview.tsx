"use client";
import Link from "next/link";
import { CheckCircle2, Circle } from "lucide-react";
import { modules } from "@/data/courses";
import { lessons } from "@/data/lessons";
import { projects } from "@/data/projects";
import { useProgress } from "@/hooks/use-progress";
import {
  Breadcrumbs,
  ButtonLink,
  LearningCallout,
} from "@/components/ui/primitives";
import type { Module } from "@/types/course";
export function ModuleOverview({ module }: { module: Module }) {
  const { progress, temporary } = useProgress();
  const content = module.lessonSlugs.flatMap(
    (slug) => lessons.find((lesson) => lesson.slug === slug) ?? [],
  );
  const next =
    content.find((lesson) => !progress.completed.includes(lesson.slug)) ??
    content[0];
  const project = projects.find((item) => item.id === module.projectId);
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Roadmap", href: "/learn/react-native" },
          { label: module.title },
        ]}
      />
      <p className="eyebrow">
        Level {modules.findIndex((item) => item.slug === module.slug)} · React
        Native Masterclass
      </p>
      <h1>{module.title}</h1>
      <p className="lead">{module.description}</p>
      <div className="row">
        <span className="badge">
          {content.length
            ? `${content.length} lessons available`
            : "Lessons planned"}
        </span>
        {content.length > 0 && (
          <span className="small muted">
            About {content.reduce((total, lesson) => total + lesson.minutes, 0)}{" "}
            minutes · self-paced
          </span>
        )}
      </div>
      <div className="grid two" style={{ marginTop: 40 }}>
        <div>
          <h2>Your next steps</h2>
          {content.length ? (
            <ol className="module-lessons">
              {content.map((lesson, index) => (
                <li key={lesson.slug}>
                  <Link
                    className="lesson-row"
                    href={`/learn/react-native/lessons/${lesson.slug}`}
                  >
                    {progress.completed.includes(lesson.slug) ? (
                      <CheckCircle2
                        size={22}
                        color="var(--teal)"
                        aria-label="Read"
                      />
                    ) : (
                      <Circle size={22} aria-hidden="true" />
                    )}
                    <span>
                      <strong>
                        {index + 1}. {lesson.title}
                      </strong>
                      <span className="small muted">
                        {lesson.minutes} min · {lesson.steps.length} focused
                        steps
                      </span>
                    </span>
                    <span className="badge">
                      {progress.completed.includes(lesson.slug)
                        ? "Read"
                        : "Open"}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          ) : (
            <LearningCallout>
              <h3>This milestone is on the horizon</h3>
              <p>
                These lessons are not published yet. Explore the planned topics
                below, or continue with the beginner lessons.
              </p>
              <ul className="list">
                {module.plannedTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <Link
                className="text-link"
                href="/learn/react-native/lessons/javascript-values"
              >
                Open the first available lesson →
              </Link>
            </LearningCallout>
          )}
          {next && (
            <ButtonLink href={`/learn/react-native/lessons/${next.slug}`}>
              {content.every((lesson) =>
                progress.completed.includes(lesson.slug),
              )
                ? "Review this module"
                : "Continue learning"}
            </ButtonLink>
          )}
          <p className="small muted" style={{ marginTop: 18 }}>
            {temporary
              ? "Storage is unavailable; progress is temporary."
              : "Completion records reading in this browser, not assessed mastery."}
          </p>
        </div>
        <aside className="stack">
          <div className="card">
            <h3>Learning objectives</h3>
            <ul className="list">
              {module.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
            <h3>Before you begin</h3>
            {module.prerequisites.length ? (
              module.prerequisites.map((slug) => (
                <p key={slug} className="small">
                  Recommended:{" "}
                  <Link
                    className="text-link"
                    href={`/learn/react-native/modules/${slug}`}
                  >
                    {modules.find((item) => item.slug === slug)?.title}
                  </Link>
                </p>
              ))
            ) : (
              <p>
                No programming experience needed. Bring a browser and your
                curiosity.
              </p>
            )}
          </div>
          {project && (
            <div className="card">
              <p className="eyebrow">Project connection</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="text-link" href={`/projects#${project.id}`}>
                Explore project milestones →
              </Link>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}
