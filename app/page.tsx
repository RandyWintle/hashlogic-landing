import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, Database, Smartphone, Users, Zap, Shield, Download } from "lucide-react"

import PricingSection from "@/components/pricing-section"

export default function HashLogicLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">HASHLOGIC</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="gradient-cyan-blue">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm">
              <Zap className="w-4 h-4 mr-2" />
              Cloud-Based Data Tracking
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Track Your Hash, <span className="gradient-text">Your Way</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto">
              The all-in-one tracking system built for hash makers. From harvest to jar, follow every step of your
              process with precision and clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="gradient-cyan-blue text-lg px-8 py-6">
                Start Tracking Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                <Download className="mr-2 w-5 h-5" />
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Quick Access. <span className="gradient-text">Clear Insights.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Everything you need to track, analyze, and improve your hash making process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Log in Seconds</CardTitle>
                <CardDescription>
                  Record your harvests and batches instantly with our streamlined interface.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Visualize Performance</CardTitle>
                <CardDescription>
                  Track yields, efficiency, and performance trends over time with beautiful charts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Access Anywhere</CardTitle>
                <CardDescription>Your data syncs across all devices - desktop, tablet, and mobile.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}

      <PricingSection />      <section className="py-20 lg:py-32 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Built for <span className="gradient-text">Every Maker</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              HASHLOGIC isn't just for "serious" operators. It's designed for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>The Hobbyist</CardTitle>
                <CardDescription className="text-base">
                  Keep tabs on your sessions and results, just for curiosity. Perfect for personal tracking and
                  learning.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>The Microbusiness</CardTitle>
                <CardDescription className="text-base">
                  Track production and refine your process. Scale your operations with data-driven insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>The Enterprise</CardTitle>
                <CardDescription className="text-base">
                  Manage large-scale data with confidence and clarity. Enterprise-grade security and compliance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Ownership Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Use Your Data <span className="gradient-text">How You Want</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Your hash, your data. HASHLOGIC gives you the tools to track, analyze, and improve — without forcing you
              into a single workflow.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Export Everything</h3>
                  <p className="text-muted-foreground">Download your data in multiple formats anytime.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Compare & Analyze</h3>
                  <p className="text-muted-foreground">Build custom reports and comparisons.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-3 h-3 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Your Workflow</h3>
                  <p className="text-muted-foreground">Customize the platform to match your process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Why <span className="gradient-text">HASHLOGIC</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Because hash making deserves the same precision and clarity as any craft. HASHLOGIC is here to help you get
            better, smarter, and more consistent — whether you're pressing once a month or every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-cyan-blue text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Schedule Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            <span className="gradient-text font-semibold">HASHLOGIC</span> – Track smarter. Wash better.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">HASHLOGIC</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
              <span>© 2024 HashLogic. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
