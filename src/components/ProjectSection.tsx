import { Sparkles, Code, Palette, Camera } from "lucide-react";
import Starburst from "./Starburst";

const ProjectSection = () => {
  const projects = [
    {
      icon: Palette,
      title: "Creative Portfolio",
      description: "Showcasing design work with interactive galleries",
      tags: ["Design", "Figma", "Adobe"],
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Building modern, responsive web experiences",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      icon: Camera,
      title: "Visual Content",
      description: "Photography and video production",
      tags: ["Photography", "Editing", "Motion"],
    },
    {
      icon: Sparkles,
      title: "Brand Design",
      description: "Creating memorable brand identities",
      tags: ["Branding", "Logo", "Identity"],
    },
  ];

  return (
    <section id="project" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Moving starbursts */}
      <Starburst className="top-[20%] floating-across" size="md" />
      <Starburst className="top-[50%] floating-across-delayed" size="sm" />
      <Starburst className="top-[75%] floating-across-delayed-2" size="lg" />
      <Starburst className="top-[35%] floating-across" size="sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">PROJECTS</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my journey through various creative and technical projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border group cursor-pointer opacity-0 animate-slide-in-up"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
