import { notFound } from "next/navigation";
import { getLesson, lessons } from "@/data/lessons";
import { modules } from "@/data/courses";
import { LessonWorkspace } from "@/components/learning/lesson-workspace";
import "@/styles/learning.css";
type Props = { params: Promise<{ lessonSlug: string }>; searchParams: Promise<{ step?: string | string[] }> };
export async function generateMetadata({ params }: Props) { const { lessonSlug } = await params; return { title: getLesson(lessonSlug)?.title ?? "Lesson not found" }; }
export default async function LessonPage({ params, searchParams }: Props) { const { lessonSlug } = await params; const { step } = await searchParams; const lesson = getLesson(lessonSlug); const parent = modules.find(item => item.lessonSlugs.includes(lessonSlug)); if (!lesson || !parent) notFound(); return <LessonWorkspace key={lesson.slug} lesson={lesson} parent={parent} requestedStep={typeof step === "string" ? step : undefined} nextLesson={lessons[lessons.indexOf(lesson) + 1]} />; }
