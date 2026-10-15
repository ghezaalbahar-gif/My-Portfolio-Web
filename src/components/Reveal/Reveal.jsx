import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'

const TRAVEL = 28

export default function Reveal({ className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  const progress = useMotionValue(0)
  const spring = useSpring(progress, { stiffness: 180, damping: 24, mass: 0.9 })
  const opacity = useTransform(spring, [0, 1], [0, 1])
  const y = useTransform(spring, [0, 1], [TRAVEL, 0])

  useEffect(() => {
    if (!inView || reduceMotion) return undefined
    const timer = setTimeout(() => progress.set(1), delay)
    return () => clearTimeout(timer)
  }, [inView, delay, reduceMotion, progress])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduceMotion ? undefined : { opacity, y }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
