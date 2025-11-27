import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from './ui/Card'
import { 
  GitBranch, 
  Calculator, 
  Link2, 
  Scale, 
  Users, 
  LineChart 
} from 'lucide-react'

const features = [
  {
    icon: GitBranch,
    title: 'Batch Lifecycle Tracking',
    description: 'Follow every batch from input to output with complete traceability.',
  },
  {
    icon: Calculator,
    title: 'Live Yield Calculations',
    description: 'Real-time efficiency metrics calculated automatically as you work.',
  },
  {
    icon: Link2,
    title: 'Process Chaining',
    description: 'Output from one process flows seamlessly into the next stage.',
  },
  {
    icon: Scale,
    title: 'Weigh Station Mode',
    description: 'Production floor interface designed for fast, accurate data entry.',
  },
  {
    icon: Users,
    title: 'Multi-User Teams',
    description: 'Role-based access control for your entire operation.',
  },
  {
    icon: LineChart,
    title: 'Analytics Dashboard',
    description: 'Actionable insights to optimize your processes and improve yields.',
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Run{' '}
            <span className="text-gradient">Precision Operations</span>
          </h2>
          <p className="text-lg text-text-muted">
            Purpose-built tools for manufacturers who take quality and efficiency seriously.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover variant="glass" className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
