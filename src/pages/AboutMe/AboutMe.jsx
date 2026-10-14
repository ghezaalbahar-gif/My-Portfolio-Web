import { useState } from 'react'
import {
  Atom,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Braces,
  CodeXml,
  Frame,
  GitBranch,
  Hammer,
  LayoutTemplate,
  Palette,
  PenTool,
  Repeat,
  Sparkles,
  Wind,
} from 'lucide-react'
import Reveal from '../../components/Reveal/Reveal.jsx'
import aboutPage from './AboutPageData.js'
import aboutSection from '../../data/aboutSectionData.js'
import projects from '../../data/projectsData.js'
import skills from '../../data/skillsData.js'
import { profile } from '../../data/navbarData.js'

const iconMap = {
  Atom,
  Braces,
  CodeXml,
  Frame,
  GitBranch,
  LayoutTemplate,
  Palette,
  PenTool,
  Wind,
}

const processIconMap = { BookOpen, Repeat, Hammer, Sparkles }

function TickerRow({ items, reverse = false }) {
  const repeated = [...items, ...items, ...items, ...items]
  return (
    <div className="group relative flex overflow-hidden">
      <div
        className={`flex w-max shrink-0 items-center gap-4 py-1 motion-reduce:animate-none group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-ticker-reverse' : 'animate-ticker'
        }`}
      >
        {repeated.map((skill, index) => {
          const Icon = iconMap[skill.icon]
          return (
            <span
              key={`${skill.label}-${index}`}
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium tracking-[-0.02em] text-ink"
            >
              {Icon && <Icon className="h-4 w-4 text-black/70" strokeWidth={1.8} />}
              {skill.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}

function Gallery() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((index - 1 + projects.length) % projects.length)
  const next = () => setIndex((index + 1) % projects.length)

  return (
    <div className="flex h-full flex-col justify-between gap-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-pill">
        {projects.map((project, i) => (
          <img
            key={project.slug}
            src={project.cover}
            alt={project.title}
            loading="lazy"
            width="1016"
            height="762"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-black/50">
          {index + 1} / {projects.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 hover:bg-[#efefef]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink transition-colors duration-300 hover:bg-[#efefef]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AboutMe() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-end gap-12 pb-16 pt-32 md:pb-20 md:pt-44 xl:min-h-[85vh] xl:pb-[96px] xl:pt-[176px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-7">
            <Reveal>
              <span className="inline-flex w-fit rounded-full bg-pill px-4 py-2.5 text-sm tracking-[-0.02em] text-ink">
                {aboutPage.badge}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="max-w-[720px] text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl xl:text-[80px]">
                {aboutPage.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-[600px] text-base leading-relaxed text-ink/70 md:text-lg xl:text-xl">
                {aboutPage.subtitle}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 xl:pb-[124px]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-5 lg:gap-6">
            {/* Row 1: intro + how I learn */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
              <Reveal className="flex flex-col gap-5 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  width="80"
                  height="80"
                  className="h-20 w-20 rounded-2xl object-cover"
                />
                <div className="flex flex-wrap gap-2.5">
                  {aboutPage.intro.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex rounded-full bg-white px-4 py-2.5 text-sm tracking-[-0.02em] text-ink"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
                <p className="text-xl font-medium leading-[1.3] tracking-[-0.03em] text-ink md:text-2xl">
                  {aboutPage.intro.bio}
                </p>
              </Reveal>

              <Reveal
                delay={100}
                className="flex flex-col justify-between gap-8 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7"
              >
                <div className="flex flex-col gap-3">
                  {aboutPage.processCard.steps.map((step) => {
                    const Icon = processIconMap[step.icon]
                    return (
                      <div
                        key={step.text}
                        className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium tracking-[-0.02em] text-ink"
                      >
                        {Icon && <Icon className="h-4 w-4 text-black/70" strokeWidth={1.8} />}
                        {step.text}
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-ink">
                    {aboutPage.processCard.heading}
                  </h2>
                  <p className="text-base leading-[1.5] text-black/55">
                    {aboutPage.processCard.description}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Row 2: tools + values + gallery */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
              <Reveal className="flex flex-col gap-8 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7">
                <div className="flex flex-col gap-16">
                  <TickerRow items={skills.rows[0]} />
                  <TickerRow items={skills.rows[1]} reverse />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-ink">
                    {aboutPage.stackCard.heading}
                  </h2>
                  <p className="text-base leading-[1.5] text-black/55">
                    {aboutPage.stackCard.description}
                  </p>
                </div>
              </Reveal>

              <Reveal
                delay={100}
                className="flex flex-col justify-between gap-10 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7"
              >
                <div className="flex flex-col gap-3">
                  {aboutPage.goalsCard.values.map((value) => (
                    <p
                      key={value}
                      className="text-xl font-medium leading-[1.3] tracking-[-0.03em] text-ink"
                    >
                      {value}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-2xl font-medium tracking-[-0.04em] text-ink">
                    {aboutPage.goalsCard.heading}
                  </h2>
                  <p className="text-base leading-[1.5] text-black/55">
                    {aboutPage.goalsCard.statement}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200} className="rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7">
                <Gallery />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Reveal>
        <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 sm:px-6 md:pb-28 xl:pb-[124px]">
          <div className="mx-auto flex max-w-[1040px] flex-col gap-4 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-10">
            <p className="text-sm text-black/50">{aboutSection.label}</p>
            <p className="max-w-[720px] text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-ink md:text-3xl">
              {aboutPage.goalsCard.statement}
            </p>
          </div>
        </div>
      </Reveal>
    </>
  )
}
