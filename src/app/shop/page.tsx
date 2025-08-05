import { Metadata } from 'next'
import ShopPage from '@/components/shop/ShopPage'

export const metadata: Metadata = {
  title: 'Shop - Luxe Threads',
  description: 'Discover our complete collection of premium fashion and clothing. Filter by category, size, color, and price to find your perfect style.',
  keywords: ['shop', 'clothing', 'fashion', 'men', 'women', 'kids', 'accessories'],
}

export default function Shop() {
  return <ShopPage />
}