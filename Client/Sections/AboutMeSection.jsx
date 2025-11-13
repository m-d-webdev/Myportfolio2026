import ContaineObserver from "@/components/global/ContaineObserver"
import LinesUnderSection from "@/components/global/LinesUnderSection"

const AboutMeSection = () => {
    return (
        <ContaineObserver key={"about"} link={"#about"} id="about" className=" w-full relative  min-h-[100vh] flex flex-col justify-center items-center">
            <LinesUnderSection
                xCount={25}
                xPersent={4}
                yCount={25}
                yPersent={4}
            />
            <div className="max-w-[700]  md:px-5 px-1 flex flex-col gap-3">

                <h2 className="font-semibold text-xl ">About </h2>
                <p className="font-light  text-background/80 leading-[1.8] tracking-normal  ">
                    I’m Mustapha Iderkaoui, a passionate Full Stack Developer specialized in <a className="font-semibold text-background " href="https://en.wikipedia.org/wiki/JavaScript" target="_blank"> JavaScript</a> technologies.
                    I craft accessible, performant, and visually refined digital experiences using <a className="font-semibold text-background " href="https://react.dev/" target="_blank">React </a> , <a className="font-semibold text-background " href="https://nextjs.org/" target="_blank">Next.js</a>, and <a className="font-semibold text-background " href="https://tailwindcss.com/" target="_blank"> Tailwind CSS</a> on the frontend, and <a className="font-semibold text-background " href="https://nodejs.org/en" target="_blank">Node.js</a> with Express on the backend. My work bridges thoughtful design with efficient engineering to deliver modern, responsive, and user-friendly web applications.
                </p>
                <p className="font-light text-background/80  leading-[1.8] tracking-normal  ">
                    Currently, I collaborate on freelance and internship projects, contributing to the development of tailor-made digital solutions using modern frameworks and agile methodologies. My experience includes building scalable e-commerce and social media platforms, as well as web tools like  <a className="font-semibold text-background " href="https://www.promt-flow.space/" target="_blank"> Prompt-Flow </a> and  Tamnt, combining functionality with a strong UI/UX focus.
                </p>
                <p className="font-light text-background/80  leading-[1.8] tracking-normal  ">
                    Beyond code, I’m driven by curiosity — always exploring new technologies, improving workflows, and sharing knowledge through my personal projects.
                </p>
            </div>
        </ContaineObserver >
    )
}

export default AboutMeSection
