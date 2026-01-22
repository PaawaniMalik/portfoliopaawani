import { useState, useRef } from "react";
import Starburst from "./Starburst";

interface DraggableItem {
  id: number;
  x: number;
  y: number;
}

const WorkSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [draggedPositions, setDraggedPositions] = useState<Record<number, DraggableItem>>({});
  const [dragging, setDragging] = useState<number | null>(null);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Floating tool icons - well-spaced positions
  const floatingItems = [
    { 
      id: 0,
      type: "text",
      label: "SERVICE NOW", 
      openPosition: { x: -320, y: -180 },
      style: "pixel-text text-primary text-2xl md:text-4xl font-black tracking-wide",
      rotate: -10
    },
    { 
      id: 1,
      type: "icon",
      label: "Figma", 
      bg: "bg-[#1E1E1E]", 
      text: "text-white",
      icon: (
        <svg viewBox="0 0 38 57" className="w-6 h-9 md:w-8 md:h-12">
          <path fill="#F24E1E" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
          <path fill="#A259FF" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
          <path fill="#1ABCFE" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
          <path fill="#0ACF83" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
          <path fill="#FF7262" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
        </svg>
      ),
      openPosition: { x: -180, y: -140 },
      rotate: -12
    },
    { 
      id: 2,
      type: "icon",
      label: "XD", 
      bg: "bg-[#470137]", 
      text: "text-[#FF61F6]",
      icon: "Xd",
      openPosition: { x: -60, y: -160 },
      rotate: -5
    },
    { 
      id: 3,
      type: "icon",
      label: "Photoshop", 
      bg: "bg-[#001E36]", 
      text: "text-[#31A8FF]",
      icon: "Ps",
      openPosition: { x: 60, y: -160 },
      rotate: 5
    },
    { 
      id: 4,
      type: "icon",
      label: "Illustrator", 
      bg: "bg-[#330000]", 
      text: "text-[#FF9A00]",
      icon: "Ai",
      openPosition: { x: 180, y: -140 },
      rotate: 10
    },
    { 
      id: 5,
      type: "icon",
      label: "InVision", 
      bg: "bg-pink-300 border-4 border-pink-400", 
      text: "text-pink-600",
      icon: (
        <span className="text-2xl md:text-3xl font-black">W</span>
      ),
      openPosition: { x: 300, y: -100 },
      rotate: 15
    },
    { 
      id: 6,
      type: "text",
      label: "PROTOTYPE", 
      openPosition: { x: -300, y: 80 },
      style: "font-bold text-base md:text-xl px-4 py-2 bg-white border-3 border-black rounded shadow-lg",
      rotate: -8
    },
    { 
      id: 7,
      type: "icon",
      label: "Coffee", 
      bg: "bg-white border-2 border-amber-300", 
      text: "text-amber-700",
      icon: (
        <div className="text-center">
          <div className="text-amber-500 text-xl">☕</div>
          <div className="text-amber-600 font-bold text-sm md:text-base">Cf</div>
          <div className="text-[8px] md:text-xs text-amber-700">Coffee</div>
        </div>
      ),
      openPosition: { x: 200, y: -40 },
      rotate: 8
    },
    { 
      id: 8,
      type: "character",
      openPosition: { x: 340, y: 20 },
      rotate: 0
    },
    { 
      id: 9,
      type: "text",
      label: "FIGMA IS PRACTICALLY MY BESTFRIEND.", 
      openPosition: { x: 320, y: 120 },
      style: "font-bold text-sm md:text-base max-w-[160px] text-left leading-tight",
      rotate: 0
    },
    { 
      id: 10,
      type: "text",
      label: "BRAINSTORM", 
      openPosition: { x: 280, y: 200 },
      style: "font-bold text-base md:text-xl px-4 py-2 bg-white border-3 border-black rounded shadow-lg",
      rotate: 5
    },
  ];

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    if (!isOpen) return;
    e.preventDefault();
    e.stopPropagation();
    setDragging(id);
    const current = draggedPositions[id] || { x: 0, y: 0 };
    dragStart.current = { x: e.clientX - current.x, y: e.clientY - current.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging === null || !dragStart.current) return;
    const newX = e.clientX - dragStart.current.x;
    const newY = e.clientY - dragStart.current.y;
    setDraggedPositions(prev => ({
      ...prev,
      [dragging]: { id: dragging, x: newX, y: newY }
    }));
  };

  const handleMouseUp = () => {
    setDragging(null);
    dragStart.current = null;
  };

  const handleTouchStart = (e: React.TouchEvent, id: number) => {
    if (!isOpen) return;
    e.stopPropagation();
    setDragging(id);
    const touch = e.touches[0];
    const current = draggedPositions[id] || { x: 0, y: 0 };
    dragStart.current = { x: touch.clientX - current.x, y: touch.clientY - current.y };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragging === null || !dragStart.current) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStart.current.x;
    const newY = touch.clientY - dragStart.current.y;
    setDraggedPositions(prev => ({
      ...prev,
      [dragging]: { id: dragging, x: newX, y: newY }
    }));
  };

  const handleTouchEnd = () => {
    setDragging(null);
    dragStart.current = null;
  };

  const handleBriefcaseClick = () => {
    if (!isOpen) {
      setDraggedPositions({});
    }
    setIsOpen(!isOpen);
  };

  return (
    <section 
      id="work" 
      className="min-h-screen grid-bg py-20 px-4 md:px-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Moving Starbursts */}
      <Starburst className="top-[10%] floating-across" size="md" />
      <Starburst className="top-[30%] floating-across-delayed" size="sm" />
      <Starburst className="top-[60%] floating-across-delayed-2" size="sm" />
      <Starburst className="top-[80%] floating-across" size="md" />
      <Starburst className="top-[45%] floating-across-delayed" size="lg" />
      
      {/* Title */}
      <div className="flex flex-col items-center mb-8 relative z-10">
        <h2 className="pixel-text text-4xl md:text-6xl text-primary">SKILLS</h2>
      </div>

      {/* Left Sticky Notes */}
      <div className="absolute left-4 md:left-12 top-1/4 z-20 flex flex-col gap-8">
        <div className="w-44 h-52 md:w-56 md:h-64 bg-pink-300 shadow-xl rotate-[-5deg] p-5 flex flex-col border-b-4 border-pink-400 animate-wiggle">
          <span className="text-pink-800 font-bold text-base md:text-lg mb-3">🛠️ Tools</span>
          <ul className="text-pink-700 text-xs md:text-sm space-y-1.5">
            <li>• Figma</li>
            <li>• Framer</li>
            <li>• FigJam</li>
            <li>• Adobe Illustrator</li>
            <li>• Photoshop</li>
            <li>• Miro</li>
          </ul>
        </div>
        <div className="w-44 h-56 md:w-56 md:h-72 bg-pink-200 shadow-xl rotate-[3deg] p-5 flex flex-col border-b-4 border-pink-300 animate-wiggle" style={{ animationDelay: '0.5s' }}>
          <span className="text-pink-800 font-bold text-base md:text-lg mb-3">💬 Soft Skills</span>
          <ul className="text-pink-700 text-xs md:text-sm space-y-1.5">
            <li>• Clear communicator</li>
            <li>• Time-disciplined and dependable with deadlines</li>
            <li>• Always open to feedbacks</li>
            <li>• Very Adjusting</li>
          </ul>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto relative flex justify-center items-center" 
        style={{ minHeight: "700px" }}
      >
        
        {/* Center Container for Briefcase and Items */}
        <div className="relative">
          {/* Floating Items - positioned relative to briefcase center */}
          {floatingItems.map((item, index) => {
            const dragOffset = draggedPositions[item.id] || { x: 0, y: 0 };
            const baseX = item.openPosition.x;
            const baseY = item.openPosition.y;
            
            return (
              <div
                key={item.id}
                className={`absolute left-1/2 top-1/2 z-20 select-none
                  ${isOpen ? 'opacity-100 scale-100 cursor-grab' : 'opacity-0 scale-0 pointer-events-none'}
                  ${dragging === item.id ? 'cursor-grabbing z-50' : ''}
                  transition-all duration-500 ease-out`}
                style={{ 
                  transform: isOpen 
                    ? `translate(${baseX + dragOffset.x}px, ${baseY + dragOffset.y}px) rotate(${item.rotate || 0}deg)`
                    : 'translate(-50%, -50%) scale(0)',
                  transitionDelay: isOpen && dragOffset.x === 0 ? `${index * 60}ms` : '0ms',
                  transitionProperty: dragging === item.id ? 'none' : 'all'
                }}
                onMouseDown={(e) => handleMouseDown(e, item.id)}
                onTouchStart={(e) => handleTouchStart(e, item.id)}
              >
                {item.type === "icon" && (
                  <div className={`w-16 h-16 md:w-20 md:h-20 ${item.bg} rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow`}>
                    {typeof item.icon === 'string' ? (
                      <span className={`${item.text} font-bold text-3xl md:text-4xl`}>{item.icon}</span>
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
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-b from-orange-400 to-red-500 rounded-lg flex items-center justify-center border-2 border-orange-600 shadow-lg">
                      <span className="text-3xl md:text-4xl">🎯</span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      <div className="w-2 h-6 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-6 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-6 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-4 mt-1">
                      <div className="w-2 h-4 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-4 bg-teal-400 rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Briefcase - Clickable */}
          <div 
            className="relative cursor-pointer z-10"
            onClick={handleBriefcaseClick}
          >
            <div className={`relative w-[320px] h-[260px] md:w-[440px] md:h-[340px] transition-transform duration-300 ${isOpen ? 'scale-90' : 'hover:scale-105'}`}>
              {/* Main body */}
              <div className="absolute inset-0 bg-pink-300 rounded-3xl border-4 border-pink-400 shadow-2xl overflow-hidden">
                {/* Middle strap */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-16 md:w-20 bg-pink-400"></div>
                
                {/* Handle */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <div className="w-20 md:w-24 h-8 bg-pink-400 rounded-t-full border-4 border-pink-500 border-b-0 relative">
                    <div className="absolute -bottom-1 left-2 w-3 h-3 bg-amber-500 rounded-full border-2 border-amber-600"></div>
                    <div className="absolute -bottom-1 right-2 w-3 h-3 bg-amber-500 rounded-full border-2 border-amber-600"></div>
                  </div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 md:w-14 md:h-14 bg-pink-400 rounded-br-full"></div>
                <div className="absolute top-0 right-0 w-10 h-10 md:w-14 md:h-14 bg-pink-400 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 md:w-14 md:h-14 bg-pink-400 rounded-tr-full"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 md:w-14 md:h-14 bg-pink-400 rounded-tl-full"></div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-pink-600 text-2xl md:text-4xl font-black tracking-wide text-center px-4 drop-shadow-sm">
                    WHAT'S IN<br/>MY BAG?
                  </h2>
                </div>

                {/* Dog sticker */}
                <div className="absolute top-12 left-6 md:left-10 md:top-16">
                  <div className="bg-amber-100 rounded-full p-2 border-2 border-amber-300 shadow-md">
                    <span className="text-2xl md:text-4xl">🐕‍🦺</span>
                  </div>
                </div>

                {/* HelpMe sticker */}
                <div className="absolute bottom-8 left-6 md:bottom-10 md:left-8 flex gap-0.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded text-white text-sm md:text-base flex items-center justify-center font-bold shadow-md">He</div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-600 rounded text-white text-sm md:text-base flex items-center justify-center font-bold shadow-md">Lp</div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded text-white text-sm md:text-base flex items-center justify-center font-bold shadow-md">Me</div>
                </div>

                {/* Coffee sticker on bag */}
                <div className="absolute top-12 right-6 md:right-10 md:top-16">
                  <div className="bg-white rounded-xl px-3 py-2 border-2 border-amber-200 shadow-md">
                    <div className="text-amber-500 text-xl">☕</div>
                    <div className="text-amber-600 font-bold text-sm">Cf</div>
                    <div className="text-[8px] text-amber-700">Coffee</div>
                  </div>
                </div>

                {/* Final draft sticker */}
                <div className="absolute bottom-8 right-6 md:bottom-10 md:right-8 bg-white border-2 border-gray-300 rounded-lg px-3 py-2 shadow-md rotate-3">
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
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-center transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-pink-500 text-base md:text-lg font-medium animate-pulse">
                ✨ Click to open! ✨
              </span>
            </div>
            
            {/* Drag hint when open */}
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-center transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-pink-500 text-base md:text-lg font-medium">
                🖐️ Drag items around!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
