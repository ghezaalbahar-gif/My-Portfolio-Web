import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '../Reveal/Reveal.jsx'
import faq from './FaqData.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="flex flex-1 flex-col gap-4">
      {faq.items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <Reveal key={item.question} delay={index * 50} className="rounded-2xl bg-card">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            >
              <span className="text-[15px] font-medium tracking-[-0.02em] text-ink md:text-base">
                {item.question}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                strokeWidth={2}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-[1.6] text-black/55">{item.answer}</p>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
