export type TimelineItem = {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  type: "education" | "work" | "research";
};

export const timeline: TimelineItem[] = [
  {
    title: "PhD in Computer & Software Engineering",
    subtitle: "Polytechnique Montréal",
    date: "2026 — Present",
    description:
      "Formal Verification & Software Engineering for Safe Autonomous AI Systems. Supervised by Prof. Lina Marsso.",
    type: "education",
  },
  {
    title: "Research Intern",
    subtitle: "MIT Center for Collective Intelligence / UM6P",
    date: "Feb 2025 — Present",
    description:
      "LLM-driven pipeline using the MIT Deliberatorium for clustering, evaluating, and summarizing deliberative arguments using MECE-aligned logic.",
    type: "research",
  },
  {
    title: "MSc in Collective Intelligence — Valedictorian",
    subtitle: "University Mohammed VI Polytechnic (UM6P)",
    date: "2023 — 2025",
    description:
      "School of Collective Intelligence, Rabat, Morocco. Graduated as Valedictorian, Class of 2025.",
    type: "education",
  },
  {
    title: "Research Member",
    subtitle: "UM6P School of Collective Intelligence",
    date: "2024",
    description:
      "Empirical research on crowd-based bias in sentiment analysis and medical outcome prediction. ML pipelines for breast cancer recurrence prediction.",
    type: "research",
  },
  {
    title: "Software Engineer",
    subtitle: "Educlynk",
    date: "2021 — Present",
    description:
      "Developed scalable educational software platforms; applied software engineering practices for dependable and maintainable systems.",
    type: "work",
  },
  {
    title: "B.Eng. Electrical & Electronics Engineering",
    subtitle: "FUNAAB, Nigeria",
    date: "2014 — 2020",
    description:
      "CGPA: 4.10/5.00. Thesis: Optimal Placement of UPFC and STATCOM for Voltage Stability Using ANN Modeling.",
    type: "education",
  },
];
