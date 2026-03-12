"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { personal } from "@/data/personal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const resumes = Object.values(personal.resumes);

function ResumeDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="hidden items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover md:inline-flex cursor-pointer"
      >
        Resume
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-border bg-background-secondary p-1.5 shadow-xl shadow-black/30">
          {resumes.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <FileText size={15} className="text-accent" />
              {r.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg shadow-black/10" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold text-foreground tracking-tight">
          {personal.name}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — dropdown */}
        <ResumeDropdown />

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "glass overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* Mobile resume links */}
          <li className="mt-2 border-t border-border pt-2">
            <p className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground-subtle">
              Download CV
            </p>
            {resumes.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2.5 rounded-lg px-4 py-2.5 text-sm text-foreground-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <FileText size={15} className="text-accent" />
                {r.label}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </header>
  );
}
