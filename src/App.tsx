import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
