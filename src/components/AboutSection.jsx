import { aboutItems } from '../data/siteContent'
import SectionHeading from './SectionHeading'

// Clean single-color stroke icons — brand orange
const aboutIcons = [
  // Who we are — users
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  // What we do — tool/wrench
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>,
  // Why clients — shield with check
  <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>,
]

function AboutSection() {
  return (
    <section className="border-t border-[#eee3d7] bg-white px-5 py-16 lg:px-[72px] lg:py-24" id="about">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 animate-fade-up">
          <SectionHeading eyebrow="About Avenra" title="A team built around your business goals." />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutItems.map((item, i) => (
            <article
              key={item.title}
              className={`card-hover rounded-2xl border border-[#eee3d7] bg-white p-7 shadow-[0_4px_16px_rgba(31,27,21,0.05)] animate-fade-up animate-fade-up-delay-${i + 1}`}
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff3e0]">
                {aboutIcons[i]}
              </span>
              <h3 className="text-base font-semibold text-[#17130e]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#675f55]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
