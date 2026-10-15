export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Category = "Mobile development" | "Web development" | "Programming";
export interface CodeExample {
  language: "tsx" | "javascript";
  source: string;
  output: string;
}
export interface Exercise {
  instructions: string;
  hints: string[];
  solution?: string;
}
export interface Quiz {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}
export interface LearningStep {
  id: string;
  title: string;
  body: string;
  code?: CodeExample;
  exercise?: Exercise;
  quiz?: Quiz;
}
export interface Lesson {
  slug: string;
  title: string;
  minutes: number;
  objectives: string[];
  steps: LearningStep[];
}
export interface Module {
  slug: string;
  title: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  lessonSlugs: string[];
  plannedTopics: string[];
  projectId?: string;
}
export interface Level {
  number: number;
  title: string;
  modules: Module[];
}
export interface Course {
  slug: string;
  title: string;
  category: Category;
  difficulty: Difficulty;
  description: string;
  available: boolean;
  technologies: string[];
  levels: Level[];
}
export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  skills: string[];
  moduleSlug: string;
  milestones: string[];
}
export interface LearningProgress {
  version: 1;
  completed: string[];
  bookmarks: string[];
  steps: Record<string, number>;
  lastLesson?: string;
}
