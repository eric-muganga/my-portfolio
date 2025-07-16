"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa";

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  children,
  language = "javascript",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="my-6 rounded-lg bg-gray-900 border border-gray-700 overflow-hidden">
      {/* Header with filename and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {filename && (
            <span className="text-sm text-gray-300 font-mono ml-2">
              {filename}
            </span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <FaCheck className="text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <FaCopy />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.875rem",
          }}
          lineNumberStyle={{
            color: "#6b7280",
            fontSize: "0.75rem",
            minWidth: "2.5em",
            paddingRight: "1em",
          }}
          wrapLongLines={true}
        >
          {children.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
