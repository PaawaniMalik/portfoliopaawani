import { ExternalLink } from "lucide-react";

const WorkSection = () => {
  const works = [
    {
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete visual identity for modern startups",
      color: "from-pink-400 to-rose-500",
    },
    {
      title: "Mobile App UI",
      category: "UI/UX Design",
      description: "Intuitive interfaces for mobile experiences",
      color: "from-purple-400 to-pink-500",
    },
    {
      title: "Web Development",
      category: "Development",
      description: "Responsive and interactive web applications",
      color: "from-rose-400 to-orange-400",
    },
    {
      title: "Illustration Series",
      category: "Illustration",
      description: "Digital art and character design",
      color: "from-fuchsia-400 to-purple-500",
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-card py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">WORK</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my favorite projects showcasing design, development, and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 h-64 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl opacity-0 animate-slide-in-up"
              style={{ 
                background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-90`} />
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div>
                  <span className="text-xs uppercase tracking-wider opacity-80">{work.category}</span>
                  <h3 className="text-2xl font-bold mt-2">{work.title}</h3>
                  <p className="mt-2 opacity-80">{work.description}</p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm">View Project</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
