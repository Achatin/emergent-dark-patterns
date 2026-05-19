import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const shipping = subtotal >= 75 ? 0 : 7.95;
  const total = subtotal + shipping;
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl text-foreground mb-4">Nothing to check out</h1>
        <Link to="/products" className="text-primary hover:underline">← Back to shop</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container py-20 text-center max-w-md mx-auto">
        <div className="bg-trust rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <h1 className="font-display text-3xl text-foreground mb-2">Order Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your purchase. You'll receive a confirmation email shortly.
        </p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
    toast.success("Order placed successfully!");
  };

  return (
    <div className="container py-10 max-w-4xl">
      <Link to="/cart" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to cart
      </Link>

      <h1 className="font-display text-3xl text-foreground mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
          {/* Contact */}
          <fieldset>
            <legend className="font-semibold text-foreground mb-3">Contact Information</legend>
            <div className="space-y-3">
              <input required type="email" placeholder="Email address" className="w-full h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <p className="text-xs text-muted-foreground">We'll send your receipt here. We never share your email.</p>
            </div>
          </fieldset>

          {/* Shipping */}
          <fieldset>
            <legend className="font-semibold text-foreground mb-3">Shipping Address</legend>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="First name" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="Last name" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <input required placeholder="Address" className="w-full h-10 rounded-md border bg-background px-3 text-sm mt-3 focus:outline-none focus:ring-2 focus:ring-ring" />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <input required placeholder="City" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="State" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="ZIP" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </fieldset>

          {/* Payment */}
          <fieldset>
            <legend className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" /> Payment
            </legend>
            <input required placeholder="Card number" className="w-full h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input required placeholder="MM / YY" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required placeholder="CVC" className="h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
          </fieldset>

          {/* Consent */}
          <div className="bg-trust rounded-lg p-4 text-sm space-y-2">
            <label className="flex items-start gap-2">
              <input type="checkbox" required className="mt-1 accent-primary" />
              <span className="text-muted-foreground">
                I agree to the <span className="text-foreground underline cursor-pointer">Terms of Service</span> and <span className="text-foreground underline cursor-pointer">Privacy Policy</span>.
              </span>
            </label>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 accent-primary" />
              <span className="text-muted-foreground">
                Send me product updates and offers (optional — you can unsubscribe anytime).
              </span>
            </label>
          </div>

          <Button type="submit" size="lg" className="w-full font-body font-semibold">
            <Lock className="mr-2 h-4 w-4" />
            Place Order — ${total.toFixed(2)}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            Your payment is encrypted and secure. We never store your card details.
          </p>
        </form>

        {/* Order summary */}
        <div className="md:col-span-2">
          <div className="bg-card border rounded-lg p-5 sticky top-24">
            <h2 className="font-semibold text-foreground mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <img src={product.image} alt={product.name} className="w-12 h-12 rounded object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-foreground">${(product.price * quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-1 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-semibold text-foreground border-t pt-2 mt-2">
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
