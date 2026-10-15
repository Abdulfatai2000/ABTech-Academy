import { Catalog } from "@/components/courses/catalog";
import { Breadcrumbs } from "@/components/ui/primitives";
import "@/styles/home.css";
export const metadata = { title: "Explore courses" };
export default function CoursesPage() {
  return (
    <div className="container section">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Courses" }]}
      />
      <p className="eyebrow">Curiosity starts here</p>
      <h1>What will you build next?</h1>
      <p className="lead">
        Choose a path, start with the essentials, and build your confidence one
        lesson at a time.
      </p>
      <Catalog />
    </div>
  );
}
