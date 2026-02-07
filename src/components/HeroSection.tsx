import Navigation from "./Navigation";
import PixelTitle from "./PixelTitle";
import Starburst from "./Starburst";
import { Confetti, type ConfettiRef } from "./ui/confetti";
import { useRef } from "react";
import paawaniAvatar from "@/assets/paawani-avatar.png";
import paawaniAvatar2 from "@/assets/paawani-avatar-2.png";
import paawaniAvatar3 from "@/assets/paawani-avatar-3.png";
import paawaniAvatar4 from "@/assets/paawani-avatar-4.png";
import paawaniAvatar5 from "@/assets/paawani-avatar-5.png";
import paawaniAvatar6 from "@/assets/paawani-avatar-6.png";

interface HeroSectionProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const HeroSection = ({ activeSection, onNavigate }: HeroSectionProps) => {
  const confettiRef = useRef<ConfettiRef>(null);
  
  const avatars = [
    { src: paawaniAvatar, alt: "Paawani main", delay: "" },
    { src: paawaniAvatar2, alt: "Paawani with drink", delay: "floating-delayed" },
    { src: paawaniAvatar3, alt: "Paawani casual", delay: "floating-delayed-2" },
    { src: paawaniAvatar4, alt: "Paawani with headphones", delay: "floating" },
    { src: paawaniAvatar5, alt: "Paawani with dog", delay: "floating-delayed" },
    { src: paawaniAvatar6, alt: "Paawani smiling", delay: "floating-delayed-2" },
  ];

  return (
    <section className="min-h-screen grid-bg relative overflow-hidden">
      {/* Floating Starbursts */}
      <Starburst className="top-1/3 left-[10%] floating" size="lg" />
      <Starburst className="top-1/2 right-[8%] floating-delayed" size="md" />
      <Starburst className="bottom-1/4 left-[20%] floating-delayed-2" size="sm" />
      <Starburst className="top-1/4 right-[25%] floating" size="sm" />

      {/* Navigation */}
      <div className="flex justify-center pt-8 px-4 relative z-20">
        <Navigation activeSection={activeSection} onNavigate={onNavigate} />
      </div>

      {/* Main Content */} 
      <div className="flex flex-col items-center justify-center px-4 pt-20 pb-16 relative z-10">
        {/* Title */}
        <div 
          className="mb-6 md:mb-8 relative"
          onMouseEnter={() => confettiRef.current?.fire({})}
          onClick={() => confettiRef.current?.fire({})}
        >
          <PixelTitle text="PAAWANI MALIK" />
          <Confetti
            ref={confettiRef}
            className="absolute top-0 left-0 z-50 size-full pointer-events-none"
          />
        </div>

        {/* Avatar Illustrations */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
          {avatars.map((avatar, index) => (
            <img 
              key={index}
              src={avatar.src} 
              alt={avatar.alt} 
              className={`w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain ${avatar.delay || 'floating'}`}
            />
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="footer-bar absolute bottom-0 left-0 right-0 py-4 px-6 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide">
          <span className="font-semibold">Paawani</span> is a Creative Designer and Digital Artist bringing ideas to life.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
