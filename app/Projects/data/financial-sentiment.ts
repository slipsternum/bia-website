import { Project } from "./types";

export const financialSentiment: Project = {
  slug: "financial-sentiment",
  title: "Neural-Linguistics for FinTech",
  description:
    "A real-time NLP dashboard designed to identify market signals from unstructured financial news streams using fine-tuned BERT models.",
  badge: "DAP",
  category: "NLP",
  coverImage:
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/placeholder-cover.jpg",
  images: [
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/placeholder-cover.jpg",
  ],
  overview:
    "An advanced neural network framework designed to synthesize multi-modal financial data into actionable market sentiment indices with high historical accuracy.",
  rationale:
    "Financial markets are increasingly driven by sentiment found in alternative data sources. However, traditional tools often fail to capture the nuance of industry-specific jargon. This project was initiated to bridge the gap between raw web-scraped financial news and actionable quantitative data. By leveraging fine-tuned BERT models specifically trained on financial corpora, we achieved a 14% improvement in entity recognition accuracy compared to off-the-shelf models.",
  lessons: {
    satisfaction:
      "Team Satisfaction: 4.5/5. We are highly satisfied with the technical architecture and the accuracy of the model, though we feel there is room for further optimization in the real-time processing latency.",
    takeaway:
      "Moving forward, we identified that the latency in real-time streaming could be further optimized by shifting from REST to WebSockets for the final visualization layer. This would provide a more fluid user experience during peak market volatility hours.",
  },
  team: [
    {
      name: "Alex Thompson",
      role: "Lead Data Scientist",
      avatar: "",
    },
    {
      name: "Sarah Chen",
      role: "ML Engineer",
      avatar: "",
    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Architect",
      avatar: "",
    },
  ],
  programme: "DAP",
  status: "Completed",
  techStack: ["Python", "PyTorch", "Tailwind", "D3.js"],
  demoUrl: "",
  sourceUrl: "",
};
