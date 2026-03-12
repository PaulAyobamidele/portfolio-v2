export type Workshop = {
  title: string;
  event: string;
  date: string;
  type: "Workshop" | "Talk" | "Poster" | "Tutorial" | "Conference";
  description: string;
  location: string;
  slidesUrl?: string;
  recordingUrl?: string;
  materialsUrl?: string;
};

export const workshops: Workshop[] = [
  {
    title: "Poster Presentation",
    event: "World Tech Summit on Big Data, Data Science & Machine Learning",
    date: "2024",
    type: "Poster",
    description:
      "Presented research on machine learning approaches for predictive modeling in healthcare and education domains.",
    location: "London, UK",
  },
  {
    title: "Poster Presentation",
    event: "ICERI Conference 2024",
    date: "2024",
    type: "Poster",
    description:
      "Presented findings on the effects of clinically designed improvisory music on learning outcomes and stress.",
    location: "Seville, Spain",
  },
  {
    title: "Poster Presentation",
    event: "European Society for the Cognitive Sciences of Music",
    date: "2024",
    type: "Poster",
    description:
      "Presented research at the intersection of music cognition, clinical music design, and educational outcomes.",
    location: "York, UK",
  },
  {
    title: "Advanced Workshops on Research Data Science",
    event: "International Centre for Theoretical Physics (ICTP)",
    date: "2024",
    type: "Workshop",
    description:
      "Intensive workshop on advanced data science methods for research applications, hosted by ICTP.",
    location: "Trieste, Italy",
  },
  {
    title: "UM6P Science Week Participant",
    event: "UM6P Science Week",
    date: "2024",
    type: "Conference",
    description:
      "Participated in the university-wide science showcase featuring cross-disciplinary research presentations.",
    location: "Benguerir, Morocco",
  },
  {
    title: "MENA Machine Learning Winter School",
    event: "MENA ML Winter School",
    date: "2025",
    type: "Workshop",
    description:
      "Intensive machine learning training program bringing together researchers from the MENA region.",
    location: "Doha, Qatar",
  },
];

export type ResearchTool = {
  name: string;
  description: string;
  installCommand?: string;
  githubUrl?: string;
  docsUrl?: string;
  tags: string[];
  codeSnippet?: string;
};

export const researchTools: ResearchTool[] = [];
