import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Lock, ChevronRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export default function Checkout() {
  const { state, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<"info" | "confirm" | "done">("info");
  const [consent, setConsent] = useState(false);

  const shipping = totalPrice >= 75 ? 0 : 7.95;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;

  if (state.items.length === 0 && step !== "done") {
    return (
      <div className="container py-20 text-center space-y-4">
        <h1 className="font-display text-2xl">Nothing to check out</h1>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="container py-20 text-center space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>
        <h1 className="font-display text-3xl">Thank you!</h1>
        <p className="text-sm text-muted-foreground">
          Your order has been placed. You'll receive a confirmation email shortly.
        </p>
        <p className="text-xs text-muted-foreground">Order #CG-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "info") {
      setStep("confirm");
    } else {
      clearCart();
      setStep("done");
      toast.success("Order placed successfully!");
    }
  };

  return (
    <div className="container py-10 max-w-4xl">
      {/* Breadcrumb steps */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10">
        <Link to="/cart" className="hover:text-foreground">Cart</Link>
        <ChevronRight className="w-3 h-3" />
        <span className={step === "info" ? "text-foreground font-medium" : "text-muted-foreground"}>Information</span>
        <ChevronRight className="w-3 h-3" />
        <span className={step === "confirm" ? "text-foreground font-medium" : ""}>Review & Pay</span>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
          {step === "info" && (
            <>
              <h2 className="font-display text-2xl">Shipping Information</h2>
              <p className="text-xs text-muted-foreground">Fields marked * are required. Your information is only used to process this order.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">First Name *</label>
                  <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Last Name *</label>
                  <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Email *</label>
                <input type="email" required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                <p className="text-xs text-muted-foreground">For order confirmation only. We won't send marketing emails without your permission.</p>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium">Address *</label>
                <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium">City *</label>
                  <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">State *</label>
                  <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">ZIP *</label>
                  <input required className="w-full px-3 py-2 text-sm border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" />
                <label htmlFor="consent" className="text-xs text-muted-foreground">
                  I'd like to receive occasional product updates via email. You can unsubscribe anytime. (Optional)
                </label>
              </div>
            </>
          )}

          {step === "confirm" && (
            <>
              <h2 className="font-display text-2xl">Review Your Order</h2>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.productId} className="flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground border-t pt-4">
                By placing this order you agree to our Terms of Service. Your payment information is encrypted and never stored on our servers.
              </p>
            </>
          )}

          <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            {step === "info" ? (
              <>Continue to Review <ChevronRight className="w-4 h-4 ml-1" /></>
            ) : (
              <>Place Order · ${total.toFixed(2)}</>
            )}
          </Button>

          {step === "confirm" && (
            <button type="button" onClick={() => setStep("info")} className="w-full text-sm text-muted-foreground hover:text-foreground text-center">
              ← Back to information
            </button>
          )}
        </form>

        {/* Order summary sidebar */}
        <div className="md:col-span-2">
          <div className="bg-card rounded-lg p-5 border space-y-4 sticky top-24">
            <h3 className="font-display text-lg">Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({state.items.reduce((s, i) => s + i.quantity, 0)} items)</span>
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
            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground justify-center pt-2">
              <Lock className="w-3 h-3" />
              Secure, encrypted checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
