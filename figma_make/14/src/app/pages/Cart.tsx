import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal >= 50 ? 0 : 8.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Add some products to get started
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map(item => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-card border border-border rounded-lg p-4 flex gap-4"
                  >
                    <Link
                      to={`/product/${item.product.id}`}
                      className="flex-shrink-0 w-24 h-24 rounded overflow-hidden bg-muted"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between gap-4 mb-2">
                        <div>
                          <Link
                            to={`/product/${item.product.id}`}
                            className="hover:text-primary transition-colors"
                          >
                            <h3>{item.product.name}</h3>
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {item.product.category}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            ${item.product.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center border border-border rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-muted transition-colors text-sm"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 text-sm border-x border-border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-muted transition-colors text-sm"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="flex items-center gap-2 text-sm text-destructive hover:opacity-80 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-6">
              <Link
                to="/shop"
                className="text-primary hover:underline text-sm"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-primary">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Tax (8%)
                    </span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-3 border-t border-border flex justify-between text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {cartTotal < 50 && (
                  <div className="mb-6 p-3 bg-muted rounded text-sm text-muted-foreground">
                    Add ${(50 - cartTotal).toFixed(2)} more for free shipping
                  </div>
                )}

                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity mb-4"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <p>✓ Secure SSL encrypted checkout</p>
                  <p>✓ All prices include applicable taxes</p>
                  <p>✓ 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
