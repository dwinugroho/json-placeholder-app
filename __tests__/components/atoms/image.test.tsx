import { render, screen } from '@testing-library/react'
import React from 'react'

import { Image } from '@/components/atoms' // Sesuaikan path import sesuai struktur proyek Anda

describe('Image Component', () => {
  it('renders an image with proper attributes', () => {
    render(
      <Image
        src='/og.png'
        alt='Testing Image'
        lazy={false}
        width={100}
        height={100}
      />
    )

    const imgElement = screen.getByRole('img', { name: /testing image/i })
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('alt', 'Testing Image')
  })

  it('sets loading attribute to "lazy" when lazy prop is true', () => {
    render(
      <Image
        src='/og.png'
        alt='Lazy Image'
        width={100}
        height={100}
        lazy={true}
      />
    )
    const imgElement = screen.getByRole('img', { name: /lazy image/i })
    expect(imgElement).toHaveAttribute('loading', 'lazy')
  })

  it('does not set loading attribute when lazy prop is false', () => {
    render(
      <Image
        src='/og.png'
        alt='Eager Image'
        width={100}
        height={100}
        lazy={false}
      />
    )
    const imgElement = screen.getByRole('img', { name: /eager image/i })
    expect(imgElement).not.toHaveAttribute('loading', 'lazy')
  })
})
