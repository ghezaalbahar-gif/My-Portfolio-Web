import ProjectCard from '../ProjectCard/ProjectCard.jsx'
import Reveal from '../Reveal/Reveal.jsx'
import selectedProjects from './SelectedProjectsData.js'

export default function SelectedProjects() {
  return (
    <section className="py-16 md:py-24 xl:py-[124px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-12 md:gap-16 xl:gap-[92px]">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-24">
            <p className="text-sm text-black/50">{selectedProjects.label}</p>
            <h2 className="max-w-[720px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl xl:max-w-[960px] xl:text-[64px]">
              {selectedProjects.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 md:gap-y-16">
            {selectedProjects.projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 100}>
                <ProjectCard project={project} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
