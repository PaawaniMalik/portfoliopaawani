import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import ProjectSection from "@/components/ProjectSection";
import MoreWorkSection from "@/components/MoreWorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { FocusCardsDemo } from "@/components/focus-card";
import { TypewriterEffectSmoothDemo } from "@/components/Typewriter Effect";

const   Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const workRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const moreWorkRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "work" && workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "project" && projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection activeSection={activeSection} onNavigate={handleNavigate} />

      <div ref={workRef}>
        <WorkSection />
      </div>

      <MarqueeStrip />

      <div ref={projectRef}>
        <ProjectSection />

      </div>

      <div ref={moreWorkRef}>
        <MoreWorkSection />
      </div>

      <div ref={aboutRef}>
        <AboutSection />
      </div>

      <ContactSection />
    </div>
  );
};

export default Index;
