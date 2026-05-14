import { Project } from "./types";

export const studyAssistant: Project = {
  slug: "study-assistant",
  title: "GPT-Powered Study Assistant",
  description:
    "A RAG-based educational tool that processes lecture materials and textbooks to provide contextual tutoring and automatic flashcard generation.",
  badge: "AI Lodge",
  category: "EdTech",
  coverImage:
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/placeholder-cover.jpg",
  images: [
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/placeholder-cover.jpg",
  ],
  overview:
    "A retrieval-augmented generation system that ingests university lecture slides and readings, then serves as an always-available tutor — answering questions with source citations and automatically generating Anki-compatible flashcards from key concepts.",
  rationale:
    "Students spend disproportionate time searching through dense PDFs rather than actively recalling knowledge. Existing AI chat tools hallucinate and lack source grounding. By building a RAG pipeline with chunked PDF ingestion and vector search, every answer is grounded in the uploaded material — students can trust the responses and trace them back to the source slide.",
  lessons: {
    satisfaction:
      "Team Satisfaction: 4.6/5. The quality of answers surprised even our sceptics once we tuned the chunk size and overlap parameters. The flashcard export feature became the most-used feature by far.",
    takeaway:
      "Chunking strategy has an outsized impact on RAG quality. We iterated through fixed-size, sentence-boundary, and semantic chunking before landing on a hybrid that balanced context window usage with retrieval precision.",
  },
  team: [
    {
      name: "Rachel Tan",
      role: "ML Engineer",
      avatar: "",
    },
    {
      name: "Bryan Ong",
      role: "Full Stack Developer",
      avatar: "",
    },
  ],
  programme: "AI Lodge",
  status: "Completed",
  techStack: ["Python", "LangChain", "Pinecone", "Next.js"],
  demoUrl: "",
  sourceUrl: "",
};
