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
  SiExpress,
  SiFramer,
  SiShadcnui,
  SiMui,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <FaJs size={30} /> },
      { name: "TypeScript", icon: <SiTypescript size={30} /> },
      { name: "Java", icon: <FaJava size={30} /> },
      { name: "C#", icon: <SiCsharp size={30} /> },
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
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Spring Framework", icon: <SiSpring size={30} /> },
      { name: "Spring Boot", icon: <SiSpringboot size={30} /> },
      { name: "ASP.NET Core", icon: <SiDotnet size={30} /> },
    ],
  },
  {
    category: "Database & Tools",
    items: [
      { name: "MS SQL Server", icon: <SiMicrosoftsqlserver size={30} /> },
      { name: "MySQL", icon: <SiMysql size={30} /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
      { name: "Maven", icon: <SiApachemaven size={30} /> },
      { name: "Git", icon: <FaGit size={30} /> },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "Data Structures & Algorithms", icon: <FaJs size={30} /> },
      { name: "Framer Motion", icon: <SiFramer size={30} /> },
      { name: "Object-Oriented Programming", icon: <FaJs size={30} /> },
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
