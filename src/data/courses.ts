import type { Course, Module } from "@/types/course";

const curriculum = [
  ["javascript-essentials", "JavaScript Essentials", "Understand values, variables and functions before writing your first component.", "Values and variables", "Functions and arrays"],
  ["react-fundamentals", "React Fundamentals", "Think in components and give your interface memory with state.", "Components and props", "Making your app interactive with useState"],
  ["native-components", "React Native Core Components", "Build native interfaces with the essential React Native building blocks.", "View, Text and Button", "Lists and images"],
  ["styling-layouts", "Styling and Layouts", "Create readable, responsive screens using styles and Flexbox.", "StyleSheet and design tokens", "Flexbox layouts"],
  ["navigation-storage", "Navigation, Forms, and Storage", "Connect screens, collect input and preserve useful data.", "Navigation patterns", "Forms and local storage"],
  ["typescript-apis", "TypeScript and APIs", "Model your data and handle network requests with confidence.", "Typed components", "Loading and error states"],
  ["authentication-backend", "Authentication and Backend Integration", "Understand sessions and connect your application to a backend.", "Authentication flows", "Backend integration"],
  ["device-features", "Device Features and Native APIs", "Explore device capabilities with thoughtful permission handling.", "Camera and location", "Permissions and fallbacks"],
  ["architecture-testing", "Advanced Architecture and Testing", "Organize growing applications and verify important behavior.", "Application architecture", "Component and integration testing"],
  ["deployment-production", "Deployment and Production Applications", "Prepare an application for distribution and ongoing maintenance.", "Build and release workflows", "Production readiness"],
];
export const modules: Module[] = curriculum.map(([slug, title, description, ...topics], index) => ({
  slug, title, description, objectives: topics, prerequisites: index ? [curriculum[index - 1][0]] : [],
  lessonSlugs: index === 0 ? ["javascript-values", "javascript-functions"] : index === 1 ? ["components-and-props", "usestate"] : [],
  plannedTopics: index > 1 ? topics : [], projectId: ["profile", "counter", "profile", "profile", "tasks", "weather", "campuscare", "campuscare", "expenses", "campuscare"][index],
}));
export const reactNative: Course = {
  slug: "react-native", title: "React Native Masterclass", category: "Mobile development", difficulty: "Beginner",
  description: "Your path from your first line of JavaScript to thoughtful, production-ready mobile applications. Learn one concept. Put it into practice. Keep building.",
  available: true, technologies: ["JavaScript", "React", "React Native", "Expo", "TypeScript"],
  levels: modules.map((module, number) => ({ number, title: module.title, modules: [module] })),
};
export const courses: Course[] = [reactNative, ...([
  ["javascript", "JavaScript Foundations", "Programming"], ["typescript", "TypeScript Essentials", "Programming"],
  ["react", "React for the Web", "Web development"], ["nextjs", "Next.js Applications", "Web development"],
  ["python", "Python Foundations", "Programming"], ["java", "Java Fundamentals", "Programming"],
  ["kotlin", "Kotlin for Android", "Mobile development"], ["flutter", "Flutter Development", "Mobile development"],
] as const).map(([slug, title, category]) => ({ slug, title, category, difficulty: "Beginner" as const, description: `A focused learning path for ${title.toLowerCase()}. Join us as the academy grows.`, available: false, technologies: [], levels: [] }))];
