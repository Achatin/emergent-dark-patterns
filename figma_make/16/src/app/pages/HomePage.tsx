import { Link } from 'react-router';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';

export function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Shop the latest electronics, wearables, and accessories from top brands. 
              Quality products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" variant="default" className="bg-white text-black hover:bg-gray-100">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products?category=Electronics">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Browse Electronics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-black text-white rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">
                  On orders over $100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black text-white rounded-lg">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  100% secure transactions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-black text-white rounded-lg">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">
                  2-3 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl mb-2">Featured Products</h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>
          <Link to="/products">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-3xl mb-8 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products?category=Electronics" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products[0].image}
                  alt="Electronics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl mb-2">Electronics</h3>
                    <p className="text-sm">Latest tech gadgets</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products?category=Wearables" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products[2].image}
                  alt="Wearables"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl mb-2">Wearables</h3>
                    <p className="text-sm">Smart devices for you</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products?category=Accessories" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products[9].image}
                  alt="Accessories"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl mb-2">Accessories</h3>
                    <p className="text-sm">Essential add-ons</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 lg:px-8 py-16">
        <div className="bg-black text-white rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get 10% off your first order
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black"
            />
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
