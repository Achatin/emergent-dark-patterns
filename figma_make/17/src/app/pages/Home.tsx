import { Link } from 'react-router';
import { ArrowRight, TrendingUp, Shield, Truck, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.filter((p) => p.badge === 'Bestseller' || p.badge === 'Top Rated').slice(0, 4);
  const newArrivals = products.filter((p) => p.badge === 'New').slice(0, 4);
  const saleProducts = products.filter((p) => p.originalPrice).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-black text-white text-sm px-4 py-1 rounded-full mb-4">
                Spring Collection 2026
              </span>
              <h1 className="text-5xl md:text-6xl mb-6">
                Discover Your Style
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Shop the latest trends with up to 40% off. Free shipping on orders over $75.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/shop/electronics"
                  className="inline-flex items-center justify-center border-2 border-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                  View Electronics
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-12 flex items-center space-x-8">
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">50,000+ Happy Customers</p>
                </div>
                <div className="border-l border-gray-300 pl-8">
                  <p className="text-2xl font-bold">4.8/5</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=1200&fit=crop"
                alt="Shopping"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=600&fit=crop', link: '/shop/electronics' },
            { name: 'Clothing', image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&h=600&fit=crop', link: '/shop/clothing' },
            { name: 'Accessories', image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&h=600&fit=crop', link: '/shop/accessories' },
            { name: 'Home & Living', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', link: '/shop/home' }
          ].map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-xl">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 -mx-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl">Featured Products</h2>
            <Link to="/shop" className="text-sm hover:underline flex items-center">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 text-white">
              <span className="inline-block bg-white text-red-500 text-sm px-4 py-1 rounded-full mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-4xl mb-4">Spring Sale</h2>
              <p className="text-xl mb-6 opacity-90">
                Up to 40% off on selected items. Don't miss out!
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center bg-white text-red-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Shop Sale <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop"
                alt="Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl">Limited Time Deals</h2>
          <Link to="/shop" className="text-sm hover:underline flex items-center">
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $75. Fast delivery within 3-5 business days.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions. Your information is safe with us.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">30-day money back guarantee on all products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl mb-8 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              rating: 5,
              text: 'Amazing quality and fast shipping! Will definitely shop here again.',
              product: 'Premium Wireless Headphones'
            },
            {
              name: 'Mike Chen',
              rating: 5,
              text: 'Best customer service I\'ve experienced. Highly recommend!',
              product: 'Smart Fitness Watch'
            },
            {
              name: 'Emma Davis',
              rating: 5,
              text: 'Great prices and excellent product selection. Love this store!',
              product: 'Minimalist Backpack'
            }
          ].map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{review.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-600">Purchased: {review.product}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive deals, early access to sales, and style tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 50,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
