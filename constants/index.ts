import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/mayank-pratap-singh-8280051bb/",
  github: "https://github.com/Anonymous-IITBHU",
  resume: "/resume.pdf",
  source_code: "https://github.com/Anonymous-IITBHU",
  email: "mayank.irna123@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "B.tech from Indian Institute of Technology BHU , Varanasi",
    location: "Varanasi , Uttar Pradesh",
    description:
      "Graduated from IIT BHU ,  gaining a solid foundation in various subjects and essential skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Software Engineer Intern",
    location: "Incipient Technologies",
    description:
      "• Worked with the Django development team with Responsibility for bug fixtures and site maintenance. • Implemented mass newsletter mailing and subscription system by customizing TinyMCE to create email templates. • Added question recommendation system for quiz using cosine similarity and NumPy. • Customized user dashboard for stats and results display integration of OAuth social networking API, merged existing Django requests to Ajax. • Exposure: Django, Ajax, TinyMCE, OAuth, NumPy.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Food Hut- E Commerce Platform ",
    description:
      "Created an ECommerce app which provides user a catalog of products available for purchase in the restaurant.",
    tags: ["HTML","CSS", "JavaScript", "ReactJS", "Node.js", "JWT Tokens" , "REST APIs"],
    imageUrl: carhubImg,
    projectUrl: "https://food-hut-mocha.vercel.app/",
  },
  {
    title: "Split - Wise Web Application ",
    description:
      "Built a dynamic React app for easy expense splitting among specified individuals.",
    tags: ["React", "React Router", "React Components", "Cash Flow", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://split-wise-application.vercel.app/",
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Developed a website that helps in visualizing various Sorting and Path Finding Algorithms. Utilized Breadth-First Search(BFS) and Dijkstra’s Algorithms to dynamically visualize the shortest path on a grid-platform.",
    tags: ["HTML", "CSS", "JavaScript", "Sorting Algorithm", "Graph Theory"],
    imageUrl: ecommerceImg,
    projectUrl: "https://algorithm-visualizer-tawny.vercel.app/",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Django",
  "SQL",
  "TinyMCE",
  "OAuth",
  "Auth0"
] as const;

// Owner name
export const OWNER_NAME = "Mayank Pratap Singh";
