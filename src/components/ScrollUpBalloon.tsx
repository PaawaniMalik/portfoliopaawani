interface ScrollUpBalloonProps {
  onClick: () => void;
}

const ScrollUpBalloon = ({ onClick }: ScrollUpBalloonProps) => {
  return (
    <button
      onClick={onClick}
      className="group cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
      aria-label="Scroll to top"
    >
      {/* Balloon */}
      <div className="relative">
        {/* Balloon body */}
        <div className="w-24 h-28 bg-gradient-to-br from-primary via-pink-400 to-primary rounded-full relative shadow-lg group-hover:shadow-xl transition-shadow duration-300">
          {/* Shine effect */}
          <div className="absolute top-4 left-4 w-6 h-8 bg-white/30 rounded-full blur-sm" />
          
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xs text-center leading-tight drop-shadow-md">
              SCROLL
              <br />
              UP ↑
            </span>
          </div>
          
          {/* Balloon knot */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
        </div>
        
        {/* String */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-foreground/40" 
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--primary)), transparent)'
          }}
        />
      </div>
    </button>
  );
};

export default ScrollUpBalloon;
