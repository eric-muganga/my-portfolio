"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import Socials from "./Socials";
import Photo from "./Photo";
import { motion } from "framer-motion";

const Hero = () => {
  const wordsAboutMe =
    "I transform cool ideas into visually stunning, user-friendly web experiences that captivate and engage audiences seamlessly.";
  return (
    <section className="h-full z-10">
      <div>
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
        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-20 2xl:pt-32 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.1, ease: "easeIn" },
            }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-center md:text-left text-white mt-2">
              Hello, I&apos;m <br />{" "}
              <span className="text-blue-600">Eric Muganga</span>
            </h1>
            <h3 className="text-xl mb-6 md:text-2xl lg:text-3xl text-white">
              Junior Software Engineer
            </h3>
            <TextGenerateEffect
              className="text-lg max-w-[500px] mb-9"
              words={wordsAboutMe}
            />

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-blue-600  rounded-full flex justify-center items-center text-blue-600 hover:bg-blue-600 hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
            {/* <a href="#about">
              <MagicButton
                title="About me"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a> */}
          </motion.div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
