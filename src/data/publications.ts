export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  plainSummary?: string;
  url?: string;
  pdfUrl?: string;
  doi?: string;
  tags: string[];
  status?: "Published" | "Forthcoming" | "Under Preparation" | "In Progress";
};

export const publications: Publication[] = [
  {
    title:
      "Effects of Clinically Designed Improvisory Music on Learning Outcomes and Stress",
    authors: [
      "P. Adubi",
      "T. Sanda",
      "R. Oyewole",
      "R. Akodu",
      "C. Oyewale",
      "S. Omotunde",
    ],
    venue: "Proceedings of ICERI 2024, IATED",
    year: 2024,
    abstract:
      "This study investigates the effects of clinically designed improvisory music on learning outcomes and stress levels in educational settings. Using a controlled experimental design, we measured cognitive performance and physiological stress markers across multiple sessions.",
    plainSummary:
      "We studied whether specially designed music can help students learn better and feel less stressed. The results show clinically crafted improvisory music has measurable positive effects on both learning and stress reduction.",
    tags: ["Education", "RCT", "Cognitive Science", "Music Therapy"],
    status: "Forthcoming",
  },
  {
    title:
      "A Comparative Study of Machine Learning Models and Imputation Techniques for Predicting Breast Cancer Recurrence",
    authors: ["P. Adubi", "S. O. Samuel"],
    venue: "Manuscript under preparation",
    year: 2024,
    abstract:
      "A comparative analysis of machine learning models combined with advanced imputation techniques for predicting breast cancer recurrence. Evaluates gradient-boosted models, neural networks, and ensemble methods across multiple imputation strategies on clinical datasets.",
    plainSummary:
      "We compared different AI approaches to predict whether breast cancer will return after treatment, focusing on how to handle missing data in medical records — a common real-world challenge that most studies overlook.",
    tags: ["Machine Learning", "Healthcare", "XGBoost", "Imputation"],
    status: "Under Preparation",
  },
  {
    title:
      "Optimal Placement of UPFC and STATCOM for Voltage Stability in Power Networks Using ANN Modeling",
    authors: ["P. Adubi", "O. I. Adebisi"],
    venue: "Manuscript in progress",
    year: 2020,
    abstract:
      "Developed ANN-based optimization models for FACTS device placement. Implemented Newton-Raphson load-flow analysis in MATLAB on IEEE and Nigerian bus systems to evaluate voltage stability and total power loss.",
    plainSummary:
      "Used neural networks to figure out the best places to put power grid stabilization devices so electricity flows more reliably — tested on both international standard and Nigerian power systems.",
    tags: ["Power Systems", "ANN", "Optimization", "MATLAB"],
    status: "In Progress",
  },
];

export const researchInterests = [
  {
    title: "Formal Verification of AI",
    description:
      "Formal verification of learning-enabled and autonomous systems — ensuring AI behaves correctly by mathematical proof, not just testing.",
    icon: "🔍",
  },
  {
    title: "Safe & Trustworthy AI",
    description:
      "Robustness and interpretability of neural networks. Building AI systems that are reliable, explainable, and safe for deployment in critical domains.",
    icon: "🛡️",
  },
  {
    title: "Neuro-Symbolic AI",
    description:
      "Hybrid AI systems combining neural learning with symbolic reasoning for verifiable decision-making pipelines.",
    icon: "🧠",
  },
  {
    title: "LLM-Assisted Engineering",
    description:
      "Using large language models to assist software engineering tasks — specification inference, code verification, and automated reasoning.",
    icon: "⚡",
  },
  {
    title: "Collective Intelligence",
    description:
      "Computational methods for aggregating and structuring human deliberation at scale — from argument mining to consensus detection.",
    icon: "🌐",
  },
  {
    title: "AI for Healthcare",
    description:
      "Machine learning pipelines for clinical prediction, medical NLP, and patient outcome modeling with emphasis on responsible AI practices.",
    icon: "🏥",
  },
];
