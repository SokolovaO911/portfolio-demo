import type { StaticImageData } from "next/image";
import coverFosterlink from "@/assets/cover-fosterlink.jpg";
import coverMindfullmood from "@/assets/cover-mindfullmood.jpg";
import coverRedesign from "@/assets/cover-website-redesign.jpg";
import caseFosterlink from "@/assets/case-fosterlink.jpg";
import caseMindfullmood from "@/assets/case-mindfullmood.jpg";
import caseRedesign from "@/assets/case-website-redesign.jpg";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  cover: StaticImageData;
  coverAlt: string;
  caseImage: StaticImageData;
  caseImageAlt: string;
  type: string;
  duration: string;
  role: string;
  tools: string;
};

export const projects: Project[] = [
  {
    slug: "fosterlink",
    title: "FosterLink",
    summary:
      "Helping animals find safe temporary homes and connecting them with caring people.",
    cover: coverFosterlink,
    coverAlt: "FosterLink app screens",
    caseImage: caseFosterlink,
    caseImageAlt: "FosterLink case study: research, flows, wireframes and screens",
    type: "Student project, mobile app",
    duration: "About 1 month",
    role: "UI/UX design (solo project)",
    tools: "Figma",
  },
  {
    slug: "mindfullmood",
    title: "MindfullMood",
    summary:
      "Helping people understand their emotions, practice mindfulness, and find inner balance.",
    cover: coverMindfullmood,
    coverAlt: "MindfullMood website screens",
    caseImage: caseMindfullmood,
    caseImageAlt:
      "MindfullMood case study: research, personas, journey map, wireframes and screens",
    type: "Student project, responsive website",
    duration: "About 2 months",
    role: "UI/UX design (solo project)",
    tools: "Figma",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    summary:
      "A fresh, lively redesign of a website for adventure games and team events.",
    cover: coverRedesign,
    coverAlt: "Redesigned website shown on a desktop screen",
    caseImage: caseRedesign,
    caseImageAlt:
      "Website redesign case study: research, prototype, moodboard, web design and UI kit",
    type: "Student project, website redesign",
    duration: "2 weeks",
    role: "UI/UX and web design (solo project)",
    tools: "Figma",
  },
];
