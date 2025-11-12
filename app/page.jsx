import IntroName from "@/Client/Main-page/IntroName";
import AboutMeSection from "@/Client/Sections/AboutMeSection";
import ContactSection from "@/Client/Sections/ContactSection";
import Experience from "@/Client/Sections/Experience";
import FirstSection from "@/Client/Sections/FirstSection";
import Projects from "@/Client/Sections/Projects";
import Skills from "@/Client/Sections/Skills";
import MainContext from "@/context/MainContext";
import Script from "next/script";

function Home() {
  return (
    <>
      <Script
        id="ld-json-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Mustapha Iderkaoui",
            url: "https://www.iderkaoui.site",
            image: "https://www.iderkaoui.site/og-image.png",
            jobTitle: "Full Stack Developer",
            description:
              "Building fast, inclusive, and visually refined web applications using the MERN stack and Next.js.",
            email: "iderkaoui.mustapha.dev@gmail.com",
            sameAs: [
              "https://www.linkedin.com/in/mustapha-iderkaoui-2748ab31b/",
              "https://github.com/m-d-webdev",
            ],
          }),
        }}
      />
      <MainContext>

        <div className="  min-h-screen w-full max-w-[1300]   text-background flex md:justify-between md:items-start md:flex-row flex-col  tracking-tight  ">
          <IntroName />
          <div className=" w-full flex flex-col gap-10 px-2 md:px-0 scrl_smooth md:max-h-[100vh] md:overflow-y-auto scrl_none md:max-w-[800] pt-10">
            <FirstSection />
            <AboutMeSection />
            <Skills />
            <Projects />
            <Experience />
            <ContactSection />
          </div>
        </div>
      </MainContext>
    </>
  );
}


export default Home
