"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[280px] h-[280px] xl:w-[480px] xl:h-[480px] mix-blend-lighten"
        >
          <Image
            src="/eric.jpeg"
            priority
            quality={100}
            sizes="(max-width: 1280px) 280px, 480px"
            fill
            alt="Eric Muganga - Software Engineer, professional headshot showing a confident software developer"
            className="object-contain"
            itemProp="image"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
