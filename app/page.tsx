import About from "@/components/About";
import Blog from "@/components/Blog";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { StickyNavbar } from "@/components/NavBar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testmonials from "@/components/Testmonials";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-clip">
      <div className="max-w-7xl w-full">
        <StickyNavbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Testmonials />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
