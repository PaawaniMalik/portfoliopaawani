import { Linkedin, Instagram, Camera } from "lucide-react";
import { SparklesText } from "./ui/sparkles-text";

const SocialBanner = () => {
  const socialLinks = {
    linkedin: "www.linkedin.com/in/paawani-malik-17967b249",
    instagram: "https://www.instagram.com/paawanii_/",
    pinterest: "https://pin.it/2nZxgJ7Y1",
    behance: "https://www.behance.net/paawanimalik",
  };

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden grid-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
          {/* First Line: I'M MOST ACTIVE ON LinkedIn */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <SparklesText
              className="text-xl md:text-3xl lg:text-3xl font-black"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={10}
            >
              <span
                style={{
                  fontFamily: '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1.2",
                }}
              >
                I'M MOST ACTIVE ON
              </span>
            </SparklesText>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16  bg-[#0A66C2] rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
            </a>
          </div>

          {/* Second Line: I'M DUMPING ALL THE TIME ON */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <SparklesText
              className="text-2xl md:text-4xl lg:text-3xl font-black"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={10}
            >
              <span
                style={{
                  fontFamily: '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1.2",
                }}
              >
                I'M DUMPING ALL THE TIME ON
              </span>
            </SparklesText>
          </div>

          {/* Third Line: Instagram AND Pinterest */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16  bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
            </a>
            <SparklesText
              className="text-2xl md:text-4xl lg:text-3xl font-black"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={8}
            >
              <span
                style={{
                  fontFamily: '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1.2",
                }}
              >
                AND
              </span>
            </SparklesText>
            <a
              href={socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16  bg-[#E60023] rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="Pinterest"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 md:w-12 md:h-12 text-white fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Fourth Line: I LIKE TO PUT MY WORK ON Behance */}
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <SparklesText
              className="text-2xl md:text-4xl lg:text-3xl font-black"
              colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
              sparklesCount={10}
            >
              <span
                style={{
                  fontFamily: '"Press Start 2P", system-ui, -apple-system, sans-serif',
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: "1.2",
                }}
              >
                I LIKE TO PUT MY WORK ON
              </span>
            </SparklesText>
            <a
              href={socialLinks.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-16 h-16 bg-[#1769FF] rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg"
              aria-label="Behance"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 md:w-12 md:h-12 text-white fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.25-1.91.25h-6.462V4.502h6.462zm-3.938 5.25h3.078c.72 0 1.27-.13 1.648-.39.377-.26.568-.715.568-1.36 0-.43-.08-.795-.24-1.094-.16-.298-.384-.54-.67-.727-.287-.187-.628-.314-1.017-.376-.39-.064-.805-.094-1.237-.094H3v4.04zm0 6.676h3.42c.453 0 .872-.043 1.255-.13.384-.09.714-.238.99-.448.278-.21.495-.492.653-.848.158-.36.237-.81.237-1.353 0-.802-.242-1.39-.725-1.764-.484-.375-1.148-.563-1.992-.563H3v5.106zM15.5 15c.655 0 1.215-.155 1.67-.465.458-.31.757-.77.9-1.38h2.58c-.403 1.335-1.03 2.283-1.887 2.844-.857.562-1.857.844-3.002.844-1.14 0-2.09-.17-2.853-.516-.764-.345-1.385-.82-1.864-1.42-.48-.602-.833-1.29-1.06-2.064-.23-.774-.345-1.587-.345-2.44 0-.832.115-1.633.345-2.407.23-.774.583-1.46 1.06-2.064.48-.602 1.1-1.077 1.864-1.422.763-.346 1.713-.52 2.853-.52 1.24 0 2.245.232 3.016.695.77.462 1.384 1.064 1.842 1.802.457.738.762 1.567.914 2.487.152.92.185 1.835.1 2.746h-7.69c.045 1.006.33 1.74.855 2.203.525.463 1.173.695 1.943.695zm2.39-5.684c-.08-.65-.34-1.155-.78-1.517-.44-.362-1.01-.543-1.712-.543-.5 0-.918.09-1.252.27-.333.18-.602.408-.805.685-.203.277-.34.577-.413.9-.072.324-.11.627-.11.91h5.072zm.558-3.816h-5.58v-1.188h5.58v1.188z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBanner;
