import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { Button } from '@/components/atoms'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(
      'bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
    )
  })

  it('handles onClick events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders with icon size', () => {
    render(<Button size='icon'>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('size-[60px]')
  })

  it('renders a disabled button', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass(
      'disabled:pointer-events-none disabled:opacity-50'
    )
  })

  it('supports custom class names', () => {
    render(<Button className='custom-class'>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('custom-class')
  })
})
