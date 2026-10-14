import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    let observer = null
    const reveal = () => {
      setVisible(true)
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }

    const onScroll = () => {
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) reveal()
    }

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) reveal()
        },
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
      )
      observer.observe(node)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      if (observer) observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
