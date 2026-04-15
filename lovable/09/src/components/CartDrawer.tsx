import { useCart } from "@/hooks/useCart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/store";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  const shipping = subtotal >= 75 ? 0 : 8.99;
  const total = subtotal + shipping;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Your Cart ({totalItems})</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-12 h-12" />
            <p className="text-sm">Your cart is empty</p>
            <Button variant="hero" onClick={() => { setIsOpen(false); navigate("/shop"); }}>
              Start Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.product.name}</p>
                      <p className="text-sm text-accent font-semibold">{formatPrice(item.product.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeItem(item.product.id)} className="ml-auto text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              {subtotal < 75 && (
                <p className="text-xs text-muted-foreground text-center">
                  Add {formatPrice(75 - subtotal)} more for free shipping!
                </p>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base border-t border-border pt-3">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <Button
                variant="hero"
                className="w-full"
                size="lg"
                onClick={() => { setIsOpen(false); navigate("/checkout"); }}
              >
                Checkout · {formatPrice(total)}
              </Button>
              <button
                onClick={() => { setIsOpen(false); navigate("/shop"); }}
                className="w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
