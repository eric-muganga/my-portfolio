import About from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import { StickyNavbar } from "@/components/NavBar";
import Skills from "@/components/Skills";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col">
      <div className="max-w-7xl w-full">
        <StickyNavbar />
        <Hero />
        <About />
        <Skills />
        <Grid />
      </div>
    </main>
  );
}
