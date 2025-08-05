@@ .. @@
 interface ProductCardProps {
   product: Product
+  viewMode?: 'grid' | 'list'
 }
 
-export default function ProductCard({ product }: ProductCardProps) {
+export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
   const [currentImageIndex, setCurrentImageIndex] = useState(0)
   const [isHovered, setIsHovered] = useState(false)
@@ .. @@
     toast.success('Added to cart!')
   }
 
+  if (viewMode === 'list') {
+    return (
+      <motion.div
+        initial={{ opacity: 0, y: 20 }}
+        animate={{ opacity: 1, y: 0 }}
+        transition={{ duration: 0.3 }}
+        className="bg-white dark:bg-gray-800 rounded-lg shadow-soft overflow-hidden"
+      >
+        <Link href={`/products/${product.slug}`}>
+          <div className="flex">
+            {/* Image */}
+            <div className="relative w-48 h-48 flex-shrink-0">
+              <Image
+                src={product.images[0]}
+                alt={product.name}
+                fill
+                className="object-cover"
+                sizes="192px"
+              />
+              {product.isNew && (
+                <span className="absolute top-3 left-3 bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded">
+                  New
+                </span>
+              )}
+              {product.salePrice && (
+                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
+                  -{discountPercentage}%
+                </span>
+              )}
+            </div>
+
+            {/* Content */}
+            <div className="flex-1 p-6">
+              <div className="flex justify-between items-start">
+                <div className="flex-1">
+                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
+                    {product.category}
+                  </p>
+                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
+                    {product.name}
+                  </h3>
+                  
+                  {/* Rating */}
+                  <div className="flex items-center space-x-1 mb-3">
+                    <div className="flex items-center">
+                      {Array.from({ length: 5 }).map((_, index) => (
+                        <Star
+                          key={index}
+                          className={`w-4 h-4 ${
+                            index < Math.floor(product.rating)
+                              ? 'text-yellow-400 fill-current'
+                              : 'text-gray-300'
+                          }`}
+                        />
+                      ))}
+                    </div>
+                    <span className="text-sm text-gray-500 dark:text-gray-400">
+                      ({product.reviewCount})
+                    </span>
+                  </div>

+                  {/* Price */}
+                  <div className="flex items-center space-x-2 mb-4">
+                    {product.salePrice ? (
+                      <>
+                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
+                          {formatPrice(product.salePrice, currency)}
+                        </span>
+                        <span className="text-lg text-gray-500 line-through">
+                          {formatPrice(product.price, currency)}
+                        </span>
+                      </>
+                    ) : (
+                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
+                        {formatPrice(product.price, currency)}
+                      </span>
+                    )}
+                  </div>

+                  {/* Sizes */}
+                  <div className="flex items-center space-x-1">
+                    <span className="text-sm text-gray-500 dark:text-gray-400">Sizes:</span>
+                    {product.sizes.slice(0, 4).map((size) => (
+                      <span
+                        key={size}
+                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
+                      >
+                        {size}
+                      </span>
+                    ))}
+                    {product.sizes.length > 4 && (
+                      <span className="text-sm text-gray-500 dark:text-gray-400">
+                        +{product.sizes.length - 4}
+                      </span>
+                    )}
+                  </div>
+                </div>

+                {/* Actions */}
+                <div className="flex flex-col space-y-2 ml-4">
+                  <button
+                    onClick={handleWishlistToggle}
+                    className={`p-2 rounded-full shadow-md transition-all duration-200 ${
+                      isInWishlist
+                        ? 'bg-red-500 text-white'
+                        : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
+                    }`}
+                  >
+                    <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
+                  </button>
+                  <button
+                    onClick={handleAddToCart}
+                    className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-md transition-all duration-200"
+                  >
+                    <ShoppingBag className="w-5 h-5" />
+                  </button>
+                </div>
+              </div>
+            </div>
+          </div>
+        </Link>
+      </motion.div>
+    )
+  }
+
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}