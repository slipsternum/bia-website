import { Project } from "./types";

export const singingScorer: Project = {
  slug: "singing-scorer",
  title: "Singing Scorer",
  description:
    "An ML model trained to evaluate singing performances using objective criteria like pitch accuracy and vocal stability — because human judgment is subjective.",
  badge: "DAP",
  category: "Audio ML",
  coverImage: "",
  images: [""],
  overview:
    "Singing Scorer is a web application that uses a fine-tuned MERT-v1-95M model with a custom regression head to score singing recordings on objective acoustic criteria such as pitch accuracy and stability. The frontend is built with React 19 and Vite, with a Flask backend handling audio processing and inference.",
  rationale:
    "Human judgment of singing quality is inherently subjective and inconsistent. The team wanted to train an ML model to evaluate performances against objective acoustic metrics — pitch accuracy, vocal stability, and tonal consistency — removing the variability of human scoring. The project was also driven by curiosity and a desire to build something genuinely fun to use.",
  lessons: {
    satisfaction:
      "Team Satisfaction: 4/5. The model achieved a meaningful level of accuracy in scoring singing performances. There is room to improve further, particularly in edge cases with unconventional vocal styles.",
    takeaway:
      "Model accuracy is an iterative process. The team identified that further fine-tuning with a more diverse training dataset would significantly improve scoring consistency across different vocal ranges and styles.",
  },
  team: [
    { name: "Julia Wong", role: "Team Member", avatar: "" },
    { name: "Minn Ong", role: "Team Member", avatar: "" },
    { name: "Yeo Wei Ting", role: "Team Member", avatar: "" },
  ],
  programme: "DAP",
  status: "Completed",
  techStack: [
    "React 19",
    "Vite 7",
    "Python",
    "Flask",
    "PyTorch",
    "Transformers",
    "Docker",
    "Hugging Face Spaces",
  ],
  demoUrl: "https://pitchperfect.minn.codes/",
  sourceUrl: "https://github.com/jhulyea/singmos-demo",
};
