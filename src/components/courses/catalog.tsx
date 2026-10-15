"use client";
import { useState } from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "./course-card";
import { EmptyState } from "@/components/ui/primitives";
import { filterCourses } from "@/lib/catalog";
export function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All courses");
  const results = filterCourses(courses, query, category);
  return (
    <>
      <label htmlFor="course-search" className="small">
        Find your next skill
      </label>
      <input
        id="course-search"
        className="field"
        type="search"
        placeholder="Search courses, skills, or technologies…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="filters" aria-label="Course categories">
        {[
          "All courses",
          "Mobile development",
          "Web development",
          "Programming",
        ].map((value) => (
          <button
            className="filter"
            key={value}
            aria-pressed={value === category}
            onClick={() => setCategory(value)}
          >
            {value}
          </button>
        ))}
      </div>
      <p className="small muted" role="status">
        {results.length} {results.length === 1 ? "course" : "courses"} found
      </p>
      {results.length ? (
        <div className="grid">
          {results.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState title="No courses match yet">
          Try another skill or{" "}
          <button
            className="text-link"
            onClick={() => {
              setQuery("");
              setCategory("All courses");
            }}
          >
            clear your filters
          </button>
          .
        </EmptyState>
      )}
    </>
  );
}
