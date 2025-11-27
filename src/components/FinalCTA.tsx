import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-surface-dark text-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(173 58% 39% / 0.3) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="text-gradient-gold">Operations?</span>
          </h2>
          <p className="text-lg text-text-light mb-10 max-w-xl mx-auto">
            Join manufacturers who track every gram with precision. 
            Start free today—no credit card required.
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = 'https://app.hashlogic.io/auth/signup'}
            className="text-lg px-10"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
