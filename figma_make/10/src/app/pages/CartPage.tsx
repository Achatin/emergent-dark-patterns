import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const shipping = total >= 50 ? 0 : 8.99;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-neutral-300" />
        <h1 className="text-3xl mb-4">Your cart is empty</h1>
        <p className="text-neutral-600 mb-8">Add some products to get started</p>
        <Link
          to="/shop"
          className="inline-block bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 pb-6 border-b border-neutral-200"
            >
              <Link to={`/product/${item.id}`} className="w-32 h-32 shrink-0 bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <Link
                    to={`/product/${item.id}`}
                    className="hover:underline inline-block"
                  >
                    <h3 className="text-lg">{item.name}</h3>
                  </Link>
                  <p className="text-sm text-neutral-500">{item.category}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-neutral-500 hover:text-neutral-900"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="border border-neutral-200 p-6 sticky top-24">
            <h2 className="text-xl mb-6">Order Summary</h2>

            <div className="space-y-3 pb-4 border-b border-neutral-200 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              {total < 50 && shipping > 0 && (
                <p className="text-xs text-neutral-500">
                  Add ${(50 - total).toFixed(2)} more for free shipping
                </p>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-600">Estimated Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg pt-4 mb-6">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-neutral-900 text-white py-3 hover:bg-neutral-800 transition-colors mb-3"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="block text-center text-sm text-neutral-600 hover:text-neutral-900"
            >
              Continue Shopping
            </Link>

            <div className="mt-6 pt-6 border-t border-neutral-200 space-y-2 text-xs text-neutral-600">
              <p>✓ All prices shown include estimated tax</p>
              <p>✓ Final shipping cost calculated at checkout</p>
              <p>✓ Secure payment processing</p>
              <p>✓ 30-day return policy</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
