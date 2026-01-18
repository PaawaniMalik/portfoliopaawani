import { cn } from "@/lib/utils";

interface PixelTitleProps {
  text: string;
  className?: string;
}

const PixelTitle = ({ text, className }: PixelTitleProps) => {
  return (
    <h1 
      className={cn(
        "pixel-text text-4xl md:text-6xl lg:text-7xl tracking-wider select-none",
        "animate-slide-in-up",
        className
      )}
    >
      {text}
    </h1>
  );
};

export default PixelTitle;
