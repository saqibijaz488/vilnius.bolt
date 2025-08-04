import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ReduxProvider from '@/components/providers/ReduxProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Luxe Threads - Premium Fashion & Clothing',
    template: '%s | Luxe Threads'
  },
  description: 'Discover premium fashion and clothing at Luxe Threads. Shop the latest trends in men\'s and women\'s fashion with fast shipping and easy returns.',
  keywords: ['fashion', 'clothing', 'premium', 'luxury', 'men', 'women', 'accessories', 'style'],
  authors: [{ name: 'Luxe Threads' }],
  creator: 'Luxe Threads',
  publisher: 'Luxe Threads',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Luxe Threads - Premium Fashion & Clothing',
    description: 'Discover premium fashion and clothing at Luxe Threads. Shop the latest trends in men\'s and women\'s fashion.',
    siteName: 'Luxe Threads',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxe Threads - Premium Fashion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Threads - Premium Fashion & Clothing',
    description: 'Discover premium fashion and clothing at Luxe Threads.',
    images: ['/og-image.jpg'],
    creator: '@luxethreads',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  )
}