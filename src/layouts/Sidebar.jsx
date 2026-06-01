import { navItems } from '../data/siteContent'

// Dot sidebar — only shown on xl screens (desktop)
// Mobile/tablet navigation is handled by the Navbar hamburger menu
function Sidebar({ currentPath, onNavigate }) {
  return (
    <aside className="fixed left-5 top-1/2 z-10 hidden -translate-y-1/2 xl:block">
      <nav
        className="flex flex-col gap-2.5 rounded-xl border border-[#eee3d7] bg-white/90 p-2.5 shadow-[0_16px_34px_rgba(31,27,21,0.09)] backdrop-blur"
        aria-label="Section navigation"
      >
        {navItems.map((item) => {
          const isActive = currentPath === item.path
          return (
            <a
              key={item.path}
              href={item.path}
              onClick={(event) => onNavigate(event, item.path)}
              title={item.label}
              className={`group relative h-2.5 w-2.5 rounded-full transition-all duration-200 hover:scale-125 hover:bg-[#f5820b] ${
                isActive ? 'scale-125 bg-[#f5820b]' : 'bg-[#d9cfc5]'
              }`}
            >
              {/* Tooltip */}
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#17130e] px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
              <span className="sr-only">{item.label}</span>
            </a>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
