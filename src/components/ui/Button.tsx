import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: `
    bg-gradient-to-br from-primary to-primary-dark text-white
    shadow-primary hover:shadow-lg
    hover:scale-[1.02] active:scale-[0.98]
  `,
  secondary: `
    bg-gradient-to-br from-gold to-gold-light text-white
    shadow-gold hover:shadow-lg
    hover:scale-[1.02] active:scale-[0.98]
  `,
  outline: `
    bg-transparent border-2 border-primary text-primary
    hover:bg-primary/5 hover:border-primary-light
  `,
  ghost: `
    bg-transparent text-text hover:bg-black/5
  `,
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-semibold transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
          disabled:opacity-50 disabled:pointer-events-none
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
