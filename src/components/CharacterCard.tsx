import { cn } from "@/lib/utils";

interface CharacterCardProps {
  emoji: string;
  label: string;
  className?: string;
  delay?: string;
}

const CharacterCard = ({ emoji, label, className, delay }: CharacterCardProps) => {
  return (
    <div 
      className={cn(
        "character-card flex flex-col items-center cursor-pointer opacity-0 animate-slide-in-up",
        delay,
        className
      )}
    >
      <div className="relative">
        <div className="w-32 h-48 md:w-40 md:h-56 bg-gradient-to-b from-secondary to-background rounded-3xl flex items-end justify-center overflow-hidden shadow-lg border-2 border-primary/20">
          <span className="text-7xl md:text-8xl mb-4 drop-shadow-lg">{emoji}</span>
        </div>
      </div>
      <span className="mt-3 text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
};

export default CharacterCard;
