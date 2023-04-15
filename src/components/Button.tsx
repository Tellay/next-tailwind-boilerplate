import React from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const ButtonVariants = cva('rounded-[5px] py-3 font-medium text-white', {
  variants: {
    variant: {
      default: 'bg-[#24292e] transition-opacity hover:opacity-80',
      outline:
        'border border-[#333] bg-transparent text-[#888] transition-colors hover:border-white hover:text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface ExampleButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ExampleButtonProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(ButtonVariants({ variant, className }))}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, ButtonVariants }
