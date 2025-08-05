'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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

interface ProductFiltersProps {
  filters: Filters
  onFilterChange: (filters: Partial<Filters>) => void
}

const categories = [
  'T-Shirts',
  'Dresses',
  'Jackets',
  'Pants',
  'Shoes',
  'Accessories',
  'Sweaters',
  'Blazers'
]

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const colors = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Blue', 'Green', 'Brown']
const brands = ['Luxe Threads', 'Premium Brand', 'Designer Label']

export default function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    size: true,
    color: true,
    brand: false,
    rating: false
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category]
    onFilterChange({ category: newCategories })
  }

  const handleSizeChange = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size]
    onFilterChange({ sizes: newSizes })
  }

  const handleColorChange = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color]
    onFilterChange({ colors: newColors })
  }

  const handleBrandChange = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand]
    onFilterChange({ brands: newBrands })
  }

  const FilterSection = ({ 
    title, 
    section, 
    children 
  }: { 
    title: string
    section: keyof typeof expandedSections
    children: React.ReactNode 
  }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4 last:border-b-0">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left"
      >
        <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
        {expandedSections[section] ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      {expandedSections[section] && (
        <div className="mt-3">{children}</div>
      )}
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Quick Filters */}
      <div className="space-y-2">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.onSale}
            onChange={(e) => onFilterChange({ onSale: e.target.checked })}
            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">On Sale</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({ inStock: e.target.checked })}
            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">In Stock</span>
        </label>
      </div>

      {/* Category Filter */}
      <FilterSection title="Category" section="category">
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {category}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection title="Price Range" section="price">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.priceRange[0]}
              onChange={(e) => onFilterChange({ 
                priceRange: [Number(e.target.value), filters.priceRange[1]] 
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({ 
                priceRange: [filters.priceRange[0], Number(e.target.value)] 
              })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm dark:bg-gray-700 dark:text-white"
            />
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ 
              priceRange: [filters.priceRange[0], Number(e.target.value)] 
            })}
            className="w-full"
          />
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection title="Size" section="size">
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                filters.sizes.includes(size)
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection title="Color" section="color">
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                filters.colors.includes(color)
                  ? 'border-primary-500 scale-110'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
            />
          ))}
        </div>
      </FilterSection>

      {/* Brand Filter */}
      <FilterSection title="Brand" section="brand">
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating" section="rating">
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onFilterChange({ rating })}
                className="border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {rating}+ Stars
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}