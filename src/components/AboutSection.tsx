import { Mail, Linkedin, Instagram, Github } from "lucide-react";
import Starburst from "./Starburst";

const AboutSection = () => {
  const skills = [
    "UI/UX Design",
    "Web Development",
    "Graphic Design",
    "Illustration",
    "Branding",
    "Motion Design",
  ];

  const socials = [
    { icon: Mail, label: "Email", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  return (
    <section id="about" className="min-h-screen grid-bg py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Moving starbursts */}
      <Starburst className="top-[15%] floating-across" size="sm" />
      <Starburst className="top-[40%] floating-across-delayed" size="md" />
      <Starburst className="top-[70%] floating-across-delayed-2" size="sm" />
      <Starburst className="top-[55%] floating-across" size="lg" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="pixel-text text-3xl md:text-4xl text-center mb-4">ABOUT ME</h2>
        <p className="text-center text-muted-foreground mb-12">
          Get to know the person behind the designs
        </p>

        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl shadow-lg">
              👩🏻‍🎨
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Hey, I'm Paawani! 👋</h3>
              <p className="text-muted-foreground max-w-md">
                A passionate designer and developer who loves creating beautiful, 
                interactive experiences. I bring creativity and technical skills 
                together to build amazing digital products.
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

          {/* Social Links */}
          <div>
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
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          Made with 💖 by Paawani • {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
