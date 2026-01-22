import { cn } from "@/lib/utils";

interface BlinkingAvatarProps {
  src: string;
  alt: string;
  className?: string;
  eyePositions?: { left: { top: string; left: string }; right: { top: string; left: string } };
}

const BlinkingAvatar = ({ src, alt, className, eyePositions }: BlinkingAvatarProps) => {
  // Default eye positions - can be customized per avatar
  const defaultEyePositions = {
    left: { top: "32%", left: "35%" },
    right: { top: "32%", left: "55%" },
  };

  const positions = eyePositions || defaultEyePositions;

  return (
    <div className={cn("relative", className)}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain"
      />
      {/* Left eye blink overlay */}
      <div 
        className="absolute w-[12%] h-[3%] bg-[hsl(var(--background))] rounded-full animate-blink opacity-0"
        style={{ top: positions.left.top, left: positions.left.left }}
      />
      {/* Right eye blink overlay */}
      <div 
        className="absolute w-[12%] h-[3%] bg-[hsl(var(--background))] rounded-full animate-blink opacity-0"
        style={{ top: positions.right.top, left: positions.right.left }}
      />
    </div>
  );
};

export default BlinkingAvatar;
