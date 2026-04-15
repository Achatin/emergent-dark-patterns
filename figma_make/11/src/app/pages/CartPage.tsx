import { Link, useNavigate } from 'react-router';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const subtotal = getTotalPrice();
  const shipping = subtotal >= 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started
          </p>
          <Link
            to="/products"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 border rounded-lg"
            >
              <Link
                to={`/products/${item.id}`}
                className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1">
                <div className="flex justify-between gap-4 mb-2">
                  <div>
                    <Link
                      to={`/products/${item.id}`}
                      className="font-semibold hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-black transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg border flex items-center justify-center hover:bg-gray-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg border flex items-center justify-center hover:bg-gray-50"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 pb-4 border-b">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal (tax included)</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-gray-600">
                  Add ${(50 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
            </div>

            <div className="flex justify-between mb-6">
              <span className="font-bold">Total</span>
              <span className="font-bold text-xl">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors mb-3"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="block text-center text-sm text-gray-600 hover:text-black"
            >
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-2 text-sm">Price Breakdown</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• All product prices include applicable taxes</li>
                <li>• Shipping cost shown is final</li>
                <li>• No hidden fees at checkout</li>
                <li>• You can review everything before confirming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
