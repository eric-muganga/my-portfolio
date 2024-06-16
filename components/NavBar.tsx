/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { navItems } from "@/data";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { FaBars, FaCode } from "react-icons/fa";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { RxCross2 } from "react-icons/rx";

import { cn } from "@/utils/cn";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setOpenNav((prevOpen) => !prevOpen);
  };

  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };
  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  const navList = (
    <ul className="flex gap-8 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <AnimatePresence>
        {navItems.map((navItem: any, idx: number) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          const textX = useTransform(x, (latest) => latest * 0.5);
          const textY = useTransform(y, (latest) => latest * 0.5);
          return (
            <motion.li
              onPointerMove={(event) => {
                const item = event.currentTarget;
                setTransform(item, event, x, y);
              }}
              key={`link=${idx}`}
              onPointerLeave={(event) => {
                x.set(0);
                y.set(0);
              }}
              style={{ x, y }}
            >
              <MotionLink
                href={navItem.href}
                className={cn(
                  "capitalize relative font-semibold lg:text-xl text-white py-2 px-4 transition-all duration-500 ease-in-out hover:border-b-2 hover:border-b-white"
                )}
              >
                <motion.span
                  style={{ x: textX, y: textY }}
                  className="z-10 relative"
                >
                  {navItem.title}
                </motion.span>
              </MotionLink>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </ul>
  );

  return (
    <nav className="-mx-6 mt-2 inset-x-0 top-0 z-50 w-full">
      <div
        className="flex items-center justify-between p-6 lg:px-8 xl:px-12 max-w-full"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 text-white">
          <Link href="/" className="flex">
            <FaCode className="mr-2 text-2xl" />
            <motion.h1 whileHover={{}} className="text-2xl font-semibold">
              Eric Muganga
            </motion.h1>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navList}
        </div>

        <div className="flex lg:hidden">
          <motion.button
            className=" flex justify-center items-center h-[55px] w-[55px] rounded-full text-white hover:bg-white/20 bg-blue-600 "
            onClick={toggleMenu}
          >
            <FaBars className=" text-3xl" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {openNav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-full origin-top bg-blue-600 text-white p-10 z-[9999]"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-white">Eric Muganga</h1>
                <RxCross2
                  className=" text-4xl cursor-pointer text-white"
                  onClick={toggleMenu}
                />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {navItems.map((navItem: any, idx: number) => (
                  <div className="overflow-hidden" key={idx}>
                    <MobileNavLink
                      key={idx}
                      title={navItem.title}
                      href={navItem.href}
                      handleClick={toggleMenu}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const menuVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

interface MobileNavLinkProps {
  title: string;
  href: string;
  handleClick: () => void;
}

const MobileNavLink: FC<MobileNavLinkProps> = ({
  title,
  href,
  handleClick,
}) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-white font-lora hover:underline hover:border-b "
    >
      <Link href={href} onClick={handleClick}>
        <motion.span className="z-10 relative hover:border-b-2 hover:border-b-white">
          {title}
        </motion.span>
      </Link>
    </motion.div>
  );
};
