import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import footer from './FooterData.js'
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

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-12 pb-11 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1040px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4">
              {footer.contact.map((row) =>
                row.href ? (
                  <a
                    key={row.label}
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium tracking-[-0.02em] transition-opacity hover:opacity-70 sm:text-xl"
                  >
                    {row.label}:{' '}
                    <span className="font-normal text-white/80">{row.value}</span>
                  </a>
                ) : (
                  <p
                    key={row.label}
                    className="text-lg font-medium tracking-[-0.02em] sm:text-xl"
                  >
                    {row.label}:{' '}
                    <span className="font-normal text-white/80">{row.value}</span>
                  </p>
                ),
              )}
            </div>

            <div className="flex gap-20 sm:gap-28">
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white/50">{footer.pagesTitle}</p>
                {footer.pages.map((page) => (
                  <Link
                    key={page.to}
                    to={page.to}
                    className="text-lg font-medium tracking-[-0.02em] transition-opacity hover:opacity-70 sm:text-xl"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-white/50">{footer.socialsTitle}</p>
                {footer.socials.map((social) => {
                  const Icon = socialIcons[social.label]
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-medium tracking-[-0.02em] transition-opacity hover:opacity-70 sm:text-xl"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {social.label}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-footer-line pt-6">
            <p className="text-sm text-white/80">{footer.copyright}</p>
            <p className="mt-2 text-sm text-white/40">{footer.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
