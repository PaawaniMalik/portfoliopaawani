import { useState } from "react";
import { Sparkles, Code, Palette, Camera, X } from "lucide-react";
import Starburst from "./Starburst";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      icon: Palette,
      title: "Creative Portfolio",
      description: "Showcasing design work with interactive galleries",
      fullDescription: "A comprehensive portfolio showcasing my design journey, featuring interactive galleries, case studies, and creative explorations across various mediums and styles.",
      tags: ["Design", "Figma", "Adobe"],
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Building modern, responsive web experiences",
      fullDescription: "Modern web applications built with cutting-edge technologies, focusing on performance, accessibility, and delightful user experiences across all devices.",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      icon: Camera,
      title: "Visual Content",
      description: "Photography and video production",
      fullDescription: "Creative visual content including photography, video production, and motion graphics that tell compelling stories and capture memorable moments.",
      tags: ["Photography", "Editing", "Motion"],
    },
    {
      icon: Sparkles,
      title: "Brand Design",
      description: "Creating memorable brand identities",
      fullDescription: "End-to-end brand identity design including logo creation, visual systems, brand guidelines, and strategic positioning for memorable market presence.",
      tags: ["Branding", "Logo", "Identity"],
    },
  ];

  return (
    <section id="project" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating starbursts */}
      <Starburst className="top-[20%] left-[8%] floating" size="md" />
      <Starburst className="top-[50%] right-[10%] floating-delayed" size="sm" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">PROJECTS</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my journey through various creative and technical projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border group cursor-pointer opacity-0 animate-slide-in-up relative overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              
              {/* Description - hidden by default, shows on hover */}
              <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                <p className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
              
              {/* Click hint */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-primary font-medium">Click to view →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-card rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl border border-border animate-scale-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
              {(() => {
                const IconComponent = projects[selectedProject].icon;
                return <IconComponent className="w-10 h-10 text-primary-foreground" />;
              })()}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{projects[selectedProject].title}</h3>
            
            {/* Full Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {projects[selectedProject].fullDescription}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[selectedProject].tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-4 py-2 text-sm rounded-full bg-secondary text-secondary-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              View Project
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
