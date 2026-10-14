import Reveal from '../../components/Reveal/Reveal.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import projects from '../../data/projectsData.js'

export default function Projects() {
  return (
    <>
      <section className="flex min-h-[42vh] flex-col justify-end gap-12 pb-14 pt-32 md:pb-16 md:pt-44 xl:pb-[72px] xl:pt-[176px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-7">
            <Reveal>
              <span className="inline-flex w-fit rounded-full bg-pill px-4 py-2.5 text-sm tracking-[-0.02em] text-ink">
                Projects
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-[720px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl xl:text-[80px]">
                Projects I have worked on
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 xl:pb-[124px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-16">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 100}>
                <ProjectCard project={project} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
