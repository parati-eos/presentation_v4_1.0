import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../../Utils/cn.ts";
import AnimatedButon from "../Buttons/button.tsx";
import { useNavigate } from "react-router-dom";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--white-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/auth/login");
  };
  return (
    <div
      className="h-[30rem] overflow-y-auto flex gap-5 justify-center relative space-x-10 rounded-md no-scrollbar"
      style={{ maxHeight: "30rem" }}
      ref={ref}
    >
      <div className="div relative flex-col items-start px-4 w-[100%]">
        <div className="max-w-10xl w-[100%] relative">
          {content.map((item, index) => (
            <div key={item.title + index} className="py-10 relative">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="div sticky top-0 right-0 flex-col gap-10 max-w-10xl w-[100%]">
            <AnimatedButon onclicked={handleClick} name={"Get Started"} />
          </div>
          <div className="h-40" />
        </div>
      </div>
      <div className="div sticky top-0 right-0 flex-col gap-10 max-w-10xl w-[100%]">
        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white opacity-100 pb-10">
          Leverage the Power of AI to
          <br /> Instantly Generate
          <span style={{ color: "#e6a500" }}> Structured</span> <br />
          <span style={{ color: "#e6a500" }}> & Branded Pitch Decks</span>
        </h3>
        <motion.div
          animate={{
            background: linearGradients[activeCard % linearGradients.length],
          }}
          className={cn(
            "hidden lg:block h-[100%] w-[90%] rounded-md bg-white sticky top-5 overflow-hidden ",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </div>
  );
};
