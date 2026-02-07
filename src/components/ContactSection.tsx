import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import Starburst from "./Starburst";
import contactVideo from "@/assets/contact-video.mp4";
import phoneImage from "@/assets/phone.png";
import SocialBanner from "./SocialBanner";

const ContactSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showNumber, setShowNumber] = useState(false);
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
    <section
      id="contact"
      className="min-h-screen grid-bg pt-48 py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Floating starbursts */}
      <Starburst className="top-20 right-10 floating" size="sm" />
      <Starburst className="bottom-32 left-10 floating-delayed" size="md" />
      <Starburst className="top-1/2 right-[15%] floating-delayed-2" size="sm" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-6xl text-center mb-4">
          CONTACT ME
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Let's create something amazing together
        </p>

        {/* Video and Social Links Container */}
        <div className="flex gap-8 items-center justify-center w-full">
          {/* Video Container */}
          <div className="relative bg-background rounded-3xl p-4 shadow-xl border border-border max-w-6xl w-full">
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

          {/* Social Banner */}
          <SocialBanner />
        </div>

        {/* Click Me Phone Animation - Bottom Right */}
      </div>
        <div className="absolute bottom-0 right-8 flex flex-col items-center">
          <p className="pixel-text text-2xl text-pink-500 font-bold animate-bounce">CLICK ME</p>
          <img
            src={phoneImage}
            alt="Click me phone"
            className="w-48 h-auto transform hover:scale-110 transition-transform duration-300 cursor-pointer"
            onClick={() => setShowNumber(true)}
          />
        </div>

        {/* Phone Number Popup */}
        {showNumber && (
          <div 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200"
            onClick={() => setShowNumber(false)}
          >
            <div 
              className="bg-pink-500 rounded-2xl p-8 shadow-2xl border-4 border-pink-600 animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="pixel-text text-3xl text-white mb-4 text-center">CALL ME!</h3>
              <p className="text-5xl font-bold text-white text-center tracking-wider">7011970515</p>
              <button
                onClick={() => setShowNumber(false)}
                className="mt-6 w-full bg-white text-pink-500 pixel-text text-xl py-2 px-6 rounded-lg hover:bg-pink-100 transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
    </section>
  );
};

export default ContactSection;
