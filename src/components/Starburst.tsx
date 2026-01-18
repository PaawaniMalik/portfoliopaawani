import { cn } from "@/lib/utils";

interface StarburstProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  animate?: boolean;
}

const Starburst = ({ 
  className, 
  size = "md", 
  variant = "primary",
  animate = true 
}: StarburstProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  };

  const variantClasses = {
    primary: "from-primary to-accent",
    secondary: "from-pink-400 to-purple-400",
  };

  return (
    <div
      className={cn(
        "starburst",
        sizeClasses[size],
        animate && "pulse-glow",
        className
      )}
      style={{
        background: `linear-gradient(135deg, hsl(var(--starburst)) 0%, hsl(var(--starburst-alt)) 100%)`,
      }}
    />
  );
};

export default Starburst;
