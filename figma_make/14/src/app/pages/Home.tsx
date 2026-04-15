import { Link } from 'react-router';
import { ArrowRight, Shield, Truck, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Shopping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl mb-6">
              Shop with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Honest pricing, detailed information, and complete transparency in every purchase.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-6"
          >
            <Shield className="w-12 h-12 mb-4 text-primary" />
            <h3 className="mb-2">Secure & Private</h3>
            <p className="text-muted-foreground text-sm">
              Your data is encrypted and never shared. We respect your privacy completely.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-6"
          >
            <Truck className="w-12 h-12 mb-4 text-primary" />
            <h3 className="mb-2">Clear Shipping</h3>
            <p className="text-muted-foreground text-sm">
              All shipping costs shown upfront. No surprises at checkout.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center text-center p-6"
          >
            <RefreshCw className="w-12 h-12 mb-4 text-primary" />
            <h3 className="mb-2">Easy Returns</h3>
            <p className="text-muted-foreground text-sm">
              30-day return policy. Full refund, no questions asked.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Featured Products</h2>
            <p className="text-muted-foreground">
              Curated selection of our most popular items
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl">${product.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">
                        ★ {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
