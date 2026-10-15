"use client";
import { useState } from "react";
const tokens =
  /(\/\/[^\n]*|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|\b(?:import|from|export|default|function|const|let|return|true|false)\b|\b\d+\b)/g;
export function CodeBlock({
  source,
  language = "tsx",
}: {
  source: string;
  language?: string;
}) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(source);
      setStatus("Copied");
    } catch {
      setStatus("Copy unavailable. Select and copy the code below.");
    }
  }
  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>{language} · Example code</span>
        <button type="button" onClick={copy}>
          Copy code
        </button>
      </div>
      {status && (
        <p
          role="status"
          className="small"
          style={{ padding: "8px 16px", color: "#d7e7fa", margin: 0 }}
        >
          {status}
        </p>
      )}
      <pre tabIndex={0} aria-label={`${language} code example`}>
        <code>
          {source.split(tokens).map((part, index) => {
            const kind = part.startsWith("//")
              ? "comment"
              : /^["']/.test(part)
                ? "string"
                : /^\d+$/.test(part)
                  ? "number"
                  : /^(import|from|export|default|function|const|let|return|true|false)$/.test(
                        part,
                      )
                    ? "keyword"
                    : "plain";
            return (
              <span key={index} className={`token-${kind}`}>
                {part}
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
