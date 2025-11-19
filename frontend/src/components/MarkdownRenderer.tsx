"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={{
        // Custom styling for different elements
        h1: ({ children }) => (
          <h1 className="text-xl font-bold mb-3 text-gray-900 border-b border-gray-200 pb-2">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-lg font-semibold mb-2 text-gray-800 mt-4">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-medium mb-2 text-gray-700 mt-3">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="mb-3 leading-relaxed text-gray-900">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-outside mb-3 space-y-1 ml-6 pl-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-outside mb-3 space-y-1 ml-6 pl-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-gray-900 leading-relaxed pl-1">
            {children}
          </li>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-900">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800">
            {children}
          </em>
        ),
        a: ({ href, children }) => (
          <a 
            href={href}
            className="text-blue-600 hover:text-blue-800 underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        hr: () => (
          <hr className="my-4 border-gray-300 border-t-2" />
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-600 my-3 bg-blue-50 py-2 rounded-r">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          return isInline ? (
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
              {children}
            </code>
          ) : (
            <pre className="bg-gray-100 p-3 rounded-lg overflow-x-auto my-3 border border-gray-200">
              <code className="text-sm font-mono text-gray-800">
                {children}
              </code>
            </pre>
          );
        },
        table: ({ children }) => (
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-200 rounded-lg">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-50">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-gray-200">
            {children}
          </tbody>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-gray-50">
            {children}
          </tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-2 text-sm text-gray-900 border-b border-gray-100">
            {children}
          </td>
        ),
      }}
    >
      {content}
      </ReactMarkdown>
    </div>
  );
}
