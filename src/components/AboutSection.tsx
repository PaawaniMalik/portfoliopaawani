import aboutCollage from "@/assets/about.jpeg";
import aboutCameraVideo from "@/assets/ok.mp4";
import resumePdf from "@/assets/resumeeeeeee finallllllllll.pdf";

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

        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-[4%] top-[80%] z-30 inline-flex -translate-y-1/2 rounded-full border border-[#efb8d8] bg-[#FF3399] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_24px_rgba(164,56,119,0.35)] transition hover:bg-[#a9447f]"
        >
          View Resume For More
        </a>

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
