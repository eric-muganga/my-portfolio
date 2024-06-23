"use client";
import React, { useRef } from "react";
import Socials from "./Socials";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

export default function Footer() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.2"],
  });
  return (
    <motion.footer
      ref={element}
      style={{
        opacity: scrollYProgress,
      }}
      className="w-full py-20"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center m-4">
        <h2 className="text-3xl lg:text-5xl font-bold mb-2 text-white">
          Let&apos;s work <span className="text-blue-600"> together</span>
        </h2>
        <p className="text-white/55 md:mt-8 my-5 text-center">
          Reach out to me today and let&apos;s discuss how we can collaborate to
          bring your vision to life
        </p>
        <a href="mailto:ericmuganga@outlook.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <p className="text-white/55 p-4 lg:max-w-[45vw]">
          Loosely designed in <span className="text-white"> Figma</span> and
          coded in <span className="text-white"> Visual Studio code</span> by
          yours truly. Built with
          <span className="text-white"> Next.js</span>,{" "}
          <span className="text-white"> Typescript</span> and
          <span className="text-white"> Tailwind CSS</span>. Seamlessly deployed
          with <span className="text-white"> Vercel</span>
        </p>

        <div className="flex mt-2 md:flex-row flex-col justify-between items-center gap-2 md:gap-12">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright &copy; 2024 Eric Muganga
          </p>
          <div className="mb-8 xl:mb-0">
            <Socials
              containerStyles="flex items-center gap-6 md:gap-3 w-full"
              iconStyles="w-9 h-9 border border-white  rounded-full flex justify-center items-center  hover:bg-blue-600 hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
