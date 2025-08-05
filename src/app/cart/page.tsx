import { Metadata } from 'next'
import CartPage from '@/components/cart/CartPage'

export const metadata: Metadata = {
  title: 'Shopping Cart - Luxe Threads',
  description: 'Review your selected items and proceed to checkout.',
}

export default function Cart() {
  return <CartPage />
}