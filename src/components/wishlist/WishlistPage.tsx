'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag, ArrowLeft, Trash2 } from 'lucide-react'
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { removeFromWishlist, clearWishlist } from '@/lib/redux/slices/wishlistSlice'
import { addToCart } from '@/lib/redux/slices/cartSlice'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function WishlistPage() {
  const dispatch = useAppDispatch()
  const { items, itemCount } = useAppSelector((state) => state.wishlist)
  const { currency } = useAppSelector((state) => state.ui)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId))
    toast.success('Removed from wishlist')
  }

  const handleAddToCart = (item: any) => {
    const cartItem = {
      id: `${item.productId}-M-Black`, // Default size and color
      productId: item.productId,
      name: item.name,
      price: item.price,
      salePrice: item.salePrice,
      image: item.image,
      size: 'M',
      color: 'Black',
      quantity: 1,
      maxQuantity: 10,
    }

    dispatch(addToCart(cartItem))
    toast.success('Added to cart!')
  }

  const handleClearWishlist = () => {
    dispatch(clearWishlist())
    toast.success('Wishlist cleared')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Sign in to view your wishlist
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Create an account or sign in to save your favorite items.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Your wishlist is empty
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Save items you love to your wishlist and shop them later.
            </p>
            <Button asChild size="lg">
              <Link href="/shop">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              My Wishlist ({itemCount} items)
            </h1>
            <div className="flex items-center justify-between">
              <Link
                href="/shop"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
              {items.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearWishlist}
                  className="text-red-600 hover:text-red-700"
                >
                  Clear Wishlist
                </Button>
              )}
            </div>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromWishlist(item.productId)}
                    className="absolute top-3 right-3 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-red-500 hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  {/* Sale Badge */}
                  {item.salePrice && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        Sale
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <Link href={`/products/${item.slug}`}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    {item.salePrice ? (
                      <>
                        <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {formatPrice(item.salePrice, currency)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.price, currency)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {formatPrice(item.price, currency)}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1"
                      size="sm"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link href={`/products/${item.slug}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recommendations */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">
              You might also like
            </h2>
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/shop">
                  Explore More Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}