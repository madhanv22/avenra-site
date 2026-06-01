import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import HeroSection from '../components/HeroSection'
import IndustriesSection from '../components/IndustriesSection'
import ProcessSection from '../components/ProcessSection'
import ServicesSection from '../components/ServicesSection'
import TechStackSection from '../components/TechStackSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'

function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ProcessSection />
      <TechStackSection />
      <ContactSection />
    </>
  )
}

export default HomePage
