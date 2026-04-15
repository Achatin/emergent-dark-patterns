import { useParams, Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/shop" className="text-blue-600 hover:underline">
            Return to shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gray-100 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">{product.name}</h1>

            <div className="mb-8">
              <p className="text-3xl font-bold mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-600">Price includes all taxes and fees</p>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Stock Status */}
            <div className="mb-8">
              {product.inStock ? (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">In Stock - Ships within 2-3 business days</span>
                </div>
              ) : (
                <p className="text-red-600 font-medium">Currently Out of Stock</p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-4 text-lg font-medium transition-colors mb-4 ${
                product.inStock
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>

            <button
              onClick={() => {
                addToCart(product);
                navigate('/cart');
              }}
              disabled={!product.inStock}
              className={`w-full py-4 text-lg font-medium border-2 transition-colors ${
                product.inStock
                  ? 'border-black text-black hover:bg-gray-50'
                  : 'border-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Buy Now
            </button>

            {/* Product Details */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Product Details</h2>
              <dl className="space-y-4">
                {product.details.material && (
                  <div>
                    <dt className="font-medium text-gray-900">Material</dt>
                    <dd className="text-gray-600 mt-1">{product.details.material}</dd>
                  </div>
                )}
                {product.details.dimensions && (
                  <div>
                    <dt className="font-medium text-gray-900">Dimensions</dt>
                    <dd className="text-gray-600 mt-1">{product.details.dimensions}</dd>
                  </div>
                )}
                {product.details.weight && (
                  <div>
                    <dt className="font-medium text-gray-900">Weight</dt>
                    <dd className="text-gray-600 mt-1">{product.details.weight}</dd>
                  </div>
                )}
                {product.details.care && (
                  <div>
                    <dt className="font-medium text-gray-900">Care Instructions</dt>
                    <dd className="text-gray-600 mt-1">{product.details.care}</dd>
                  </div>
                )}
              </dl>
            </div>

            {/* Privacy & Return Info */}
            <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600 space-y-2">
              <p>✓ 30-day return policy - full refund, no questions asked</p>
              <p>✓ Secure checkout with encrypted payment processing</p>
              <p>✓ We only collect data necessary for order fulfillment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
