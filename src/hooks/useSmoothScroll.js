import { useEffect } from 'react'
import Lenis from 'lenis'
export default function useSmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    const disabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarsePointer = window.matchMedia('(hover: none)').matches
    if (disabled || coarsePointer) return undefined

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })

    let frame = null
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
