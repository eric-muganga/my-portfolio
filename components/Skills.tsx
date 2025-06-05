"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaJava,
  FaDocker, // NEW
  FaAws, // NEW
  FaGithub, // NEW
  FaUsers, // NEW - for Agile/Scrum
  FaCloud, // NEW - for Microservices/REST APIs
} from "react-icons/fa";
import {
  SiSpring,
  SiSpringboot,
  SiApachemaven,
  SiDotnet,
  SiCsharp,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiFramer,
  SiShadcnui,
  SiMui,
  SiMysql,
  SiKubernetes, // NEW
  SiMongodb, // NEW
  SiGradle, // NEW
  SiHibernate, // NEW
  SiVisualstudio, // NEW
  SiIntellijidea, // NEW
  SiWebstorm, // NEW
  SiApachegroovy, // NEW
  SiGithubactions, // NEW
  SiGitlab, // NEW
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: <FaJava size={30} /> },
      { name: "C#", icon: <SiCsharp size={30} /> },
      { name: "JavaScript", icon: <FaJs size={30} /> },
      { name: "TypeScript", icon: <SiTypescript size={30} /> },
      { name: "Groovy", icon: <SiApachegroovy size={30} /> }, // Added Groovy
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot size={30} /> },
      { name: "Spring Framework", icon: <SiSpring size={30} /> }, // Keep for broader Spring context
      { name: "Spring Security", icon: <SiSpring size={30} /> }, // Using generic Spring icon
      { name: "ASP.NET Core", icon: <SiDotnet size={30} /> },
      { name: "JPA", icon: <FaJava size={30} /> }, // Using Java icon as JPA is a spec/API
      { name: "Hibernate", icon: <SiHibernate size={30} /> }, // Added Hibernate
    ],
  },
  {
    category: "Databases", // Renamed for clarity
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
      { name: "MySQL", icon: <SiMysql size={30} /> },
      { name: "MS SQL Server", icon: <SiMicrosoftsqlserver size={30} /> },
      { name: "MongoDB", icon: <SiMongodb size={30} /> }, // Added MongoDB
    ],
  },
  {
    category: "DevOps & Cloud", // New category
    items: [
      { name: "Docker", icon: <FaDocker size={30} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={30} /> }, // Added Kubernetes
      { name: "AWS", icon: <FaAws size={30} /> }, // Added AWS
      { name: "CI/CD Pipelines", icon: <FaGit size={30} /> }, // Conceptual, using Git icon as a general representation
      { name: "GitHub Actions", icon: <SiGithubactions size={30} /> }, // Added GitHub Actions
      { name: "GitLab CI", icon: <SiGitlab size={30} /> }, // Added GitLab CI
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <FaReact size={30} /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} /> },
      { name: "HTML", icon: <FaHtml5 size={30} /> },
      { name: "CSS", icon: <FaCss3 size={30} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
      { name: "Material-UI", icon: <SiMui size={30} /> },
      { name: "ShadCN UI", icon: <SiShadcnui size={30} /> },
      { name: "Framer Motion", icon: <SiFramer size={30} /> }, // Moved from "Other Skills"
    ],
  },

  {
    category: "Tools & Version Control", // New category
    items: [
      { name: "Git", icon: <FaGit size={30} /> },
      { name: "GitHub", icon: <FaGithub size={30} /> }, // Added GitHub
      { name: "GitLab", icon: <SiGitlab size={30} /> }, // Added GitLab
      { name: "Bitbucket", icon: <SiGitlab size={30} /> }, // Using GitLab icon, consider if specific SiBitbucket is available/desired
      { name: "Maven", icon: <SiApachemaven size={30} /> },
      { name: "Gradle", icon: <SiGradle size={30} /> }, // Added Gradle
    ],
  },
  {
    category: "Software Development Concepts", // New category
    items: [
      { name: "REST APIs", icon: <FaCloud size={30} /> }, // Using cloud for API/Microservices context
      { name: "Microservices", icon: <FaCloud size={30} /> }, // Using cloud for Microservices context
      { name: "Agile & Scrum", icon: <FaUsers size={30} /> }, // Generic team/collaboration icon
      { name: "SOLID Principles", icon: <FaJava size={30} /> }, // Using Java icon as a foundational language for OOP/Design
      { name: "Clean Code", icon: <FaJava size={30} /> }, // Using Java icon
      { name: "Unit Testing", icon: <FaJava size={30} /> }, // Using Java icon
      { name: "Data Structures & Algorithms", icon: <FaJava size={30} /> }, // Using Java icon
      { name: "Object-Oriented Programming", icon: <FaJava size={30} /> }, // Using Java icon
    ],
  },
  {
    category: "IDEs & Development Tools", // New category
    items: [
      { name: "IntelliJ IDEA", icon: <SiIntellijidea size={30} /> },
      { name: "Visual Studio Code", icon: <VscVscode size={30} /> },
      { name: "Visual Studio", icon: <SiVisualstudio size={30} /> },
      { name: "WebStorm", icon: <SiWebstorm size={30} /> },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
          My <span className="text-blue-600"> toolbox</span>
        </h2>
      </div>
      <div className="skills-section">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3 className="skill-category">{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
