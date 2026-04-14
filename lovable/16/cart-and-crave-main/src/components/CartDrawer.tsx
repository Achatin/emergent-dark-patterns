import { X, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  const freeShippingThreshold = 100;
  const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - subtotal;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-serif text-lg">Your Cart ({itemCount})</h2>
              <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Free shipping progress */}
            {items.length > 0 && (
              <div className="px-6 py-3 bg-surface-warm">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">
                    {remaining > 0 ? `$${remaining.toFixed(0)} away from free shipping` : "🎉 Free shipping!"}
                  </span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">Your cart is empty</p>
                  <Link
                    to="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center gap-2 text-sm font-medium underline"
                  >
                    Continue Shopping <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="w-20 h-24 rounded-md overflow-hidden bg-muted flex-shrink-0"
                      >
                        <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium truncate pr-2">{item.product.name}</h3>
                          <button onClick={() => removeItem(item.product.id)} aria-label="Remove">
                            <X className="h-4 w-4 text-muted-foreground" />
                          </button>
                        </div>
                        {(item.selectedColor || item.selectedSize) && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {[item.selectedColor, item.selectedSize].filter(Boolean).join(" / ")}
                          </p>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-border rounded-md">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-3 text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="block w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wide bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Checkout
                </Link>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-xs text-muted-foreground underline"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
