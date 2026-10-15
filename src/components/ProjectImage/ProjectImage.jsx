import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Minus, Plus, X } from 'lucide-react'
import Reveal from '../Reveal/Reveal.jsx'

const ZOOMS = [1, 1.5, 2, 3]

function Lightbox({ src, alt, onClose }) {
  const closeRef = useRef(null)
  const dialogRef = useRef(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    closeRef.current?.focus()

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    const scrollY = window.scrollY
    root.style.overflow = 'hidden'

    // Lenis watches the window, so a gesture inside the viewer would scroll the
    // page behind it unless it stops bubbling here.
    const isolate = (event) => event.stopPropagation()
    const dialog = dialogRef.current
    dialog.addEventListener('wheel', isolate, { passive: true })
    dialog.addEventListener('touchmove', isolate, { passive: true })

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      root.style.overflow = previousOverflow
      dialog.removeEventListener('wheel', isolate)
      dialog.removeEventListener('touchmove', isolate)
      window.removeEventListener('keydown', onKeyDown)
      window.scrollTo(0, scrollY)
    }
  }, [onClose])

  const nudge = (delta) => {
    setStep((current) => Math.min(ZOOMS.length - 1, Math.max(0, current + delta)))
  }

  const control =
    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pill text-ink transition-opacity hover:opacity-70 disabled:opacity-30'

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[100] flex flex-col bg-white"
    >
      <div className="flex items-center justify-between gap-3 border-b border-hairline px-4 py-2.5 sm:px-6">
        <p className="truncate text-sm tracking-[-0.02em] text-ink">{alt}</p>
        <div className="flex items-center gap-1.5">
          <button type="button" onClick={() => nudge(-1)} disabled={step === 0} aria-label="Zoom out" className={control}>
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 shrink-0 text-center text-sm text-black/55">
            {step === 0 ? 'Fit' : `${ZOOMS[step]}x`}
          </span>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={step === ZOOMS.length - 1}
            aria-label="Zoom in"
            className={control}
          >
            <Plus className="h-4 w-4" />
          </button>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className={control}>
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose()
        }}
        className="flex-1 overflow-auto overscroll-contain"
      >
        {step === 0 ? (
          <img src={src} alt={alt} draggable="false" className="h-full w-full object-contain p-4" />
        ) : (
          <div style={{ width: `${ZOOMS[step] * 100}%` }} className="p-4">
            <img src={src} alt={alt} draggable="false" className="block w-full" />
          </div>
        )}
      </div>
    </div>
  )
}

export default function ProjectImage({ src, alt }) {
  const buttonRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <Reveal className="overflow-hidden rounded-2xl bg-pill md:rounded-[20px]">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge ${alt}`}
          className="block w-full cursor-zoom-in p-0 text-left"
        >
          <img
            src={src}
            alt={alt}
            width="1366"
            height="633"
            loading="lazy"
            draggable="false"
            className="block w-full object-contain"
          />
        </button>
      </Reveal>
      {open &&
        createPortal(
          <Lightbox
            src={src}
            alt={alt}
            onClose={() => {
              setOpen(false)
              buttonRef.current?.focus()
            }}
          />,
          document.body
        )}
    </>
  )
}
