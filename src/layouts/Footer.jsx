import logo from '../assets/company-logo.png'
import { teamMembers } from '../data/siteContent'

const companyLinks = [
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Process', path: '/process' },
  { label: 'Our Work', path: '/portfolio' },
  { label: 'Our Team', path: '/team' },
  { label: 'Contact', path: '/contact' },
]

function Footer() {
  const year = new Date().getFullYear()
  const phone = '919894356749' // +91 9894356749
  const message = encodeURIComponent('Hi Avenra, I have a business enquiry.')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <footer className="bg-[#17130e] px-5 pt-14 pb-8 lg:px-[72px]">
      <div className="mx-auto w-full max-w-7xl">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Avenra" className="h-26 w-auto object-contain self-start" />

            <p className="text-sm leading-7 text-white/50">
              Custom software that helps businesses work smarter.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/avenraa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white/60 transition hover:bg-[#0a66c2] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              {/* <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white/60 transition hover:bg-[#25d366] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a> */}

              {/* Email */}
              {/* <a
                href="mailto:hello@avenra.com"
                aria-label="Email"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white/60 transition hover:bg-[#f5820b] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a> */}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">Contact</h4>
              {/* <a href="mailto:hello@avenra.com" className="cursor-pointer text-sm text-white/60 no-underline transition hover:text-[#f5820b]">
                hello@avenra.com
              </a> */}
              <a href="tel:+919894356749" className="cursor-pointer text-sm text-white/60 no-underline transition hover:text-[#f5820b]">
                +91 9894356749
              </a>
              <a href="tel:+918680947556" className="cursor-pointer text-sm text-white/60 no-underline transition hover:text-[#f5820b]">
                +91 86809 47556
              </a>
            </div>
          </div>

          {/* Col 2 — Company links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, path }) => (
                <li key={label}>
                  <a
                    href={path}
                    className="cursor-pointer text-sm text-white/60 no-underline transition hover:text-[#f5820b]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Team */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
              Our Team
            </h4>
            <div className="flex flex-col gap-5">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#f5820b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-[#f5820b]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">© {year} Avenra. All rights reserved.</p>
          <p className="text-xs text-white/30">Built with precision. Delivered with care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
