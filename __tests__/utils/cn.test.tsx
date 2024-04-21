import cn from '@/utils/cn' // Adjust the import path according to your project structure

describe('cn function', () => {
  it('combines single class names', () => {
    expect(cn('btn')).toBe('btn')
  })

  it('combines multiple class names', () => {
    expect(cn('btn', 'btn-blue')).toBe('btn btn-blue')
  })

  it('ignores falsy values and combines truthy values', () => {
    expect(
      // eslint-disable-next-line sonarjs/no-redundant-boolean
      cn('btn', false && 'btn-red', null, undefined, 0, '', 'btn-blue')
    ).toBe('btn btn-blue')
  })

  it('handles conditional class names correctly', () => {
    const isActive = true
    const isDisabled = false
    expect(cn('btn', isActive && 'active', isDisabled && 'disabled')).toBe(
      'btn active'
    )
  })

  it('handles complex combinations of classes', () => {
    expect(cn('px-4', 'py-2', 'text-white', 'bg-blue-500', 'bg-blue-500')).toBe(
      'px-4 py-2 text-white bg-blue-500'
    )
  })

  it('handles array of classes', () => {
    expect(cn(['btn', 'active'], 'disabled')).toBe('btn active disabled')
  })
})
