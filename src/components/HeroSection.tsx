import Navigation from "./Navigation";
import PixelTitle from "./PixelTitle";
import CharacterCard from "./CharacterCard";
import Starburst from "./Starburst";
import paawaniAvatar from "@/assets/paawani-avatar.png";

interface HeroSectionProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ activeSection, onNavigate }: HeroSectionProps) => {
  const characters = [
    { emoji: "👩🏻‍💻", label: "Coder", delay: "animation-delay-100" },
    { emoji: "🧋", label: "Coffee lover", delay: "animation-delay-200" },
    { emoji: "🎨", label: "Designer", delay: "animation-delay-300" },
    { emoji: "✨", label: "Creative", delay: "animation-delay-400" },
  ];

  return (
    <section className="min-h-screen grid-bg relative overflow-hidden">
      {/* Starbursts */}
      <Starburst 
        className="top-1/3 left-[10%] floating" 
        size="lg" 
      />
      <Starburst 
        className="top-1/2 right-[8%] floating-delayed" 
        size="md" 
      />
      <Starburst 
        className="bottom-1/4 left-[20%] floating-delayed-2" 
        size="sm" 
      />
      <Starburst 
        className="top-1/4 right-[25%] floating" 
        size="sm" 
      />

      {/* Navigation */}
      <div className="flex justify-center pt-8 px-4 relative z-20">
        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-16 relative z-10">
        {/* Title */}
        <div className="mb-6 md:mb-8">
          <PixelTitle text="PAAWANI" />
        </div>

        {/* Avatar Illustration */}
        <div className="mb-8 md:mb-12">
          <img 
            src={paawaniAvatar} 
            alt="Paawani illustration" 
            className="w-40 h-40 md:w-52 md:h-52 object-contain mx-auto floating"
          />
        </div>

        {/* Character Cards */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
          {characters.map((char, index) => (
            <CharacterCard
              key={index}
              emoji={char.emoji}
              label={char.label}
              delay={char.delay}
            />
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar absolute bottom-0 left-0 right-0 py-4 px-6 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide">
          <span className="font-semibold">Paawani</span> is a Creative Designer, Developer, and Digital Artist bringing ideas to life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
