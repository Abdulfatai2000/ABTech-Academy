import { notFound } from "next/navigation";
import { modules } from "@/data/courses";
import { ModuleOverview } from "@/components/learning/module-overview";
import "@/styles/learning.css";
export function generateStaticParams() { return modules.map(module => ({ moduleSlug: module.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ moduleSlug: string }> }) { const { moduleSlug } = await params; return { title: modules.find(module => module.slug === moduleSlug)?.title ?? "Module not found" }; }
export default async function ModulePage({ params }: { params: Promise<{ moduleSlug: string }> }) { const { moduleSlug } = await params; const selectedModule = modules.find(item => item.slug === moduleSlug); if (!selectedModule) notFound(); return <div className="container section"><ModuleOverview module={selectedModule} /></div>; }
