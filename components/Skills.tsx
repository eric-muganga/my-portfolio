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
  FaDocker,
  FaAws,
  FaGithub,
  FaUsers,
  FaCloud,
  FaLinux, // NEW - for Linux Scripting
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import {
  SiSpring,
  SiApachemaven,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiFramer,
  SiShadcnui,
  SiMui,
  SiMysql,
  SiKubernetes,
  SiMongodb,
  SiGradle,
  SiHibernate,
  SiVisualstudio,
  SiIntellijidea,
  SiWebstorm,
  SiApachegroovy,
  SiGithubactions,
  SiGitlab,
  SiApachekafka, // IMPORTANT - Added Kafka
  SiRedis, // NEW - Added Redis
  SiOracle, // NEW - For Oracle Cloud Infrastructure
  SiSwagger, // NEW - For OpenAPI documentation
  SiPostman, // NEW - For API testing
  SiPython, // NEW - Added Python
  SiSpringboot, // For Spring Security representation
  SiAmazondynamodb, SiSpringsecurity
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java 8+", icon: <FaJava size={30} /> }, // Updated to Java 8+
      { name: "JavaScript", icon: <FaJs size={30} /> },
      { name: "TypeScript", icon: <SiTypescript size={30} /> },
      { name: "Python", icon: <SiPython size={30} /> }, // Added Python
      { name: "SQL", icon: <SiPostgresql size={30} /> }, // Added SQL
      { name: "Linux Scripting", icon: <FaLinux size={30} /> }, // Added Linux Scripting
    ],
  },
  {
    category: "Backend Frameworks & Technologies",
    items: [
      { name: "Spring Boot", icon: <BiLogoSpringBoot size={30} /> },
      { name: "Spring Security", icon: <SiSpringsecurity size={30} /> }, // Added Spring Security
      { name: "Spring Cloud", icon: <SiSpring size={30} /> }, // Added Spring Cloud
      { name: "Spring WebFlux", icon: <SiSpring size={30} /> }, // Added WebFlux
      { name: "Hibernate/JPA", icon: <SiHibernate size={30} /> },
      { name: "REST APIs", icon: <FaCloud size={30} /> },
      { name: "Microservices", icon: <FaCloud size={30} /> },
    ],
  },
  {
    category: "Databases & Storage", // Updated name
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql size={30} /> },
      { name: "MySQL", icon: <SiMysql size={30} /> },
      { name: "MongoDB", icon: <SiMongodb size={30} /> },
      { name: "Redis", icon: <SiRedis size={30} /> }, // Added Redis
      { name: "DynamoDB", icon: <SiAmazondynamodb size={30} /> }, // Added DynamoDB
      { name: "SQL Server", icon: <SiMicrosoftsqlserver size={30} /> },
    ],
  },
  {
    category: "Messaging & Event Streaming", // NEW CATEGORY
    items: [
      { name: "Apache Kafka", icon: <SiApachekafka size={30} /> }, // CRITICAL - Added Kafka
      { name: "Event-Driven Architecture", icon: <SiApachekafka size={30} /> },
      { name: "Message Queues", icon: <SiApachekafka size={30} /> },
      { name: "Asynchronous Processing", icon: <SiApachekafka size={30} /> },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: <FaDocker size={30} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={30} /> },
      { name: "Oracle Cloud Infrastructure", icon: <SiOracle size={30} /> }, // Added OCI
      { name: "AWS", icon: <FaAws size={30} /> },
      { name: "CI/CD Pipelines", icon: <SiGithubactions size={30} /> },
      { name: "GitHub Actions", icon: <SiGithubactions size={30} /> },
      { name: "GitLab CI", icon: <SiGitlab size={30} /> },
      { name: "Linux Administration", icon: <FaLinux size={30} /> }, // Added Linux Admin
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", icon: <FaReact size={30} /> },
      { name: "TypeScript", icon: <SiTypescript size={30} /> },
      { name: "Next.js", icon: <SiNextdotjs size={30} /> },
      { name: "HTML5", icon: <FaHtml5 size={30} /> },
      { name: "CSS3", icon: <FaCss3 size={30} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
      { name: "Material-UI", icon: <SiMui size={30} /> },
      { name: "Angular (learning)", icon: <FaReact size={30} /> }, // Added Angular learning
    ],
  },
  {
    category: "Development Tools",
    items: [
      { name: "IntelliJ IDEA", icon: <SiIntellijidea size={30} /> },
      { name: "Git", icon: <FaGit size={30} /> },
      { name: "Maven", icon: <SiApachemaven size={30} /> },
      { name: "Gradle", icon: <SiGradle size={30} /> },
      { name: "Swagger/OpenAPI", icon: <SiSwagger size={30} /> }, // Added Swagger
      { name: "Postman", icon: <SiPostman size={30} /> }, // Added Postman
      { name: "VS Code", icon: <VscVscode size={30} /> },
    ],
  },
  {
    category: "Methodologies & Practices",
    items: [
      { name: "Agile/Scrum", icon: <FaUsers size={30} /> },
      { name: "SOLID Principles", icon: <FaJava size={30} /> },
      { name: "Design Patterns", icon: <FaJava size={30} /> },
      { name: "TDD", icon: <FaJava size={30} /> },
      { name: "Code Reviews", icon: <FaGithub size={30} /> }, // Added Code Reviews
      { name: "Domain-Driven Design", icon: <FaJava size={30} /> }, // Added DDD
      { name: "Reactive Programming", icon: <SiSpring size={30} /> }, // Added Reactive Programming
    ],
  },
];

export default function Skills() {
  return (
      <div id="my-skills">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
            My <span className="text-blue-600">technical arsenal</span>
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
      </div>
  );
}
