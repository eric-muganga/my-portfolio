import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const socials: { icon: JSX.Element; path: string }[] = [
  {
    icon: <FaGithub />,
    path: "https://github.com/eric-muganga",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/eric-muganga-6501a3253/",
  },
];

export default function Socials({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social, idx) => {
        return (
          <Link
            key={idx}
            href={social.path}
            className={iconStyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
}
