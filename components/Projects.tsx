"use client";
import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import Link from "next/link";
import { PinContainer } from "./ui/PinContainer";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { projects } from "@/data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projects() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.2"],
  });

  return (
    <motion.section
      ref={element}
      style={{
        opacity: scrollYProgress,
      }}
      id="projects"
      className="py-20"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 mx-6 md:mx-0 text-white">
          A selection of <span className="text-blue-600">recent projects</span>
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }, i) => (
          <motion.div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]">
                <img src={img} alt={title} className="top-0 rounded-lg" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className=" text-white/55 lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-center mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((Icon, index) => (
                    <div
                      key={index}
                      className="border border-blue-600 rounded-full bg-blue-500 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Icon />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-blue-400">
                    Check site or source code
                  </p>
                  <FaLocationArrow className="ms-3" />
                </div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
