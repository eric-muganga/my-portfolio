import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems, projects } from "@/data";

const Grid = () => {
  return (
    <section id="projects" className="h-screen">
      <div className="flex justify-center items-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-white">
          My Projects
        </h2>
      </div>
      <BentoGrid>
        {projects.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.des}
            className={` ${
              item.id === 1 || item.id === 4 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
