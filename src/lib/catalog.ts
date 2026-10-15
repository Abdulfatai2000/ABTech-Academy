import type { Course } from "../types/course";
export function filterCourses(courses: Course[], query: string, category: string) {
  const search = query.trim().toLowerCase();
  return courses.filter(course => (category === "All courses" || course.category === category) && [course.title, course.description, ...course.technologies].join(" ").toLowerCase().includes(search));
}
