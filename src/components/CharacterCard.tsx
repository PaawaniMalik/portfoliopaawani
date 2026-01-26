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
        <div className="w-40 h-56 md:w-52 md:h-72 lg:w-60 lg:h-80 bg-gradient-to-b from-secondary to-background rounded-3xl flex items-end justify-center overflow-hidden shadow-lg border-2 border-primary/20">
          <span className="text-8xl md:text-9xl lg:text-[10rem] mb-4 drop-shadow-lg">{emoji}</span>
        </div>
      </div>
      <span className="mt-4 text-base md:text-lg font-medium text-muted-foreground">{label}</span>
    </div>
  );
};

export default CharacterCard;
