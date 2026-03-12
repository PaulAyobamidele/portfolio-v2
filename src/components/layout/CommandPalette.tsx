"use client";

import { useState, useEffect, useRef } from "react";
import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommandItem = {
  label: string;
  href: string;
  category: string;
};

const commands: CommandItem[] = [
  { label: "Home", href: "#hero", category: "Navigation" },
  { label: "About", href: "#about", category: "Navigation" },
  { label: "Projects", href: "#projects", category: "Navigation" },
  { label: "Research", href: "#research", category: "Navigation" },
  { label: "Skills", href: "#skills", category: "Navigation" },
  { label: "Blog", href: "#blog", category: "Navigation" },
  { label: "Contact", href: "#contact", category: "Navigation" },
  { label: "Download Engineering CV", href: "/resumes/engineering-cv.pdf", category: "Actions" },
  { label: "Download Research CV", href: "/resumes/research-cv.pdf", category: "Actions" },
  { label: "GitHub Profile", href: "https://github.com/PaulAyobamidele", category: "Links" },
  { label: "LinkedIn Profile", href: "https://linkedin.com/in/adubiapaul", category: "Links" },
  { label: "X / Twitter", href: "https://twitter.com/psychkeys", category: "Links" },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-lg rounded-xl border border-border bg-background-secondary shadow-2xl shadow-black/40">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={18} className="text-foreground-subtle" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or jump to..."
            className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-foreground-subtle"
          />
          <kbd className="hidden rounded border border-border px-2 py-0.5 text-xs text-foreground-subtle sm:inline">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto p-2">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <p className="px-3 py-2 text-xs font-medium text-foreground-subtle uppercase tracking-wider">
                {category}
              </p>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground-muted transition-colors",
                    "hover:bg-surface hover:text-foreground"
                  )}
                >
                  {item.label}
                  <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-foreground-subtle">
              No results found.
            </p>
          )}
        </div>

        {/* Footer hint */}
        <div className="border-t border-border px-4 py-2 text-xs text-foreground-subtle">
          Tip: Press <kbd className="rounded border border-border px-1">&#8984;K</kbd> to toggle this palette
        </div>
      </div>
    </div>
  );
}
