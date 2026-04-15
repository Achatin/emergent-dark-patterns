import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-lg font-semibold text-foreground">Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <ShoppingBag className="w-12 h-12" />
                <p className="text-sm">Your cart is empty</p>
                <Button variant="outline" onClick={() => setIsCartOpen(false)} asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-24 object-cover rounded-sm bg-secondary"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-foreground">{item.product.name}</h3>
                          {item.size && <p className="text-xs text-muted-foreground mt-0.5">Size: {item.size}</p>}
                          {item.color && <p className="text-xs text-muted-foreground">Color: {item.color}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-5 text-center text-foreground">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-foreground">${item.product.price * item.quantity}</span>
                            <button onClick={() => removeItem(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${totalPrice}</span>
                  </div>
                  <Button className="w-full" asChild onClick={() => setIsCartOpen(false)}>
                    <Link to="/checkout">Checkout</Link>
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
