import { useState, type ChangeEvent } from "react";

function CodeSnippet() {
  const [firstName, setFirstName] = useState<string | null>(null);

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
      <span className="code-keyword">return</span> window.
      <span className="code-method">alert</span>(
      <span className="code-string">`Welcome, </span>${"{"}firstName
      {"}"}
      <span className="code-string">`</span>);
    </>,

    <>{"}"};</>,
    <></>, // spacer
    <> </>,
    <>
      {""}
      <span className="code-function">welcomeUser</span>(
      <span className="code-string">"{firstName}"</span>
      );
    </>,
  ];
  const handleCopy = async () => {
    const plain = [
      "function welcomeUser(firstName: string) {",
      "  if (!firstName?.trim()) {",
      "    throw new Error('firstName is required');",
      "  }",
      "  return window.alert(`Welcome, ${firstName}`);",
      "}",
      "",
      `welcomeUser("${firstName}");`,
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

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  return (
    <div className="w-[94dvw] md:w-155">
      <figure className="relative group ">
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
            <pre className="font-mono text-[13px] md:text-[15px] leading-6 text-neutral-200 pl-2 py-4">
              {code.map((line, i) => (
                <code key={i} className="block">
                  {line}
                </code>
              ))}
            </pre>
          </div>
        </div>
      </figure>
      <div className="flex  mt-8 -mb-8 pb-2 justify-center items-center gap-2 relative">
        <input
          type="text"
          id="firstName"
          value={firstName ?? ""}
          onChange={handleNameChange}
          className="theme-input"
          placeholder="First Name"
        />
        {firstName && (
          <span
            className="px-4 py-2 main-btn"
            onClick={() => window.alert(`Welcome, ${firstName}`)}
          >
            Welcome 👋
          </span>
        )}
      </div>
    </div>
  );
}

export default CodeSnippet;
