import Navigation from "./Navigation";
import heroVideo from "@/assets/hero1.mp4";

interface HeroSectionProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ activeSection, onNavigate }: HeroSectionProps) => {
  return (
    <section className="bg-[#ffe7f7] min-h-screen relative overflow-hidden px-4 pb-8 pt-8 md:px-8 md:pb-24">
      <div className="flex justify-center px-2 relative z-20 mb-8 md:mb-10">
        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      </div>

      <div className="mx-auto relative z-10 pt-10">
          <video
            className="w-full object-fill"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            Your browser does not support the video tag.
          </video>
        </div>
    </section>
  );
};

export default HeroSection;
