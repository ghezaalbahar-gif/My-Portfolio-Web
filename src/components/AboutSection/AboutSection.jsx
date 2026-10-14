import { Mail } from 'lucide-react'
import Reveal from '../Reveal/Reveal.jsx'
import aboutSection from '../../data/aboutSectionData.js'
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon.jsx'

function GitHubIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.05.78 2.12 0 1.54-.01 2.77-.01 3.15 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: Mail,
}

export default function AboutSection() {
  const { photo } = aboutSection

  return (
    <section className="py-16 md:py-24 xl:py-[124px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14 xl:gap-20">
          <div className="flex flex-col gap-7 md:gap-8">
            <Reveal>
              <span className="inline-flex w-fit rounded-full bg-pill px-4 py-2.5 text-sm tracking-[-0.02em] text-ink">
                {aboutSection.label}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="max-w-[520px] text-[40px] font-semibold leading-[1.02] tracking-[-0.04em] text-ink sm:text-[56px] xl:text-[72px]">
                {aboutSection.title}
              </h2>
            </Reveal>

            <Reveal delay={140} className="flex items-center gap-2.5">
              {aboutSection.socials.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-pill text-ink transition-colors duration-300 hover:bg-[#efefef]"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                )
              })}
            </Reveal>

            <Reveal delay={200}>
              <p className="max-w-[560px] text-lg tracking-[-0.02em] text-ink/70 md:text-xl">
                {aboutSection.bio}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutSection.chips.map((chip, index) => (
                <Reveal
                  key={chip.value}
                  delay={260 + index * 80}
                  className="flex flex-col gap-1 rounded-2xl bg-card p-6 md:rounded-[20px]"
                >
                  <span className="text-2xl font-medium tracking-[-0.03em] text-ink">
                    {chip.value}
                  </span>
                  <span className="text-base text-black/50">{chip.label}</span>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="w-full">
            <img
              src={photo.src}
              alt={photo.alt}
              width="1156"
              height="1360"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover md:rounded-[20px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
