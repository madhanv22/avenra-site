import { strengths } from '../data/siteContent'
import SectionHeading from './SectionHeading'

function WhyChooseUsSection() {
  return (
    <section className="border-t border-[#eee3d7] bg-[#fff7ee] px-5 py-16 lg:px-[72px] lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="Why Choose Us" title="Steady execution from first conversation to long-term support." />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, i) => (
            <div
              key={item}
              className={`card-hover flex items-center gap-4 rounded-2xl border border-[#f17e0c3d] bg-white px-6 py-5 shadow-[0_4px_16px_rgba(31,27,21,0.05)] animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 5)}`}
            >
              {/* Filled check circle */}
              <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 shrink-0" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#f5820b"/>
                <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-semibold text-[#17130e]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
