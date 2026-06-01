import { industries } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const industryIcons = [
  // Law Firms — briefcase
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/>
  </svg>,
  // Financial Services — trending up
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>,
  // Manufacturing — cpu/chip
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="9" y="9" width="6" height="6"/><rect x="2" y="2" width="20" height="20" rx="2"/>
    <line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/>
    <line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/>
    <line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/>
    <line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/>
  </svg>,
  // Real Estate — home
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>,
  // Logistics — truck
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
    <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>,
  // Startups — zap/lightning
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>,
  // Healthcare — heart
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>,
  // Education — book open
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>,
]

function IndustriesSection() {
  return (
    <section className="border-t border-[#eee3d7] px-5 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="Industries We Serve" title="Flexible engineering for teams across operationally complex fields." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <div
              key={industry}
              className={`card-hover flex items-center gap-3 rounded-2xl border border-[#eee3d7] bg-white px-5 py-5 shadow-[0_4px_16px_rgba(31,27,21,0.05)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 5)}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#fff3e0]">
                {industryIcons[i]}
              </span>
              <span className="text-sm font-semibold text-[#17130e]">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
