import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({
  language,
  value,
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-[#3a3a3a]">
      {/* Header */}
      <div className="flex flex-col items-start gap-2 bg-[#1d1d1d] px-3 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:py-2">
        <span className="text-xs font-mono text-gray-400 sm:text-sm">
          {language || "code"}
        </span>
        <button
          onClick={copyCode}
          className="w-full rounded-lg px-2.5 py-1.5 text-xs text-gray-300 transition hover:bg-[#303030] sm:w-auto sm:px-3 sm:py-1 sm:text-sm"
        >
          {copied ? (
            <span className="flex items-center justify-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-green-400 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </span>
          ) : (
            <span className="flex items-center justify-center gap-1.5">
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy
            </span>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language || "text"}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            background: "#282C34",
            fontSize: "12px",
            padding: "12px 14px",
            minHeight: "40px",
          }}
          codeTagProps={{
            style: {
              fontSize: "inherit",
              fontFamily: "'Fira Code', 'Courier New', monospace",
            }
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {value || " "}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;