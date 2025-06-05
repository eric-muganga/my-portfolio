"use client";
import { workExperience } from "@/data";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export default function Experience() {
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
      id="workexperience"
      className="py-20"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-white">
          My work <span className="text-blue-600">Experience</span>
        </h2>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        {workExperience.map(
          ({ id, title, period, desc, className, technologies }) => (
            <div key={id} className="w-[80vw] md:w-[50vw] m-4 p-4  rounded-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold ml-0 mb-3">{title}</span>
                <span className="text-white/55">{period}</span>
              </div>

              <p className="mb-4 text-white/70">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="text-white bg-blue-600 px-2 py-1 rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </motion.section>
  );
}
