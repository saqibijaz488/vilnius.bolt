import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import CategoryShowcase from '@/components/home/CategoryShowcase'
import FlashSale from '@/components/home/FlashSale'
import Newsletter from '@/components/home/Newsletter'
import Testimonials from '@/components/home/Testimonials'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <HeroSection />
        <FlashSale />
        <FeaturedProducts />
        <CategoryShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}