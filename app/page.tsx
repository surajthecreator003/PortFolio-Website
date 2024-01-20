import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certification from "@/components/certification";
import Contact from "@/components/contact";



//this componennt will hold all the parts like intro,about,projects,Skills,contact
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Certification/>
      <Contact />
    </main>
  )
}
