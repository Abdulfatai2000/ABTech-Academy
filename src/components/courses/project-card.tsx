import Link from "next/link";
import { FolderCode } from "lucide-react";
import type { Project } from "@/types/course";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" id={project.id} style={{ scrollMarginTop: 30 }}>
      <div className="row between">
        <span className="icon-box">
          <FolderCode size={25} />
        </span>
        <span className="badge">{project.difficulty}</span>
      </div>
      <h2 style={{ fontSize: "1.5rem" }}>{project.title}</h2>
      <p>{project.description}</p>
      <div className="row">
        {project.skills.map((skill) => (
          <span className="badge" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <details className="accordion">
        <summary>Explore project milestones</summary>
        <ol className="list">
          {project.milestones.map((milestone) => (
            <li key={milestone}>{milestone}</li>
          ))}
        </ol>
        <p className="small">
          Self-guided project brief. Submissions, execution and assessment are
          not available yet.
        </p>
      </details>
      <Link
        className="text-link"
        style={{ marginTop: 20 }}
        href={`/learn/react-native/modules/${project.moduleSlug}`}
      >
        Explore the related module →
      </Link>
      {project.id === "counter" && (
        <p style={{ marginTop: 12, marginBottom: 0 }}>
          <Link
            className="text-link"
            href="/learn/react-native/lessons/usestate?step=build"
          >
            Open the guided mini-project →
          </Link>
        </p>
      )}
    </article>
  );
}
