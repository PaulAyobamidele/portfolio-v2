export type Project = {
  id: string;
  color: string;
  domains: string[];
  title: string;
  tagline: string;
  problem: string;
  impact: string;
  innovation: string;
  stack: string[];
  github?: string;
};

export const DOMAIN_COLORS: Record<string, string> = {
  Education: "#D4500A",
  Productivity: "#8B4A00",
  "Social Impact": "#1A6B3C",
  Healthcare: "#1A4A6B",
  "Civic Tech": "#4A1A8B",
  "Mental Health": "#8B0A3C",
};

export const projects: Project[] = [
  {
    id: "01",
    color: "#D4500A",
    domains: ["Education", "Productivity"],
    title: "Socratic Depth Engine",
    tagline: "A tutor that never gives answers — only better questions",
    problem:
      "AI tutors explain things. This one refuses to. It builds a live causal knowledge graph of what a learner actually understands, then finds the single minimum question that unlocks the next concept.",
    impact:
      "Designed for under-resourced schools where 1 teacher covers 50 students. The engine handles depth; the teacher handles relationships.",
    innovation:
      "The LLM is a constrained generator — it can only probe frontier nodes of the knowledge graph. Bayesian Knowledge Tracing models mastery probability. No free-roaming AI.",
    stack: ["FastAPI", "Ollama", "Neo4j", "PostgreSQL", "Redis", "React", "D3.js"],
    github: "https://github.com/PaulAyobamidele",
  },
  {
    id: "02",
    color: "#1A6B3C",
    domains: ["Social Impact", "Healthcare"],
    title: "Neighbourhood Pulse",
    tagline: "The stress map your city doesn't know it needs",
    problem:
      "City health departments allocate mental health resources based on 5-year-old census data. This platform ingests real-time anonymous signals — 311 calls, subreddit patterns, food bank demand — to produce a living neighbourhood stress index.",
    impact:
      "A social worker can see at 9am Monday which neighbourhoods will have the highest crisis calls by Thursday. Preventive deployment, not reactive scramble.",
    innovation:
      "AI is the translator layer — it converts aggregate signal data into plain-English briefs that a city councillor (not an engineer) can act on. Anomaly detection via z-score windowing, forecast via ARIMA.",
    stack: ["FastAPI", "TimescaleDB", "PostGIS", "spaCy", "Ollama", "Mapbox GL", "React"],
    github: "https://github.com/PaulAyobamidele",
  },
  {
    id: "03",
    color: "#4A1A8B",
    domains: ["Civic Tech", "Social Impact"],
    title: "Deliberation OS",
    tagline: "Turning 10,000 community voices into one actionable brief",
    problem:
      "Public consultations collect thousands of comments, then a consultant summarises them with their own biases. This platform clusters raw input into a live argument map, surfaces hidden consensus, identifies genuine disagreement, and auto-generates a policy brief.",
    impact:
      "A city running a consultation gets a brief in 48hrs, not 6 weeks. Minority positions are explicitly surfaced — not averaged away.",
    innovation:
      "Maps the topology of disagreement using HDBSCAN on submission embeddings. Distinguishes where people are actually irreconcilable vs. where they just use different words for the same thing.",
    stack: ["FastAPI", "ChromaDB", "Neo4j", "HDBSCAN", "Ollama", "Whisper", "React", "D3.js"],
    github: "https://github.com/PaulAyobamidele",
  },
  {
    id: "04",
    color: "#8B4A00",
    domains: ["Productivity", "Mental Health"],
    title: "Cognitive Mirror",
    tagline: "Your entire intellectual life, made legible to you",
    problem:
      "Thousands of notes, journals, and documents — buried in them are contradictions you've never noticed, ideas you forgot, and knowledge gaps you keep circling. This tool ingests everything locally and builds a personal knowledge graph that surfaces these patterns.",
    impact:
      "A researcher discovers they've assumed the same flawed premise across papers written 3 years apart. A founder finds a buried journal insight that solves their current product problem.",
    innovation:
      "Privacy is a first-class architectural constraint. Every inference call stays on-device — zero cloud calls. Contradiction detection via entailment scoring between claim pairs. Temporal drift tracking via embedding distance.",
    stack: ["FastAPI", "SQLite", "ChromaDB", "Neo4j", "Ollama", "sentence-transformers", "React", "D3.js"],
    github: "https://github.com/PaulAyobamidele",
  },
  {
    id: "05",
    color: "#1A4A6B",
    domains: ["Healthcare"],
    title: "Clinical Narrative Intelligence",
    tagline: "Turning doctor notes into patient journeys a human can see",
    problem:
      "A patient's history is thousands of unstructured notes in jargon and abbreviations. No one reads them all. This system extracts a structured timeline, flags drug interactions and care gaps, and renders a visual narrative navigable in 60 seconds.",
    impact:
      "An ER physician understands a patient's 10-year history in under a minute. Care gaps that would cause readmissions are flagged before discharge.",
    innovation:
      "Two-stage local pipeline: BioBERT extracts clinical entities and temporal anchors, then Mistral structures them into timeline events. Drug interaction checks via local RxNorm — no external API needed.",
    stack: ["FastAPI", "Celery", "PostgreSQL", "ChromaDB", "BioBERT", "Ollama", "RxNorm", "React"],
    github: "https://github.com/PaulAyobamidele",
  },
  {
    id: "06",
    color: "#8B0A3C",
    domains: ["Social Impact", "Mental Health"],
    title: "Crisis-to-Care Bridge",
    tagline: "The gap between 'I need help' and 'here is help' should be zero",
    problem:
      "Someone in crisis searches for help and gets closed hotlines and outdated numbers. This platform runs real-time NLP triage — classifying urgency, need type, and barriers — then matches to a live, verified, hyper-local resource graph maintained by social workers.",
    impact:
      "A person in crisis at 2am gets the 3 resources that are open right now, accept their insurance, have capacity, and speak their language — in under 10 seconds.",
    innovation:
      "The gap tracker is the real innovation. Most platforms optimise the match. This one explicitly models and visualises where the system is failing — making the invisible visible for policy makers.",
    stack: ["FastAPI", "PostgreSQL", "PostGIS", "ChromaDB", "TimescaleDB", "Ollama", "React", "Mapbox GL"],
    github: "https://github.com/PaulAyobamidele",
  },
];

export const allDomains = [...new Set(projects.flatMap((p) => p.domains))];
