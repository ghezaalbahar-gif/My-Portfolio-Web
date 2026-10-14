import { useEffect, useRef, useState } from 'react'
export default function Marquee({
  items,
  renderItem,
  getKey,
  gap = 24,
  speed = 60,
  direction = 'left',
  fade = true,
  label,
  className = '',
  itemClassName = '',
}) {
  const viewportRef = useRef(null)
  const groupRef = useRef(null)
  const [copies, setCopies] = useState(2)
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    const viewport = viewportRef.current
    const group = groupRef.current
    if (!viewport || !group) return undefined

    let queued = false

    const measure = () => {
      queued = false
      const groupWidth = group.getBoundingClientRect().width
      const viewportWidth = viewport.getBoundingClientRect().width
      if (groupWidth <= 0) return
      setCopies(Math.max(2, Math.ceil((viewportWidth + groupWidth) / groupWidth)))
      setDuration(groupWidth / speed)
    }
    const schedule = () => {
      if (queued) return
      queued = true
      queueMicrotask(measure)
    }

    schedule()

    const observer = new ResizeObserver(schedule)
    observer.observe(viewport)
    observer.observe(group)
    window.addEventListener('resize', schedule)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', schedule)
    }
  }, [speed, items.length, gap])

  return (
    <div
      ref={viewportRef}
      className={`marquee ${fade ? 'marquee-fade' : ''} ${className}`}
      data-direction={direction}
      aria-label={label}
    >
      <div
        className="marquee-track"
        style={{
          '--marquee-copies': String(copies),
          '--marquee-duration': `${duration.toFixed(2)}s`,
          '--marquee-gap': `${gap}px`,
        }}
      >
        {Array.from({ length: copies }).map((_, copyIndex) => (
          <div
            key={copyIndex}
            ref={copyIndex === 0 ? groupRef : undefined}
            className="marquee-group"
            aria-hidden={copyIndex === 0 ? undefined : 'true'}
          >
            {items.map((item, itemIndex) => (
              <div key={getKey ? getKey(item, itemIndex) : `${copyIndex}-${itemIndex}`} className={itemClassName}>
                {renderItem(item, itemIndex, copyIndex > 0)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
