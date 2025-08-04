'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 1,
    name: 'Women\'s Fashion',
    description: 'Elegant and trendy pieces for the modern woman',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/shop?category=women',
    itemCount: 245
  },
  {
    id: 2,
    name: 'Men\'s Collection',
    description: 'Sophisticated styles for the contemporary gentleman',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/shop?category=men',
    itemCount: 189
  },
  {
    id: 3,
    name: 'Kids & Baby',
    description: 'Comfortable and playful clothing for little ones',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/shop?category=kids',
    itemCount: 156
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Complete your look with our premium accessories',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
    href: '/shop?category=accessories',
    itemCount: 98
  }
]

export default function CategoryShowcase() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every style and occasion
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 aspect-[4/5] mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-200 mb-3">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {category.itemCount} items
                        </span>
                        <div className="flex items-center space-x-1 text-primary-300 group-hover:text-primary-200 transition-colors">
                          <span className="text-sm font-medium">Shop Now</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Featured Category Banner */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 md:p-12">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                New Season Arrivals
              </h3>
              <p className="text-lg text-primary-100 mb-6">
                Discover the latest trends and must-have pieces for the upcoming season. 
                From casual essentials to statement pieces, find everything you need to refresh your wardrobe.
              </p>
              <Link
                href="/shop?new=true"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <span>Explore New Arrivals</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white bg-opacity-10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white bg-opacity-5 rounded-full translate-y-24 translate-x-24" />
          </div>
        </div>
      </div>
    </section>
  )
}