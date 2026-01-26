import Starburst from "./Starburst";

const MoreWorkSection = () => {
  return (
    <section id="more-work" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating starbursts */}
      <Starburst className="top-[15%] left-[12%] floating" size="md" />
      <Starburst className="top-[40%] right-[8%] floating-delayed" size="sm" />
      <Starburst className="bottom-[20%] left-[5%] floating-delayed-2" size="sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="pixel-text text-4xl md:text-5xl text-center mb-4">MORE WORK</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Additional projects and creative explorations.
        </p>

        {/* Placeholder content - can be expanded later */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border opacity-0 animate-slide-in-up"
              style={{ 
                animationDelay: `${item * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-full h-40 bg-secondary rounded-2xl mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Coming Soon</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Project {item}</h3>
              <p className="text-muted-foreground text-sm">More details coming soon...</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreWorkSection;
