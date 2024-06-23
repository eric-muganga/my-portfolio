"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["center 0.9", "center center"],
  });

  return (
    <motion.section
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="py-20 h-full mt-24"
      id="about"
    >
      <div className="container relative mx-auto">
        <div className="w-full lg:pr-10 flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white">
                About <span className="text-blue-600"> Me</span>
              </h2>
            </div>
            <div>
              <p className="text-md md:text-xl text-gray-300 mb-4">
                I&apos;m a enthusiastic computer science student on a mission to
                rock the world of software development, one line of code at a
                time. With over three years of coding experience, I juggle
                classes, projects.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                My brain is a quirky mix of creativity and logic, which means I
                can whip up high-quality code while simultaneously dreaming up
                the next big thing. Group projects? Bring it on! I&apos;m a team
                player who believes in the power of collaboration and the magic
                of great ideas.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Let&apos;s connect and create something awesome together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
