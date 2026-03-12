import { Github, Linkedin, Twitter } from "lucide-react";
import { personal } from "@/data/personal";

const socialLinks = [
  { icon: Github, href: personal.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personal.socials.twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <a href="#hero" className="text-lg font-bold text-foreground tracking-tight">
              {personal.name}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-1 text-sm text-foreground-subtle">
              Software Engineer & Researcher
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground-muted transition-all hover:border-border-hover hover:text-foreground hover:bg-surface"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground-subtle">
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
