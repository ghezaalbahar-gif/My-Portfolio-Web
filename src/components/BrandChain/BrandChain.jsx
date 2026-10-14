import { Atom, Braces, CodeSquare, CodeXml, Frame, GitBranch, LayoutTemplate, Palette, Wind } from 'lucide-react'
import Marquee from '../Marquee/Marquee.jsx'
import Reveal from '../Reveal/Reveal.jsx'
import brandChain from './BrandChainData.js'

const iconMap = { Atom, Braces, CodeSquare, CodeXml, Frame, GitBranch, LayoutTemplate, Palette, Wind }

export default function BrandChain() {
  return (
    <Reveal delay={320} className="flex w-full flex-col items-center gap-6">
      <p className="text-sm tracking-[-0.02em] text-black/40">Built with</p>
      <Marquee
        label="Tools I build with"
        items={brandChain}
        getKey={(brand) => brand.name}
        gap={44}
        speed={38}
        direction="right"
        className="w-full"
        renderItem={(brand) => {
          const Icon = iconMap[brand.icon]
          return (
            <span className="inline-flex h-10 items-center gap-2 text-[17px] font-semibold tracking-[-0.03em] text-ink/40 transition-colors duration-300 hover:text-ink">
              {Icon && <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />}
              {brand.name}
            </span>
          )
        }}
      />
    </Reveal>
  )
}
