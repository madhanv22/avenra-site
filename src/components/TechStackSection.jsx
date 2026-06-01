import { techStack } from '../data/siteContent'
import SectionHeading from './SectionHeading'

// Clean monochrome tech icons — single stroke color per item
const techIcons = {
  React: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" className="h-6 w-6">
      <circle cx="12" cy="12" r="2"/>
      <ellipse cx="12" cy="12" rx="10" ry="4"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <path d="M8 12h8M12 8v8"/>
    </svg>
  ),
  Rails: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M4 17h16M4 12h16M8 7h8"/>
      <circle cx="4" cy="17" r="1.5" fill="#f5820b"/>
      <circle cx="20" cy="17" r="1.5" fill="#f5820b"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2L3 7v10l9 5 9-5V7L12 2z"/>
      <path d="M12 22V12M3 7l9 5 9-5"/>
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <ellipse cx="12" cy="6" rx="8" ry="3"/>
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/>
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2c0 0-6 5.5-6 11a6 6 0 0 0 12 0C18 7.5 12 2 12 2z"/>
      <line x1="12" y1="18" x2="12" y2="22"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  AI: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
      <circle cx="9" cy="14" r="1" fill="#f5820b"/>
      <circle cx="15" cy="14" r="1" fill="#f5820b"/>
    </svg>
  ),
}

function TechStackSection() {
  return (
    <section className="border-t border-[#eee3d7] px-5 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="Technology Stack" title="Modern tools for stable, scalable products." />
        </div>
        <div className="flex flex-wrap gap-4">
          {techStack.map((item, i) => (
            <div
              key={item}
              className={`card-hover flex items-center gap-3 rounded-2xl border border-[#eee3d7] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(31,27,21,0.05)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 5)}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff3e0]">
                {techIcons[item]}
              </span>
              <span className="text-sm font-semibold text-[#17130e]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
