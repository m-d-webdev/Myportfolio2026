"use client";

import { useMainContext } from "@/context/MainContext";
import ExternalLinks from "./ExternalLinks";
import Links from "./links";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import { MoonStar, Sun } from "lucide-react";
const IntroName = () => {
    const { ManOnScoterDuration, theme, settheme } = useMainContext()

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            transition={{
                delay: ManOnScoterDuration,
                duration: 1.5
            }}

            className="md:px-15 h-full flex items-center md:items-start  gap-5 md:gap-0  flex-col min-h-[50vh] md:min-h-0  justify-center md:justify-evenly"
        >
            <div className="">

                <h1
                    className="text-4xl  font-black tracking-tighter "
                >
                    Mustapha Iderkaoui
                </h1>
                <h2 className="text-xl font-medium mt-2">
                    Full-stack developer
                </h2>
                <p className="mt-5 opacity-70 max-w-[320]">
                    Building fast, inclusive, and visually refined <span className="font-semibold text-chart-2">web applications</span>
                </p>
            </div>

            <Links />
            <div className="flex  mt-5 md:mt-0 gap-3 items-center">

                <ExternalLinks />
                <div

                    className="flex border bg-accent-foreground border-background/15  rounded-md  gap-1 p-[2] px-1   w-fit items-center justify-center">
                    <button
                        onClick={e => settheme("dark")}
                        className={`p-[6] rounded-md cursor-pointer  ${theme == "dark" ? "border border-background/15 bg-foreground/50" : ""}`} >
                        <Sun className="bi bi-brightness-high w-4 h-4"></Sun>
                    </button>
                    <button
                        onClick={e => settheme("light")}
                        className={`p-[6] rounded-md cursor-pointer  ${theme == "light" ? "border border-background/15 bg-foreground/50" : ""}`} >
                        <MoonStar className="bi bi-moon-stars w-4 h-4"></MoonStar>
                    </button>
                </div>
            </div>
        </motion.div >
    )
}

export default IntroName
