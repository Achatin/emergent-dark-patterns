import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Package, Shield, Truck } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function HomePage() {
  const featuredProducts = products.filter(p => p.badge).slice(0, 4);
  const newArrivals = products.slice(0, 8);

  return (
    <div>
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Shop the latest trends with unbeatable prices and fast, free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products?sale=true"
                className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                View Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $50' },
            { icon: Shield, text: 'Secure Payment', subtext: '100% protected' },
            { icon: Package, text: 'Easy Returns', subtext: '30-day guarantee' },
            { icon: TrendingUp, text: 'Best Prices', subtext: 'Price match guarantee' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-md">
              <item.icon className="w-8 h-8 mb-2" />
              <div className="font-semibold">{item.text}</div>
              <div className="text-sm text-gray-600">{item.subtext}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl">Featured Products</h2>
          <Link
            to="/products"
            className="text-sm hover:underline inline-flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(category => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <div className="font-medium mb-1">{category.name}</div>
              <div className="text-sm text-gray-600">{category.count} items</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-black text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get exclusive deals, new product announcements, and insider-only discounts delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
