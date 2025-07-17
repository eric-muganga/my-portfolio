"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import Socials from "./Socials";
import Photo from "./Photo";
import { motion } from "framer-motion";

const Hero = () => {
  const wordsAboutMe =
    "I transform innovative concepts into impactful, user-centric web applications, focusing on both robust functionality and seamless user experience.";

  return (
    <section
      className="h-full z-10"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Decorative spotlights */}
      <div aria-hidden="true">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      <div className="h-screen relative container">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-20 2xl:pt-32">
          {/* Main content area */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.05, ease: "easeIn" },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
            itemProp="mainContentOfPage"
          >
            {/* Hero heading with proper SEO structure */}
            <header>
              <h1
                id="hero-heading"
                className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-center md:text-left text-white mt-2"
                itemProp="name"
              >
                Hello, I&apos;m <br />{" "}
                <span className="text-blue-600" itemProp="givenName familyName">
                  Eric Muganga
                </span>
              </h1>

              <h2
                className="text-xl mb-6 md:text-2xl lg:text-3xl text-white"
                itemProp="jobTitle"
              >
                Software Engineer
              </h2>
            </header>

            {/* Professional summary */}
            <div itemProp="description" className="mb-9">
              <TextGenerateEffect
                className="text-lg max-w-[500px]"
                words={wordsAboutMe}
              />
            </div>

            {/* Call-to-action section */}
            <div
              className="flex flex-col xl:flex-row items-center gap-8"
              role="region"
              aria-label="Contact actions"
            >
              <a
                href="./eric-muganga.pdf"
                download="Eric-Muganga-Resume.pdf"
                aria-label="Download Eric Muganga's resume as PDF"
                itemProp="url"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  type="button"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" aria-hidden="true" />
                </Button>
              </a>

              <nav className="mb-8 xl:mb-0" aria-label="Social media links">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-600 rounded-full flex justify-center items-center text-blue-600 hover:bg-blue-600 hover:text-primary hover:transition-all duration-500"
                />
              </nav>
            </div>
          </motion.main>

          {/* Profile photo section */}
          <aside
            className="order-1 xl:order-none mb-8 xl:mb-0"
            itemProp="image"
          >
            <Photo />
          </aside>
        </div>
      </div>

      {/* Hidden structured data for better AI SEO */}
      <div className="sr-only" itemScope itemType="https://schema.org/Person">
        <span itemProp="name">Eric Muganga</span>
        <span itemProp="jobTitle">Software Engineer</span>
        <span itemProp="description">
          Experienced software engineer specializing in full-stack development,
          transforming innovative concepts into user-centric web applications
        </span>
        <span itemProp="url">https://eric-muganga-portfolio.vercel.app</span>
        <span itemProp="sameAs">
          https://www.linkedin.com/in/eric-muganga-6501a3253/
        </span>
        <span itemProp="sameAs">https://github.com/eric-muganga</span>
        <span itemProp="knowsAbout">Full-Stack Development</span>
        <span itemProp="knowsAbout">React.js</span>
        <span itemProp="knowsAbout">Node.js</span>
        <span itemProp="knowsAbout">Java</span>
        <span itemProp="knowsAbout">Spring Boot</span>
        <span itemProp="knowsAbout">Microservices</span>
        <span
          itemProp="hasOccupation"
          itemScope
          itemType="https://schema.org/Occupation"
        >
          <span itemProp="name">Software Engineer</span>
          <span itemProp="occupationalCategory">Technology</span>
        </span>
      </div>
    </section>
  );
};

export default Hero;
