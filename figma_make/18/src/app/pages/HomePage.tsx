import { motion } from 'motion/react';
import { Link } from 'react-router';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Store interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 tracking-tight">
              Quality goods,
              <br />
              fair prices
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Thoughtfully curated products for everyday life. No hidden fees, no tricks.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Browse All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured</h2>
            <p className="text-gray-600 text-lg">
              Hand-picked favorites this month
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group block"
                >
                  <div className="aspect-square mb-4 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-medium text-lg mb-2 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-lg font-medium border-b-2 border-black pb-1 hover:border-gray-400 transition-colors"
            >
              View all products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                What you see is what you pay. All prices include taxes, with no hidden fees at checkout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is encrypted and never sold. We collect only what's needed to fulfill your order.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Easy Returns</h3>
              <p className="text-gray-600">
                30-day return policy on all items. No questions asked, full transparency on the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
