import { useState } from "react";
import { Sparkles, Code, Palette, Camera, X } from "lucide-react";
import Starburst from "./Starburst";
import { FocusCardsDemo } from "./focus-card";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Palette,
      title: "Creative Portfolio",
      description: "Showcasing design work with interactive galleries",
      fullDescription:
        "A comprehensive portfolio showcasing my design journey, featuring interactive galleries, case studies, and creative explorations across various mediums and styles.",
      tags: ["Design", "Figma", "Adobe"],
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Building modern, responsive web experiences",
      fullDescription:
        "Modern web applications built with cutting-edge technologies, focusing on performance, accessibility, and delightful user experiences across all devices.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      icon: Camera,
      title: "Visual Content",
      description: "Photography and video production",
      fullDescription:
        "Creative visual content including photography, video production, and motion graphics that tell compelling stories and capture memorable moments.",
      tags: ["Photography", "Editing", "Motion"],
    },
    {
      icon: Sparkles,
      title: "Brand Design",
      description: "Creating memorable brand identities",
      fullDescription:
        "End-to-end brand identity design including logo creation, visual systems, brand guidelines, and strategic positioning for memorable market presence.",
      tags: ["Branding", "Logo", "Identity"],
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Floating starbursts */}
      <Starburst className="top-[20%] left-[8%] floating" size="md" />
      <Starburst className="top-[50%] right-[10%] floating-delayed" size="sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">
          PROJECTS
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my journey through various creative and technical projects.
        </p>
        <FocusCardsDemo />
      </div>
    </section>
  );
};

export default ProjectSection;
