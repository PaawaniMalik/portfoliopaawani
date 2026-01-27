import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
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
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
