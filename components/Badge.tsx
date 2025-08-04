'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'destructive' | 'outline' | 'purple' | 'emerald' | 'orange' | 'indigo' | 'rose' | 'cyan'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  animated?: boolean
  className?: string
  customColor?: string // Nueva prop para color personalizado
}

export function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  icon: Icon,
  animated = false,
  className = '',
  customColor
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-200'
  
  const variantClasses = {
    default: 'bg-secondary text-secondary-foreground border-border',
    primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20',
    success: 'bg-success/10 text-success border-success/20 hover:bg-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20 hover:bg-warning/20',
    destructive: 'bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20',
    outline: 'bg-transparent text-foreground border-border hover:bg-secondary',
    purple: 'bg-purple-500/10 text-purple-600 border-purple-200 hover:bg-purple-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-200 hover:bg-emerald-500/20',
    orange: 'bg-orange-500/10 text-orange-600 border-orange-200 hover:bg-orange-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-600 border-indigo-200 hover:bg-indigo-500/20',
    rose: 'bg-rose-500/10 text-rose-600 border-rose-200 hover:bg-rose-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-200 hover:bg-cyan-500/20',
  }
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2',
  }

  // Si hay un color personalizado, usar estilos inline
  const customStyles = customColor ? {
    color: customColor,
    borderColor: `${customColor}40`, // 40 = 25% opacidad
    backgroundColor: `${customColor}10`, // 10 = 6% opacidad
  } : {}

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (animated) {
    return (
      <motion.span
        className={classes}
        style={customStyles}
        whileHover={{ 
          scale: 1.05, 
          y: -1,
          backgroundColor: customColor ? `${customColor}20` : undefined // 20 = 12% opacidad en hover
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {Icon && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />}
        {children}
      </motion.span>
    )
  }

  return (
    <span className={classes} style={customStyles}>
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'md' ? 14 : 16} />}
      {children}
    </span>
  )
} 