"use client"

import Link from "next/link"
import { useEffect, useState } from "react";


const Links = () => {
    const navLinks = [
        { name: "Home", link: "/#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Experience", link: "#experience" },
        { name: "Contact", link: "#contact" },
    ];

    const [hash, setHash] = useState(window?.location.hash);


    return (
        <div className="flex items-start justify-start flex-col gap-2 ">
            {
                navLinks.map(l =>
                    <Link onClick={() => setHash(l.link)} key={l.name} href={l.link} className={` ${hash == l.link ? "opacity-100 font-medium " : ""} linkC flex font-light opacity-70 items-center gap-1 group`}>
                        <div className={` bg-background p-[1] duration-200   ${hash == l.link ? " w-[30] " : "group-hover:w-[30] w-[10]"} `}></div>
                        {l.name}
                    </Link>

                )
            }

        </div>
    )
}

export default Links
