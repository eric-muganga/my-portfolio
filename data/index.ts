import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiDotnet,
  SiTailwindcss,
  SiMui,
  SiMicrosoftsqlserver,
  SiFirebase,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiChartdotjs,
  SiSpring,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiJsonwebtokens,
} from "react-icons/si";

export const navItems: { title: string; href: string }[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "My Skills",
    href: "#my-skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform (Microservices)",
    des: "Designed and implemented a scalable e-commerce platform using Spring Boot microservices, adhering to industry-standard design patterns. Leveraged Docker, Kubernetes, Kafka, and Redis for distributed systems, containerization, and cloud-native solutions, demonstrating modern backend development practices.",
    iconLists: [
      SiSpring,
      FaJava,
      SiDocker,
      SiKubernetes,
      SiApachekafka,
      SiJsonwebtokens,
    ], // Example icons
    type: "backend",
    link: "https://github.com/eric-muganga/ecommerce-microservices",
  },
  {
    id: 2,
    title: "Job Application Tracker",
    des: "A robust job application tracking system built using .NET Core API, React, and Redux. It features drag-and-drop functionality for a Kanban board, real-time analytics dashboards, and a secure backend with SQL Server. The project optimizes job application management, reducing tracking time by 30%.",
    img: "/job-tracker.png",
    iconLists: [SiDotnet, FaReact, SiRedux, SiMicrosoftsqlserver, SiChartdotjs],
    type: "fullstack",
    link: "https://github.com/eric-muganga/jobApplicationTrackerApi",
  },

  {
    id: 3,
    title: "Landing Page for Oneramp.io",
    des: "This cryptocurrency ramping platform landing page is built using Next.js, Tailwind CSS, and TypeScript. It allows users to seamlessly convert fiat currency into cryptocurrency. Users can sign up, securely link their digital wallets, and begin purchasing crypto instantly. The platform offers real-time market data, user-friendly dashboards, and robust security measures, ensuring a smooth and safe experience for all users.",
    img: "/OneRamp.png",
    iconLists: [FaReact, BiLogoTypescript, RiNextjsLine, SiTailwindcss],
    type: "fullstack",
    link: "https://www.oneramp.io",
  },
  {
    id: 4,
    title: "Chat Application",
    des: "This is a real-time chat application built using React, Firebase, and Redux. It allows users to sign up, log in, send and receive messages, and manage their chats.",
    img: "/chat.png",
    iconLists: [
      FaReact,
      SiRedux,
      SiFirebase,
      SiReactrouter,
      SiRedux,
      SiTailwindcss,
      SiMui,
    ],
    type: "fullstack",
    link: "https://github.com/eric-muganga/SignalShift",
  },
  {
    id: 5,
    title: "AudioAura-Streams",
    des: "AudioAura-Streams is a full-stack web application designed for international radio streaming. Developed using Node.js and React, this platform offers seamless access to global radio broadcasts, enriching your listening experience with diverse audio content from around the world.",
    img: "/AudioAura-Streams.png",
    iconLists: [
      FaNodeJs,
      FaReact,
      SiMui,
      SiTailwindcss,
      SiReactrouter,
      SiReactquery,
    ],
    type: "fullstack",
    link: "https://audio-aura-streams.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "It is my pleasure to recommend Eric Muganga. Eric is an exceptionally talented software engineer with a knack for developing visually appealing and user-friendly web applications. His expertise in JavaScript, React, and Node.js, combined with a creative approach to problem-solving, sets him apart. Over the years, I've seen Eric tackle complex projects with dedication and a collaborative spirit. He's not just a skilled coder but also a great team player who always goes the extra mile. I wholeheartedly endorse Eric for any software development role.",
    name: "Benito Ishimwe",
    title: "Azure Cloud Solutions Engineer at LTIMindtree",
    img: "/benito.jpeg",
  },
  {
    quote:
      "I am delighted to recommend Eric Muganga, with whom I have collaborated on several projects. Eric is an exceptional software engineer, skilled in JavaScript, React, Node.js, and C#. He consistently creates visually appealing and user-friendly web applications. His problem-solving skills, dedication, and collaborative spirit are outstanding. Eric is a skilled coder and a great team player who always goes the extra mile. I highly recommend him for any software development role.",
    name: "Safari Germain",
    title: "Azure AI Engineer at ltimindtree",
    img: "/germain.jpeg",
  },
  {
    quote:
      "We had the pleasure of working with Eric Muganga on the design and development of our landing page for OneRamp Inc. Eric delivered an outstanding design in Figma that perfectly captured our vision. His attention to detail and creative expertise truly impressed us. Moreover, Eric's ability to bring the design to life through flawless development was exceptional. He completed the project within the agreed timeframe, exceeding our expectations in both quality and efficiency. We highly recommend Eric for any design and development projects.",
    name: "Elias Hezron",
    title: "CEO at OneRamp Inc.",
    img: "/OneRampLogoW.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern · Cashfro",
    period: "Mar 2025 - Present",
    desc: "Contributed to the development of Cashfro, an innovative FinTech platform, focusing on backend service implementation and API development using Java and Spring Boot. Participated in designing scalable solutions, integrating secure payment gateways, and ensuring robust data management within a dynamic startup environment.",
    className: "md:col-span-2",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Git",
      "Docker",
    ],
  },
  {
    id: 2,
    title: "Freelance Fullstack Developer · Oneramp.io",
    period: "Jun 2024 - Sep 2024",
    desc: "Led the development of a comprehensive cryptocurrency ramping platform for Oneramp.io as a freelance fullstack developer. Implemented seamless fiat-to-crypto conversion features, secure digital wallet integrations, and real-time market data. Utilized Next.js, React, and TypeScript to build a user-friendly and highly secure web application.",
    className: "md:col-span-2",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 3,
    title: "Frontend Engineer Intern · Nugsoft Technologies",
    period: "Jun - Sept 2022",
    desc: "Assisted in developing a web-based platform using React.js, focusing on enhancing interactivity and implementing responsive, visually appealing user interfaces with HTML5, CSS3, and JavaScript. Collaborated with design teams to translate mockups into dynamic web pages, ensuring an intuitive user experience. Utilized version control systems like Git for collaborative coding and efficient codebase management.",
    className: "md:col-span-2",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "WordPress",
      "React.js",
      "Git",
      "GitHub",
    ],
  },
];
