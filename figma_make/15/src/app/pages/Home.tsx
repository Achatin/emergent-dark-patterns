import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight, Shield, Truck, CreditCard } from 'lucide-react';

export function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl md:text-6xl">
              Discover Amazing Products at Great Prices
            </h1>
            <p className="mb-8 text-lg md:text-xl opacity-90">
              Shop the latest trends in electronics, fashion, and home goods. Quality products, fast shipping, and exceptional service.
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <Truck className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">
                  On orders over $50
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  100% secure transactions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-3">
                <CreditCard className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">
                  30-day return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl">Featured Products</h2>
              <p className="text-gray-600">Check out our most popular items</p>
            </div>
            <Link to="/products">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl">Ready to Start Shopping?</h2>
          <p className="mb-8 text-lg text-gray-600">
            Browse our full collection of quality products
          </p>
          <Link to="/products">
            <Button size="lg">
              Explore All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
