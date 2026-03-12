"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";
import { personal } from "@/data/personal";

const socialLinks = [
  { icon: Github, href: personal.socials.github, label: "GitHub" },
  { icon: Linkedin, href: personal.socials.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: personal.socials.twitter, label: "Twitter" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-secondary px-4 py-2 text-sm text-foreground-muted"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            {personal.name}
            <span className="text-accent">.</span>
          </h1>

          {/* Animated role */}
          <div className="mb-6 text-xl text-foreground-muted md:text-2xl lg:text-3xl">
            <AnimatedText texts={personal.roles} className="font-medium" />
          </div>

          {/* Bio */}
          <p className="mx-auto mb-10 max-w-2xl text-base text-foreground-subtle leading-relaxed md:text-lg">
            {personal.bio}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="#projects">
              View Projects
            </Button>
            <Button variant="secondary" size="lg" href="#research">
              Read Research
            </Button>
          </div>

          {/* Social links */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ y: -2 }}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-foreground-muted transition-all hover:border-accent/50 hover:text-accent hover:bg-accent-muted"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground-subtle"
          >
            <span className="text-xs">Scroll</span>
            <ArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
