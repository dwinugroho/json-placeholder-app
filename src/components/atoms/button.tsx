import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

import cn from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        danger: 'bg-red-600 text-white hover:bg-red-700'
      },
      size: {
        default: 'h-10 px-4 py-2',
        icon: 'size-[60px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, variant, type = 'button', size, ...rest } = props

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...rest}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
