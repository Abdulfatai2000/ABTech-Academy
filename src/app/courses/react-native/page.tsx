import Link from "next/link";
import { Check, Smartphone } from "lucide-react";
import {
  Breadcrumbs,
  ButtonLink,
  LearningCallout,
} from "@/components/ui/primitives";
import { reactNative, modules } from "@/data/courses";
import { lessons } from "@/data/lessons";
import { projects } from "@/data/projects";
export const metadata = { title: "React Native Masterclass" };
export default function CoursePage() {
  return (
    <div className="container section">
      <Breadcrumbs
        items={[
          { label: "Courses", href: "/courses" },
          { label: "React Native" },
        ]}
      />
      <div className="grid two">
        <div>
          <p className="eyebrow">Your mobile development journey</p>
          <h1>
            React Native
            <br />
            Masterclass
          </h1>
          <p className="lead">{reactNative.description}</p>
          <ButtonLink href="/learn/react-native">Start learning</ButtonLink>
        </div>
        <aside className="card stack">
          <Smartphone size={40} />
          <h3>A clear path, from the ground up</h3>
          <div className="row">
            <span className="badge">{modules.length} levels planned</span>
            <span className="badge">{lessons.length} lessons available</span>
          </div>
          <p className="small">
            {lessons.reduce((sum, lesson) => sum + lesson.minutes, 0)} minutes
            of estimated published reading and practice. Study at your own pace.
          </p>
          <div className="row">
            {reactNative.technologies.map((tech) => (
              <span className="badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <LearningCallout>
            <p className="small">
              Phase 1 includes the beginner learning slice and a full curriculum
              roadmap. Later modules are planned; the practice editor does not
              execute React Native.
            </p>
          </LearningCallout>
        </aside>
      </div>
      <section className="section grid two">
        <div>
          <h2>What you’ll work toward</h2>
          {[
            "Understand JavaScript and React fundamentals",
            "Build native interfaces with reusable components",
            "Handle navigation, data and device capabilities",
            "Test, refine and prepare applications for release",
          ].map((item) => (
            <p className="row small" key={item}>
              <Check size={17} color="var(--teal)" />
              {item}
            </p>
          ))}
        </div>
        <div>
          <h2>Start where you are</h2>
          <p>
            No programming experience is required for Level 0. Bring curiosity
            and a modern browser for reading. Running the examples later
            requires your own React Native / Expo environment.
          </p>
          <p>
            Already know React? Jump straight to the{" "}
            <Link
              className="text-link"
              href="/learn/react-native/lessons/usestate"
            >
              useState example lesson
            </Link>
            . Public lessons are always open to explore.
          </p>
        </div>
      </section>
      <section>
        <p className="eyebrow">The curriculum</p>
        <h2>One connected journey.</h2>
        {modules.map((module, i) => (
          <details className="accordion" key={module.slug}>
            <summary>
              Level {i} · {module.title}{" "}
              <span className="badge" style={{ marginLeft: 12 }}>
                {module.lessonSlugs.length
                  ? `${module.lessonSlugs.length} lessons`
                  : "Planned"}
              </span>
            </summary>
            <p>{module.description}</p>
            <ul className="list">
              {module.objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link
              className="text-link"
              href={`/learn/react-native/modules/${module.slug}`}
            >
              Explore this module →
            </Link>
          </details>
        ))}
      </section>
      <section className="section">
        <p className="eyebrow">Put the ideas together</p>
        <h2>Projects with a purpose.</h2>
        <div className="grid">
          {projects.slice(0, 3).map((project) => (
            <article className="card" key={project.id}>
              <span className="badge">{project.difficulty}</span>
              <h3 style={{ marginTop: 20 }}>{project.title}</h3>
              <p>{project.description}</p>
              <Link className="text-link" href={`/projects#${project.id}`}>
                View project brief →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ButtonLink href="/learn/react-native">Find your first step</ButtonLink>
    </div>
  );
}
