import AboutPage from '../routes/AboutPage'
import ContactPage from '../routes/ContactPage'
import HomePage from '../routes/HomePage'
import PortfolioPage from '../routes/PortfolioPage'
import ProcessPage from '../routes/ProcessPage'
import ServicesPage from '../routes/ServicesPage'
import TeamPage from '../routes/TeamPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/services', component: ServicesPage },
  { path: '/about', component: AboutPage },
  { path: '/process', component: ProcessPage },
  { path: '/portfolio', component: PortfolioPage },
  { path: '/team', component: TeamPage },
  { path: '/contact', component: ContactPage },
]

function AppRoutes({ currentPath, onNavigate }) {
  const route = routes.find((item) => item.path === currentPath) ?? routes[0]
  const Component = route.component
  return <Component onNavigate={onNavigate} />
}

export default AppRoutes
