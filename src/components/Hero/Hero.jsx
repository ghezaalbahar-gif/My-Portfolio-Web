import BrandChain from '../BrandChain/BrandChain.jsx'
import Marquee from '../Marquee/Marquee.jsx'
import Reveal from '../Reveal/Reveal.jsx'
import Button from '../Button/Button.jsx'
import hero from './HeroData.js'
import projects from '../../data/projectsData.js'

const covers = projects.slice(0, 4).map((project) => ({
  key: project.slug,
  cover: project.cover,
}))

export default function Hero() {
  return (
    <section className="flex min-h-[92vh] flex-col items-center justify-center gap-12 pb-16 pt-16 md:gap-[72px] xl:min-h-screen xl:gap-[88px] xl:pb-[124px] xl:pt-[124px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-7 text-center md:gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-pill px-4 py-2.5 text-sm tracking-[-0.02em] text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-status" />
              </span>
              {hero.badge}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl xl:text-[80px]">
              {hero.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-[600px] text-base leading-relaxed text-ink/70 md:text-lg xl:text-xl xl:leading-[1.5]">
              {hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-2 flex flex-wrap items-center justify-center gap-2.5">
            <Button to={hero.primaryCta.to}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary" icon={false}>
              {hero.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 flex w-full max-w-[1040px] flex-col items-center gap-8 md:mt-16 xl:mt-[64px]">
          <BrandChain />
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden w-full md:mt-20 md:block xl:mt-[72px]"
      >
        <Marquee
          items={covers}
          getKey={(tile) => tile.key}
          gap={24}
          speed={42}
          fade
          className="h-[300px] xl:h-[412px]"
          renderItem={(tile) => (
            <img
              src={tile.cover}
              alt=""
              width="1016"
              height="938"
              draggable="false"
              loading="lazy"
              className="h-[300px] w-auto max-w-none rounded-2xl object-contain xl:h-[412px] xl:rounded-[16px]"
            />
          )}
        />
      </div>
    </section>
  )
}
