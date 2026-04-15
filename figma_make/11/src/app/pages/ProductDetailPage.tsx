import { useParams, Link, useNavigate } from 'react-router';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Check, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-600">Product not found</p>
        <div className="text-center mt-4">
          <Link to="/products" className="text-black underline">
            Browse all products
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

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">{product.category}</p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="border-t border-b py-6 mb-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-sm text-gray-600">(tax included)</span>
            </div>
            <p className="text-sm text-gray-600">
              {product.inStock ? (
                <span className="text-green-600 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  In Stock - Ships within 2 business days
                </span>
              ) : (
                <span className="text-red-600">Currently Out of Stock</span>
              )}
            </p>
          </div>

          <div className="space-y-3 mb-8">
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {product.inStock ? 'Buy Now' : 'Out of Stock'}
            </button>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full border-2 border-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Free Shipping</p>
                <p className="text-sm text-gray-600">
                  Free standard shipping on orders over $50
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">30-Day Returns</p>
                <p className="text-sm text-gray-600">
                  Not satisfied? Return within 30 days for a full refund
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Warranty Included</p>
                <p className="text-sm text-gray-600">
                  Covered by manufacturer warranty
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h2 className="font-semibold mb-3">Product Details</h2>
            <ul className="space-y-2">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t pt-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Our Transparency Commitment</h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-1">Honest Pricing</p>
              <p className="text-gray-600">
                The price you see includes all taxes. Shipping cost calculated at checkout.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Real Images</p>
              <p className="text-gray-600">
                Product images show the actual item you will receive.
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Complete Information</p>
              <p className="text-gray-600">
                All specifications, features, and limitations clearly listed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
