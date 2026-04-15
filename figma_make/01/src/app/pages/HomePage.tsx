import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, ShieldCheck, Truck, Clock, Star } from 'lucide-react';
import { Card } from '../components/ui/card';

export function HomePage() {
  // Get featured products (bestsellers and new items)
  const featuredProducts = products.filter(
    (p) => p.badge === 'bestseller' || p.badge === 'new'
  ).slice(0, 4);

  const topRatedProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4">
              Discover Amazing Products
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Shop the latest trends with exclusive deals and free shipping on orders over $100
            </p>
            <div className="flex gap-4">
              <Link to="/products">
                <Button size="lg" variant="secondary">
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products?badge=new">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  New Arrivals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <p>Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <div>
                <p>Secure Payment</p>
                <p className="text-sm text-gray-500">100% protected</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p>24/7 Support</p>
                <p className="text-sm text-gray-500">Dedicated support</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-blue-600" />
              <div>
                <p>Top Quality</p>
                <p className="text-sm text-gray-500">Verified products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked items just for you</p>
          </div>
          <Link to="/products">
            <Button variant="outline">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Fashion', 'Sports', 'Home'].map((category) => (
              <Link key={category} to={`/products?category=${category}`}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl mb-2">{category}</h3>
                  <p className="text-sm text-gray-500">Explore collection</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl mb-2">Customer Favorites</h2>
            <p className="text-gray-600">Highest rated by our community</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Join Over 50,000+ Happy Customers</h2>
          <p className="text-xl text-blue-100 mb-8">
            Trusted by thousands for quality products and excellent service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-2">4.8★</div>
              <p className="text-blue-100">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl mb-2">50K+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl mb-2">10K+</div>
              <p className="text-blue-100">Products Sold</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 md:p-12 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4">Get Exclusive Deals</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter and get 10% off your first order!
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button size="lg">Subscribe</Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
