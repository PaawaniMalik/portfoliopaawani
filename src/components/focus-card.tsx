import { FocusCards } from "@/components/ui/focus-cards";
import pawsngoImg from "@/assets/pawsngo.webp";
import casperImg from "@/assets/casper.png"
import thalitales from "@/assets/thalitales.webp"
import image from "@/assets/ok12.jpg"
export function FocusCardsDemo() {
  const cards = [
    {
      title: "Paws N Go - Pet Travel",
      src: pawsngoImg,
      websiteUrl: "https://www.behance.net/gallery/243617547/Omnichannel-Project-PAWSNGO",
    },
    {
      title: "Thalitales",
      src: thalitales,
      websiteUrl: "https://www.behance.net/gallery/243573975/Thalitales-Branding",
    },
    {
      title: "Data Visualization",
      src: image,
      websiteUrl: "https://www.behance.net/gallery/243713721/Data-Vizualisation-Project",
    },
    {
      title: "Casper - Service Design",
      src: casperImg,
      websiteUrl: "https://www.behance.net/gallery/243609167/Service-Design-Project-CASPER",
    },
  ];

  return <FocusCards cards={cards} />;
}