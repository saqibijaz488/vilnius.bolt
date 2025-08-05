import { Metadata } from 'next'
import WishlistPage from '@/components/wishlist/WishlistPage'

export const metadata: Metadata = {
  title: 'Wishlist - Luxe Threads',
  description: 'Your saved items and favorite products.',
}

export default function Wishlist() {
  return <WishlistPage />
}