"use client";
import ContaineObserver from "@/components/global/ContaineObserver";
import LinesUnderSection from "@/components/global/LinesUnderSection";
import { motion } from "framer-motion"
const Skills = () => {
  return (
    <ContaineObserver  link={"#skills"} id="skills" className="min-h-[100vh]  p-10 flex  relative  gap-2 justify-center flex-col">
      <LinesUnderSection />

      <h2 className="text-xl z-[2] font-semibold">Tech Skills</h2>
      <div className="flex  z-[2] flex-col w-full mt-5 items-center justify-center">
        <div className="relative ">

          <img className="w-[100]   rounded-md" src="/icons/javascript-1.svg" alt="" />

          <motion.div
            animate={{
              scale: [.5, 1, .5]
            }}
            transition={{
              repeat: Infinity,
              duration: 4
            }}
            style={{
              filter: `drop-shadow(0 0 90px var(--color-yellow-200))`
            }}
            className="absolute rounded-2xl top-0 bg-background  !z-[-1] w-full h-full">

          </motion.div>
        </div>
        <h1 className="text-2xl mt-6 font-semibold tracking-tighter">I'm a  JavaScript Developer</h1>
        <a href="https://en.wikipedia.org/wiki/JavaScript" className="text-sm m-2 opacity-70 font-medium " target="_blank">About JS ?</a>
      </div>
      <h2 className="font-medium  z-[2] mt-14">Expanding JavaScript with modern tools</h2>

      <div className="mt-2 z-[2]">
        <h2 className="opacity-70 text-sm">From front-end frameworks : </h2>
        <div className="grid grid-cols-4 max-w-[700] gap-3  mt-4 px-4">
          <a href="https://react.dev/" target="_blank" className="p-2 bg-foreground border border-background/20 rounded-xl flex items-center gap-4">
            <img className="w-[20]" src="/icons/react-2.svg" />
            <p className="opacity-80 font-medium text-sm">React 19.2</p>
          </a>
          <a href="https://nextjs.org/" target="_blank" className="p-2  bg-foreground border border-background/20 rounded-xl flex items-center gap-4">
            <img
              style={{
                filter: `drop-shadow(0 0 2px white)`
              }}
              className="w-[20]" src="/icons/next-js.svg" />
            <p className="opacity-80 font-medium text-sm">Next 16</p>
          </a>
          <a href="https://tailwindcss.com/" target="_blank" className="p-2  bg-foreground border border-background/20 rounded-xl flex items-center gap-4">
            <img
              className="w-[20]" src="/icons/tailwind-css-2.svg" />
            <p className="opacity-80 font-medium text-sm">Tailwind css</p>
          </a>
          <a href="https://motion.dev/?utm_source=chatgpt.com" target="_blank" className="p-2  bg-foreground border border-background/20 rounded-xl flex items-center gap-4">
            <img
              className="w-[20]" src="/icons/framer-motion.svg" />
            <p className="opacity-80 font-medium text-sm">Framer Motion</p>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="opacity-70 text-sm">To powerful back-end technologies: </h2>
        <div className="grid grid-cols-5 gap-3  mt-4 px-4 w-full max-w-[700] items-center" >
          <a href="https://expressjs.com/" target="_blank" className="p-2 bg-white  w-full col-span-2 border border-background/20 rounded-xl flex items-center gap-4">
            <img

              className="h-[18] " src="/icons/express-109.svg" />
            <p className="opacity-80 text-sm font-medium text-black">Express JS</p>
          </a>

          <a href="https://www.mongodb.com/" target="_blank" className="p-2  bg-foreground border border-background/20 rounded-xl flex items-center gap-1">
            <img

              className="w-[20]" src="/icons/mongodb-icon-1-1.svg" />
            <p className="opacity-80 font-medium text-sm">mongodb </p>
          </a>

          <a href="https://www.mysql.com/" target="_blank" className="p-2  bg-foreground border border-background/20 rounded-xl flex items-center gap-4">
            <img className="w-[20]" src="/icons/mysql-logo-pure.svg" />
            <p className="opacity-80 font-medium text-sm">MYSQL</p>
          </a>

          <p className="opacity-50 ml-5 text-sm">And more ...</p>
        </div>
      </div>


    </ContaineObserver>
  )
}

export default Skills
