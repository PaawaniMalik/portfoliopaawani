import { cn } from "@/lib/utils";

interface BowProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "pink" | "purple";
}

const Bow = ({ 
  className, 
  size = "md", 
  variant = "pink"
}: BowProps) => {
  const sizeClasses = {
    sm: "w-12 h-8",
    md: "w-16 h-12",
    lg: "w-24 h-16",
  };

  const colors = {
    pink: { main: "#FF69B4", dark: "#DB2777", light: "#FFC0CB" },
    purple: { main: "#A855F7", dark: "#7C3AED", light: "#DDD6FE" },
  };

  const color = colors[variant];

  return (
    <div
      className={cn(
        "absolute",
        sizeClasses[size],
        className
      )}
    >
      <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-md">
        {/* Left loop */}
        <ellipse 
          cx="25" cy="30" rx="22" ry="18" 
          fill={color.main}
          stroke={color.dark}
          strokeWidth="2"
        />
        <ellipse 
          cx="22" cy="26" rx="8" ry="6" 
          fill={color.light}
          opacity="0.5"
        />
        
        {/* Right loop */}
        <ellipse 
          cx="75" cy="30" rx="22" ry="18" 
          fill={color.main}
          stroke={color.dark}
          strokeWidth="2"
        />
        <ellipse 
          cx="78" cy="26" rx="8" ry="6" 
          fill={color.light}
          opacity="0.5"
        />
        
        {/* Center knot */}
        <ellipse 
          cx="50" cy="30" rx="10" ry="12" 
          fill={color.dark}
        />
        <ellipse 
          cx="48" cy="27" rx="4" ry="5" 
          fill={color.main}
          opacity="0.6"
        />
        
        {/* Ribbon tails */}
        <path 
          d="M45 42 L38 58 L44 50 L50 58 L56 50 L62 58 L55 42" 
          fill={color.main}
          stroke={color.dark}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default Bow;
