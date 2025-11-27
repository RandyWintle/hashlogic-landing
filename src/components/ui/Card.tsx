import { HTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'elevated' | 'dark'
  hover?: boolean
}

const variantStyles = {
  default: 'bg-surface border border-gray-100',
  glass: 'glass',
  elevated: 'bg-surface shadow-lg border border-gray-50',
  dark: 'bg-surface-dark text-white border border-white/10',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = false, className = '', children, ...props }, ref) => {
    const hoverClass = hover ? 'hover-lift cursor-pointer' : ''
    return (
      <motion.div
        ref={ref}
        className={`rounded-xl p-6 ${variantStyles[variant]} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  )
)

CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h2' | 'h3' | 'h4'
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Tag = 'h3', className = '', children, ...props }, ref) => (
    <Tag ref={ref} className={`text-xl font-bold ${className}`} {...props}>
      {children}
    </Tag>
  )
)

CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', children, ...props }, ref) => (
    <p ref={ref} className={`text-text-muted ${className}`} {...props}>
      {children}
    </p>
  )
)

CardDescription.displayName = 'CardDescription'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
)

CardContent.displayName = 'CardContent'
