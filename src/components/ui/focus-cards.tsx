"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-black overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full rounded-2xl"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 mb-4">
          {card.title}
        </div>

        <div className="flex gap-3">
          {card.sourceUrl && (
            <a
              href={card.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span className="text-sm">Source Code</span>
            </a>
          )}

          {card.websiteUrl && (
            <a
              href={card.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              <span className="text-sm">Visit Site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  ),
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  sourceUrl?: string;
  websiteUrl?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto md:px-8 w-full mt-24">
      {/* First row: First card 2x size of second card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* First card takes 2/3 of the width */}
        <div className="md:col-span-2">
          <Card
            key={cards[0]?.title}
            card={cards[0]}
            index={0}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>

        {/* Second card takes 1/3 of the width */}
        {cards[1] && (
          <div className="md:col-span-1">
            <Card
              key={cards[1].title}
              card={cards[1]}
              index={1}
              hovered={hovered}
              setHovered={setHovered}
            />
          </div>
        )}
      </div>

      {/* Second row: Third card 1x size, fourth card 2x size */}
      {cards.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Third card takes 1/3 of the width */}
          {cards[2] && (
            <div className="md:col-span-1">
              <Card
                key={cards[2].title}
                card={cards[2]}
                index={2}
                hovered={hovered}
                setHovered={setHovered}
              />
            </div>
          )}

          {/* Fourth card takes 2/3 of the width */}
          {cards[3] && (
            <div className="md:col-span-2">
              <Card
                key={cards[3].title}
                card={cards[3]}
                index={3}
                hovered={hovered}
                setHovered={setHovered}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
