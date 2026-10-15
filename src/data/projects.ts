import type { Project } from "@/types/course";
export const projects: Project[] = [
  {
    id: "profile",
    title: "Personal Profile App",
    description:
      "Introduce yourself with a readable mobile profile and reusable information sections.",
    difficulty: "Beginner",
    skills: ["Components", "Props", "Styling"],
    moduleSlug: "native-components",
    milestones: [
      "Sketch a profile with a name, biography and interests.",
      "Render each section using View and Text.",
      "Check readability at narrow screen sizes.",
    ],
  },
  {
    id: "counter",
    title: "Counter App",
    description:
      "Give a simple interface memory, then grow it into a bounded daily water tracker.",
    difficulty: "Beginner",
    skills: ["useState", "Events", "Conditional rendering"],
    moduleSlug: "react-fundamentals",
    milestones: [
      "Start a counter at zero and add one per press.",
      "Add Reset and a decrement that stops at zero.",
      "Build the lesson’s tracker and check its upper boundary.",
    ],
  },
  {
    id: "tasks",
    title: "Task Manager",
    description:
      "Plan an everyday task list with input, completion states and local persistence.",
    difficulty: "Intermediate",
    skills: ["Lists", "Forms", "Storage"],
    moduleSlug: "navigation-storage",
    milestones: [
      "Define a task model and render a list.",
      "Add, complete and remove tasks.",
      "Persist tasks and handle empty or invalid saved data.",
    ],
  },
  {
    id: "weather",
    title: "Weather App",
    description:
      "Design a city weather experience that handles loading, empty results and failed requests.",
    difficulty: "Intermediate",
    skills: ["TypeScript", "APIs", "Error handling"],
    moduleSlug: "typescript-apis",
    milestones: [
      "Define typed weather data and a sample response.",
      "Connect a chosen weather provider in your own project.",
      "Make loading, no-result and network-error states understandable.",
    ],
  },
  {
    id: "expenses",
    title: "Expense Tracker",
    description:
      "Organize expense records and verify totals with meaningful tests.",
    difficulty: "Advanced",
    skills: ["Architecture", "Data modeling", "Testing"],
    moduleSlug: "architecture-testing",
    milestones: [
      "Model expenses with an amount, category and date.",
      "Calculate totals using integer minor currency units.",
      "Test editing, deleting, empty lists and rounding boundaries.",
    ],
  },
  {
    id: "campuscare",
    title: "CampusCare Capstone",
    description:
      "Plan a campus issue-reporting app that brings navigation, backend data and device features together.",
    difficulty: "Advanced",
    skills: ["Authentication", "Native APIs", "Deployment"],
    moduleSlug: "deployment-production",
    milestones: [
      "Map reporting and status-review journeys.",
      "Design authenticated data access and permission fallbacks.",
      "Prepare a tested release checklist and document limitations.",
    ],
  },
];
