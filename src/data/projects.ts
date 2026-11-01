import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "remindtask",
    title: "RemindTask",
    category: "Web Application",
    description:
      "A personal task management application designed to help students organize academic tasks, manage subjects, monitor deadlines, and receive reminders.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Jest",
    ],
    repositoryUrl: "https://github.com/pyandraanugrah/RemindTask",
    liveUrl: "https://remindtask-iota.vercel.app",
    role: "Developer",
    featured: true,
  },
  {
    id: "acicu",
    title: "ACICU",
    category: "Web Application (Collaborative)",
    description:
      "A food pre-order application providing digital ordering, menu browsing, cart management, simulated payments, and order tracking.",
    technologies: [
      "Laravel",
      "PHP",
      "React",
      "Inertia.js",
      "Tailwind CSS",
      "Vite",
      "Firestore",
      "Midtrans",
    ],
    repositoryUrl: "https://github.com/Kristian1405/ACICU_PEMWEB",
    role: "Frontend Developer",
    contribution:
      "Responsible for implementing frontend interfaces using React, UI components, layout, responsive styling, and client-side interactions.",
    featured: true,
  },
  {
    id: "siap-generus",
    title: "SIAP GENERUS",
    category: "Mobile Application",
    description:
      "A Flutter-based mobile application concept designed to support generus learning management, schedules, attendance, and progress monitoring.",
    technologies: ["Flutter", "Dart"],
    repositoryUrl: "https://github.com/pyandraanugrah/SIAP_GENERUS",
    role: "Flutter Developer / Frontend Developer",
    contribution:
      "Responsible for mobile frontend development with Flutter, including UI screens and components.",
    featured: true,
  },
];
