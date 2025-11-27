import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card } from './ui/Card'
import { FileSpreadsheet, Eye, Calculator } from 'lucide-react'

const problems = [
  {
    icon: Eye,
    title: 'Lost Visibility',
    description: 'Batch progress scattered across spreadsheets and paper logs. No single source of truth.',
  },
  {
    icon: Calculator,
    title: 'Manual Calculations',
    description: 'Yield percentages calculated by hand, prone to errors and inconsistencies.',
  },
  {
    icon: FileSpreadsheet,
    title: 'No Real-Time Insights',
    description: 'Days or weeks before you know if a batch performed well or poorly.',
  },
]

export function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Spreadsheets Weren't Built for{' '}
            <span className="text-gradient">Manufacturing</span>
          </h2>
          <p className="text-lg text-text-muted">
            Most operations still track batches the old way. It's costing you time, 
            accuracy, and the insights you need to improve.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5">
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-text-muted leading-relaxed">{problem.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
