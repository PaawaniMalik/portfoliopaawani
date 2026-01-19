import { useState } from "react";

const WorkSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Floating tool icons - positioned to not overlap when revealed
  const floatingItems = [
    { 
      type: "icon",
      label: "Figma", 
      bg: "bg-[#0ACF83]", 
      text: "text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current">
          <path d="M5 5.5A5.5 5.5 0 0 1 10.5 0H12v8h-1.5A5.5 5.5 0 0 1 5 5.5z"/>
          <path d="M12 0h1.5a5.5 5.5 0 1 1 0 11H12V0z"/>
          <path d="M5 12a5.5 5.5 0 0 1 5.5-5.5H12v11h-1.5A5.5 5.5 0 0 1 5 12z"/>
          <path d="M5 18.5A5.5 5.5 0 0 1 10.5 13H12v5.5a5.5 5.5 0 1 1-7 0z"/>
          <path d="M19 12a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      ),
      openPosition: "-top-[140px] -left-[180px] md:-top-[160px] md:-left-[240px]",
      rotate: "-15deg"
    },
    { 
      type: "icon",
      label: "XD", 
      bg: "bg-[#470137]", 
      text: "text-[#FF61F6]",
      icon: "Xd",
      openPosition: "-top-[120px] -left-[80px] md:-top-[140px] md:-left-[100px]",
      rotate: "-8deg"
    },
    { 
      type: "icon",
      label: "Photoshop", 
      bg: "bg-[#001E36]", 
      text: "text-[#31A8FF]",
      icon: "Ps",
      openPosition: "-top-[140px] left-0 md:-top-[160px]",
      rotate: "0deg"
    },
    { 
      type: "icon",
      label: "Illustrator", 
      bg: "bg-[#FF9A00]", 
      text: "text-[#300000]",
      icon: "Ai",
      openPosition: "-top-[120px] left-[80px] md:-top-[140px] md:left-[100px]",
      rotate: "8deg"
    },
    { 
      type: "icon",
      label: "InVision", 
      bg: "bg-pink-300 border-4 border-pink-400", 
      text: "text-pink-600",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current">
          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm4 3h4v2h-4V9zm0 4h4v2h-4v-2z"/>
        </svg>
      ),
      openPosition: "-top-[140px] left-[160px] md:-top-[160px] md:left-[220px]",
      rotate: "12deg"
    },
    { 
      type: "text",
      label: "SERVICE NOW", 
      openPosition: "-top-[200px] -left-[200px] md:-top-[220px] md:-left-[280px]",
      style: "pixel-text text-primary text-xl md:text-3xl font-black tracking-wide",
      rotate: "-10deg"
    },
    { 
      type: "text",
      label: "PROTOTYPE", 
      openPosition: "top-[80px] -left-[200px] md:top-[100px] md:-left-[280px]",
      style: "font-bold text-sm md:text-lg px-3 py-1 bg-white border-2 border-black rounded -rotate-12"
    },
    { 
      type: "text",
      label: "BRAINSTORM", 
      openPosition: "top-[80px] left-[160px] md:top-[100px] md:left-[220px]",
      style: "font-bold text-sm md:text-lg px-3 py-1 bg-white border-2 border-black rounded"
    },
    { 
      type: "icon",
      label: "Coffee", 
      bg: "bg-white border-2 border-amber-200", 
      text: "text-amber-700",
      icon: (
        <div className="text-center">
          <div className="text-amber-600 font-bold text-sm md:text-lg">Cf</div>
          <div className="text-[8px] md:text-xs text-amber-700">Coffee</div>
        </div>
      ),
      openPosition: "-top-[60px] left-[100px] md:-top-[80px] md:left-[140px]",
      rotate: "5deg"
    },
    { 
      type: "character",
      openPosition: "-top-[40px] left-[200px] md:-top-[60px] md:left-[300px]",
    },
    { 
      type: "text",
      label: "FIGMA IS PRACTICALLY MY BESTFRIEND.", 
      openPosition: "top-[40px] left-[200px] md:top-[40px] md:left-[300px]",
      style: "font-bold text-xs md:text-sm max-w-[120px] md:max-w-[150px] text-left leading-tight"
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-card py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative flex justify-center items-center" style={{ minHeight: "700px" }}>
        
        {/* Center Container for Briefcase and Items */}
        <div className="relative">
          {/* Floating Items - positioned relative to briefcase */}
          {floatingItems.map((item, index) => (
            <div
              key={index}
              className={`absolute left-1/2 top-1/2 transition-all duration-700 ease-out z-10
                ${isOpen ? item.openPosition : 'translate-x-0 translate-y-0 scale-0 opacity-0'}
                ${isOpen ? 'opacity-100 scale-100' : ''}`}
              style={{ 
                transitionDelay: isOpen ? `${index * 80}ms` : '0ms',
                transform: isOpen && item.rotate ? `rotate(${item.rotate})` : undefined
              }}
            >
              {item.type === "icon" && (
                <div className={`w-14 h-14 md:w-20 md:h-20 ${item.bg} rounded-xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform`}>
                  {typeof item.icon === 'string' ? (
                    <span className={`${item.text} font-bold text-2xl md:text-3xl`}>{item.icon}</span>
                  ) : (
                    <span className={item.text}>{item.icon}</span>
                  )}
                </div>
              )}
              {item.type === "text" && (
                <span className={item.style}>{item.label}</span>
              )}
              {item.type === "character" && (
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-b from-orange-400 to-red-500 rounded-lg flex items-center justify-center border-2 border-orange-600">
                    <span className="text-2xl md:text-3xl">🎯</span>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <div className="w-2 h-5 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-5 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-5 bg-purple-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-3 mt-1">
                    <div className="w-2 h-3 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-3 bg-teal-400 rounded-full"></div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Briefcase - Clickable */}
          <div 
            className="relative cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`relative w-[300px] h-[240px] md:w-[420px] md:h-[320px] transition-transform duration-300 ${isOpen ? 'scale-95' : 'hover:scale-105'}`}>
              {/* Main body */}
              <div className="absolute inset-0 bg-pink-300 rounded-3xl border-4 border-pink-400 shadow-2xl overflow-hidden">
                {/* Middle strap */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-14 md:w-20 bg-pink-400"></div>
                
                {/* Handle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="w-20 md:w-24 h-8 bg-pink-400 rounded-t-full border-4 border-pink-500 border-b-0 relative">
                    {/* Handle connector dots */}
                    <div className="absolute -bottom-1 left-2 w-3 h-3 bg-amber-500 rounded-full border-2 border-amber-600"></div>
                    <div className="absolute -bottom-1 right-2 w-3 h-3 bg-amber-500 rounded-full border-2 border-amber-600"></div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-tr-full"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 bg-pink-400 rounded-tl-full"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-pink-600 text-2xl md:text-4xl font-black tracking-wide text-center px-4 drop-shadow-sm">
                    WHAT'S IN<br/>MY BAG?
                  </h2>
                </div>

                {/* Dog sticker - "This is fine" dog */}
                <div className="absolute top-10 left-6 md:left-10 md:top-14">
                  <div className="bg-amber-100 rounded-full p-2 border-2 border-amber-300">
                    <span className="text-2xl md:text-4xl">🐕‍🦺</span>
                  </div>
                </div>

                {/* HelpMe sticker */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex gap-0.5">
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-orange-500 rounded text-white text-xs md:text-sm flex items-center justify-center font-bold shadow-md">He</div>
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-purple-600 rounded text-white text-xs md:text-sm flex items-center justify-center font-bold shadow-md">Lp</div>
                  <div className="w-7 h-7 md:w-10 md:h-10 bg-green-500 rounded text-white text-xs md:text-sm flex items-center justify-center font-bold shadow-md">Me</div>
                </div>

                {/* Coffee sticker on bag */}
                <div className="absolute top-10 right-6 md:right-10 md:top-14">
                  <div className="bg-white rounded-xl px-3 py-2 border-2 border-amber-200 shadow-md">
                    <div className="text-amber-500 text-lg">☕</div>
                    <div className="text-amber-600 font-bold text-xs md:text-sm">Cf</div>
                    <div className="text-[8px] md:text-[10px] text-amber-700">Coffee</div>
                  </div>
                </div>

                {/* Final draft sticker */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-white border-2 border-gray-300 rounded-lg px-3 py-2 shadow-md rotate-3">
                  <div className="text-red-500 text-[8px] md:text-[10px] font-bold border border-red-400 px-1 rounded mb-1 inline-block">SENT</div>
                  <div className="text-[10px] md:text-xs text-gray-700">THE</div>
                  <div className="text-[10px] md:text-xs text-gray-700">FINAL</div>
                  <div className="text-xs md:text-sm font-bold italic text-gray-800">FINAL</div>
                  <div className="text-sm md:text-base font-black text-black">FINAL</div>
                  <div className="text-[8px] md:text-[10px] text-gray-600">DRAFT</div>
                </div>
              </div>
            </div>

            {/* Click hint */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 text-center transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-pink-500 text-sm md:text-base font-medium animate-pulse">
                ✨ Click to open! ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
