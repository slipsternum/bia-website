import { Project } from "./types";

export const enhanceAI: Project = {
  slug: "enhance-ai",
  title: "Enhance AI",
  description:
    "An AI-powered photo enhancement platform with fun filters — face morphers, style effects, and automatic Telegram delivery via QR code.",
  badge: "AI Lodge",
  category: "Computer Vision",
  coverImage: "",
  images: [""],
  overview:
    "Enhance AI is a web platform that applies AI-generated effects to photos — including style transfers (Trump effect, Obama effect, kid effect) and face morphing. A standout feature automatically sends processed photos to the user's Telegram when they scan a QR code, removing the need to download anything manually.",
  rationale:
    "The project started as a face-merging experiment — showing what two people would look like combined. It quickly expanded into a broader photo enhancement platform with multiple filters and morphers. The goal was to make AI image manipulation accessible and genuinely entertaining, without requiring any technical knowledge from the user.",
  lessons: {
    satisfaction:
      "Team Satisfaction: 4/5. The original vision was delivered in full, plus several additional features including the Telegram QR-code delivery system, which became the most impressive demo moment.",
    takeaway:
      "Prompt engineering has an outsized impact on the quality of AI-generated image effects. Well-structured, specific prompts consistently produced more accurate and visually compelling results than generic ones.",
  },
  team: [
    { name: "Yashwanth A.", role: "Developer", avatar: "" },
  ],
  programme: "AI Lodge",
  status: "Completed",
  techStack: ["Python", "Telegram API", "Image Generation API"],
  demoUrl: "",
  sourceUrl: "https://github.com/Yashnm2/Lodge_project/",
};
