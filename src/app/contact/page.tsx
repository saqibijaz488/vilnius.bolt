import { Metadata } from 'next'
import ContactPage from '@/components/contact/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us - Luxe Threads',
  description: 'Get in touch with Luxe Threads. We\'re here to help with any questions about our products, orders, or services.',
  keywords: ['contact', 'support', 'help', 'customer service'],
}

export default function Contact() {
  return <ContactPage />
}