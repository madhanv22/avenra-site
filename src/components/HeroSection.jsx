import companyLogo from '../assets/company-logo.png'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80'

function HeroSection({ onNavigate }) {
  return (
    <section
      className="bg-[linear-gradient(180deg,rgba(255,132,0,0.07),rgba(255,255,255,0)_400px)] px-5 py-14 lg:px-[72px] lg:py-20"
      id="home"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:gap-16">
        {/* Text */}
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5820b]">
            Custom software partner
          </p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#17130e] sm:text-4xl lg:text-5xl">
            Custom Software That Helps Businesses Work Smarter
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-[#675f55] sm:text-base">
            Avenra designs and builds practical web, mobile, and automation systems for teams that
            need clearer workflows, stronger operations, and software that can grow with them.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#ff8a00] to-[#e46b00] px-6 text-sm font-semibold text-white no-underline shadow-[0_14px_30px_rgba(235,112,0,0.22)] transition hover:-translate-y-0.5 sm:w-auto"
              href="/contact"
              onClick={(e) => onNavigate?.(e, '/contact')}
            >
              Book a Free Consultation
            </a>
            <a
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[#f17e0c5c] bg-white px-6 text-sm font-semibold text-[#17130e] no-underline transition hover:-translate-y-0.5 hover:border-[#f5820b] hover:shadow-[0_12px_28px_rgba(31,27,21,0.08)] sm:w-auto"
              href="/services"
              onClick={(e) => onNavigate?.(e, '/services')}
            >
              View Services
            </a>
          </div>
        </div>

        {/* Image card */}
        <div className="relative overflow-hidden rounded-2xl shadow-[0_24px_64px_rgba(22,18,12,0.14)]">
          <img
            src={HERO_IMAGE}
            alt="Avenra team collaborating"
            className="h-[340px] w-full object-cover md:h-[420px]"
          />
          {/* Overlay badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
            <img src={companyLogo} alt="Avenra" className="h-10 w-auto object-contain" />
            <div>
              <p className="text-sm font-bold text-[#17130e]">Avenra</p>
              <p className="text-xs text-[#675f55]">Custom Software Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
