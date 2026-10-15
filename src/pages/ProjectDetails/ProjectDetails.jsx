import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import ProjectImage from '../../components/ProjectImage/ProjectImage.jsx'
import Reveal from '../../components/Reveal/Reveal.jsx'
import projectDetails from './ProjectDetailsData.js'
import projects, { getProject } from '../../data/projectsData.js'

function Section({ title, children }) {
  return (
    <Reveal className="flex flex-col gap-5">
      <h2 className="text-2xl font-medium tracking-tighter text-ink md:text-[28px]">{title}</h2>
      {children}
    </Reveal>
  )
}

function Prose({ children }) {
  return <p className="max-w-[700px] text-base leading-[1.6] text-ink/70 md:text-lg">{children}</p>
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
          Project not found
        </h1>
        <p className="text-base text-ink/60">This project does not exist (yet).</p>
        <Link
          to="/projects"
          className="inline-flex h-12 items-center rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
        >
          Back to projects
        </Link>
      </section>
    )
  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2)
  const titles = projectDetails.sections
  const blocks = [
    { title: titles.overview, paragraphs: project.overview, image: project.images[0] },
    {
      title: titles.challenge,
      paragraphs: project.challenge.paragraphs,
      bullets: project.challenge.bullets,
      image: project.images[1],
    },
    {
      title: titles.approach,
      paragraphs: project.approach.paragraphs,
      points: project.approach.points,
      image: project.images[2],
    },
    {
      title: titles.learned,
      paragraphs: project.learned,
      link: project.liveUrl && { href: project.liveUrl, label: project.liveLabel },
    },
  ]

  return (
    <>
      <section className="flex min-h-[52vh] flex-col justify-end gap-10 pb-12 pt-32 md:pb-16 md:pt-44 xl:pb-[72px] xl:pt-[176px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-9">
            <Reveal>
              <h1 className="max-w-[820px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl xl:text-[64px]">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-[700px] text-base leading-relaxed text-ink/70 md:text-lg">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={160} className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
              {project.meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-sm text-black/45">{item.label}</span>
                  <span className="text-[15px] font-medium tracking-[-0.02em] text-ink">
                    {item.value}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20 xl:pb-[96px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <ProjectImage src={project.cover} alt={`${project.title} cover`} />
        </div>
      </section>

      <section className="pb-20 md:pb-28 xl:pb-[124px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-14 md:gap-20 xl:gap-24">
            {blocks.map((block) => (
              <Section key={block.title} title={block.title}>
                {block.paragraphs.map((paragraph) => (
                  <Prose key={paragraph.slice(0, 24)}>{paragraph}</Prose>
                ))}
                {block.bullets && (
                  <ul className="flex max-w-[700px] flex-col gap-3">
                    {block.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 24)}
                        className="flex gap-3 text-base text-ink/70 md:text-lg"
                      >
                        <span aria-hidden="true" className="text-ink/40">
                          •
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                {block.points && (
                  <div className="flex max-w-[740px] flex-col gap-6 border-l border-hairline pl-6">
                    {block.points.map((point) => (
                      <div key={point.title} className="flex flex-col gap-2">
                        <h3 className="text-lg font-medium tracking-[-0.03em] text-ink md:text-xl">
                          {point.title}
                        </h3>
                        <p className="text-base leading-[1.6] text-ink/70">{point.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {block.link && (
                  <a
                    href={block.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex w-fit items-center gap-2 text-[15px] font-medium tracking-[-0.02em] text-ink"
                  >
                    {block.link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                )}
                {block.image && <ProjectImage src={block.image} alt={`${project.title} detail`} />}
              </Section>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 xl:pb-[124px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-10 md:gap-14">
            <Reveal>
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">
                {projectDetails.seeOther}
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
              {others.map((other) => (
                <Reveal key={other.slug}>
                  <ProjectCard project={other} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
