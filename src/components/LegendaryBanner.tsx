import { motion } from "framer-motion";
import { SparklesText } from "./ui/sparkles-text";
import img1 from "@/assets/ok/1.png";
import img2 from "@/assets/ok/2.png";
import img3 from "@/assets/ok/3.png";
import img4 from "@/assets/ok/4.png";
import img5 from "@/assets/ok/5.png";
import img6 from "@/assets/ok/6.png";

const LegendaryBanner = () => {
  const floatingImages = [
    { src: img1, delay: 0, duration: 15 },
    { src: img2, delay: 0.5, duration: 18 },
    { src: img3, delay: 1, duration: 16 },
    { src: img4, delay: 1.5, duration: 17 },
    { src: img5, delay: 2, duration: 19 },
    { src: img6, delay: 2.5, duration: 14 },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden grid-bg">
      {/* Floating Images */}
      <motion.img
        src={floatingImages[0].src}
        alt=""
        className="absolute top-10 left-[5%] w-32 h-32 md:w-96 md:h-96 object-contain z-[1001]"
        animate={{
          x: [0, 1000, -60, 0],
          y: [0, -40, 30, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: floatingImages[0].duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatingImages[0].delay,
        }}
      />
      
      <motion.img
        src={floatingImages[1].src}
        alt=""
        className="absolute top-[20%] right-[8%] w-36 h-36 md:w-44 md:h-44 object-contain z-0"
        animate={{
          x: [0, -1000, 20, 0],
          y: [0, 30, -20, 0],
          rotate: [0, -20, 20, 0],
        }}
        transition={{
          duration: floatingImages[1].duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatingImages[1].delay,
        }}
      />
      

      
      <motion.img
        src={floatingImages[3].src}
        alt=""
        className="absolute bottom-[15%] right-[5%] w-36 h-36 md:w-48 md:h-48 object-contain z-0"
        animate={{
          x: [0, -30, 15, 0],
          y: [0, 20, -30, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: floatingImages[3].duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatingImages[3].delay,
        }}
      />
      
      <motion.img
        src={floatingImages[4].src}
        alt=""
        className="absolute top-[50%] left-[3%] w-32 h-32 md:w-40 md:h-40 object-contain z-0"
        animate={{
          x: [0, 35, -10, 0],
          y: [0, -25, 20, 0],
          rotate: [0, 20, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: floatingImages[4].duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatingImages[4].delay,
        }}
      />
      

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
