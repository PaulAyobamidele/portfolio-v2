export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: string;
  level: "Primary" | "Proficient" | "Familiar" | "Learning";
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Python", icon: "🐍", level: "Primary" },
      { name: "JavaScript", icon: "JS", level: "Primary" },
      { name: "R", icon: "📊", level: "Proficient" },
      { name: "MATLAB", icon: "📐", level: "Proficient" },
      { name: "TypeScript", icon: "TS", level: "Proficient" },
      { name: "Git", icon: "📂", level: "Primary" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Neural Networks", icon: "🧠", level: "Proficient" },
      { name: "Deep Learning", icon: "🔬", level: "Proficient" },
      { name: "XGBoost", icon: "🌲", level: "Proficient" },
      { name: "Robustness Analysis", icon: "🛡️", level: "Familiar" },
      { name: "Model Interpretability", icon: "🔍", level: "Familiar" },
    ],
  },
  {
    title: "LLMs & NLP",
    skills: [
      { name: "HuggingFace", icon: "🤗", level: "Proficient" },
      { name: "GPT APIs", icon: "⚡", level: "Proficient" },
      { name: "RAG Pipelines", icon: "📚", level: "Proficient" },
      { name: "Semantic Clustering", icon: "🎯", level: "Proficient" },
      { name: "Argument Mining", icon: "💬", level: "Familiar" },
    ],
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "FastAPI", icon: "⚡", level: "Primary" },
      { name: "Django / DRF", icon: "🎸", level: "Primary" },
      { name: "React / Next.js", icon: "⚛️", level: "Proficient" },
      { name: "Docker", icon: "🐳", level: "Proficient" },
      { name: "PostgreSQL", icon: "🐘", level: "Primary" },
      { name: "ML Pipelines", icon: "🔧", level: "Proficient" },
    ],
  },
  {
    title: "Formal & Experimental Methods",
    skills: [
      { name: "Experimental Design", icon: "🧪", level: "Proficient" },
      { name: "RCTs", icon: "📋", level: "Proficient" },
      { name: "Statistical Testing", icon: "📈", level: "Primary" },
      { name: "Optimization", icon: "📉", level: "Proficient" },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "PyTorch", icon: "🔥", level: "Proficient" },
      { name: "TensorFlow", icon: "📊", level: "Familiar" },
      { name: "Scikit-learn", icon: "🤖", level: "Primary" },
      { name: "Ollama", icon: "🦙", level: "Proficient" },
      { name: "Neo4j", icon: "🕸️", level: "Familiar" },
      { name: "ChromaDB", icon: "💎", level: "Proficient" },
    ],
  },
];
