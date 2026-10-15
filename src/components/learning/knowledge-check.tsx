"use client";
import { useId, useState } from "react";
import type { Quiz } from "@/types/course";
export function KnowledgeCheck({ quiz }: { quiz: Quiz }) {
  const id = useId();
  const [answer, setAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  return (
    <form
      className="card"
      onSubmit={(event) => {
        event.preventDefault();
        if (answer !== null) setChecked(true);
      }}
    >
      <fieldset style={{ border: 0, padding: 0, margin: 0 }}>
        <legend>
          <strong>{quiz.question}</strong>
        </legend>
        <div className="quiz-options">
          {quiz.options.map((option, index) => (
            <label className="quiz-option" key={option}>
              <input
                type="radio"
                name={id}
                value={index}
                checked={answer === index}
                onChange={() => {
                  setAnswer(index);
                  setChecked(false);
                }}
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
      <button className="button" disabled={answer === null}>
        Check answer
      </button>
      {checked && (
        <div role="status" className="callout" style={{ marginTop: 20 }}>
          <strong>
            {answer === quiz.answer
              ? "That’s right."
              : "Not quite. Let’s work through it."}
          </strong>
          <p>{quiz.explanation}</p>
          {answer !== quiz.answer && (
            <p className="small">Choose another answer and try again.</p>
          )}
        </div>
      )}
    </form>
  );
}
