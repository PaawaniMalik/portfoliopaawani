import { motion } from "framer-motion";
import { SparklesText } from "./ui/sparkles-text";

const LegendaryBanner = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden grid-bg">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Main Text */}
          <div className="space-y-2">
            <SparklesText
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={8}
            >
              <h2
                style={{
                  fontFamily:
                    '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  WebkitTextStroke: "1px #000000",
                }}
              >
                HELPING BRINGING
              </h2>
            </SparklesText>
            <SparklesText
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={8}
            >
              <h2
                style={{
                  fontFamily:
                    '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  WebkitTextStroke: "1px #000000",
                }}
              >
                VISION TO LIFE.
              </h2>
            </SparklesText>
            <SparklesText
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={8}
            >
              <h2
                style={{
                  fontFamily:
                    '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  WebkitTextStroke: "1px #000000",
                }}
              >
                IT'S GONNA BE
              </h2>
            </SparklesText>
          </div>

          {/* Legendary Text with cursive styling */}
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center mt-4">
            <SparklesText
              className="text-5xl md:text-7xl lg:text-8xl"
              colors={{ first: "#FF69B4", second: "#FFB6C1" }}
              sparklesCount={12}
            >
              <span
                style={{
                  fontFamily: '"Pacifico", "Brush Script MT", cursive',
                  color: "#000000",
                  fontWeight: 400,
                  WebkitTextStroke: "2px #FFFFFF",
                  paintOrder: "stroke fill",
                }}
              >
                legen
              </span>
            </SparklesText>
            <span
              className="text-3xl md:text-5xl lg:text-6xl font-black"
              style={{
                fontFamily:
                  '"Press Start 2P", system-ui, -apple-system, sans-serif',
                color: "#000000",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              -WAIT FOR IT-
            </span>
            <SparklesText
              className="text-5xl md:text-7xl lg:text-8xl"
              colors={{ first: "#FF69B4", second: "#FFB6C1" }}
              sparklesCount={12}
            >
              <span
                style={{
                  fontFamily: '"Pacifico", "Brush Script MT", cursive',
                  color: "#000000",
                  fontWeight: 400,
                  WebkitTextStroke: "2px #FFFFFF",
                  paintOrder: "stroke fill",
                }}
              >
                dary
              </span>
            </SparklesText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendaryBanner;
