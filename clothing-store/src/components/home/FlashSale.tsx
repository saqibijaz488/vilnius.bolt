'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set flash sale end time (24 hours from now for demo)
  const flashSaleEndTime = new Date()
  flashSaleEndTime.setHours(flashSaleEndTime.getHours() + 24)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const endTime = flashSaleEndTime.getTime()
      const difference = endTime - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Flash Sale Info */}
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Clock className="w-6 h-6 text-red-200" />
              <span className="text-red-200 font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Flash Sale
            </h2>
            <p className="text-xl text-red-100 mb-6 max-w-md">
              Up to 50% off on selected items. Don't miss out on these incredible deals!
            </p>
            <Link
              href="/shop?sale=true"
              className="inline-flex items-center space-x-2 bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>Shop Flash Sale</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center space-x-4">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 min-w-[80px]">
                  <motion.div
                    key={unit.value}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-white"
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>
                  <div className="text-sm text-red-200 font-medium mt-1">
                    {unit.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Sale Items */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Summer Dress', originalPrice: 89.99, salePrice: 44.99, image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Casual Shirt', originalPrice: 59.99, salePrice: 29.99, image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Denim Jacket', originalPrice: 99.99, salePrice: 49.99, image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400' },
            { name: 'Sneakers', originalPrice: 129.99, salePrice: 64.99, image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400' },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-20 transition-all duration-300"
            >
              <div
                className="aspect-square bg-cover bg-center rounded-lg mb-3"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <h4 className="font-semibold text-white mb-2">{item.name}</h4>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-lg font-bold text-white">
                  ${item.salePrice}
                </span>
                <span className="text-sm text-red-200 line-through">
                  ${item.originalPrice}
                </span>
              </div>
              <div className="text-xs text-red-200 mt-1">
                Save {Math.round(((item.originalPrice - item.salePrice) / item.originalPrice) * 100)}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}