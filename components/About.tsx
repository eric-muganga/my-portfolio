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
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="container relative mx-auto">
        <div className="w-full lg:pr-10 flex justify-center items-center">
          <article className="max-w-4xl mx-auto px-6">
            <header className="flex justify-center items-center mb-8">
              <h2
                id="about-heading"
                className="text-3xl lg:text-5xl font-bold mb-4 text-white"
                itemProp="name"
              >
                About <span className="text-blue-600"> Me</span>
              </h2>
            </header>

            <div className="prose prose-lg prose-invert max-w-none">
              {/* Professional Summary */}
              <div itemProp="description" className="space-y-6">
                <p className="text-md md:text-xl text-gray-300 mb-4 leading-relaxed">
                  <span itemProp="jobTitle">I am a Software Engineer</span> with
                  over
                  <span itemProp="experienceLevel">
                    {" "}
                    4 years of hands-on experience
                  </span>{" "}
                  in
                  <span itemProp="expertise">software development</span>. My
                  passion lies in crafting robust, efficient, and scalable
                  solutions, primarily focusing on{" "}
                  <span itemProp="knowsAbout">
                    backend technologies like Java and Spring Boot
                  </span>
                  . I am adept at transforming complex challenges into clean,
                  maintainable code.
                </p>

                {/* Work Philosophy */}
                <p className="text-md md:text-xl text-gray-300 mb-4 leading-relaxed">
                  My approach combines <strong>strong logical reasoning</strong>{" "}
                  with a <strong>creative problem-solving mindset</strong>. I
                  thrive in{" "}
                  <span itemProp="workStyle">collaborative environments</span>,
                  consistently applying{" "}
                  <span itemProp="methodology">
                    agile methodologies and clean code principles
                  </span>{" "}
                  to deliver high-quality results. I am a committed team player
                  who values effective communication and believes in the power
                  of shared knowledge to achieve project success.
                </p>

                {/* Growth Mindset */}
                <p className="text-md md:text-xl text-gray-300 leading-relaxed">
                  I am always eager to{" "}
                  <span itemProp="learningStyle">
                    learn new technologies, embrace best practices
                  </span>
                  , and contribute to{" "}
                  <span itemProp="projectFocus">impactful projects</span>. I
                  look forward to connecting and exploring opportunities to
                  create innovative solutions together.
                </p>
              </div>

              {/* Hidden structured data for AI SEO */}
              <div
                className="sr-only"
                itemScope
                itemType="https://schema.org/Person"
              >
                <span itemProp="name">Eric Muganga</span>
                <span itemProp="jobTitle">
                  Senior Full-Stack Software Engineer
                </span>
                <span itemProp="description">
                  Experienced software engineer specializing in full-stack
                  development with expertise in React, Node.js, Java, Spring
                  Boot, and microservices architecture
                </span>
                <span
                  itemProp="worksFor"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <span itemProp="name">Freelance Developer</span>
                </span>
                <span
                  itemProp="alumniOf"
                  itemScope
                  itemType="https://schema.org/CollegeOrUniversity"
                >
                  <span itemProp="name">University of Saskatchewan</span>
                </span>
                <span
                  itemProp="hasOccupation"
                  itemScope
                  itemType="https://schema.org/Occupation"
                >
                  <span itemProp="name">Software Engineer</span>
                  <span itemProp="occupationalCategory">Technology</span>
                </span>
                <span itemProp="knowsAbout">React.js</span>
                <span itemProp="knowsAbout">Node.js</span>
                <span itemProp="knowsAbout">Java</span>
                <span itemProp="knowsAbout">Spring Boot</span>
                <span itemProp="knowsAbout">Microservices Architecture</span>
                <span itemProp="knowsAbout">TypeScript</span>
                <span itemProp="knowsAbout">Next.js</span>
                <span itemProp="knowsAbout">Full-Stack Development</span>
                <span itemProp="knowsAbout">Software Engineering</span>
                <span itemProp="knowsAbout">Web Development</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
