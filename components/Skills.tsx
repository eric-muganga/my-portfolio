"use client";
import React from "react";
import { HoverEffect } from "./ui/CardHoverEffect";
import {
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaPython,
} from "react-icons/fa";
import {
  SiDotnet,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiCsharp,
  SiFramer,
  SiShadcnui,
} from "react-icons/si";

const skills: {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    title: "C#",
    description: "My superpower",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    icon: <SiCsharp size={40} />,
  },
  {
    title: "ASP.NET Core MVC",
    description: "Building robust web apps with style",
    link: "https://docs.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-5.0",
    icon: <SiDotnet size={40} />,
  },
  {
    title: "Entity Framework",
    description: "Data access made easy",
    link: "https://docs.microsoft.com/en-us/ef/",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "WPF",
    description: "Because who doesn’t love fancy interfaces?",
    link: "https://docs.microsoft.com/en-us/dotnet/desktop/wpf/?view=netdesktop-5.0",
    icon: <SiDotnet size={40} />,
  },
  {
    title: "MS SQL Server, Postgres",
    description: "Where all the data magic happens",
    link: "https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "Git",
    description: "Version control ninja",
    link: "https://git-scm.com/doc",
    icon: <FaGit size={40} />,
  },
  {
    title: "JavaScript, HTML, CSS",
    description: "The holy trinity of web dev",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide",
    icon: (
      <>
        <FaJs size={25} />
        <FaHtml5 size={25} />
        <FaCss3 size={25} />
      </>
    ),
  },
  {
    title: "React.js",
    description: "Because modern problems need modern solutions",
    link: "https://reactjs.org/docs/getting-started.html",
    icon: <FaReact size={40} />,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 engine",
    link: "https://nodejs.org/en/docs/",
    icon: <FaNodeJs size={40} />,
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    link: "https://expressjs.com/en/starter/installing.html",
    icon: <SiExpress size={40} />,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    link: "https://tailwindcss.com/docs",
    icon: <SiTailwindcss size={40} />,
  },
  {
    title: "ShadCN UI",
    description:
      "A collection of reusable UI components built with Radix UI and Tailwind CSS",
    link: "https://shadcn.dev/",
    icon: <SiShadcnui size={40} />,
  },
  {
    title: "Material-UI",
    description: "React components for faster and easier web development",
    link: "https://mui.com/getting-started/usage/",
    icon: <SiMui size={40} />,
  },
  {
    title: "Framer Motion",
    description: "A production-ready motion library for React",
    link: "https://www.framer.com/motion/",
    icon: <SiFramer size={40} />,
  },
  {
    title: "Next.js",
    description: "The React Framework for Production",
    link: "https://nextjs.org/docs",
    icon: <SiNextdotjs size={40} />,
  },
  {
    title: "TypeScript",
    description: "Typed JavaScript at Any Scale",
    link: "https://www.typescriptlang.org/docs/",
    icon: <SiTypescript size={40} />,
  },
  {
    title: "Python",
    description: "The versatile powerhouse",
    link: "https://docs.python.org/3/",
    icon: <FaPython size={40} />,
  },
  {
    title: "Data Structures and Algorithms",
    description: "Brain food",
    link: "https://en.wikipedia.org/wiki/Data_structure",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "Object-Oriented Programming",
    description: "Thinking in objects is my thing",
    link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
    icon: <FaDatabase size={40} />,
  },
  {
    title: "Adaptability & Problem-solving",
    description: "My middle names",
    link: "https://en.wikipedia.org/wiki/Problem_solving",
    icon: <FaDatabase size={40} />,
  },
];
export default function Skills() {
  return (
    <>
      <HoverEffect items={skills} />
    </>
  );
}
