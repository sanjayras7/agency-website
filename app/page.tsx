import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import ToolShowcase from './components/ToolShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Sanjay.Dev | Full-Stack Developer & SEO Strategist',
  description: 'Expert Web Development, SEO, and AI Solutions. View my portfolio of high-performance websites and growth strategies.',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <ToolShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
