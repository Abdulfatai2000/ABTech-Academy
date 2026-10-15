import {
  ArrowRight,
  BookOpen,
  Check,
  CodeXml,
  GitBranch,
  Layers,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/primitives";
import { SpotlightArticle } from "@/components/ui/spotlight-article";
import { reactNative } from "@/data/courses";
import "@/styles/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero container">
        <div>
          <p className="eyebrow">
            <span className="live-dot" /> A new way to learn development
          </p>
          <h1>
            Small steps.
            <br />
            Real skills.
            <br />
            <span>Limitless possibilities.</span>
          </h1>
          <p className="lead">
            Go from “where do I start?” to “look what I built.” At ABTech
            Academy, you learn one concept at a time, practise it with guided
            activities, and turn new skills into projects you can proudly share.
            Start with React Native, even if React is completely new to you.
          </p>
          <div className="row hero-actions">
            <ButtonLink href="/learn/react-native">Start learning</ButtonLink>
            <ButtonLink href="/courses" secondary>
              Explore courses
            </ButtonLink>
          </div>
          <div className="row hero-notes">
            <span>
              <Check size={14} /> Beginner friendly
            </span>
            <span>
              <Check size={14} /> Learn at your pace
            </span>
            <span>
              <Check size={14} /> No account needed
            </span>
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Illustration of a learning journey from JavaScript to a mobile app"
        >
          <div className="visual-label">
            <CodeXml size={17} /> YOUR NEXT CHAPTER STARTS HERE
          </div>
          <div className="journey-mini">
            <div>
              <span className="mini-node">
                <Check size={17} />
              </span>
              <span>
                Understand the basics<small>JavaScript essentials</small>
              </span>
            </div>
            <div>
              <span className="mini-node active">
                <CodeXml size={17} />
              </span>
              <span>
                Make it interactive<small>Components, props & state</small>
              </span>
            </div>
            <div>
              <span className="mini-node">
                <Smartphone size={17} />
              </span>
              <span>
                Build something yours<small>Your first mobile app</small>
              </span>
            </div>
          </div>
          <div className="code-window">
            <div className="window-bar">
              <span>● ● ●</span>
              <span>MyFirstApp.tsx</span>
              <span>React Native</span>
            </div>
            <pre>
              <code>
                <span className="code-purple">export default function</span>{" "}
                App() {"{"}
                <br /> <span className="code-purple">return</span> (<br /> &lt;
                <span className="code-teal">View</span>&gt;
                <br /> &lt;<span className="code-teal">Text</span>&gt;Hello,
                possibility.&lt;/<span className="code-teal">Text</span>&gt;
                <br /> &lt;/<span className="code-teal">View</span>&gt;
                <br /> );
                <br />
                {"}"}
              </code>
            </pre>
          </div>
          <div className="visual-footer">
            <span className="live-dot" /> Every expert started with a first
            line.
          </div>
        </div>
      </section>
      <div className="brand-strip">
        <div className="container row between">
          <strong>
            Learn. <span>Build.</span> Master.
          </strong>
          <span>Understand the why.</span>
          <span>Practice the how.</span>
          <span>Build what’s next.</span>
        </div>
      </div>
      <section className="section container">
        <div className="row between section-heading">
          <div>
            <p className="eyebrow">One path. A world of possibilities.</p>
            <h2>
              Your first course.
              <br />
              Your next big step.
            </h2>
          </div>
          <Link href="/courses" className="text-link">
            Browse all courses <ArrowRight size={17} />
          </Link>
        </div>
        <article className="featured">
          <div className="featured-art">
            <Smartphone size={100} strokeWidth={1} />
            <span className="orbit-label">React Native</span>
            <span className="small">ONE CODEBASE. TWO PLATFORMS.</span>
          </div>
          <div className="featured-copy">
            <div className="row">
              <span className="badge">First course</span>
              <span className="small muted">Beginner → Advanced pathway</span>
            </div>
            <h2>
              React Native
              <br />
              Masterclass
            </h2>
            <p>{reactNative.description}</p>
            <div className="row small muted">
              <span>{reactNative.levels.length} curriculum levels</span>
              <span>·</span>
              <span>Guided projects</span>
              <span>·</span>
              <span>Self-paced</span>
            </div>
            <div className="row" style={{ marginTop: 26 }}>
              <ButtonLink href="/courses/react-native">
                Explore the masterclass
              </ButtonLink>
            </div>
          </div>
        </article>
      </section>
      <section className="section how-section" id="how-it-works">
        <div className="container">
          <p className="eyebrow">Built around the way you learn</p>
          <h2>
            Less overwhelm.
            <br />
            More “I get it.”
          </h2>
          <div className="grid">
            {[
              {
                icon: BookOpen,
                title: "Learn one clear concept",
                text: "Short explanations start with the why, then show the how. Everyday examples and clear code walk-throughs help beginners understand each idea before moving forward.",
              },
              {
                icon: CodeXml,
                title: "Put your ideas to work",
                text: "See what the code does, change examples yourself, answer knowledge checks, and tackle small challenges. Hints help you reason through mistakes instead of memorizing solutions.",
              },
              {
                icon: Layers,
                title: "Build your confidence",
                text: "Turn concepts into real app features as you progress. Revisit lessons, follow the connected roadmap, and gradually take ownership of bigger projects.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <SpotlightArticle className="learning-feature" key={title}>
                <div className="row between">
                  <span className="icon-box">
                    <Icon size={24} />
                  </span>
                  <span className="feature-number">0{i + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </SpotlightArticle>
            ))}
          </div>
        </div>
      </section>
      <section className="section container experience-section" id="inside-a-lesson">
        <div className="experience-copy">
          <p className="eyebrow">Take a look inside a lesson</p>
          <h2>
            Understand it.
            <br />
            Then make it yours.
          </h2>
          <p className="lead">
            A great lesson should leave you able to explain a concept, not just
            copy some code. That is why our lessons move from simple explanations
            to working examples, small practice tasks, and helpful feedback.
          </p>
          <p>
            New to React? You can start with the JavaScript essentials and
            learn the React ideas you need as you go. Already familiar? Follow
            the roadmap to the topics you want to strengthen.
          </p>
          <ButtonLink href="/learn/react-native/lessons/usestate" secondary>
            Explore a sample lesson
          </ButtonLink>
        </div>
        <div className="experience-flow">
          <p className="experience-label">THE LEARNING LOOP</p>
          <ol>
            {[
              ["01", "Understand", "Start with the idea in everyday language."],
              ["02", "Explore", "Read a real React Native example, line by line."],
              ["03", "Practise", "Edit a practice draft and solve a focused challenge."],
              ["04", "Reflect", "Check your reasoning and revisit what needs work."],
            ].map(([number, title, description]) => (
              <li key={number}>
                <span className="experience-step-number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Check size={17} aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="experience-footnote">
            Current lessons provide code examples and written output references.
            Live React Native execution is planned for a later phase.
          </p>
        </div>
      </section>
      <section className="section container grid two">
        <div>
          <p className="eyebrow">A little direction goes a long way</p>
          <h2>
            Always know
            <br />
            your next step.
          </h2>
          <p className="lead">
            A visual, connected roadmap makes the journey from JavaScript basics to
            production-ready mobile development less intimidating. Explore
            modules in order, spot the next practical milestone, and pick up
            where you left off on this device.
          </p>
          <div className="stack small">
            <span className="row">
              <Check size={17} /> Follow a beginner-to-advanced path
            </span>
            <span className="row">
              <Check size={17} /> Save reading progress in this browser
            </span>
            <span className="row">
              <Check size={17} /> Explore without locked doors
            </span>
          </div>
          <div style={{ marginTop: 25 }}>
            <ButtonLink href="/learn/react-native" secondary>
              Explore the roadmap
            </ButtonLink>
          </div>
        </div>
        <div className="roadmap-teaser">
          <GitBranch size={32} />
          <p className="eyebrow">Your journey, connected</p>
          {[
            "JavaScript Essentials",
            "React Fundamentals",
            "React Native Core Components",
            "Styling and Layouts",
          ].map((title, i) => (
            <div className="teaser-node" key={title}>
              <span>0{i}</span>
              {title}
              <ArrowRight size={15} />
            </div>
          ))}
        </div>
      </section>
      <section className="section project-band">
        <div className="container">
          <div className="row between section-heading">
            <div>
              <p className="eyebrow">From concepts to creations</p>
              <h2>
                Make something
                <br />
                you can call your own.
              </h2>
            </div>
            <ButtonLink href="/projects" secondary>
              Explore project briefs
            </ButtonLink>
          </div>
          <div className="grid">
            {[
              [
                "01",
                "Counter App",
                "Learn how state changes a mobile screen, then wire buttons to an interactive counter.",
              ],
              [
                "02",
                "Task Manager",
                "Put components, forms, navigation, and stored data together in an everyday productivity app.",
              ],
              [
                "03",
                "CampusCare",
                "Design an end-to-end campus support app that combines multiple real-world mobile skills.",
              ],
            ].map(([n, title, text]) => (
              <SpotlightArticle className="project-preview" key={title}>
                <span className="project-index">PROJECT / {n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/projects" className="text-link">
                  View the brief <ArrowRight size={16} />
                </Link>
              </SpotlightArticle>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">An academy that grows with you</p>
        <h2>
          Start with mobile.
          <br />
          Keep your curiosity open.
        </h2>
        <p>
          ABTech Academy begins with React Native. Our long-term vision is a home
          for clear, hands-on courses across programming languages, web
          development, and mobile technologies. Future courses are shown as
          upcoming—not as lessons that are already published.
        </p>
        <div className="row future-tags">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Python",
            "Java",
            "Kotlin",
            "Flutter",
          ].map((name) => (
            <Link href="/courses" key={name}>
              {name}
              <span>Coming soon</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="container closing">
        <p className="eyebrow">Your first step is a good place to start</p>
        <h2>
          You don’t need to know everything.
          <br />
          Just be ready to learn.
        </h2>
        <ButtonLink href="/learn/react-native/lessons/javascript-values">
          Let’s build your foundation
        </ButtonLink>
      </section>
    </div>
  );
}
