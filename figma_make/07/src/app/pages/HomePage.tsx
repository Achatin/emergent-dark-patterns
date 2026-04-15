import { Link } from 'react-router';
import { ArrowRight, Star, TrendingUp, Shield, Truck, CreditCard } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 8);

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
                Spring Sale - Up to 40% Off
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends and enjoy free shipping on orders over $100
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/products"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Truck className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure transactions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CreditCard className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-1">Best Prices</h3>
              <p className="text-sm text-gray-600">Price match guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition border border-gray-200 group"
            >
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition">
                <span className="text-2xl">
                  {category.name === 'Electronics' && '📱'}
                  {category.name === 'Clothing' && '👕'}
                  {category.name === 'Home' && '🏠'}
                  {category.name === 'Fitness' && '💪'}
                  {category.name === 'Bags' && '🎒'}
                  {category.name === 'Accessories' && '⌚'}
                  {category.name === 'Footwear' && '👟'}
                </span>
              </div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.count} items</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition group">
                <Link to={`/product/${product.id}`} className="block relative">
                  {product.id <= 3 && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Sale
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                  />
                </Link>
                <div className="p-4">
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold mb-2 hover:text-blue-600 transition">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special offer banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Limited Time Offer!</h2>
          <p className="text-xl mb-6">Get an extra 20% off on all electronics. Use code: TECH20</p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="bg-white/20 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">12</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">34</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">56</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <Link
            to="/products?category=Electronics"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Shop Electronics Now
          </Link>
        </div>
      </section>

      {/* Social proof */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Johnson',
              rating: 5,
              comment: 'Amazing quality and fast shipping! Will definitely shop here again.',
            },
            {
              name: 'Michael Chen',
              rating: 5,
              comment: 'Best online shopping experience. Great customer service and products.',
            },
            {
              name: 'Emma Williams',
              rating: 5,
              comment: 'Love the variety and prices. The return process was also super easy.',
            },
          ].map((review, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">Verified Buyer</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
