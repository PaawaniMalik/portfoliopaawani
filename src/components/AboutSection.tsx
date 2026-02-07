import { Mail, Linkedin, Instagram } from "lucide-react";
import Starburst from "./Starburst";
import ScrollUpBalloon from "./ScrollUpBalloon";
import paawaniPhoto from "@/assets/paawani-photo.png";
import resumeImage from "@/assets/resume.png";
import resumePDF from "@/assets/RESUMEEEE.pdf";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { motion } from "framer-motion";

const AboutSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    "UI/UX Design",
    "Graphic Design",
    "Illustration",
    "Branding",
    "Motion Design",
  ];

  const socials = [
    { icon: Mail, label: "Email", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  const words = [
    {
      text: "Hey",
    },
    {
      text: "I'm",
    },
    // {
    //   text: "Paawani",
    // },
    // {
    //   text: "with",
    // },
    {
      text: "Paawani.",
      className: "text-[#ed65cc] dark:text-[#ed65cc]",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen grid-bg py-32 px-4 md:px-8 relative overflow-hidden pb-48"
    >
      {/* Floating starbursts with framer-motion animations */}
      <motion.div
        className="absolute top-20 right-10"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Starburst size="sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Starburst size="md" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-[15%]"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 20, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Starburst size="sm" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-[5%]"
        animate={{
          x: [0, 40, -10, 0],
          y: [0, 20, -30, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Starburst size="md" />
      </motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="pixel-text text-7xl md:text-6xl text-center mb-4">
          ABOUT ME
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Get to know the person behind the designs
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* About Me Card */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border flex-1">
            {/* Profile Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 shadow-lg">
                <img
                  src={paawaniPhoto}
                  alt="Paawani"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                {/* <h3 className="text-2xl font-bold mb-2">
                  Hey, I'm Paawani! 👋
                </h3> */}
                <TypewriterEffectSmooth words={words} />
                <p className="text-muted-foreground max-w-md">
                  A creative designer who loves creating beautiful, interactive
                  experiences. I bring creativity and technical skills together
                  to build amazing digital products.
                  <br />
                  <p className="text-[#ed65cc]">
                    I love pink (as if it wasn&apos;t very obvious)
                  </p>
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h4 className="font-semibold mb-4 text-lg">What I Do</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <div className="flex justify-center">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={resumeImage}
                  alt="View Resume"
                  className="w-full max-w-md rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-lg bg-primary px-6 py-3 rounded-full shadow-lg transition-opacity duration-300">
                    View Resume
                  </span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="font-semibold mb-4 text-lg">Let's Connect</h4>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div> */}
          </div>

          {/* Scroll Up Balloon */}
          {/* <div className="hidden md:flex items-center justify-center pt-20">
            <ScrollUpBalloon onClick={scrollToTop} />
          </div> */}
        </div>

        {/* Footer */}
        {/* <p className="text-center text-muted-foreground mt-12 text-sm">
          Made with 💖 by Paawani • {new Date().getFullYear()}
        </p> */}
      </div>
    </section>
  );
};

export default AboutSection;
