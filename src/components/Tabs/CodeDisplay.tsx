import React, { useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Import Prism.js CSS for syntax highlighting theme

interface CodeDisplayProps {
  code: string;
  language: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code, language }) => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    }
  };

  return (
    <div className="relative bg-gray-900 text-white p-4 rounded">
      <pre ref={codeRef} className={`language-${language}`}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
      >
        Copy code
      </button>
    </div>
  );
};

export default CodeDisplay;
