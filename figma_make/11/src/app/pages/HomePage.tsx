import { Link } from 'react-router';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import { motion } from 'motion/react';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative h-[calc(100svh-4rem)] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1612858249937-1cc0852093dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ShopClear
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Quality products with honest pricing. No hidden fees, no tricks, no compromises.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Final price shown upfront. Tax and shipping calculated before checkout.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Your data stays private. No third-party tracking or unnecessary data collection.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Clear Information</h3>
              <p className="text-gray-600">
                Complete product details, real images, honest descriptions. Know what you're buying.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${product.id}`}
                className="group block"
              >
                <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-semibold group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <p className="font-semibold">${product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border-2 border-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
