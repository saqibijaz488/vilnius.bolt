'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'

// Mock data - replace with actual API call
const featuredProducts = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    slug: 'premium-cotton-t-shirt',
    price: 49.99,
    salePrice: 39.99,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'T-Shirts',
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Elegant Summer Dress',
    slug: 'elegant-summer-dress',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Dresses',
    rating: 4.9,
    reviewCount: 89,
    isNew: false,
    colors: ['Floral', 'Solid Blue', 'Black'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    slug: 'classic-denim-jacket',
    price: 89.99,
    salePrice: 69.99,
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Jackets',
    rating: 4.7,
    reviewCount: 156,
    isNew: false,
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '4',
    name: 'Luxury Cashmere Sweater',
    slug: 'luxury-cashmere-sweater',
    price: 199.99,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Sweaters',
    rating: 5.0,
    reviewCount: 67,
    isNew: true,
    colors: ['Cream', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'Comfortable Joggers',
    slug: 'comfortable-joggers',
    price: 59.99,
    salePrice: 44.99,
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Pants',
    rating: 4.6,
    reviewCount: 203,
    isNew: false,
    colors: ['Black', 'Gray', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '6',
    name: 'Stylish Blazer',
    slug: 'stylish-blazer',
    price: 149.99,
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Blazers',
    rating: 4.8,
    reviewCount: 91,
    isNew: true,
    colors: ['Black', 'Navy', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL']
  }
]

export default function FeaturedProducts() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4 loading-skeleton" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto loading-skeleton" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-soft overflow-hidden">
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 loading-skeleton" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 loading-skeleton" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 loading-skeleton" />
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 loading-skeleton" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion pieces that define style and quality
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 btn-outline btn-lg group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}