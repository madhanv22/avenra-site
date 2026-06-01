import { services } from '../data/siteContent'
import SectionHeading from './SectionHeading'

const serviceIcons = [
  // Custom Software — terminal/code
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>,
  // Web App — globe
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>,
  // Mobile — smartphone
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>,
  // Automation — settings/gear
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>,
  // Integration — link
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>,
  // Support — headphones
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
  </svg>,
]

function ServicesSection() {
  return (
    <section className="border-t border-[#eee3d7] px-5 py-16 lg:px-[72px] lg:py-24" id="services">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="Services" title="Software built around the way your business works." />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service}
              className={`card-hover flex items-start gap-4 rounded-2xl border border-[#eee3d7] bg-white p-6 shadow-[0_4px_16px_rgba(31,27,21,0.05)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 5)}`}
            >
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fff3e0]">
                {serviceIcons[i]}
              </span>
              <h3 className="mt-2.5 text-base font-semibold text-[#17130e]">{service}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
