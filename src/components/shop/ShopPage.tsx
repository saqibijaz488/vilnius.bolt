'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/ui/ProductCard'
import ProductFilters from './ProductFilters'
import ProductSort from './ProductSort'
import { Button } from '@/components/ui/Button'

// Mock data - replace with actual API call
const mockProducts = [
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
    sizes: ['S', 'M', 'L', 'XL'],
    brand: 'Luxe Threads'
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
    sizes: ['XS', 'S', 'M', 'L'],
    brand: 'Luxe Threads'
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
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    brand: 'Luxe Threads'
  },
  // Add more products...
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `${i + 4}`,
    name: `Fashion Item ${i + 4}`,
    slug: `fashion-item-${i + 4}`,
    price: Math.floor(Math.random() * 200) + 30,
    salePrice: Math.random() > 0.5 ? Math.floor(Math.random() * 150) + 20 : undefined,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: ['T-Shirts', 'Dresses', 'Jackets', 'Pants', 'Shoes'][Math.floor(Math.random() * 5)],
    rating: Math.floor(Math.random() * 2) + 4,
    reviewCount: Math.floor(Math.random() * 200) + 10,
    isNew: Math.random() > 0.7,
    colors: ['Black', 'White', 'Navy', 'Gray', 'Red'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    brand: 'Luxe Threads'
  }))
]

interface Filters {
  category: string[]
  priceRange: [number, number]
  sizes: string[]
  colors: string[]
  brands: string[]
  rating: number
  inStock: boolean
  onSale: boolean
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState(mockProducts)
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)
  const [isLoading, setIsLoading] = useState(false)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('featured')
  const [currentPage, setCurrentPage] = useState(1)
  const [filters, setFilters] = useState<Filters>({
    category: [],
    priceRange: [0, 500],
    sizes: [],
    colors: [],
    brands: [],
    rating: 0,
    inStock: true,
    onSale: false
  })

  const productsPerPage = 12

  // Apply filters and sorting
  const processedProducts = useMemo(() => {
    let result = [...products]

    // Apply search
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply category filter from URL
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      result = result.filter(product =>
        product.category.toLowerCase() === categoryParam.toLowerCase()
      )
    }

    // Apply sale filter from URL
    const saleParam = searchParams.get('sale')
    if (saleParam === 'true') {
      result = result.filter(product => product.salePrice)
    }

    // Apply filters
    if (filters.category.length > 0) {
      result = result.filter(product =>
        filters.category.includes(product.category)
      )
    }

    if (filters.priceRange) {
      result = result.filter(product => {
        const price = product.salePrice || product.price
        return price >= filters.priceRange[0] && price <= filters.priceRange[1]
      })
    }

    if (filters.sizes.length > 0) {
      result = result.filter(product =>
        filters.sizes.some(size => product.sizes.includes(size))
      )
    }

    if (filters.colors.length > 0) {
      result = result.filter(product =>
        filters.colors.some(color => product.colors.includes(color))
      )
    }

    if (filters.rating > 0) {
      result = result.filter(product => product.rating >= filters.rating)
    }

    if (filters.onSale) {
      result = result.filter(product => product.salePrice)
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
        break
      case 'price-high':
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        // Featured - keep original order
        break
    }

    return result
  }, [products, filters, sortBy, searchParams])

  // Pagination
  const totalPages = Math.ceil(processedProducts.length / productsPerPage)
  const paginatedProducts = processedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      category: [],
      priceRange: [0, 500],
      sizes: [],
      colors: [],
      brands: [],
      rating: 0,
      inStock: true,
      onSale: false
    })
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Shop All Products
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our complete collection of premium fashion and clothing
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Filters
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </Button>
              </div>
              <ProductFilters
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-4 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                  
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {processedProducts.length} products found
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <ProductSort value={sortBy} onChange={setSortBy} />
                  
                  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${
                        viewMode === 'grid'
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${
                        viewMode === 'list'
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden">
                    <div className="aspect-square bg-gray-200 dark:bg-gray-700 loading-skeleton" />
                    <div className="p-4">
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 loading-skeleton" />
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 loading-skeleton" />
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 loading-skeleton" />
                    </div>
                  </div>
                ))}
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-6'
              }>
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}