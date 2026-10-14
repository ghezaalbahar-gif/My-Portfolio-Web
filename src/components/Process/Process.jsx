import Reveal from '../Reveal/Reveal.jsx'
import process from './ProcessData.js'
function CurveArrow({ className = '', style, up = false }) {
  return (
    <svg
      viewBox="0 0 80 48"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {up ? (
        <>
          <path d="M4 44C20 40 40 33 64 8" />
          <path d="M61 23 64 8 49 12" />
        </>
      ) : (
        <>
          <path d="M3 44C12 19 39 7 72 14" />
          <path d="M60 5 73 14 59 22" />
        </>
      )}
    </svg>
  )
}

// A little tilt and vertical offset so the row reads as placed, not aligned.
const tilt = [
  'lg:-rotate-2 lg:translate-y-3',
  'lg:rotate-1 lg:-translate-y-2',
  'lg:-rotate-1 lg:translate-y-2',
  'lg:rotate-2 lg:-translate-y-3',
]

export default function Process() {
  const total = process.steps.length
  // 01 -> 02 arcs over the row, 03 -> 04 sweeps up from under it.
  const arrows = [
    { left: `${(1 / total) * 100}%`, offset: '-top-14' },
    { left: `${(3 / total) * 100}%`, offset: '-bottom-14', up: true },
  ]

  return (
    <section className="py-16 md:py-24 xl:py-[96px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1040px] flex-col gap-16 md:gap-20 xl:gap-24">
          <Reveal className="flex max-w-[740px] flex-col gap-5">
            <p className="text-sm text-black/50">{process.label}</p>
            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl xl:text-[64px]">
              {process.title}
            </h2>
            <p className="text-base text-ink/60 md:text-lg">{process.subtitle}</p>
          </Reveal>

          <div className="relative">
            {arrows.map((arrow) => (
              <CurveArrow
                key={arrow.left}
                up={arrow.up}
                className={`absolute z-10 hidden h-12 w-20 -translate-x-1/2 text-ink/70 lg:block ${arrow.offset}`}
                style={{ left: arrow.left }}
              />
            ))}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {process.steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 80}
                  className={`flex min-h-[300px] flex-col justify-between gap-10 rounded-2xl bg-card p-6 md:rounded-[20px] md:p-7 lg:min-h-[400px] ${tilt[index % tilt.length]}`}
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-xl font-medium tracking-[-0.02em] text-black/40">
                      {step.number}
                    </span>
                    <h3 className="text-[28px] font-medium leading-[1.1] tracking-[-0.04em] text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.5] text-black/55">{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
