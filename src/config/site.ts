import { type IconDescriptor } from 'next/dist/lib/metadata/types/metadata-types'

type Site = {
  url: string
  ogImageHost: string
  title: string
  name: string
  keywords: string[]
  titleTemplate: string
  description: string
  githubUsername: string
  favicons: IconDescriptor[]
}

const prodBaseURL = 'http://127.0.0.1:3000'
const devBaseURL = 'http://127.0.0.1:3000'

const site: Site = {
  url: process.env.NODE_ENV === 'production' ? prodBaseURL : devBaseURL,
  ogImageHost: 'https://og.krafan.com/api',
  title: 'NRI Frontend Assessment',
  name: 'dwinugroho',
  keywords: [
    'dwinugroho',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Dwi Nugroho',
    'Krafan'
  ],
  titleTemplate: '- NRI Frontend Assessment',
  description: 'NRI Frontend Assessment',
  githubUsername: 'dwinugroho',
  favicons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    }
  ]
}

export default site
