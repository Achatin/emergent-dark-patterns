import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="container pt-24 pb-16 text-center max-w-lg mx-auto">
        <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto">
          <Check size={28} className="text-primary-foreground" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mt-6">Order Confirmed</h1>
        <p className="text-muted-foreground text-sm mt-3">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
        <Link to="/shop">
          <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-heading">
            Continue Shopping
          </Button>
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container pt-24 pb-16 text-center">
        <p className="text-muted-foreground">Your cart is empty.</p>
        <Link to="/shop" className="text-primary text-sm mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="container pt-24 pb-16">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-10">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h2>
            <div className="space-y-4">
              <div>
                <Label className="text-muted-foreground text-xs">Email</Label>
                <Input placeholder="you@example.com" className="mt-1 bg-card border-border text-foreground" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Shipping</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-muted-foreground text-xs">First Name</Label>
                <Input className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">Last Name</Label>
                <Input className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div className="col-span-2">
                <Label className="text-muted-foreground text-xs">Address</Label>
                <Input className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">City</Label>
                <Input className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">ZIP Code</Label>
                <Input className="mt-1 bg-card border-border text-foreground" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Payment</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <Label className="text-muted-foreground text-xs">Card Number</Label>
                <Input placeholder="4242 4242 4242 4242" className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">Expiry</Label>
                <Input placeholder="MM/YY" className="mt-1 bg-card border-border text-foreground" />
              </div>
              <div>
                <Label className="text-muted-foreground text-xs">CVC</Label>
                <Input placeholder="123" className="mt-1 bg-card border-border text-foreground" />
              </div>
            </div>
          </div>

          <Button
            onClick={() => { setSubmitted(true); clearCart(); }}
            className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wide"
          >
            Place Order — ${totalPrice.toFixed(2)}
          </Button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="rounded bg-card border border-border p-6 sticky top-24">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                  <img src={item.product.image} alt={item.product.name} className="h-16 w-12 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{item.product.name}</p>
                    {item.size && <p className="text-xs text-muted-foreground">Size: {item.size}</p>}
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm text-foreground">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-4 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span><span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span><span>Free</span>
              </div>
              <div className="flex justify-between font-heading font-bold text-foreground pt-2 border-t border-border">
                <span>Total</span><span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
