"use client";
import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { scrollYProgress: blendin } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "start 0.2"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const x = useTransform(scaleY, [0, 1], ["47%", "-47%"]);

  return (
    <AnimatePresence>
      <motion.section
        style={{ opacity: blendin }}
        ref={targetRef}
        id="my-skills"
        className="relative h-[300vh]"
      >
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-white">
            My <span className="text-blue-600">ToolBox</span>
          </h2>
          <motion.div style={{ x }} className={cn("flex gap-4", className)}>
            {items.map((item, idx) => (
              <Link
                href={item?.link}
                key={item?.link}
                target="_blank"
                className="relative group block p-2"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card>
                  <div className="flex flex-col items-center space-x-2">
                    <div className="flex gap-1">{item.icon}</div>

                    <CardTitle>{item.title}</CardTitle>
                  </div>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[250px] w-[250px] p-4 overflow-hidden bg-black border border-transparent hover:bg-blue-600 dark:border-blue-600 group-hover:border-blue-500 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
