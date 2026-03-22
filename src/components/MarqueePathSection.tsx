import React from "react";
import DragElements from "@/components/ui/drag-elements";
import { useIsMobile } from "@/hooks/use-mobile";
import PixelTrail from "@/components/pixel-trail";

const urls = Object.values(
  import.meta.glob("../assets/pinterest/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MarqueePathSection = () => {
  const isMobile = useIsMobile();

  const photoCards = React.useMemo(
    () =>
      urls.map((url, index) => {
        const rotation = randomInt(-12, 12);
        const width = isMobile ? randomInt(130, 170) : randomInt(190, 250);
        const height = isMobile ? randomInt(170, 220) : randomInt(240, 320);

        return { url, index, rotation, width, height };
      }),
    [isMobile]
  );

  return (
    <section className="h-dvh relative bg-ffe7f7 overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <PixelTrail
          pixelSize={isMobile ? 16 : 24}
          fadeDuration={500}
          pixelClassName="bg-white"
          useGlobalMouse
        />
      </div>

      <h1 className="absolute z-30 pointer-events-none text-xl md:text-4xl md:ml-36 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted-foreground uppercase w-full">
        <a
          href="https://in.pinterest.com/paawanim"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto underline-offset-4 hover:underline text-white"
        >
          pinterest
        </a>{" "}
        <span className="font-bold text-white">dump</span>
      </h1>

      <DragElements dragMomentum={false} className="relative z-20 p-10 md:p-40">
        {photoCards.map((item) => (
          <div
            key={item.index}
            className="flex items-start justify-center bg-white shadow-2xl p-4"
            style={{
              transform: `rotate(${item.rotation}deg)`,
              width: `${item.width}px`,
              height: `${item.height}px`,
            }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: `${item.width - 4}px`,
                height: `${item.height - 30}px`,
              }}
            >
              <img
                src={item.url}
                alt={`Analog photo ${item.index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </DragElements>
    </section>
  );
};

export default MarqueePathSection;
