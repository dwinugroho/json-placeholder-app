import site from '@/config/site'
import ogImage from '@/utils/og-image'

describe('ogImage', () => {
  it('returns the default URL with default site title when no arguments are provided', () => {
    const result = ogImage()
    expect(result).toBe(
      `${site.ogImageHost}?title=${encodeURIComponent(site.title).replaceAll(
        '%20',
        '+'
      )}`
    )
  })

  it('includes provided title in the URL', () => {
    const title = 'Custom Title'
    const result = ogImage({ title })
    expect(result).toContain(
      `title=${encodeURIComponent(title).replaceAll('%20', '+')}`
    )
  })

  it('includes provided description in the URL', () => {
    const description = 'Custom Description'
    const result = ogImage({ description })
    expect(result).toContain(
      `description=${encodeURIComponent(description).replaceAll('%20', '+')}`
    )
  })

  it('includes provided image in the URL', () => {
    const image = 'https://example.com/image.jpg'
    const result = ogImage({ image })
    expect(result).toContain(
      `image=${encodeURIComponent(image).replaceAll('%20', '+')}`
    )
  })

  it('includes provided information in the URL', () => {
    const information = 'Additional Information'
    const result = ogImage({ information })
    expect(result).toContain(
      `information=${encodeURIComponent(information).replaceAll('%20', '+')}`
    )
  })

  it('correctly constructs URL with all parameters', () => {
    const params = {
      title: 'Full Title',
      description: 'Full Description',
      image: 'https://example.com/full-image.jpg',
      information: 'Full Information'
    }
    const result = ogImage(params)
    expect(result).toBe(
      `${site.ogImageHost}?title=${encodeURIComponent(params.title).replaceAll(
        '%20',
        '+'
      )}&description=${encodeURIComponent(params.description).replaceAll(
        '%20',
        '+'
      )}&image=${encodeURIComponent(
        params.image
      )}&information=${encodeURIComponent(params.information).replaceAll(
        '%20',
        '+'
      )}`
    )
  })
})
