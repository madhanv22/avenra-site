import { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import AppRoutes from './AppRoutes'

const getPath = () => window.location.pathname || '/'

function AppRouter() {
  const [currentPath, setCurrentPath] = useState(getPath)

  useEffect(() => {
    const handlePopState = () => {
      const nextPath = getPath()
      setCurrentPath(nextPath)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPath])

  const handleNavigate = (event, path) => {
    event.preventDefault()

    if (currentPath !== path) {
      window.history.pushState({}, '', path)
      setCurrentPath(path)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <MainLayout currentPath={currentPath} onNavigate={handleNavigate}>
      <AppRoutes currentPath={currentPath} onNavigate={handleNavigate} />
    </MainLayout>
  )
}

export default AppRouter
