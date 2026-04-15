import { Link } from 'react-router';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Truck, Shield, CreditCard, Headphones } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useCart } from '../hooks/useCart';

export function HomePage() {
  const { onAddToCart } = useCart();
  
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newArrivals = products.filter(p => p.tags.includes('new')).slice(0, 4);
  const saleProducts = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white text-blue-600">Spring Collection 2026</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Your Perfect Style
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Shop the latest trends with up to 40% off. Free shipping on orders over $50.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Shop Now
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>
              <Link to="/shop?category=sale">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Sale
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Truck className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                <CreditCard className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Headphones className="size-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.filter(c => c !== 'All').slice(0, 8).map((category) => (
              <Link key={category} to={`/shop?category=${category}`}>
                <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="size-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 mx-auto mb-3" />
                  <h3 className="font-semibold">{category}</h3>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/shop">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/shop?category=new">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white text-orange-600">Limited Time Offer</Badge>
          <h2 className="text-4xl font-bold mb-4">Summer Sale - Up to 40% Off</h2>
          <p className="text-xl mb-8 text-orange-100">Don't miss out on amazing deals!</p>
          <Link to="/shop?category=sale">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Shop Sale Items
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Sale Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Hot Deals</h2>
            <Link to="/shop?category=sale">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg mb-6 text-blue-100">
                Get exclusive deals, new arrivals, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}