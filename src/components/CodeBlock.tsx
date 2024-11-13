import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
    <div className="border border-gray4 rounded-xl divide-y divide-gray4 overflow-hidden shadow-sm">
      <div className="py-2 p-2.5 flex items-center justify-between bg-gray2">
        <div className="text-xs text-gray9 font-light tracking-wider font-mono">
          src/components/CodeBlock.tsx
        </div>
        <CopyToClipboard text={codeString} onCopy={handleCopy}>
          <button className="text-gray10 ease-out duration-300 transition-colors hover:text-gray12">
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
        // style={ghcolors}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        lineProps={{ style: { whiteSpace: "pre-wrap" } }}
        customStyle={{
          margin: "0",
          backgroundColor: "transparent",
          padding: "10px",
          fontSize: "14px"
        }}
        className="code"
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
