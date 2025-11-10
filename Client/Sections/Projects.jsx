"use client";

import { Github, MoveRight, MoveUpRight } from "lucide-react";
import ProjectJson from "./project.json";

const Projects = () => {
    return (
        <div id="projects" className="min-h-[100vh] items-center  mt-10 justify-center  p-10 flex flex-col ">
            <h1 className="font-semibold w-full text-xl">Featured Projects</h1>

            <div className="flex w-full mt-6  flex-col gap-3">

                {
                    ProjectJson.map((p, i) =>
                        <div key={i} className="rounded-xl group  opacity-70  hover:opacity-100 flex gap-4 justify-between hover:bg-background/2 p-2 border border-transparent hover:border-background/10">
                            <img src={p.image} className="rounded-md w-[220]  object-cover" alt="" />
                            <div className="mr-5">
                                <a href={p.link} target="_blank" className=" font-semibold hover:underline hover:text-chart-2 tracking-tighter">{p.name}</a>
                                <p className=" tracking-normal mt-1 opacity-80 max-w-[340] text-sm">{p.subtitle["en"]}</p>
                                <div className="gap-2 flex mt-3">
                                    {
                                        p.techs.map(pi =>
                                            <div key={pi} className="p-2 bg-chart-2/10 border-chart-2/50 rounded-2xl text-xs border"> {pi} </div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="bg-foreground gap-2 mt-6 duration-200 opacity-0 group-hover:opacity-100 h-[100] w-[200] border p-2 px-4 border-background/10 rounded-3xl  flex flex-col items-center justify-center">

                                <a href={p.link} target="_blank" className="w-full cursor-pointer  bg-foreground border border-background/40 p-2 text-xs justify-center font-semibold rounded-full flex items-center gap-2">
                                    Open  project
                                    <MoveUpRight className="w-4 h-4" />
                                </a>

                                <a href={p.gitlink} target="_blank" className="w-full cursor-pointer  bg-foreground border border-background/40 p-2  text-xs justify-center font-semibold rounded-full flex items-center gap-2">
                                    Open in Github
                                    <Github className="w-4 h-4" />
                                </a>

                            </div>

                        </div>
                    )
                }
            </div>

        <a href="https://github.com/m-d-webdev?tab=repositories" target="_blank" className="w-full text-sm ml-8 flex gap-4 opacity-70 hover:opacity-100 group mt-6">View Full Project Archive <MoveRight className="group-hover:translate-x-4 duration-200" /></a>
        </div>
    )
}

export default Projects
