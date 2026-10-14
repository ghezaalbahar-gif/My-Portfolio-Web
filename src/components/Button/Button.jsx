import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

/**
 * Pill button matching the reference: rounded-full, icon + dual text layers
 * that swap vertically on hover. Renders a Link (to), an anchor (href), or a button.
 */
export default function Button({
  to,
  href,
  onClick,
  type,
  variant = 'primary',
  icon = true,
  children,
  className = '',
}) {
  const base =
    'group/btn relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-[15px] font-medium tracking-[-0.02em] transition-colors duration-300 md:h-[52px] md:px-7'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-black'
      : 'bg-pill text-ink hover:bg-[#efefef]'

  const inner = (
    <>
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:rotate-45"
          strokeWidth={2}
        />
      )}
      <span className="relative block h-[1.4em] overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover/btn:-translate-y-[1.4em]">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block translate-y-[1.4em] transition-transform duration-300 ease-out group-hover/btn:translate-y-0"
        >
          {children}
        </span>
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`${base} ${styles} ${className}`}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type || 'button'} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {inner}
    </button>
  )
}
