import LinesUnderSection from "@/components/global/LinesUnderSection"

const Experience = () => {
    return (
        <div id="experience" className="min-h-[100vh] flex items-center justify-center relative">
            <LinesUnderSection
                xCount={25}
                xPersent={4}
                yCount={25}
                yPersent={4}
            />
            <div className="flex relative flex-col w-full text-background/80 max-w-[700] gap-3 tracking-normal ">
                <h1 className="font-semibold text-background    text-xl">My experiences</h1>

                <p>
                    I’m an emerging developer full of energy and passion, constantly growing my skills and creativity. I enjoy building websites that look professional, advanced, and polished — inspired by some of the best designs on the web.

                </p>
                <p>

                    Over the past few months, I’ve gained hands-on experience through a three-month training at <a className="font-medium text-background/80" target="_blank" href="https://www.developpeur-informatique.ma/">developeur-informatique.ma</a>, where I worked with a Scrum team to build fast and visually appealing websites. I also collaborated briefly with a remote freelancer team on a project for an electric store.
                </p>
                <p>

                    My experience might still be limited, but I believe I’ve already learned what it takes to become a good, efficient — and one day, a senior — developer. Every day, I keep learning and creating new things while seeking my first full-time opportunity, and I continue working as a freelancer on platforms like Nsayblik.ma and Fiverr.
                </p>
                <p>

                    In summary, I’m a motivated and adaptable developer who learns quickly and always strives to deliver high-quality results. I’m excited to keep improving, face new challenges, and turn my passion for web development into meaningful, real-world projects.
                </p>

            </div>
        </div>
    )
}

export default Experience
