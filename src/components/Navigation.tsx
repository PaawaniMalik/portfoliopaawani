import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact me" },
    { id: "archive", label: "Archive" },
  ];

  return (
    <nav className="nav-bar flex items-center gap-2 px-4 py-2 shadow-xl fixed z-[1001]">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mr-4">
        <span className="pixel-text text-lg text-white">P</span>
      </div>
      
      {navItems.map((item) =>
        item.id === "archive" ? (
          <a
            key={item.id}
            href="https://paawanimalik.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {item.label}
          </a>
        ) : (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              "nav-link",
              activeSection === item.id && "active text-primary"
            )}
          >
            {item.label}
          </button>
        )
      )}
    </nav>
  );
};

export default Navigation;
