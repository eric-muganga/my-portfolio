import { BiLogoTypescript } from "react-icons/bi";
import { FaDatabase, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiDotnet,
  SiTailwindcss,
  SiExpress,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiFramer,
  SiShadcnui,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiCsharp,
  SiChartdotjs,
  SiSpring,
  SiMysql,
  SiApachemaven,
  SiThymeleaf,
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
    title: "Job Application Tracker",
    des: "A robust job application tracking system built using .NET Core API, React, and Redux. It features drag-and-drop functionality for a Kanban board, real-time analytics dashboards, and a secure backend with SQL Server. The project optimizes job application management, reducing tracking time by 30%.",
    img: "/job-tracker.png",
    iconLists: [SiDotnet, FaReact, SiRedux, SiMicrosoftsqlserver, SiChartdotjs],
    link: "https://github.com/eric-muganga/JobApplicationTracker",
  },
  {
    id: 2,
    title: "Online Resource Management System",
    des: "An innovative Spring Boot MVC application with features like user authentication, session management, and resource search. It integrates MySQL for data persistence and Thymeleaf for a dynamic and responsive user interface. Maven is used for efficient build management.",
    img: "",
    iconLists: [SiSpring, FaJava, SiMysql, SiApachemaven, SiThymeleaf],
    link: "https://github.com/eric-muganga/ResourceManagementSystem",
  },
  {
    id: 3,
    title: "Landing Page for Oneramp.io",
    des: "This cryptocurrency ramping platform landing page is built using Next.js, Tailwind CSS, and TypeScript. It allows users to seamlessly convert fiat currency into cryptocurrency. Users can sign up, securely link their digital wallets, and begin purchasing crypto instantly. The platform offers real-time market data, user-friendly dashboards, and robust security measures, ensuring a smooth and safe experience for all users.",
    img: "/OneRamp.png",
    iconLists: [FaReact, BiLogoTypescript, RiNextjsLine, SiTailwindcss],
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
    link: "https://audio-aura-streams.vercel.app",
  },
  {
    id: 5,
    title: "Contoso-University",
    des: "Contoso-University is a university management system displaying students, departments with the courses in each department, and professors teaching the courses grades for the students. It is an ASP.NET Core MVC with Entity Framework app with CRUD functionality, pagination, and is connected to the database with EF Core migrations feature for managing data model changes and also handles concurrency.",
    img: "/contoso-university.png",
    iconLists: [SiDotnet, SiCsharp, SiMicrosoftsqlserver],
    link: "https://github.com/eric-muganga/Contoso-University",
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
