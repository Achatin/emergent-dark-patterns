import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Minus, Plus, X, Lock, ShoppingBag } from "lucide-react";

export default function Cart() {
  const { state, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  const shipping = totalPrice >= 75 ? 0 : 7.95;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  if (state.items.length === 0) {
    return (
      <div className="container py-20 text-center space-y-4">
        <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground" />
        <h1 className="font-display text-2xl">Your cart is empty</h1>
        <p className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl mb-8">Shopping Cart ({totalItems})</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {state.items.map((item) => (
            <div key={item.productId} className="flex gap-4 pb-6 border-b">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" loading="lazy" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <button onClick={() => removeItem(item.productId)} className="p-1 hover:bg-secondary rounded" aria-label="Remove item">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                <p className="text-sm font-semibold mt-1">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mt-3">
                  <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1.5 border rounded hover:bg-secondary" aria-label="Decrease">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1.5 border rounded hover:bg-secondary" aria-label="Increase">
                    <Plus className="w-3 h-3" />
                  </button>
                  <span className="ml-auto text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card rounded-lg p-6 h-fit space-y-4 border">
          <h2 className="font-display text-lg">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? <span className="text-success">Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Est. Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {shipping > 0 && (
            <p className="text-xs text-muted-foreground">Add ${(75 - totalPrice).toFixed(2)} more for free shipping!</p>
          )}
          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" asChild>
            <Link to="/checkout">
              Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Lock className="w-3 h-3" />
            <span>Secure, encrypted checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
