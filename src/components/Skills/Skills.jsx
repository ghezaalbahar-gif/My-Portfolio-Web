import { Atom, Braces, CodeXml, Frame, GitBranch, LayoutTemplate, Palette, PenTool, Wind } from 'lucide-react'
import Marquee from '../Marquee/Marquee.jsx'
import Reveal from '../Reveal/Reveal.jsx'
import skills from '../../data/skillsData.js'

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

export default function Skills() {
  return (
    <section className="py-16 md:py-24 xl:py-[96px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-10 md:gap-14 xl:gap-16">
          <Reveal className="flex flex-col gap-5">
            <p className="text-sm text-black/50">{skills.label}</p>
            <h2 className="max-w-[740px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl xl:text-[64px]">
              {skills.title}
            </h2>
            <p className="max-w-[600px] text-base text-ink/60 md:text-lg">{skills.subtitle}</p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1040px] flex-col gap-4 md:mt-14 xl:mt-16">
        {skills.rows.map((row, rowIndex) => (
          <Reveal key={rowIndex} delay={rowIndex * 100}>
            <Marquee
              label={rowIndex === 0 ? skills.label : undefined}
              items={row}
              getKey={(skill) => skill.label}
              gap={16}
              speed={55}
              direction={rowIndex % 2 === 0 ? 'left' : 'right'}
              renderItem={(skill) => {
                const Icon = iconMap[skill.icon]
                return (
                  <span className="inline-flex h-12 items-center gap-2.5 rounded-full bg-pill px-5 text-[15px] font-medium tracking-[-0.02em] text-ink">
                    {Icon && <Icon className="h-[18px] w-[18px] text-black/70" strokeWidth={1.8} />}
                    {skill.label}
                  </span>
                )
              }}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
