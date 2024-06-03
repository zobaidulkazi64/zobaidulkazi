// // CodeEditor.tsx
// "use client";
// import React, { useState, useRef, useEffect } from "react";

// const CodeEditor: React.FC = () => {
//   const [code, setCode] = useState<string>("");
//   const codeRef = useRef<HTMLTextAreaElement>(null);
//   const lineNumbersRef = useRef<HTMLDivElement>(null);

//   const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setCode(event.target.value);
//   };

//   useEffect(() => {
//     const lineNumbers = code
//       .split("\n")
//       .map((_, index) => index + 1)
//       .join("\n");
//     if (lineNumbersRef.current) {
//       lineNumbersRef.current.textContent = lineNumbers;
//     }
//   }, [code]);

//   return (
//     <div className="flex flex-col sm:flex-row bg-gray-100 p-4">
//       <div
//         ref={lineNumbersRef}
//         className="line-numbers bg-gray-200 text-right pr-2 hidden sm:block"
//         style={{ userSelect: "none", width: "40px" }}
//       ></div>
//       <textarea
//         ref={codeRef}
//         value={code}
//         onChange={handleCodeChange}
//         className="code-editor flex-1 bg-white border-none p-2 outline-none resize-none h-64 sm:h-auto"
//         style={{ fontFamily: "monospace", whiteSpace: "pre", overflow: "auto" }}
//       ></textarea>
//     </div>
//   );
// };

// export default CodeEditor;

"use client";

import React, { useState, useRef, useEffect } from "react";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>("");
  const codeRef = useRef<HTMLTextAreaElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const copyToClipboard = () => {
    if (codeRef.current) {
      codeRef.current.select();
      document.execCommand("copy");
      alert("Code copied to clipboard!");
    }
  };

  useEffect(() => {
    const lineNumbers = code
      .split("\n")
      .map((_, index) => index + 1)
      .join("\n");
    if (lineNumbersRef.current) {
      lineNumbersRef.current.textContent = lineNumbers;
    }
  }, [code]);

  return (
    <div className="flex flex-col sm:flex-row bg-gray-100 p-4 relative">
      <div
        ref={lineNumbersRef}
        className="line-numbers  text-right pr-2 hidden sm:block"
        style={{ userSelect: "none", width: "40px" }}
      ></div>
      <textarea
        ref={codeRef}
        value={code}
        onChange={handleCodeChange}
        className="code-editor flex-1  border-none p-2 outline-none resize-none h-64 sm:h-auto"
        style={{ fontFamily: "monospace", whiteSpace: "pre", overflow: "auto" }}
      ></textarea>
      <button
        onClick={copyToClipboard}
        className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeEditor;
