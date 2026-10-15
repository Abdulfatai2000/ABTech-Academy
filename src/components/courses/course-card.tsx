import { ArrowUpRight, Braces, Smartphone } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/types/course";
export function CourseCard({ course }: { course: Course }) {
  return <article className="card course-card"><div className={`course-art ${course.available ? "available" : ""}`} aria-hidden="true">{course.category === "Mobile development" ? <Smartphone size={52} strokeWidth={1.25} /> : <Braces size={52} strokeWidth={1.25} />}<span>{course.available ? "BUILD FOR iOS & ANDROID" : course.category.toUpperCase()}</span></div><div className="row between"><span className="badge">{course.difficulty}</span><span className="small muted">{course.available ? "Start today" : "Coming soon"}</span></div><h3 style={{ marginTop: 20 }}>{course.title}</h3><p className="small">{course.description}</p>{course.available ? <Link href={`/courses/${course.slug}`} className="text-link">Explore course <ArrowUpRight size={17} /></Link> : <span className="small muted">In the academy’s future curriculum</span>}</article>;
}
