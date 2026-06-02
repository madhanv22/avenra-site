import { useRef, useState } from 'react'
import { teamMembers } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const CARD_W = 304 // w-72 (288) + mx-3 (24) = ~304

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 16.5v-6.2c0-1.9-1-3.3-2.9-3.3-1.1 0-1.9.6-2.2 1.2h-.1V10h-3v9.5h3v-5.2c0-1.4.3-2.7 2-2.7s1.7 1.6 1.7 2.8v5.1h3ZM6.9 8.3c1 0 1.7-.7 1.7-1.6 0-.9-.7-1.6-1.7-1.6S5.2 5.8 5.2 6.7c0 .9.7 1.6 1.7 1.6ZM5.4 19.5h3V10h-3v9.5Z" />
    </svg>
  )
}

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
          className="flex gap-0 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-between lg:overflow-visible"
        >
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`card-hover mx-3 flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-[#eee3d7] bg-white shadow-[0_4px_20px_rgba(31,27,21,0.06)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)} lg:mx-0 lg:mb-6 lg:w-[calc((100%-48px)/3)] lg:shrink`}
            >
              {/* Photo placeholder */}
              <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#fff3e0] to-[#ffe0b2]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(245,130,11,0.18)]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-28 w-28 rounded-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f5820b]">
                  {member.role}
                </p>
                <div className="mt-1.5 flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-[#17130e]">{member.name}</h3>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#eee3d7] text-[#0A66C2] transition hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
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
