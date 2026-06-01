import { useRef, useState } from 'react'
import { teamMembers } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const CARD_W = 304 // w-72 (288) + mx-3 (24) = ~304

function TeamSection() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * CARD_W, behavior: 'smooth' })
  }

  return (
    <section className="border-t border-[#eee3d7] bg-white px-5 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header row with arrows */}
        <div className="mb-10 flex items-end justify-between gap-4 animate-fade-up">
          <SectionHeading eyebrow="Our Team" title="The people behind Avenra." />
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

        {/* Scrollable track — manual scroll + auto on desktop */}
        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="flex gap-0 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover mx-3 flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#eee3d7] bg-white shadow-[0_4px_20px_rgba(31,27,21,0.06)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)}`}
            >
              {/* Photo placeholder */}
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(245,130,11,0.18)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f5820b]">
                  {member.role}
                </p>
                <h3 className="mt-1.5 text-base font-bold text-[#17130e]">{member.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#675f55]">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
