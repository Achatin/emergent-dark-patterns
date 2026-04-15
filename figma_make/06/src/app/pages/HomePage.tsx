import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Truck, Shield, RefreshCw, TrendingUp, Tag, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const HomePage: React.FC = () => {
  const featuredProducts = products.filter(p => p.badge === 'bestseller').slice(0, 4);
  const newProducts = products.filter(p => p.badge === 'new' || !p.badge).slice(0, 4);
  const saleProducts = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold mb-4">
              🔥 Spring Sale Now Live
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Amazing Products at Unbeatable Prices
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Shop thousands of high-quality products with free shipping on orders over $100
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shop?sale=true">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  View Sale Items
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <RefreshCw className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day guarantee</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-black text-white p-3 rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-gray-600">2-3 business days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Banner */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Tag className="h-12 w-12" />
              <div>
                <h2 className="text-2xl font-bold">Flash Sale Ends Soon!</h2>
                <p className="text-sm">Up to 40% off on selected items</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="text-3xl">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold">34</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="text-3xl">:</div>
              <div className="text-center">
                <div className="text-3xl font-bold">56</div>
                <div className="text-xs">Seconds</div>
              </div>
              <Link to="/shop?sale=true">
                <Button className="ml-6 bg-white text-red-600 hover:bg-gray-100">
                  Shop Sale
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Bestsellers</h2>
            <p className="text-gray-600">Most popular products loved by our customers</p>
          </div>
          <Link to="/shop">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/shop?category=Electronics" className="group">
              <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-gray-600 transition">Electronics</h3>
                </div>
              </div>
            </Link>
            <Link to="/shop?category=Fashion" className="group">
              <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition">
                <div className="aspect-square bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <span className="text-6xl">👔</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-gray-600 transition">Fashion</h3>
                </div>
              </div>
            </Link>
            <Link to="/shop?category=Home" className="group">
              <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition">
                <div className="aspect-square bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <span className="text-6xl">🏠</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-gray-600 transition">Home & Living</h3>
                </div>
              </div>
            </Link>
            <Link to="/shop?category=Sports" className="group">
              <div className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition">
                <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <span className="text-6xl">⚽</span>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold group-hover:text-gray-600 transition">Sports</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">New Arrivals</h2>
            <p className="text-gray-600">Latest products just added to our collection</p>
          </div>
          <Link to="/shop?sort=newest">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Save Big on Top Brands</h2>
          <p className="text-xl mb-6">Discounts up to 40% off on selected items</p>
          <Link to="/shop?sale=true">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Shop Sale Items
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Hot Deals */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Hot Deals</h2>
            <p className="text-gray-600">Limited time offers you don't want to miss</p>
          </div>
          <Link to="/shop?sale=true">
            <Button variant="outline">
              View All Deals
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "Amazing quality and fast shipping! I've ordered multiple times and never been disappointed."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">Verified Buyer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "Great customer service and the products exceed expectations. Highly recommend!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-gray-600">Verified Buyer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="mb-4 text-gray-700">
                "Best online shopping experience! Easy returns and fantastic deals."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="font-semibold">Emma Williams</div>
                  <div className="text-sm text-gray-600">Verified Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get 15% Off Your First Order</h2>
          <p className="text-gray-300 mb-8">Subscribe to our newsletter for exclusive deals and updates</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
