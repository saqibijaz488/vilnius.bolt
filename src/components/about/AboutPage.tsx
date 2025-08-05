'use client'

import Image from 'next/image'
import { Award, Heart, Leaf, Users, Globe, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    icon: Heart,
    title: 'Passion for Fashion',
    description: 'We believe fashion is a form of self-expression that should be accessible to everyone.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Committed to ethical manufacturing and environmentally responsible materials.'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every piece is crafted with attention to detail and built to last.'
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Building a community of fashion lovers who value quality and style.'
  }
]

const stats = [
  { number: '50,000+', label: 'Happy Customers' },
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Products' },
  { number: '25+', label: 'Countries Served' }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Fashion industry veteran with 15+ years of experience in luxury retail.'
  },
  {
    name: 'Michael Chen',
    role: 'Creative Director',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Award-winning designer passionate about sustainable fashion innovation.'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Operations expert ensuring quality and efficiency in every aspect of our business.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6"
            >
              About Luxe Threads
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto"
            >
              Redefining fashion with premium quality, sustainable practices, 
              and timeless style that empowers your unique expression.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    Founded in 2014, Luxe Threads began as a vision to bridge the gap between 
                    high-end fashion and accessibility. Our founder, Sarah Johnson, recognized 
                    the need for premium quality clothing that didn't compromise on style or ethics.
                  </p>
                  <p>
                    What started as a small boutique has grown into a global brand, but our 
                    core values remain unchanged: quality craftsmanship, sustainable practices, 
                    and customer satisfaction above all else.
                  </p>
                  <p>
                    Today, we're proud to serve customers in over 25 countries, offering 
                    carefully curated collections that celebrate individuality and timeless style.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Our Story"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The passionate individuals behind Luxe Threads, dedicated to bringing you the best in fashion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-soft overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
              <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                To democratize premium fashion by creating beautiful, sustainable clothing 
                that empowers individuals to express their unique style while making a 
                positive impact on the world. We believe that great fashion should be 
                accessible, ethical, and timeless.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sustainability"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                  Sustainability Commitment
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    We're committed to reducing our environmental impact through 
                    sustainable practices at every stage of our supply chain.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      Eco-friendly materials and organic fabrics
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      Ethical manufacturing partnerships
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      Carbon-neutral shipping options
                    </li>
                    <li className="flex items-center">
                      <Star className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      Recycling and upcycling programs
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}