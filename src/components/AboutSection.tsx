import aboutCollage from "@/assets/about.jpeg";
import aboutCameraVideo from "@/assets/ok.mp4";

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#ffe7f7] px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-[1200px]">
        <video
          className="absolute left-[7.6%] top-[17.2%] z-20 h-[35.5%] w-[39.2%] rotate-[-13deg] rounded-[12px] object-cover shadow-[0_12px_20px_rgba(0,0,0,0.25)] md:rounded-[16px]"
          src={aboutCameraVideo}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
        >
          Your browser does not support the video tag.
        </video>

          <img
            src={aboutCollage}
            alt="About me collage"
            className="relative z-10 w-full object-cover"
          />
      </div>
    </section>
  );
};

export default AboutSection;
