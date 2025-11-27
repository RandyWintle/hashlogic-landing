import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for small operations getting started.',
    features: [
      '10 batches per month',
      '2 product varieties',
      'Core tracking features',
      'Single user',
      'Email support',
    ],
    cta: 'Get Started Free',
    variant: 'outline' as const,
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'For serious manufacturers who need more power.',
    features: [
      'Unlimited batches',
      'Unlimited varieties',
      'Advanced analytics',
      'Weigh Station mode',
      'Multi-user teams',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    variant: 'secondary' as const,
    highlighted: true,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{' '}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-text-muted">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                variant={plan.highlighted ? 'elevated' : 'default'}
                className={`relative h-full ${
                  plan.highlighted 
                    ? 'ring-2 ring-gold shadow-gold' 
                    : ''
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-gold-light text-white text-xs font-semibold shadow-gold">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-text-muted">{plan.period}</span>
                  </div>
                  <p className="text-text-muted mt-3">{plan.description}</p>
                </div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted 
                          ? 'bg-gold/10 text-gold' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = 'https://app.hashlogic.io/auth/signup'}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
