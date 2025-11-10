"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react";
import { Home, User } from "../icons";


const Links = () => {
    const [hash, setHash] = useState(window?.location.hash != "" ? window?.location.hash : "#home");

    const navLinks = [
        { name: "Home", link: "#home", icon: <i className={`w-5 bi  h-5 ${hash == "#home" ? "bi-house-fill" : "bi-house"}`} /> },
        { name: "About", link: "#about",icon: <i className={`w-5 bi  h-5 ${hash == "#about" ? "bi-person-fill" : "bi-person"}`} /> },
        { name: "Skills", link: "#skills",icon:<i className={`w-5 bi  h-5 ${hash == "#skills" ? "bi-lightbulb-fill" : "bi-lightbulb"}`} /> },
        { name: "Projects", link: "#projects",icon:<i className={`w-5 bi  h-5 ${hash == "#projects" ? "bi-inboxes-fill" : "bi-inboxes"}`} /> },
        { name: "Experience", link: "#experience",icon:<i className={`w-5 bi  h-5 ${hash == "#experience" ? "bi-briefcase-fill" : "bi-briefcase"}`} />  },
        { name: "Contact", link: "#contact" ,icon:<i className={`w-5 bi  h-5 ${hash == "#contact" ? "bi-phone-vibrate-fill" : "bi-phone-vibrate"}`} /> },
    ];



    return (
        <div className="flex   relative items-start justify-start flex-col gap-2 ">
            <div
                style={{
                    top: `${navLinks.findIndex(i => i.link == hash) * 35 + (navLinks.findIndex(i => i.link == hash) * 8)}px`
                }}
                className="w-full max-w-[200] duration-300 z-[1] border border-background/15 h-[35] bg-background/10 rounded-md absolute"></div>

            {
                navLinks.map(l =>
                    <Link
                        onClick={() => setHash(l.link)}
                        key={l.name}
                        href={l.link}

                        className={`z-[2] flex items-center gap-2 duration-200  border rounded-md  w-full max-w-[200] h-[35] px-2 border-transparent  
                        ${hash == l.link ? "opacity-100 font-medium  !fill-background !stroke-none" : "hover:bg-background/5 hover:border-background/10"}
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
