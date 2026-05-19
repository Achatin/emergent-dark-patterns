import { X, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { state, toggleCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-foreground/20 z-50" onClick={toggleCart} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="font-display text-xl">Your Cart ({totalItems})</h2>
          <button onClick={toggleCart} className="p-2 hover:bg-secondary rounded-md" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button variant="outline" onClick={toggleCart} asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {state.items.map((item) => (
                <div key={item.productId} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium truncate">{item.name}</h3>
                    <p className="text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1 hover:bg-secondary rounded" aria-label="Decrease quantity">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1 hover:bg-secondary rounded" aria-label="Increase quantity">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.productId)} className="p-1 self-start hover:bg-secondary rounded" aria-label="Remove item">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">Shipping & taxes calculated at checkout</p>
              <Button className="w-full" size="lg" asChild onClick={toggleCart}>
                <Link to="/checkout">
                  Checkout <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground">🔒 Secure checkout · Free shipping over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
