import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
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

  return (
    <section id="contact" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Floating starbursts */}
      <Starburst className="top-20 right-10 floating" size="sm" />
      <Starburst className="bottom-32 left-10 floating-delayed" size="md" />
      <Starburst className="top-1/2 right-[15%] floating-delayed-2" size="sm" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">CONTACT ME</h2>
        <p className="text-center text-muted-foreground mb-12">
          Let's create something amazing together
        </p>

        {/* Video Container */}
        <div className="relative bg-background rounded-3xl p-4 shadow-xl border border-border max-w-2xl mx-auto">
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
      </div>
    </section>
  );
};

export default ContactSection;
