import { Metadata } from 'next'
import AboutPage from '@/components/about/AboutPage'

export const metadata: Metadata = {
  title: 'About Us - Luxe Threads',
  description: 'Learn about Luxe Threads - our story, mission, and commitment to premium fashion and sustainable practices.',
  keywords: ['about', 'company', 'fashion', 'sustainable', 'premium', 'clothing'],
}

export default function About() {
  return <AboutPage />
}