import { Sparkles, Code, Palette, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Starburst from "./Starburst";
import StackingCards, { StackingCardItem } from "./ui/stacking-cards";

const ProjectSection = () => {
  const projects: {
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
  }[] = [
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
      className="min-h-screen grid-bg py-20 px-4 md:px-8 relative"
    >
      {/* Floating starbursts */}
      <Starburst className="top-[20%] left-[8%] floating" size="md" />
      <Starburst className="top-[50%] right-[10%] floating-delayed" size="sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-6xl text-center mb-4">
          PROJECTS
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my journey through various creative and technical projects.
        </p>

        <StackingCards
          totalCards={projects.length}
          className="relative"
        >

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <StackingCardItem
                key={project.title}
                index={index}
                className="h-[800px] mt-12"
              >
                <article className="mx-auto flex h-[82%] w-11/12 max-w-7xl flex-col justify-between rounded-[30px] border border-[#efb8d8] bg-[#fff8fc] p-6 shadow-[0_14px_40px_rgba(229,57,154,0.14)] md:p-8">
                  <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffd9ef] px-4 py-2 text-[#a43877]">
                      <Icon size={18} />
                      <span className="text-sm font-semibold tracking-wide">
                        Project {index + 1}
                      </span>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mb-4 text-base font-medium text-[#b34f86] md:text-lg">
                      {project.description}
                    </p>

                    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 md:mt-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#efb8d8] bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#8a3a69]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </StackingCardItem>
            );
          })}

          <div className="h-48" />
        </StackingCards>
      </div>
    </section>
  );
};

export default ProjectSection;
