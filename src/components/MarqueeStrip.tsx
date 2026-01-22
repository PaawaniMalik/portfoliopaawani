const MarqueeStrip = () => {
  const text = "PORTFOLIO";
  const repeatedText = Array(20).fill(text).join(" ★ ");

  return (
    <div className="w-full bg-black py-4 overflow-hidden relative">
      <div className="marquee-container flex">
        <div className="marquee-content animate-marquee whitespace-nowrap flex items-center gap-4">
          <span className="text-primary text-2xl md:text-3xl font-bold tracking-widest">
            {repeatedText}
          </span>
          <span className="text-primary text-2xl md:text-3xl font-bold tracking-widest">
            {repeatedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MarqueeStrip;
