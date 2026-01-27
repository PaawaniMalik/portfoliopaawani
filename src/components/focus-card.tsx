import { FocusCards } from "@/components/ui/focus-cards";
import pawsngoImg from "@/assets/pawsngo.png";
import casperImg from "@/assets/casper.png"

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Paws N Go - Pet Travel",
      src: pawsngoImg,
      // sourceUrl: "https://github.com/Namann-14/quizify.git",
      websiteUrl: "https://www.figma.com/proto/M4tWo5aoRlPZi4gWNo8c1J/Omni-channel-secret?page-id=0%3A1&node-id=19-100&m=draw&scaling=scale-down-width&content-scaling=fixed&t=rBmgtlzsSFnXEcaa-1",
    },
    {
      title: "AI Chatbot – Contextual QnA Bot",
      src: "/placeholder.svg",
      sourceUrl: "https://github.com/Namann-14/ai-chatbot.git",
      websiteUrl: "https://pookie-chatbot.vercel.app/",
    },
    {
      title: "SkillSync – Smart Hiring Tool",
      src: "/placeholder.svg",
      sourceUrl: "https://github.com/Namann-14/Skill-Sync.git",
      websiteUrl: "https://skill-sync-mu.vercel.app/",
    },
    {
      title: "Casper - Service Design",
      src: casperImg,
      websiteUrl: "https://www.figma.com/proto/hKI1YFtFVREQRG6j7W5TXp/Casper--service-design-?page-id=618%3A5831&node-id=618-5832&starting-point-node-id=618%3A5832&t=vWaA3XCpcEnH3Y9h-1",
    },
  ];

  return <FocusCards cards={cards} />;
}