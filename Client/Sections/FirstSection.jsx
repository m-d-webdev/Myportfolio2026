"use client";

import { useMainContext } from "@/context/MainContext";
import ManOnScotter from "../Lotties/ManOnScotter";
import { motion } from "framer-motion"
import LinesUnderSection from "@/components/global/LinesUnderSection";
import ContaineObserver from "@/components/global/ContaineObserver";
const FirstSection = () => {

  const { ManOnScoterDuration } = useMainContext()

  return (
    <ContaineObserver link={"#home"} id="home" className="min-h-[90vh]   flex flex-col justify-center  items-center relative p-6">
      <LinesUnderSection />
      <div className="relative max-w-[700] ">

        <div className="z-[2] ml-25">

          <ManOnScotter width={400} height={400} />
        </div>

        <h1 className="absolute z-[-1] top-10   rotates-[-50deg]  max-w-[430]  left-1 text-5xl  font-black  ">

          {Array.from("Always in motion, building the future web").map((char, i) => {
            return (
              <motion.span

                animate={{
                  opacity: [0, .7, 0],
                }}

                transition={{
                  delay: i * .1 + ManOnScoterDuration - 2,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 10,
                  ease: "linear"
                }}
                key={i}
                className={`${i >= 31 ? "text-chart-1 " : ""} opacity-0`}
              >
                {char}
              </motion.span>
            );
          })}

        </h1>
        <h1 className="absolute z-[-1] top-10   rotates-[-50deg]  max-w-[430]  left-1 text-5xl  font-black  ">

          {Array.from("Turning ideas into smooth digital experiences").map((char, i) => {
            return (
              <motion.span

                animate={{
                  opacity: [0, .7, 0],
                }}

                transition={{
                  delay: i * .1 + ManOnScoterDuration + 3,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 10,
                  ease: "linear"
                }}
                key={i}
                className={`${i >= 33 ? "text-chart-1 " : ""} opacity-0`}
              >
                {char}
              </motion.span>
            );
          })}

        </h1>
      </div>
    </ContaineObserver>
  )
}

export default FirstSection
