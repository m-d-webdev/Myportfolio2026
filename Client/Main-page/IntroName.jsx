"use client";

import { useMainContext } from "@/context/MainContext";
import ExternalLinks from "./ExternalLinks";
import Links from "./links";
import { motion } from "framer-motion"
const IntroName = () => {
    const { ManOnScoterDuration } = useMainContext()

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
                duration:1.5
            }}

            className="px-15 h-full flex flex-col justify-evenly"
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
            <ExternalLinks />

        </motion.div>
    )
}

export default IntroName
