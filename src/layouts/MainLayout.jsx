import WhatsAppButton from '../components/WhatsAppButton'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function MainLayout({ children, currentPath, onNavigate }) {
  return (
    <div className="flex min-h-svh flex-col bg-white text-[#17130e]">
      <Navbar currentPath={currentPath} onNavigate={onNavigate} />
      <Sidebar currentPath={currentPath} onNavigate={onNavigate} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default MainLayout
