"use client";
import { useState } from "react";
export interface PreviewAdapter {
  mode: "reference" | "expo-snack";
  title: string;
}
export function ErrorFeedback({ message }: { message: string }) {
  return (
    <p role="status" className="small error-feedback">
      {message}
    </p>
  );
}
export function MobilePreview({ output }: { output: string }) {
  return (
    <div className="mobile-preview">
      <p className="eyebrow">Expected behavior</p>
      <p>{output}</p>
      <span className="small muted">Written reference · not live output</span>
    </div>
  );
}
export function Playground({
  initialCode,
  output,
}: {
  initialCode: string;
  output: string;
}) {
  const [code, setCode] = useState(initialCode);
  const [tab, setTab] = useState("editor");
  const [status, setStatus] = useState("");
  return (
    <section className="card exercise">
      <h3>Practice space</h3>
      <p className="small">
        Draft your changes here. This editor does not execute or grade code.
        Drafts last while this step is open; copy your work before leaving.
      </p>
      <div className="row practice-tabs" aria-label="Practice views">
        {["editor", "reference"].map((value) => (
          <button
            className="filter"
            key={value}
            aria-pressed={tab === value}
            onClick={() => setTab(value)}
          >
            {value === "editor" ? "Code editor" : "Expected output"}
          </button>
        ))}
      </div>
      {tab === "editor" ? (
        <>
          <label htmlFor="practice-code" className="small">
            React Native source
          </label>
          <textarea
            id="practice-code"
            className="field practice-editor"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            spellCheck={false}
          />
          <div className="row" style={{ marginTop: 14 }}>
            <button
              className="button secondary small"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(code);
                  setStatus("Draft copied. Run it in your own Expo project.");
                } catch {
                  setStatus(
                    "Copy unavailable. Select and copy the draft manually.",
                  );
                }
              }}
            >
              Copy draft
            </button>
            <button
              className="button secondary small"
              onClick={() => {
                setCode(initialCode);
                setStatus("Example restored.");
              }}
            >
              Reset code
            </button>
          </div>
          <p role="status" className="small" style={{ marginTop: 12 }}>
            {status}
          </p>
        </>
      ) : (
        <MobilePreview output={output} />
      )}
      <p className="small muted">
        Live Expo Snack previews and execution feedback are planned for Phase 2.
      </p>
    </section>
  );
}
