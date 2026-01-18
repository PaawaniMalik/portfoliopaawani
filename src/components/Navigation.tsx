import { cn } from "@/lib/utils";
import { useState } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "work", label: "Work" },
    { id: "project", label: "Project" },
    { id: "about", label: "About me" },
  ];

  return (
    <nav className="nav-bar flex items-center gap-2 px-4 py-2 shadow-xl">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 mr-4">
        <span className="pixel-text text-lg text-white">P</span>
      </div>
      
      {navItems.map((item) => (
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
      ))}
    </nav>
  );
};

export default Navigation;
