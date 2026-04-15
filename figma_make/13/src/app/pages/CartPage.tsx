import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const shipping = totalPrice >= 50 ? 0 : 9.99;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  const recommendedProducts = products
    .filter(p => !items.some(item => item.product.id === p.id))
    .slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-4" />
        <h1 className="text-3xl mb-4">Your cart is empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl mb-8">Shopping Cart ({items.length} items)</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div
              key={item.product.id}
              className="bg-white rounded-lg p-4 border border-gray-200 flex gap-4"
            >
              <Link
                to={`/product/${item.product.id}`}
                className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <div>
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-medium hover:underline"
                    >
                      {item.product.name}
                    </Link>
                    <div className="text-sm text-gray-600">
                      {item.product.category}
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <div className="font-semibold">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-600">
                      ${item.product.price.toFixed(2)} each
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-24">
            <h2 className="text-xl mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg mb-6">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${finalTotal.toFixed(2)}</span>
            </div>

            {totalPrice < 50 && (
              <div className="bg-blue-50 text-blue-800 text-sm p-3 rounded mb-4">
                Add ${(50 - totalPrice).toFixed(2)} more for free shipping!
              </div>
            )}

            <button
              onClick={() => navigate('/checkout')}
              className="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 mb-3"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center text-sm text-gray-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      {recommendedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl mb-6">Complete Your Purchase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
