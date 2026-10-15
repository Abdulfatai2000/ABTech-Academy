import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/courses/project-card";
import { Breadcrumbs } from "@/components/ui/primitives";
export const metadata = { title: "Project library" };
export default function ProjectsPage() { return <div className="container section"><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Projects" }]} /><p className="eyebrow">Learn it. Make it yours.</p><h1>Small ideas.<br />Real things to build.</h1><p className="lead">Turn concepts into applications with clear project briefs and practical milestones. Start with the counter, then explore what comes next.</p><p className="small muted" style={{ marginBottom: 35 }}>These are self-guided briefs. The Counter App includes a published guided activity; later modules are curriculum previews.</p><div className="grid two">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></div>; }
