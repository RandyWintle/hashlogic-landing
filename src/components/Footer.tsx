export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-background border-t border-gray-100">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="font-bold text-lg">HashLogic</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#features" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a 
              href="https://app.hashlogic.io" 
              className="text-text-muted hover:text-primary transition-colors"
            >
              Sign In
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            © {currentYear} HashLogic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
