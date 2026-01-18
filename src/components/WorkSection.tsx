import { useEffect, useState } from "react";

const WorkSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating tool icons
  const floatingItems = [
    { 
      type: "icon",
      label: "Figma", 
      bg: "bg-black", 
      text: "text-white",
      icon: "🎨",
      position: "top-[15%] left-[8%]",
      animation: "animate-float-1",
      rotate: "-12deg"
    },
    { 
      type: "icon",
      label: "XD", 
      bg: "bg-purple-600", 
      text: "text-pink-300",
      icon: "Xd",
      position: "top-[8%] left-[25%]",
      animation: "animate-float-2",
      rotate: "-8deg"
    },
    { 
      type: "icon",
      label: "Photoshop", 
      bg: "bg-blue-900", 
      text: "text-blue-400",
      icon: "Ps",
      position: "top-[5%] left-[42%]",
      animation: "animate-float-3",
      rotate: "5deg"
    },
    { 
      type: "icon",
      label: "Illustrator", 
      bg: "bg-orange-700", 
      text: "text-orange-300",
      icon: "Ai",
      position: "top-[10%] right-[30%]",
      animation: "animate-float-1",
      rotate: "10deg"
    },
    { 
      type: "icon",
      label: "InVision", 
      bg: "bg-pink-400", 
      text: "text-pink-100",
      icon: "✎",
      position: "top-[12%] right-[12%]",
      animation: "animate-float-2",
      rotate: "15deg"
    },
    { 
      type: "text",
      label: "SERVICE NOW", 
      position: "top-[20%] left-[3%]",
      animation: "animate-float-3",
      style: "pixel-text text-primary text-lg md:text-2xl"
    },
    { 
      type: "text",
      label: "PROTOTYPE", 
      position: "top-[55%] left-[5%]",
      animation: "animate-float-2",
      style: "font-bold text-sm md:text-base px-2 py-1 bg-white border-2 border-black rounded"
    },
    { 
      type: "text",
      label: "BRAINSTORM", 
      position: "top-[65%] right-[5%]",
      animation: "animate-float-1",
      style: "font-bold text-sm md:text-base px-2 py-1 bg-white border-2 border-black rounded"
    },
    { 
      type: "icon",
      label: "Coffee", 
      bg: "bg-white border-2 border-gray-300", 
      text: "text-amber-700",
      icon: "☕",
      position: "top-[25%] right-[25%]",
      animation: "animate-float-3",
      rotate: "8deg"
    },
    { 
      type: "character",
      position: "top-[35%] right-[8%]",
      animation: "animate-float-2",
    },
    { 
      type: "text",
      label: "FIGMA IS PRACTICALLY MY BESTFRIEND.", 
      position: "top-[45%] right-[3%]",
      animation: "animate-float-1",
      style: "font-bold text-xs md:text-sm max-w-[120px] md:max-w-[150px] text-right"
    },
  ];

  return (
    <section id="work" className="min-h-screen bg-card py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative" style={{ minHeight: "600px" }}>
        
        {/* Floating Items */}
        {floatingItems.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} ${item.animation} ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              transform: item.rotate ? `rotate(${item.rotate})` : undefined
            }}
          >
            {item.type === "icon" && (
              <div className={`w-12 h-12 md:w-16 md:h-16 ${item.bg} rounded-lg flex items-center justify-center shadow-lg`}>
                <span className={`${item.text} font-bold text-lg md:text-xl`}>{item.icon}</span>
              </div>
            )}
            {item.type === "text" && (
              <span className={item.style}>{item.label}</span>
            )}
            {item.type === "character" && (
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-b from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="flex gap-0.5 mt-1">
                  <div className="w-1.5 h-4 bg-green-400 rounded-full"></div>
                  <div className="w-1.5 h-4 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Center Briefcase - STATIC */}
        <div className="flex justify-center items-center pt-20">
          <div className="relative">
            {/* Briefcase */}
            <div className="relative w-[280px] h-[220px] md:w-[400px] md:h-[300px]">
              {/* Main body */}
              <div className="absolute inset-0 bg-pink-300 rounded-2xl border-4 border-pink-400 shadow-2xl">
                {/* Middle strap */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-12 md:w-16 bg-pink-400"></div>
                
                {/* Handle */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 md:w-20 h-6 bg-pink-400 rounded-t-full border-4 border-pink-500 border-b-0"></div>
                
                {/* Clasps */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-20 md:gap-28">
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-pink-200 rounded-full border-2 border-pink-400"></div>
                  <div className="w-4 h-4 md:w-5 md:h-5 bg-pink-200 rounded-full border-2 border-pink-400"></div>
                </div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-pink-500 text-xl md:text-3xl font-bold tracking-wide text-center px-4">
                    WHAT'S IN<br/>MY BAG?
                  </h2>
                </div>

                {/* Stickers on briefcase */}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">He</div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">Lp</div>
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">Me</div>
                </div>

                {/* Dog sticker */}
                <div className="absolute top-12 left-6 md:left-10 text-2xl md:text-4xl">🐕</div>

                {/* Final draft sticker */}
                <div className="absolute bottom-4 right-4 bg-white border-2 border-gray-300 rounded px-2 py-1 text-[8px] md:text-xs">
                  <div className="text-red-500 text-[6px]">SENT</div>
                  <div>THE</div>
                  <div>FINAL</div>
                  <div className="font-bold italic">FINAL</div>
                  <div className="font-black">FINAL</div>
                  <div className="text-[6px]">DRAFT</div>
                </div>

                {/* Coffee sticker on bag */}
                <div className="absolute top-8 right-8 md:right-12">
                  <div className="bg-white rounded-lg px-2 py-1 border-2 border-amber-200 text-xs md:text-sm">
                    <span className="text-amber-600 font-bold">Cf</span>
                    <div className="text-[8px] text-amber-700">Coffee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
