import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Start tracking your hash production today with flexible pricing options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm relative">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Monthly</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4">
                Perfect for getting started with flexible month-to-month billing
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/50 bg-card/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
              SAVE 29%
            </div>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-2">Yearly</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold gradient-text">$7.10</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-4">
                Best value with annual billing - save $34.80 per year
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">All plans include:</p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Unlimited harvest tracking</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Advanced analytics & reports</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Multi-device sync</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Export data anytime</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Priority support</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="text-sm">Regular updates</span>
            </div>
          </div>
          <Button size="lg" className="gradient-cyan-blue text-lg px-8 py-6 mt-8">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}