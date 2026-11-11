import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a, button, [role="button"], [data-cursor]'
const CARDS = '[data-cursor="card"]'
const BUTTONS = 'button, [role="button"]'

function modeFor(target) {
  const el = target?.closest?.(INTERACTIVE)
  if (!el) return 'default'
  if (el.matches(CARDS)) return 'card'
  if (el.matches(BUTTONS)) return 'button'
  return 'link'
}

function finePointerOnly() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
  return fine.matches && !calm.matches
}

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(finePointerOnly)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(fine.matches && !calm.matches)
    fine.addEventListener('change', update)
    calm.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      calm.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const root = document.documentElement
    root.classList.add('has-cursor')

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const trailing = { x: pointer.x, y: pointer.y }
    let mode = 'default'
    let pressed = false
    let shown = false
    let frame = 0

    const show = (next) => {
      shown = next
      dot.style.opacity = next ? '1' : '0'
      ring.style.opacity = next ? '1' : '0'
    }

    const onMove = (event) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
      if (!shown) {
        trailing.x = pointer.x
        trailing.y = pointer.y
        show(true)
      }
      const next = modeFor(event.target)
      if (next !== mode) {
        mode = next
        ring.dataset.mode = next
      }
    }

    const onLeave = (event) => {
      if (!event.relatedTarget) show(false)
    }

    const onBlur = () => show(false)

    const onPress = () => {
      pressed = true
    }

    const onRelease = (event) => {
      pressed = false
      const ripple = document.createElement('span')
      ripple.className = 'cursor-ripple'
      ripple.style.left = `${event.clientX}px`
      ripple.style.top = `${event.clientY}px`
      document.body.appendChild(ripple)
      window.setTimeout(() => ripple.remove(), 600)
    }

    const tick = () => {
      trailing.x += (pointer.x - trailing.x) * 0.17
      trailing.y += (pointer.y - trailing.y) * 0.17
      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${trailing.x}px, ${trailing.y}px, 0) translate(-50%, -50%) scale(${pressed ? 0.82 : 1})`
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('blur', onBlur)
    window.addEventListener('pointerdown', onPress)
    window.addEventListener('pointerup', onRelease, { passive: true })
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      root.classList.remove('has-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('blur', onBlur)
      window.removeEventListener('pointerdown', onPress)
      window.removeEventListener('pointerup', onRelease)
      document.querySelectorAll('.cursor-ripple').forEach((el) => el.remove())
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" data-mode="default" aria-hidden="true" />
    </>
  )
}
