import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../../data/navbarData.js'
import LinkedInIcon from '../LinkedInIcon/LinkedInIcon.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const links = [
    { label: 'Projects', to: '/projects' },
    { label: 'About me', to: '/about-me' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-4 pb-2 sm:px-6 lg:px-10 lg:pt-5">
        <nav className="mx-auto flex max-w-[1040px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label={`${profile.brand} — home`}>
            <img
              src={profile.avatar}
              alt={profile.name}
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-semibold text-ink">{profile.brand}</span>
              <span className="text-[13px] text-black/45">{profile.locationShort}</span>
            </span>
          </Link>

          <div className="hidden items-center gap-11 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm tracking-[-0.02em] transition-opacity duration-200 hover:opacity-60 ${
                    isActive ? 'text-ink' : 'text-black/55'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.linkedin.com/in/ghezaal-bahar-faqiri-b17723417/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-pill px-5 text-sm font-medium tracking-[-0.02em] text-ink transition-colors duration-300 hover:bg-[#efefef]"
            >
              <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />
              Let's chat
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? 'rotate-45' : '-translate-y-[4px]'
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-ink transition-all duration-300 ${
                open ? '-rotate-45' : 'translate-y-[4px]'
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-7 px-4 pt-6 pb-8 sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-[32px] font-semibold tracking-[-0.04em] ${
                    isActive ? 'text-ink' : 'text-black/55'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.linkedin.com/in/ghezaal-bahar-faqiri-b17723417/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-pill px-6 text-[15px] font-medium text-ink"
            >
              <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />
              Let's chat
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
