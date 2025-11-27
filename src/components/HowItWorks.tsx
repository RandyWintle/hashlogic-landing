import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Cog, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Package,
    title: 'Input Materials',
    description: 'Log raw materials with weights, batch IDs, and source information.',
  },
  {
    number: '02',
    icon: Cog,
    title: 'Process & Track',
    description: 'Record each processing step with live yield calculations as you work.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Analyze Output',
    description: 'See yield percentages, compare batches, and identify top performers.',
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-surface-dark text-white relative overflow-hidden" ref={ref}>
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto container-padding relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Raw Materials to Final Product—
            <span className="text-gradient-gold">Complete Visibility</span>
          </h2>
          <p className="text-lg text-text-light">
            Three simple steps to transform how you track your manufacturing operations.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
                
                <div className="text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-primary font-mono font-bold text-sm mb-6">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-6 shadow-primary">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-text-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
