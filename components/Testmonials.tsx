"use client";

import React, { useRef } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { motion, useScroll } from "framer-motion";
export default function Testmonials() {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.2"],
  });
  return (
    <motion.section
      ref={element}
      style={{ opacity: scrollYProgress }}
      id="testmonials"
      className="py-20"
    >
      <div className="flex justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 mx-6 md:mx-0 text-white">
          What People Are Saying{" "}
          <span className="text-blue-600"> About Me</span>
        </h2>
      </div>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </motion.section>
  );
}
