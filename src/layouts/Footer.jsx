import logo from '../assets/company-logo.png'
import { teamMembers } from '../data/siteContent'

const companyLinks = ['Services', 'About', 'Process', 'Portfolio', 'Team', 'Contact']

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#17130e] px-5 pt-14 pb-8 lg:px-[72px]">
      <div className="mx-auto w-full max-w-7xl">

        {/* Main grid — 3 columns on desktop */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Avenra" className="h-26 w-auto object-contain self-start" />

            <p className="text-sm leading-7 text-white/50">
              Custom software that helps businesses work smarter.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* LinkedIn — placeholder href, update later */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white/60 transition hover:bg-[#0a66c2] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@avenra.com"
                aria-label="Email us"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg bg-white/10 text-white/60 transition hover:bg-[#f5820b] hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Company links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((label) => (
                <li key={label}>
                  <a
                    href={`/${label.toLowerCase()}`}
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="#f5820b" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
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
