"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.section
      ref={element}
      style={{ opacity: scrollYProgress }}
      className="py-20 h-full mt-24 mb-24"
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
                I am a dedicated Computer Science student with over 4 years of
                hands-on experience in software development. My passion lies in
                crafting robust, efficient, and scalable solutions, primarily
                focusing on backend technologies like Java and Spring Boot. I am
                adept at transforming complex challenges into clean,
                maintainable code.
              </p>
              <p className="text-md md:text-xl text-gray-300 mb-4">
                {" "}
                {/* Changed to md:text-xl for consistency */}
                My approach combines strong logical reasoning with a creative
                problem-solving mindset. I thrive in collaborative environments,
                consistently applying agile methodologies and clean code
                principles to deliver high-quality results. I am a committed
                team player who values effective communication and believes in
                the power of shared knowledge to achieve project success.
              </p>
              <p className="text-md md:text-xl text-gray-700 dark:text-gray-300">
                {" "}
                {/* Changed to md:text-xl for consistency */}I am always eager
                to learn new technologies, embrace best practices, and
                contribute to impactful projects. I look forward to connecting
                and exploring opportunities to create innovative solutions
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
