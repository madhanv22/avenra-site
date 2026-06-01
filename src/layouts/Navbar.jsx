import { useState } from 'react'
import { navItems } from '../data/siteContent'
import logo from '../assets/company-logo.png'

function Navbar({ currentPath, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (event, path) => {
    setMenuOpen(false)
    onNavigate(event, path)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#17130e]/95 px-5 backdrop-blur lg:px-[72px]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">

        {/* Logo — no background, just the image */}
        <a
          className="flex shrink-0 items-center no-underline"
          href="/"
          onClick={(e) => handleNav(e, '/')}
          aria-label="Avenra home"
        >
          <img className="h-24 w-auto object-contain" src={logo} alt="Avenra" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNav(e, item.path)}
                className={`shrink-0 rounded-md px-3.5 py-2 text-sm font-medium no-underline transition-colors duration-150 hover:bg-white/10 hover:text-white ${
                  isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/70'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-md text-white/80 transition hover:bg-white/10 hover:text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mt-2 border-t border-white/10 pb-3 md:hidden">
          <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = currentPath === item.path
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNav(e, item.path)}
                  className={`rounded-md px-4 py-2.5 text-sm font-medium no-underline transition-colors hover:bg-white/10 hover:text-white ${
                    isActive ? 'bg-white/10 text-white font-semibold' : 'text-white/70'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
