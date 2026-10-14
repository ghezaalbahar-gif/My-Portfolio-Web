import AboutSection from '../../components/AboutSection/AboutSection.jsx'
import Cta from '../../components/Cta/Cta.jsx'
import Faq from '../../components/Faq/Faq.jsx'
import Hero from '../../components/Hero/Hero.jsx'
import Process from '../../components/Process/Process.jsx'
import SelectedProjects from '../../components/SelectedProjects/SelectedProjects.jsx'
import Skills from '../../components/Skills/Skills.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <AboutSection />
      <Skills />
      <Process />
      <section className="py-16 md:py-24 xl:py-[124px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-14 lg:flex-row lg:items-start lg:gap-20">
            <Cta />
            <Faq />
          </div>
        </div>
      </section>
    </>
  )
}
