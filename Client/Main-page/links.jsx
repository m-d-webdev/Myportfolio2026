"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react";
import { useMainContext } from "@/context/MainContext";


const Links = () => {
    const [topVal, settopVal] = useState(null);
    const { hash } = useMainContext();
    const [hash2, sethash2] = useState(hash)
    let t;
    useEffect(() => {
        t = setTimeout(() => {
            sethash2(hash)
        }, 200)

        return () => {
            clearTimeout(t)
        }
    }, [hash]);

    const navLinks = [
        { name: "Home", link: "#home", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#home" ? "bi-house-fill" : "bi-house"}`} /> },
        { name: "About", link: "#about", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#about" ? "bi-person-fill" : "bi-person"}`} /> },
        { name: "Skills", link: "#skills", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#skills" ? "bi-lightbulb-fill" : "bi-lightbulb"}`} /> },
        { name: "Projects", link: "#projects", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#projects" ? "bi-inboxes-fill" : "bi-inboxes"}`} /> },
        { name: "Experience", link: "#experience", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#experience" ? "bi-briefcase-fill" : "bi-briefcase"}`} /> },
        { name: "Contact", link: "#contact", icon: <i className={`w-5 bi duration-200  h-5 ${hash2 == "#contact" ? "bi-phone-vibrate-fill" : "bi-phone-vibrate"}`} /> },
    ];



    const handelMouseDown = indx => {
        settopVal((indx * 35) + (indx * 8))
    }

    return (
        <div
            className="  flex  md:w-full relative items-start justify-start flex-wrap md:flex-col md:flex-nowrap  gap-2 ">
            <div
                style={{
                    top: `${navLinks.findIndex(i => i.link == hash2) * 35 + (navLinks.findIndex(i => i.link == hash2) * 8)}px`
                }}
                className="w-full hidden md:block max-w-[200] duration-400 ease-in-out z-[1] border border-background/15 h-[35] bg-background/10 rounded-md absolute">
            </div>

            {
                topVal >= 0 ? (

                    <div
                        style={{
                            top: `${topVal}px`
                        }}
                        className="w-full hidden md:block ease-in-out max-w-[200] opacity-40 duration-200 z-[0.5] border border-background/15 h-[35] bg-background/10 rounded-md absolute"></div>
                ) : null
            }
            {/* <LinesUnderSection  xCount={10} xPersent={10} yCount={10} yPersent={10} /> */}

            {
                navLinks.map((l, i) =>
                    <Link
                        // onClick={() => setHash(l.link)}
                        key={l.name}
                        href={l.link}
                        onMouseEnter={() => handelMouseDown(i)}
                        className={`z-[2] flex items-center gap-2 duration-200  border rounded-md  w-full max-w-[150] md:max-w-[200] h-[35] px-2 border-transparent  
                        ${hash2 == l.link ? "opacity-100 font-medium  !fill-background !stroke-none" : ""}
                         linkC flex font-light opacity-70 items-center gap-1 group`}>
                        {React.isValidElement(l.icon) && l.icon}
                        {l.name}
                    </Link>

                )
            }
        </div>
    )
}

export default Links
