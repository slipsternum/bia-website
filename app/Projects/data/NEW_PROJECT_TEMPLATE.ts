/**
 * HOW TO ADD A NEW PROJECT
 * ────────────────────────
 * 1. Copy this file and rename it to your-project-slug.ts (use kebab-case)
 * 2. Fill in all fields below. Upload images to Vercel Blob and paste the URLs.
 * 3. In index.ts:
 *    - Add: import { myProject } from "./your-project-slug";
 *    - Add: myProject  to the projectsData array
 *
 * OR just run /add-project in Claude Code and let it guide you.
 */

import { Project } from "./types";

export const myProject: Project = {
  // URL will be: /Projects/your-project-slug
  slug: "your-project-slug",

  title: "Your Project Title",

  // Short blurb shown on the grid card (1–2 sentences)
  description: "A short description of what the project does and its impact.",

  badge: "DAP", // "DAP" or "AI Lodge"

  // Shown as a tag on the card alongside the badge
  category: "NLP", // e.g. "NLP", "Computer Vision", "EdTech", "Operations Research", "Conversational AI"

  // Upload to Vercel Blob → Dashboard → Storage → your-blob → Upload
  coverImage: "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/YOUR_IMAGE.jpg",

  // Carousel images shown on the detail page (can be 1 or more)
  images: [
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/YOUR_SCREENSHOT_1.jpg",
    "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/YOUR_SCREENSHOT_2.jpg",
  ],

  // 1–2 paragraph high-level description of what was built
  overview:
    "Describe what the project does at a high level. What problem does it solve? What was built?",

  // Why did you build this? What was the motivation or business context?
  rationale:
    "Explain the rationale behind the project. What gap or problem motivated it? What approach did the team take and why?",

  lessons: {
    // Team satisfaction rating and commentary
    satisfaction:
      "Team Satisfaction: X/5. What went well, what you're proud of.",

    // The single most important lesson learned
    takeaway:
      "The key technical or process lesson the team would apply to future projects.",
  },

  team: [
    {
      name: "First Last",
      role: "Role (e.g. ML Engineer)",
      avatar: "https://ssvs8thfuktvqsqk.public.blob.vercel-storage.com/AVATAR.jpg",
    },
    // Add more team members as needed
  ],

  programme: "DAP", // "DAP" or "AI Lodge"

  status: "Completed", // "Completed" or "Ongoing"

  // Languages, frameworks, tools used
  techStack: ["Python", "React"],

  // Optional: leave as "" if not available
  demoUrl: "",
  sourceUrl: "",
};
