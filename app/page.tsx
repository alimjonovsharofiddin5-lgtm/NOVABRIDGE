import { Hero } from '@/components/landing/Hero'
import { Features } from '@/components/landing/Features'
import { Modules } from '@/components/landing/Modules'
import { Pricing } from '@/components/landing/Pricing'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <Features />
      <Modules />
      <Pricing />
      <Footer />
    </main>
  )
}
