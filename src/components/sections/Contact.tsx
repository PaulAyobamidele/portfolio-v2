"use client";

import { useState, useRef } from "react";
import { Send, Mail, Linkedin, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personal } from "@/data/personal";

const contactInfo = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Paul Adubi",
    href: personal.socials.linkedin,
  },
  { icon: MapPin, label: "Location", value: personal.location, href: undefined },
];

const inquiryTypes = [
  "Collaboration",
  "Job Opportunity",
  "Research Inquiry",
  "Freelance Project",
  "Other",
];

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_ubl5lsj",
        "template_nzouo7s",
        formRef.current,
        "your_public_key" // Replace with your actual EmailJS public key
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Have a project in mind or want to collaborate? Let's talk."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <ScrollReveal direction="left" className="lg:col-span-2">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-muted">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-foreground-subtle">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact form */}
        <ScrollReveal direction="right" className="lg:col-span-3">
          <Card hover={false}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-subtle"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-subtle"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Type of Inquiry
                </label>
                <select
                  name="inquiry_type"
                  className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent placeholder:text-foreground-subtle"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                    <CheckCircle size={16} /> Message sent!
                  </span>
                )}
                {status === "error" && (
                  <span className="flex items-center gap-1.5 text-sm text-red-400">
                    <AlertCircle size={16} /> Failed to send. Try again.
                  </span>
                )}
              </div>
            </form>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
