import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import pkg from "react-copy-to-clipboard";
import "../styles/code.css";

const { CopyToClipboard } = pkg;

type TCodeBlockProps = {
  language: string;
  codeString: string;
  showLineNumbers?: boolean;
};

function CodeBlock({ language, codeString, showLineNumbers }: TCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-sage-4 dark:border-sageDark-4 rounded-xl divide-y divide-sage-4 dark:divide-sageDark-4 overflow-hidden shadow-sm">
      <div className="py-2 p-2.5 flex items-center justify-between bg-sage-2 dark:bg-sageDark-2">
        <div className="text-xs text-sage-9 dark:text-sageDark-9 font-light tracking-wider font-mono">
          src/components/CodeBlock.tsx
        </div>
        <CopyToClipboard text={codeString} onCopy={handleCopy}>
          <button className="text-sage-10 dark:text-sageDark-10 ease-out duration-150 hover:text-sage-12 dark:hover:text-sageDark-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </CopyToClipboard>
      </div>
      <SyntaxHighlighter
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        customStyle={{
          margin: "0",
          backgroundColor: "transparent",
          padding: "10px",
          fontSize: "14px",
          fontFamily: "Geist Mono"
        }}
        className="code bg-sage-2 dark:bg-sageDark-2"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
