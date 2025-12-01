import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import ToolShowcase from './components/ToolShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Sanjay.Dev | Full-Stack Developer & AI SEO Strategist',
  description: 'Expert Full-Stack Development, GEO (AI Search Optimization), and Custom AI Solutions. I build high-performance digital products that rank and convert.',
  keywords: ['Full Stack Developer', 'SEO Expert', 'GEO Optimization', 'AI Automation', 'Next.js Developer', 'React Native'],
  openGraph: {
    title: 'Sanjay.Dev | Full-Stack Developer & AI SEO Strategist',
    description: 'Building digital experiences that rank and convert. Expert in Next.js, SEO, and AI.',
    type: 'website',
  }
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Sanjay.Dev',
    image: 'https://sanjay.dev/logo.png',
    description: 'Full-Stack Developer and SEO Strategist specializing in Next.js, AI, and GEO.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Remote'
    },
    priceRange: '$$$',
    offers: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Stack Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO Strategy' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation' } }
    ]
  }

  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ToolShowcase />
      <Contact />
      <Footer />
    </main>
  )
}
