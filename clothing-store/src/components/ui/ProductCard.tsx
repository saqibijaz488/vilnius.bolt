'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { addToCart } from '@/lib/redux/slices/cartSlice'
import { addToWishlist, removeFromWishlist } from '@/lib/redux/slices/wishlistSlice'
import { formatPrice, calculateDiscountPercentage } from '@/lib/utils'
import toast from 'react-hot-toast'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  salePrice?: number
  images: string[]
  category: string
  rating: number
  reviewCount: number
  isNew?: boolean
  colors: string[]
  sizes: string[]
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  
  const dispatch = useAppDispatch()
  const { currency } = useAppSelector((state) => state.ui)
  const { items: wishlistItems } = useAppSelector((state) => state.wishlist)
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const isInWishlist = wishlistItems.some(item => item.productId === product.id)
  const discountPercentage = product.salePrice 
    ? calculateDiscountPercentage(product.price, product.salePrice)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const cartItem = {
      id: `${product.id}-${product.sizes[0]}-${product.colors[0]}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
      maxQuantity: 10, // This would come from inventory
    }

    dispatch(addToCart(cartItem))
    toast.success('Added to cart!')
  }

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!isAuthenticated) {
      toast.error('Please sign in to add items to your wishlist')
      return
    }

    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id))
      toast.success('Removed from wishlist')
    } else {
      const wishlistItem = {
        id: product.id,
        productId: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        image: product.images[0],
        slug: product.slug,
      }
      dispatch(addToWishlist(wishlistItem))
      toast.success('Added to wishlist!')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* Main Image */}
          <Image
            src={product.images[currentImageIndex]}
            alt={product.name}
            fill
            className="product-card-image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Hover Image */}
          {product.images.length > 1 && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              className={`product-card-image absolute inset-0 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.isNew && (
              <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
                New
              </span>
            )}
            {product.salePrice && (
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <button
              onClick={handleWishlistToggle}
              className={`p-2 rounded-full shadow-md transition-all duration-200 ${
                isInWishlist
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 bg-white text-gray-600 hover:bg-primary-500 hover:text-white rounded-full shadow-md transition-all duration-200">
              <Eye className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Color Swatches */}
          {product.colors.length > 1 && (
            <div className="absolute bottom-3 left-3 flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={color}
                  className="w-3 h-3 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-3 h-3 rounded-full bg-gray-400 border border-white shadow-sm flex items-center justify-center">
                  <span className="text-white text-xs">+</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            {product.salePrice ? (
              <>
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {formatPrice(product.salePrice, currency)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.price, currency)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {formatPrice(product.price, currency)}
              </span>
            )}
          </div>

          {/* Sizes */}
          <div className="flex items-center space-x-1 mt-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Sizes:</span>
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                +{product.sizes.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}