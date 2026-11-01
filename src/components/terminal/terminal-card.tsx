"use client";

import * as React from "react";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { skillsData } from "@/data/skills";
import { useTheme } from "next-themes";
import { CornerDownLeft } from "lucide-react";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

const INITIAL_LOGS: CommandLog[] = [
  {
    id: "init-1",
    command: "cat profile.json",
    output: (
      <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-1 break-words">
        <p>
          <span className="text-[#79C0FF]">&quot;name&quot;</span>:{" "}
          <span className="text-[#A5D6FF] break-words">&quot;{profileData.name}&quot;</span>,
        </p>
        <p>
          <span className="text-[#79C0FF]">&quot;role&quot;</span>:{" "}
          <span className="text-[#A5D6FF] break-words">&quot;{profileData.title}&quot;</span>,
        </p>
        <p>
          <span className="text-[#79C0FF]">&quot;focus&quot;</span>:{" "}
          <span className="text-[#A5D6FF] break-words">&quot;{profileData.focus}&quot;</span>,
        </p>
        <p>
          <span className="text-[#79C0FF]">&quot;education&quot;</span>:{" "}
          <span className="text-[#A5D6FF] break-words">&quot;{profileData.education}&quot;</span>,
        </p>
        <p>
          <span className="text-[#79C0FF]">&quot;status&quot;</span>:{" "}
          <span className="text-[#7EE787]">&quot;Ready to build&quot;</span>
        </p>
      </div>
    ),
  },
];

const PREDEFINED_COMMANDS = [
  "help",
  "about",
  "projects",
  "skills",
  "contact",
  "theme",
  "clear",
];

export function TerminalCard() {
  const [inputVal, setInputVal] = React.useState("");
  const [logs, setLogs] = React.useState<CommandLog[]>(INITIAL_LOGS);
  const [history, setHistory] = React.useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = React.useState<number>(-1);
  const { resolvedTheme, setTheme } = useTheme();
  const terminalEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    if (trimmed === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode;

    switch (trimmed) {
      case "help":
        output = (
          <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-1">
            <p className="text-[#7EE787] font-semibold">Available predefined commands:</p>
            <p><span className="text-[#79C0FF]">about</span> - Overview of profile & background</p>
            <p><span className="text-[#79C0FF]">projects</span> - List of three featured projects</p>
            <p><span className="text-[#79C0FF]">skills</span> - Technologies and tools</p>
            <p><span className="text-[#79C0FF]">contact</span> - Email & GitHub repository</p>
            <p><span className="text-[#79C0FF]">theme</span> - Toggle light/dark interface mode</p>
            <p><span className="text-[#79C0FF]">clear</span> - Clear output logs</p>
            <p><span className="text-[#79C0FF]">help</span> - Show this help menu</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-2">
            <p className="text-[#E6EDF3]">{profileData.bio}</p>
            <p className="text-xs text-[#7EE787]">Education: {profileData.education}</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-2">
            {projectsData.map((p) => (
              <div key={p.id} className="border-l-2 border-[#21262D] pl-2">
                <p className="font-bold text-[#E6EDF3]">{p.title} <span className="font-normal text-xs text-[#79C0FF]">[{p.category}]</span></p>
                <p className="text-xs">{p.description}</p>
                <p className="text-xs text-[#7EE787]">Stack: {p.technologies.slice(0, 4).join(", ")}...</p>
              </div>
            ))}
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-2">
            {skillsData.map((cat) => (
              <div key={cat.category}>
                <span className="text-[#79C0FF] font-semibold text-xs">{cat.category}: </span>
                <span className="text-xs">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="pl-2 sm:pl-4 text-[#8B949E] space-y-1">
            <p>Email: <a href={`mailto:${profileData.email}`} className="text-[#79C0FF] underline">{profileData.email}</a></p>
            <p>GitHub: <a href={profileData.githubUrl} target="_blank" rel="noreferrer" className="text-[#79C0FF] underline">{profileData.githubUrl}</a></p>
          </div>
        );
        break;

      case "theme":
        const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        output = (
          <p className="pl-2 sm:pl-4 text-[#7EE787]">
            Theme switched to: <span className="font-bold">{nextTheme}</span>
          </p>
        );
        break;

      default:
        output = (
          <p className="pl-2 sm:pl-4 text-[#FF5F56]">
            command not found: &quot;{trimmed}&quot;. Type <span className="text-[#79C0FF]">&quot;help&quot;</span> for available commands.
          </p>
        );
    }

    setLogs((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: trimmed,
        output,
      },
    ]);
    setInputVal("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputVal(history[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal("");
      }
    }
  };

  React.useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [logs]);

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="w-full cursor-text overflow-hidden rounded-lg border border-border bg-[#0B0F14] text-[#E6EDF3] shadow-lg font-mono text-xs sm:text-sm"
    >
      {/* Window Titlebar */}
      <div className="flex items-center justify-between border-b border-[#21262D] bg-[#161B22] px-3 sm:px-4 py-2.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F56]/90" />
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]/90" />
          <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27C93F]/90" />
        </div>
        <span className="truncate max-w-[150px] sm:max-w-none text-[11px] text-[#8B949E]">
          bash — pancayandra@dev-log:~
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-[#7EE787]">● interactive</span>
        </div>
      </div>

      {/* Terminal Logs View */}
      <div className="max-h-[300px] sm:max-h-[340px] overflow-y-auto p-3.5 sm:p-5 space-y-3 leading-relaxed break-words">
        {logs.map((log) => (
          <div key={log.id} className="space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-center gap-1 min-w-0">
              <span className="text-[#7EE787] hidden sm:inline">pancayandra@dev-log</span>
              <span className="text-[#7EE787] sm:hidden">dev-log</span>
              <span className="text-[#8B949E]">:</span>
              <span className="text-[#79C0FF]">~</span>
              <span className="text-[#8B949E]">$ </span>
              <span className="text-[#E6EDF3] break-all">{log.command}</span>
            </div>
            <div className="min-w-0 break-words">{log.output}</div>
          </div>
        ))}

        {/* Input prompt line */}
        <form onSubmit={onSubmit} className="flex items-center gap-1 pt-1 min-w-0 w-full">
          <span className="text-[#7EE787] shrink-0 hidden sm:inline">pancayandra@dev-log</span>
          <span className="text-[#7EE787] shrink-0 sm:hidden">dev-log</span>
          <span className="text-[#8B949E] shrink-0">:</span>
          <span className="text-[#79C0FF] shrink-0">~</span>
          <span className="text-[#8B949E] shrink-0">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={onKeyDown}
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck="false"
            className="min-w-0 flex-1 bg-transparent text-[#E6EDF3] outline-none border-none p-0 focus:ring-0 font-mono text-xs sm:text-sm"
          />
          <button
            type="submit"
            aria-label="Run command"
            className="text-[#8B949E] hover:text-[#7EE787] transition-colors p-1 shrink-0"
          >
            <CornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>

      {/* Predefined Command Shortcuts */}
      <div className="flex items-center gap-1.5 overflow-x-auto border-t border-[#21262D] bg-[#161B22]/70 px-3 py-2 text-[11px] text-[#8B949E] max-w-full">
        <span className="text-[#79C0FF] shrink-0">Quick run:</span>
        {PREDEFINED_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="rounded border border-[#30363D] bg-[#21262D] px-2 py-0.5 hover:border-[#7EE787] hover:text-[#7EE787] transition-colors shrink-0"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
