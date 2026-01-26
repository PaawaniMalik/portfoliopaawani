import { useState, useRef } from "react";
import { Play, Pause, Mail, Linkedin, Instagram } from "lucide-react";
import Starburst from "./Starburst";
import contactVideo from "@/assets/contact-video.mp4";

const ContactSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const socials = [
    { icon: Mail, label: "Email", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  return (
    <section id="contact" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating starbursts */}
      <Starburst className="top-20 right-10 floating" size="sm" />
      <Starburst className="bottom-32 left-10 floating-delayed" size="md" />
      <Starburst className="top-1/2 right-[15%] floating-delayed-2" size="sm" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="pixel-text text-4xl md:text-5xl text-center mb-4">CONTACT ME</h2>
        <p className="text-center text-muted-foreground mb-12">
          Let's create something amazing together
        </p>

        {/* Video and Social Links Container */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Video Container */}
          <div className="relative bg-background rounded-3xl p-4 shadow-xl border border-border max-w-2xl">
            <div className="relative rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                src={contactVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute bottom-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-primary-foreground" />
                ) : (
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex md:flex-col gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-primary-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
