import { processSteps } from '../data/siteContent'
import SectionHeading from './SectionHeading'

// Clean single-color stroke icons — brand orange
const stepIcons = [
  // Discover — search
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>,
  // Plan — clipboard list
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>,
  // Build — code
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>,
  // Deploy — upload cloud
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="16 16 12 12 8 16"/>
    <line x1="12" y1="12" x2="12" y2="21"/>
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>,
  // Support — headphones
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>,
]

function ProcessSection() {
  return (
    <section
      className="border-t border-[#eee3d7] bg-[#fff7ee] px-5 py-16 lg:px-[72px] lg:py-24"
      id="process"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="Our Process" title="How we take your idea from concept to live product." />
        </div>

        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="absolute left-[36px] right-[36px] top-[36px] hidden h-px bg-gradient-to-r from-transparent via-[#f5820b]/25 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <div key={item.title} className={`relative flex flex-col animate-fade-up animate-fade-up-delay-${Math.min(index + 1, 5)}`}>
                {/* Icon bubble */}
                <div className="relative z-10 mb-5 flex items-center gap-3 lg:flex-col lg:items-start">
                  <div className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#eee3d7] bg-white shadow-[0_8px_24px_rgba(31,27,21,0.08)]">
                    {stepIcons[index]}
                    <span className="text-[10px] font-bold tracking-widest text-[#f5820b]">{item.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="h-px flex-1 bg-[#f5820b]/20 lg:hidden" />
                  )}
                </div>

                {/* Card */}
                <div className="card-hover flex flex-1 flex-col rounded-xl border border-[#eee3d7] bg-white p-5 shadow-[0_4px_16px_rgba(31,27,21,0.05)]">
                  <h3 className="mb-2 text-sm font-bold text-[#17130e]">{item.title}</h3>
                  <p className="text-xs leading-6 text-[#675f55]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
