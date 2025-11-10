"use client";

import { FileUser, Github, Linkedin } from "lucide-react";
import { ResumeIcon } from "../icons";

const ExternalLinks = () => {
  return (
    <div className="flex gap-3 items-center ">
      <a className="" href="https://github.com/m-d-webdev" target="_blank">
        <div className="p-[4] rounded-md border-background/40 w-fit  border ">
          <Github className="w-5 stroke-1 h-5" />
        </div>

      </a>
      <a href="https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/" target="_blank">

        <div className="p-[4] rounded-md border-background/40 w-fit  border ">
          <Linkedin className="w-5 stroke-1 h-5" />
        </div>
      </a>

      <a href="https://younitebucket.s3.eu-north-1.amazonaws.com/mustapha_iderkaoui_cv.pdf" target="_blank" download={true}>
        <div className="p-[4] flex items-center gap-1 text-xs font-medium rounded-md border-background/40 w-fit  border ">
          <ResumeIcon className="w-5 stroke-1 h-5" />
          Resume
        </div>
      </a>

    </div>
  )
}

export default ExternalLinks
