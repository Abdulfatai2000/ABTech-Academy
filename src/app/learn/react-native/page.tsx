import { Breadcrumbs } from "@/components/ui/primitives";
import { Roadmap } from "@/components/learning/roadmap";
import "@/styles/learning.css";
export const metadata = { title: "React Native learning roadmap" };
export default function RoadmapPage() { return <div className="container section"><Breadcrumbs items={[{ label: "Courses", href: "/courses" }, { label: "React Native", href: "/courses/react-native" }, { label: "Roadmap" }]} /><p className="eyebrow">React Native Masterclass</p><h1>Your learning journey.</h1><p className="lead">From your first variable to your first release. One connected path, taken one step at a time.</p><Roadmap /></div>; }
