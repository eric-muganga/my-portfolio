"use client";

import CodeBlock from "./CodeBlock";
import InlineCode from "./InlineCode";

interface BlogContentRendererProps {
  content: string;
}

export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Handle code blocks
      if (line.trim().startsWith("```")) {
        const language = line.trim().replace("```", "").trim() || "javascript";
        const codeLines: string[] = [];
        i++; // Move past the opening ```

        // Collect code lines until closing ```
        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }

        if (codeLines.length > 0) {
          elements.push(
            <CodeBlock key={`code-${elements.length}`} language={language}>
              {codeLines.join("\n")}
            </CodeBlock>
          );
        }
        i++; // Move past the closing ```
        continue;
      }

      // Handle headings
      if (line.trim().startsWith("##")) {
        const level = line.match(/^#+/)?.[0].length || 2;
        const text = line.replace(/^#+\s*/, "").trim();

        if (level === 2) {
          elements.push(
            <h2
              key={`h2-${elements.length}`}
              className="text-2xl font-bold text-white mt-8 mb-4"
            >
              {text}
            </h2>
          );
        } else if (level === 3) {
          elements.push(
            <h3
              key={`h3-${elements.length}`}
              className="text-xl font-semibold text-white mt-6 mb-3"
            >
              {text}
            </h3>
          );
        }
        i++;
        continue;
      }

      // Handle lists
      if (line.trim().startsWith("- ")) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          listItems.push(lines[i].replace(/^-\s*/, "").trim());
          i++;
        }

        elements.push(
          <ul
            key={`list-${elements.length}`}
            className="list-disc list-inside text-gray-300 mb-4 space-y-1"
          >
            {listItems.map((item, index) => (
              <li key={index} className="ml-4">
                {renderInlineContent(item)}
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Handle paragraphs
      if (line.trim()) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="text-gray-300 mb-4 leading-relaxed text-lg"
          >
            {renderInlineContent(line.trim())}
          </p>
        );
      } else {
        elements.push(<br key={`br-${elements.length}`} />);
      }

      i++;
    }

    return elements;
  };

  const renderInlineContent = (text: string) => {
    // Handle inline code `code`
    const parts = text.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        const code = part.slice(1, -1);
        return <InlineCode key={index}>{code}</InlineCode>;
      }

      // Handle bold **text**
      if (part.includes("**")) {
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((boldPart, boldIndex) => {
          if (boldPart.startsWith("**") && boldPart.endsWith("**")) {
            return (
              <strong
                key={`${index}-${boldIndex}`}
                className="text-white font-semibold"
              >
                {boldPart.slice(2, -2)}
              </strong>
            );
          }
          return boldPart;
        });
      }

      return part;
    });
  };

  return <div className="space-y-4">{renderContent(content)}</div>;
}
