import Reveal from '../Reveal/Reveal.jsx'
import Button from '../Button/Button.jsx'
import cta from './CtaData.js'

export default function Cta() {
  return (
    <div className="flex flex-1 flex-col items-start gap-7 text-left md:gap-8">
      <Reveal>
        <span className="inline-flex items-center gap-2.5 rounded-full bg-pill px-4 py-2.5 text-sm tracking-[-0.02em] text-ink">
          <span className="h-2 w-2 rounded-full bg-status" />
          {cta.badge}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="max-w-[520px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl xl:text-[56px]">
          {cta.title}
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="max-w-[460px] text-base text-ink/70 md:text-lg">{cta.subtitle}</p>
      </Reveal>
      <Reveal delay={240} className="mt-2 flex flex-wrap items-center gap-2.5">
        <Button href={cta.primaryCta.href} icon={false}>
          {cta.primaryCta.label}
        </Button>
        <Button to={cta.secondaryCta.to} variant="secondary">
          {cta.secondaryCta.label}
        </Button>
      </Reveal>
    </div>
  )
}
