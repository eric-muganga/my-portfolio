"use client";

interface InlineCodeProps {
  children: string;
  className?: string;
}

export default function InlineCode({
  children,
  className = "",
}: InlineCodeProps) {
  return (
    <code
      className={`px-2 py-1 text-sm font-mono bg-gray-800 text-blue-300 rounded border border-gray-600 ${className}`}
    >
      {children}
    </code>
  );
}
