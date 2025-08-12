function CodeSnippet() {
  const code = [
    <>
      <span className="code-keyword">function</span>{" "}
      <span className="code-function">welcomeUser</span>(firstName:{" "}
      <span className="code-type">string</span>) {"{"}
    </>,
    <>
      {"  "}
      <span className="code-keyword">if</span> (!firstName?
      <span className="code-method">.trim()</span>) {"{"}
    </>,
    <>
      {"    "}
      <span className="code-keyword">throw</span>{" "}
      <span className="code-keyword">new</span>{" "}
      <span className="code-type">Error</span>(
      <span className="code-string">'firstName is required'</span>
      );
    </>,
    <> {"}"}</>,
    <>
      {"  "}
      <span className="code-keyword">return</span> console.
      <span className="code-method">log</span>(
      <span className="code-string">`Hello, </span>${"{"}firstName
      {"}"}
      <span className="code-string">`</span>);
    </>,

    <>{"}"};</>,
    <></>, // spacer
    <> </>,
    <>
      {""}
      <span className="code-function">welcomeUser</span>(
      <span className="code-string">"Jim"</span>
      );
    </>,
  ];
  const handleCopy = async () => {
    const plain = [
      "function welcomeUser(firstName: string) {",
      "  if (!firstName?.trim()) {",
      "    throw new Error('firstName is required');",
      "  }",
      "  return console.log(`Hello, ${firstName}`);",
      "}",
      "",
      'welcomeUser("Jim");',
    ].join("\n");

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(plain);
        return;
      }
      throw new Error("Clipboard API not available");
    } catch {
      // Fallback for non-HTTPS / older browsers
      const ta = document.createElement("textarea");
      ta.value = plain;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  return (
    <figure className="relative group max-w-[600px]">
      <button
        onClick={handleCopy}
        className="cursor-pointer absolute right-3 top-3 px-2 py-1 text-xs rounded border border-neutral-600 text-neutral-200 bg-neutral-800/70 backdrop-blur hover:bg-neutral-700"
        aria-label="Copy code"
      >
        Copy
      </button>

      <div className="flex flex-1 border border-neutral-600 animated-divider rounded-md bg-neutral-900 overflow-x-auto bg-glow">
        <div className="flex w-full">
          {/* Line numbers */}
          <ol className="select-none text-neutral-500 text-xs px-3 py-4 text-right tabular-nums leading-6 border-r border-neutral-800">
            {code.map((_, i) => (
              <li key={i} className="list-none">
                {i + 1}
              </li>
            ))}
          </ol>

          {/* Code lines */}
          <pre className="font-mono text-sm leading-6 text-neutral-200 px-4 py-4 min-w-0">
            {code.map((line, i) => (
              <code key={i} className="block">
                {line}
              </code>
            ))}
          </pre>
        </div>
      </div>
    </figure>
  );
}

export default CodeSnippet;
