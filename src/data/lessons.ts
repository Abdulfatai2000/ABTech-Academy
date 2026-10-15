import type { Lesson } from "@/types/course";

export const counterCode = `import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 24, gap: 12 }}>
      <Text>Count: {count}</Text>
      <Button title="Add one"
        onPress={() => setCount(previous => previous + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}`;

export const lessons: Lesson[] = [
  {
    slug: "javascript-values",
    title: "Values and variables",
    minutes: 12,
    objectives: [
      "Recognize strings, numbers and booleans",
      "Name values with const and let",
    ],
    steps: [
      {
        id: "welcome",
        title: "Your first building blocks",
        body: "A program is a set of instructions that works with values. A name such as 'Ada' is a string (text). The number 3 is a number. true and false are booleans, which describe yes-or-no conditions. You do not need previous programming experience for this lesson.",
      },
      {
        id: "understand",
        title: "Give a value a name",
        body: "Think of a variable as a labeled container. Instead of repeating a value everywhere, give it a useful name. const creates a binding you cannot reassign; let allows you to reassign it. Choose const by default and use let when reassignment is needed. A const object can still have mutable contents; const protects the binding, not every nested value.",
      },
      {
        id: "see",
        title: "Read your first example",
        body: "Quotes mark text. Numbers have no quotes. console.log asks a JavaScript environment to display a value. Semicolons separate statements in these examples.",
        code: {
          language: "javascript",
          source:
            "const learner = 'Ada';\nlet lessonsRead = 0;\nlessonsRead = lessonsRead + 1;\nconsole.log(learner, lessonsRead);",
          output: "Ada 1",
        },
      },
      {
        id: "practice",
        title: "Make the values yours",
        body: "Work in your own JavaScript environment or write the answer on paper. This reader does not execute code.",
        exercise: {
          instructions:
            "Create a constant named course with the text React Native. Create a mutable variable named minutes with value 10, then add 5 to it.",
          hints: [
            "Text belongs inside quotes.",
            "Reassignment uses the variable name without another let.",
          ],
          solution:
            "const course = 'React Native';\nlet minutes = 10;\nminutes = minutes + 5;",
        },
      },
      {
        id: "check",
        title: "Check your understanding",
        body: "Pick the declaration that allows reassignment.",
        quiz: {
          question: "Which variable can be reassigned?",
          options: ["const score = 0", "let score = 0", "Neither"],
          answer: 1,
          explanation:
            "let allows the score binding to receive a new value. const prevents reassignment of its binding.",
        },
      },
      {
        id: "reflect",
        title: "Your foundation is taking shape",
        body: "You can now identify text, numbers and booleans, and choose const or let. Next, use functions to turn a set of instructions into a reusable action. Marking this lesson complete records reading progress only.",
      },
    ],
  },
  {
    slug: "javascript-functions",
    title: "Functions and arrays",
    minutes: 15,
    objectives: [
      "Call a function with an argument",
      "Transform a list with map",
    ],
    steps: [
      {
        id: "overview",
        title: "Reusable actions and lists",
        body: "A function is a reusable set of instructions. An array is an ordered list of values. Apps combine them constantly: transform a list of task names into labels, calculate totals, or respond to a button press. First read Values and variables if these words feel unfamiliar.",
      },
      {
        id: "understand",
        title: "A recipe with an ingredient",
        body: "A function works like a recipe: its parameter names an ingredient, and the argument is the actual ingredient supplied when you call it. return provides the result. An arrow function is another way to write a function; it is not called until something invokes it.",
      },
      {
        id: "example",
        title: "Transform a list",
        body: "map calls the supplied function once for each item and produces a new array. The original names array stays unchanged. The + operator joins these strings.",
        code: {
          language: "javascript",
          source:
            "const greet = name => 'Hello, ' + name;\nconst names = ['Ada', 'Tunde'];\nconst greetings = names.map(greet);\nconsole.log(greetings);",
          output: "['Hello, Ada', 'Hello, Tunde']",
        },
      },
      {
        id: "practice",
        title: "Double the numbers",
        body: "Try writing the result before checking the solution.",
        exercise: {
          instructions:
            "Use map to turn [1, 2, 3] into [2, 4, 6]. Keep the original array unchanged.",
          hints: ["Multiply each number by 2 inside the callback."],
          solution: "const doubled = [1, 2, 3].map(number => number * 2);",
        },
      },
      {
        id: "check",
        title: "A function or its result?",
        body: "This distinction matters when you wire up buttons later.",
        quiz: {
          question: "Which expression calls greet immediately?",
          options: ["greet", "greet('Ada')", "name => greet(name)"],
          answer: 1,
          explanation:
            "The parentheses call greet now. greet refers to the function, while the arrow expression creates a new callback.",
        },
      },
      {
        id: "summary",
        title: "Ready for components",
        body: "Functions package behavior. Arrays hold lists, and map transforms each item. Next you will use a function to describe a piece of a mobile interface.",
      },
    ],
  },
  {
    slug: "components-and-props",
    title: "Components and props",
    minutes: 15,
    objectives: [
      "Describe an interface using a component",
      "Pass information through props",
    ],
    steps: [
      {
        id: "overview",
        title: "Build an interface in pieces",
        body: "A component is a reusable piece of an interface. React calls your component function to work out what to show. React Native turns native building blocks such as View and Text into a mobile interface. Read Functions and arrays first if function syntax is new.",
      },
      {
        id: "analogy",
        title: "A reusable name badge",
        body: "Imagine printing many name badges with one template. The component is the template; props supply the name on each badge. A parent passes props to a child. Treat props as read-only inputs; changing a prop directly is not how a child updates its parent.",
      },
      {
        id: "example",
        title: "Pass a name to a component",
        body: "JSX describes the interface inside JavaScript. Capitalized names refer to components. Curly braces insert a JavaScript value into JSX. In React Native, visible text belongs inside Text.",
        code: {
          language: "tsx",
          source:
            "import { View, Text } from 'react-native';\n\nfunction Greeting({ name }: { name: string }) {\n  return <Text>Hello, {name}!</Text>;\n}\n\nexport default function App() {\n  return <View><Greeting name=\"Ada\" /></View>;\n}",
          output: "Hello, Ada!",
        },
      },
      {
        id: "practice",
        title: "Make a profile greeting",
        body: "The : { name: string } annotation describes the prop type for TypeScript. It says that name must contain text.",
        exercise: {
          instructions:
            "Change the name prop to your name. Add a second Greeting with another name. Predict what the screen displays.",
          hints: ["Render both Greeting components inside the same View."],
          solution:
            '<View><Greeting name="Ada" /><Greeting name="Tunde" /></View>',
        },
      },
      {
        id: "check",
        title: "Who supplies the prop?",
        body: "Think back to the name badge template.",
        quiz: {
          question: "Where does Greeting receive name from?",
          options: [
            "Its parent component",
            "The phone keyboard automatically",
            "A global variable required by React",
          ],
          answer: 0,
          explanation:
            "The parent renders Greeting and supplies name as a prop. A different parent can reuse the same component with another value.",
        },
      },
      {
        id: "summary",
        title: "From static to interactive",
        body: "Components describe reusable interface pieces, and props carry inputs from a parent. To remember something that changes after a tap, a component needs state. That is your next lesson.",
      },
    ],
  },
  {
    slug: "usestate",
    title: "Making your app interactive with useState",
    minutes: 30,
    objectives: [
      "Explain why ordinary variables do not update the screen",
      "Update number, boolean and text state",
      "Pass a callback to onPress",
      "Plan a bounded water tracker",
    ],
    steps: [
      {
        id: "introduction",
        title: "Give your app a memory",
        body: "A useful app responds to people. A counter remembers taps, a form remembers a name, and a switch remembers whether it is on. In this lesson you will build that memory with useState. You should already recognize JavaScript variables, arrow functions, components, props, and React Native View, Text and Button.",
      },
      {
        id: "objectives",
        title: "What you will learn",
        body: "By the end, explain why a local variable cannot drive a changing interface; declare number, boolean and text state; connect a Button through onPress; and plan a tracker with a maximum value and a reset action. Practice here is self-guided. There is no native runtime or automatic code assessment yet.",
      },
      {
        id: "explanation",
        title: "State tells React something changed",
        body: "Each render is a snapshot of your component. A local variable is recreated when the function runs; assigning to it neither preserves component memory nor asks React to render. useState gives you a current value and a setter. The setter requests another render with updated state. Code still running in the current event handler sees that render’s old snapshot.",
      },
      {
        id: "analogy",
        title: "A scoreboard and its operator",
        body: "Think of count as the score on a scoreboard. setCount is the operator you ask to change it. Writing a number on a scrap of paper does not change the board; asking the operator does. On the next render, React shows the new score. Each mounted component instance has its own state.",
      },
      {
        id: "syntax",
        title: "Read the syntax, piece by piece",
        body: "The square brackets destructure the pair returned by useState. count is the current number; setCount is the setter; 0 is the initial value. Call Hooks at the top level of a component, never inside a condition, loop or event handler. When your next value depends on the previous value, pass an updater function.",
        code: {
          language: "tsx",
          source:
            "const [count, setCount] = useState(0);\n// Ask React to add one to the pending value:\nsetCount(previous => previous + 1);",
          output: "Initial count: 0. One updater requests count: 1.",
        },
      },
      {
        id: "example",
        title: "A complete native counter",
        body: "Read this complete example. onPress receives a function, so the update happens after a tap. Reset sets the next value directly because it does not depend on the previous value. Copy this into an existing Expo React Native project to run it.",
        code: {
          language: "tsx",
          source: counterCode,
          output:
            "Initially: Count: 0. Tap Add one: Count: 1. Tap Reset: Count: 0.",
        },
      },
      {
        id: "boolean",
        title: "Remember a yes-or-no value",
        body: "State can hold a boolean. !previous reverses true and false. The expression after && renders only when visible is true.",
        code: {
          language: "tsx",
          source:
            "import { useState } from 'react';\nimport { View, Text, Button } from 'react-native';\n\nexport default function Hint() {\n  const [visible, setVisible] = useState(false);\n  return (\n    <View>\n      <Button title=\"Toggle hint\"\n        onPress={() => setVisible(previous => !previous)} />\n      {visible && <Text>Use the setter to request a render.</Text>}\n    </View>\n  );\n}",
          output: "The hint starts hidden. Each tap switches its visibility.",
        },
      },
      {
        id: "text",
        title: "Remember what someone types",
        body: "A controlled TextInput receives its displayed value from state. onChangeText supplies the new text to the setter. The greeting then renders from the same value.",
        code: {
          language: "tsx",
          source:
            "import { useState } from 'react';\nimport { View, Text, TextInput } from 'react-native';\n\nexport default function Welcome() {\n  const [name, setName] = useState('');\n  return (\n    <View>\n      <TextInput accessibilityLabel=\"Your name\"\n        value={name} onChangeText={setName} />\n      <Text>Hello, {name || 'friend'}!</Text>\n    </View>\n  );\n}",
          output: "Initially: Hello, friend! Type Ada: Hello, Ada!",
        },
      },
      {
        id: "practice",
        title: "Change the counter yourself",
        body: "Use the practice editor to draft your changes, then run them in your own Expo project. The expected-output panel is a written reference, not the result of your edited code.",
        code: {
          language: "tsx",
          source: counterCode,
          output:
            "Goal: Add five increases by 5. Remove one never produces a negative count.",
        },
        exercise: {
          instructions:
            "Change Add one to Add five. Add a Remove one button that never goes below zero. Keep Reset working.",
          hints: [
            "Use previous => previous + 5 for Add five.",
            "Math.max(0, previous - 1) clamps the value at zero.",
          ],
          solution:
            "setCount(previous => previous + 5);\nsetCount(previous => Math.max(0, previous - 1));",
        },
      },
      {
        id: "debug",
        title: "Find the eager handler",
        body: "A common mistake is calling a setter while rendering instead of passing an event callback. Repeated render-time updates may produce a Too many re-renders error. Read the broken line and describe why it runs too early.",
        code: {
          language: "tsx",
          source: '<Button title="Add" onPress={setCount(count + 1)} />',
          output:
            "Broken example: the setter runs during render, not on a tap.",
        },
        exercise: {
          instructions:
            "Replace the onPress expression with a function that updates the count only after a tap.",
          hints: [
            "Parentheses invoke a function now. An arrow function defers the work.",
          ],
          solution:
            '<Button title="Add" onPress={() => setCount(previous => previous + 1)} />',
        },
      },
      {
        id: "build",
        title: "Mini-project: Daily Water Tracker",
        body: "Build a tracker for a fictional daily target of 8 cups. This is a programming exercise, not a health recommendation. Keep the interface focused on the count and two actions.",
        exercise: {
          instructions:
            "Start at 0. Add one cup per press, stop at 8, reset to 0, and show Target reached when the count is 8. Check the boundary by pressing Add repeatedly and testing Reset.",
          hints: [
            "Use Math.min(8, previous + 1).",
            "Use cups === 8 to decide whether to show the completion message.",
          ],
          solution:
            "const [cups, setCups] = useState(0);\n// Add: setCups(previous => Math.min(8, previous + 1))\n// Reset: setCups(0)\n// In JSX: {cups === 8 && <Text>Target reached</Text>}",
        },
      },
      {
        id: "check-initial",
        title: "Check: initial state",
        body: "You can retry every question. These checks teach concepts; they do not certify code mastery.",
        quiz: {
          question: "What is count on the first render of useState(0)?",
          options: ["undefined", "0", "1"],
          answer: 1,
          explanation:
            "The argument 0 supplies the initial value. Later renders use the state React stores for this component.",
        },
      },
      {
        id: "check-setter",
        title: "Check: changing the screen",
        body: "Recall the scoreboard analogy.",
        quiz: {
          question: "Which action requests a render with a new count?",
          options: [
            "Assigning to an ordinary local variable",
            "Calling setCount",
            "Changing a comment",
          ],
          answer: 1,
          explanation:
            "The setter requests a state update. Reassigning a plain local variable does not notify React.",
        },
      },
      {
        id: "check-updater",
        title: "Check: previous state",
        body: "Consider two increments queued in the same event.",
        quiz: {
          question: "Which update safely builds on the pending previous count?",
          options: [
            "setCount(previous => previous + 1)",
            "count = count + 1",
            "useState(count + 1) inside onPress",
          ],
          answer: 0,
          explanation:
            "The updater receives pending state. Assignment does not request a render, and Hooks must not be called inside event handlers.",
        },
      },
      {
        id: "check-boolean",
        title: "Check: toggling state",
        body: "Your hint is currently visible.",
        quiz: {
          question: "What does previous => !previous do to true?",
          options: ["Keeps true", "Returns false", "Returns the text false"],
          answer: 1,
          explanation:
            "The ! operator negates a boolean. true becomes false, so the conditional hint disappears on the next render.",
        },
      },
      {
        id: "check-handler",
        title: "Check: event callbacks",
        body: "Choose the handler that waits for interaction.",
        quiz: {
          question: "Which onPress value waits for a tap?",
          options: ["setCount(0)", "() => setCount(0)", "count"],
          answer: 1,
          explanation:
            "An arrow function is a callback that React Native can invoke after a press. setCount(0) calls the setter immediately during render.",
        },
      },
      {
        id: "summary",
        title: "You can make an interface respond",
        body: "State is component memory. Setters request renders; each render sees a snapshot. Updaters are useful when the next value depends on the previous one. Events receive callbacks. You have explored numbers, booleans, text, debugging and a bounded tracker. Mark this lesson read when ready; practical mastery still needs real execution and review. Continue to the native-components module to see the next planned topics.",
      },
    ],
  },
];
export const getLesson = (slug: string) =>
  lessons.find((lesson) => lesson.slug === slug);
