import { Sparkles, Code, Palette, Camera } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Starburst from "./Starburst";
import StackingCards, { StackingCardItem } from "./ui/stacking-cards";
import thaliTalesImage from "../assets/project/thalitales.png";
import pawsNGoImage from "../assets/project/pawsngo.png";
import casperImage from "../assets/project/casper.png";
import dataVisualisationImage from "../assets/project/datavisualisation.png";

const ProjectSection = () => {
  const projects: {
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    link: string;
    tags: string[];
  }[] = [
    {
      icon: Palette,
      title: "ThaliTales",
      description: "Affordable, home-style meals for everyday comfort",
      fullDescription:
        "ThaliTales is my take on making everyday meals feel simple, comforting, and reliable. It’s a service designed to bring affordable, home-style food into people’s daily lives.",
      image: thaliTalesImage,
      link: "https://www.behance.net/gallery/245720909/Thaliatles",
      tags: ["Food Service", "UX", "Service Design"],
    },
    {
      icon: Sparkles,
      title: "PawsNGo",
      description: "A seamless omnichannel pet care experience",
      fullDescription:
        "PawsNGo is my take on creating a seamless omnichannel experience for pet care. It connects online and offline touchpoints to make pet services more convenient, accessible, and stress-free.",
      image: pawsNGoImage,
      link: "https://www.behance.net/gallery/243617547/Omnichannel-Project-PAWSNGO",
      tags: ["Omnichannel", "Pet Care", "Experience Design"],
    },
    {
      icon: Code,
      title: "Casper",
      description: "Simplifying tooling inventory for industries",
      fullDescription:
        "Casper is a service design project focused on simplifying tooling inventory management in real-world industries. It streamlines tracking, availability, and usage to make operations more efficient and hassle-free.",
      image: casperImage,
      link: "https://www.behance.net/gallery/243609167/Service-Design-Project-CASPER",
      tags: ["Operations", "Inventory", "Service Design"],
    },
    {
      icon: Camera,
      title: "Data Visualization",
      description: "Turning complex information into clear infographics",
      fullDescription:
        "This data visualization project is my exploration of turning complex information into clear, engaging infographics. It focuses on making data easy to understand through thoughtful visuals and storytelling.",
      image: dataVisualisationImage,
      link: "https://www.behance.net/gallery/243713721/Data-Vizualisation-Project",
      tags: ["Data Storytelling", "Infographics", "Visual Design"],
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

                    <div className="mt-6 overflow-hidden rounded-2xl border border-[#efb8d8] bg-white">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="h-56 w-full object-fill md:h-72"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 md:mt-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#efb8d8] bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#8a3a69]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full bg-[#a43877] px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-[#8a2e63]"
                    >
                      View on Behance
                    </a>
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
