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
  SiFramer,
  SiShadcnui,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiFirebase,
  SiRedux,
  SiReactrouter,
  SiReactquery,
  SiCsharp,
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

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "Weather Forecasting Application",
    des: "This weather forecasting application is developed using React.js, React Router, and React Query, ensuring dynamic and efficient UI updates. It integrates Tailwind CSS for responsive and utility-first styling, making the app adaptable and visually appealing across different devices.",
    img: "/weather-app.png",
    iconLists: [SiReactrouter, FaReact, SiTailwindcss, SiRedux, SiReactquery],
    link: "https://weatherapp-eric-muganga.web.app/",
  },
  {
    id: 4,
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
      "Working with Eric was an incredible experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    title: "Director of AlphaStream Technologies",
    img: "/eric.jpg",
  },
  {
    quote:
      "Eric's work ethic and creativity are unmatched. Lorem ipsum dolor sit amet, consectetur adipiscing elit. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    title: "Director of AlphaStream Technologies",
    img: "/eric.jpg",
  },
  {
    quote:
      "I was thoroughly impressed with Eric's skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    title: "Director of AlphaStream Technologies",
    img: "/eric.jpg",
  },
  {
    quote:
      "Eric exceeded all expectations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Eric's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Eric is the ideal partner. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    title: "Director of AlphaStream Technologies",
    img: "/eric.jpg",
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
