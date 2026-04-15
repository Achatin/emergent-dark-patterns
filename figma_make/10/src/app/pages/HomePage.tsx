import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Shield, Truck, RefreshCw } from "lucide-react";
import { products } from "../data/products";

export function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Modern retail space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-6xl mb-6 text-white">
              Quality You Can Trust
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Curated essentials with transparent pricing and ethical sourcing. No compromises.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 hover:bg-neutral-100 transition-colors group"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <Shield className="w-12 h-12 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-lg mb-2">Secure Shopping</h3>
            <p className="text-sm text-neutral-600">
              Your data is encrypted and never shared with third parties
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Truck className="w-12 h-12 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-lg mb-2">Free Shipping</h3>
            <p className="text-sm text-neutral-600">
              On all orders over $50. Shipping costs shown upfront
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <RefreshCw className="w-12 h-12 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-lg mb-2">Easy Returns</h3>
            <p className="text-sm text-neutral-600">
              30-day return policy with free return shipping
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl mb-12">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="aspect-square overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg mb-1 group-hover:underline">{product.name}</h3>
                <p className="text-sm text-neutral-600 mb-2">{product.category}</p>
                <p className="text-lg">${product.price.toFixed(2)}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm border border-neutral-900 px-6 py-3 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl mb-6">Our Commitment to Transparency</h2>
          <p className="text-neutral-600 mb-8">
            Every product price includes all costs—no hidden fees at checkout. We show shipping costs before you create an account.
            We source ethically and share our supply chain. Your privacy matters: we don't track you across the web or sell your data.
          </p>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="text-left">
              <h4 className="mb-2">What You See</h4>
              <ul className="text-neutral-600 space-y-1">
                <li>• Product cost</li>
                <li>• Shipping cost (upfront)</li>
                <li>• Tax estimate</li>
                <li>• Total price</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="mb-2">What We Don't Do</h4>
              <ul className="text-neutral-600 space-y-1">
                <li>• Hidden fees</li>
                <li>• Dynamic pricing</li>
                <li>• Data selling</li>
                <li>• Dark patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
