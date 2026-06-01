import { useRef } from 'react'
import { portfolioProjects } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const categoryIcons = {
  'Enterprise Software': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  'Mobile Application': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18"/>
    </svg>
  ),
  'Process Automation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  ),
}

const CARD_W = 344

function PortfolioSection() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
  }

  return (
    <section className="border-t border-[#eee3d7] bg-[#fff7ee] px-5 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header row with arrows */}
        <div className="mb-10 flex items-end justify-between gap-4 animate-fade-up">
          <SectionHeading eyebrow="Portfolio" title="Work we're proud of." />
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eee3d7] bg-white text-[#675f55] shadow-sm transition hover:border-[#f5820b] hover:text-[#f5820b]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#eee3d7] bg-white text-[#675f55] shadow-sm transition hover:border-[#f5820b] hover:text-[#f5820b]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolioProjects.map((project, i) => (
            <article
              key={project.title}
              className={`card-hover mx-3 flex w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#eee3d7] bg-white shadow-[0_4px_20px_rgba(31,27,21,0.06)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 3)}`}
            >
              {/* Card header */}
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#fff3e0] to-[#fce8cc]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(245,130,11,0.15)]">
                  {categoryIcons[project.category] ?? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                    </svg>
                  )}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-[#f5820b]">
                  {project.category}
                </p>
                <h3 className="text-base font-bold text-[#17130e]">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#675f55]">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[#f17e0c3d] bg-[#fff7ee] px-2 py-0.5 text-[10px] font-semibold text-[#c85d00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
