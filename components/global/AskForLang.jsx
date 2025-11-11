"use client"
import { motion } from "framer-motion"
import { useState } from "react"


const AskForLang = ({ onClose }) => {
    const [lang, setlang] = useState('en')
    return (

        <motion.div
            initial={{
                opacity: .7,
                scale: .95,
                y: 15,
            }}
            exit={{
                opacity: 0,
                scale: .98,
                y: 10,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            style={{
                filter: `drop-shadow(0 0 150px var(--filter-color))`
            }}
            className="fixed z-[999] flex flex-col items-center gap-2 justify-center top-[50%] rounded-md left-[50%]  translate-x-[-50%] translate-y-[-50%] border border-background/20 w-[380]  p-1 bg-accent-foreground">
            <div className="p-2 w-full ">
                <h1 className="text-xl font-semibold"><i class="bi bi-translate mr-2"></i>Preferred Language</h1>
                <p className=" text-sm mt-1 ml-2 opacity-80">
                    Could you please select your preferred language?
                </p>
            </div>
            <div className="grid mt-3 px-3 w-full grid-cols-3 gap-3">
                <div onClick={()=>setlang("fr")} className={`flex flex-col p-2 border duration-300 cursor-pointer rounded-xl  justify-center items-center ${lang == "fr" ? "bg-background/5 border-background" : "border-background/15"}`}>
                    <img src="/icons/france.png" className="w-[50]" alt="" />
                    <p className="mt-1 font-medium tracking-normal">Français</p>
                </div>
                <div onClick={()=>setlang("en")} className={`flex flex-col p-2 border duration-300 cursor-pointer rounded-xl  justify-center items-center ${lang == "en" ? "bg-background/5 border-background" : "border-background/15"}`}>
                    <img src="/icons/map.png" className="w-[50]" alt="" />
                    <p className="mt-1 font-medium tracking-normal">English</p>
                </div>
                <div onClick={()=>setlang("ar")} className={`flex flex-col p-2 border duration-300 cursor-pointer rounded-xl  justify-center items-center ${lang == "ar" ? "bg-background/5 border-background" : "border-background/15"}`}>
                    <img src="/icons/morocco.png" className="w-[50]" alt="" />
                    <p className="mt-1 font-medium tracking-normal">Arabic</p>
                </div>
            </div>

            <button onClick={() => onClose(lang)} className="w-full p-2 flex border border-background/20 justify-center items-center mt-5 font-medium bg-foreground rounded-md" >
                Done
            </button>
        </motion.div >
    )
}

export default AskForLang
