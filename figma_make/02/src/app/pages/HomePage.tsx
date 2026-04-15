import { Link } from "react-router";
import { ArrowRight, Package, Truck, Shield, RefreshCw } from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";

export function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const categories = [
    { name: "Electronics", image: products[0].image, count: products.filter(p => p.category === "Electronics").length },
    { name: "Sports", image: products[4].image, count: products.filter(p => p.category === "Sports").length },
    { name: "Home", image: products[6].image, count: products.filter(p => p.category === "Home").length },
    { name: "Accessories", image: products[5].image, count: products.filter(p => p.category === "Accessories").length },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Shop the latest trends in electronics, sports gear, home essentials, and more. Quality products at unbeatable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link to="/shop?category=Electronics">
                  Browse Electronics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Quality Products</h3>
            <p className="text-sm text-gray-600">Carefully curated selection of premium items</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600">On orders over $50 to anywhere</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">100% secure payment processing</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Easy Returns</h3>
            <p className="text-sm text-gray-600">30-day return policy on all items</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button asChild variant="outline">
            <Link to="/shop">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ShopHub for their online shopping needs.
          </p>
          <Button asChild size="lg">
            <Link to="/shop">
              Browse All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
