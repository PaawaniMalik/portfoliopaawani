import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is your design process?",
    answer:
      "I follow a user-centered design approach starting with research and problem framing, moving into wireframing and prototyping, and validating through usability testing before final UI execution. My focus is always on solving real user problems, not just creating visually pleasing screens.",
  },
  {
    question: "What tools do you use?",
    answer:
      "I primarily use Figma for interface design and prototyping. Depending on the project, I also use Adobe Illustrator, After Effects (for motion), and FigJam and Miro for research mapping and user flows. I know the basics of Blender and Framer as well.",
  },
  {
    question: "Do you focus more on UI or UX?",
    answer:
      "I focus on UX first because strong UI without usability has no impact. However, I ensure the final interface is visually engaging, accessible, and aligned with brand identity.",
  },
  {
    question: "How do you ensure your designs solve real problems?",
    answer:
      "I rely on research insights, competitor analysis, and usability thinking. I design with intention - every element should serve a purpose. If it does not improve clarity, usability, or engagement, it does not belong.",
  },
  {
    question: "What makes you different as a designer?",
    answer:
      "I do not design just to make things look good. I design to make things feel right. I pay attention to small details, emotions, and how users actually interact with a product. I enjoy turning complex problems into simple experiences and I am always learning to improve my craft.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="grid-bg px-4 py-20 md:px-8">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-[#efb8d8] bg-[#ffe7f7] p-6 shadow-[0_14px_40px_rgba(229,57,154,0.12)] md:p-10">
        <h2 className="pixel-text mb-3 text-center text-3xl md:text-5xl">FAQ</h2>
        <p className="mb-8 text-center text-muted-foreground md:mb-10">
          Answers to common questions about my process, tools, and design approach.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
