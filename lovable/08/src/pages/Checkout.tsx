import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, CreditCard, Check } from "lucide-react";

type Step = "info" | "shipping" | "payment" | "confirmation";

export default function Checkout() {
  const { items, subtotal, clearCart, itemCount } = useCart();
  const [step, setStep] = useState<Step>("info");
  const shipping = subtotal >= 150 ? 0 : 9.95;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl mb-4">Your bag is empty</h1>
        <Link to="/shop" className="text-accent font-body hover:underline">Continue shopping</Link>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div className="container max-w-lg py-20 text-center space-y-6">
        <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>
        <h1 className="font-display text-3xl">Order Confirmed!</h1>
        <p className="font-body text-muted-foreground">Thank you for your purchase. We'll send you a confirmation email with tracking details shortly.</p>
        <p className="font-body text-sm text-muted-foreground">Order #MAISON-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
        <Link to="/shop">
          <Button className="font-body mt-4">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    clearCart();
    setStep("confirmation");
  };

  return (
    <div className="container py-8 max-w-5xl">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to shop
      </Link>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {(["info", "shipping", "payment"] as Step[]).map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-semibold ${
              step === s ? "bg-accent text-accent-foreground" :
              (["info", "shipping", "payment"].indexOf(step) > i) ? "bg-primary text-primary-foreground" :
              "bg-muted text-muted-foreground"
            }`}>
              {["info", "shipping", "payment"].indexOf(step) > i ? <Check className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span className={`text-sm font-body hidden sm:inline ${step === s ? "font-semibold" : "text-muted-foreground"}`}>
              {s === "info" ? "Information" : s === "shipping" ? "Shipping" : "Payment"}
            </span>
            {i < 2 && <div className="w-8 sm:w-16 h-px bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 space-y-6">
          {step === "info" && (
            <>
              <h2 className="font-display text-2xl">Contact Information</h2>
              <input placeholder="Email address" className="w-full border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
              <div className="flex items-center gap-2">
                <input type="checkbox" id="newsletter" className="rounded" defaultChecked />
                <label htmlFor="newsletter" className="text-sm font-body text-muted-foreground">Email me with news and offers</label>
              </div>
              <h2 className="font-display text-2xl pt-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First name" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                <input placeholder="Last name" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
              </div>
              <input placeholder="Address" className="w-full border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
              <div className="grid grid-cols-3 gap-4">
                <input placeholder="City" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                <input placeholder="State" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                <input placeholder="ZIP" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
              </div>
              <Button size="lg" className="w-full font-body" onClick={() => setStep("shipping")}>
                Continue to Shipping
              </Button>
            </>
          )}

          {step === "shipping" && (
            <>
              <h2 className="font-display text-2xl">Shipping Method</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between border rounded-md p-4 cursor-pointer hover:border-accent transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" defaultChecked className="accent-accent" />
                    <div>
                      <p className="text-sm font-body font-medium">Standard Shipping</p>
                      <p className="text-xs font-body text-muted-foreground">5-7 business days</p>
                    </div>
                  </div>
                  <span className="font-body font-semibold text-sm">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </label>
                <label className="flex items-center justify-between border rounded-md p-4 cursor-pointer hover:border-accent transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="shipping" className="accent-accent" />
                    <div>
                      <p className="text-sm font-body font-medium">Express Shipping</p>
                      <p className="text-xs font-body text-muted-foreground">2-3 business days</p>
                    </div>
                  </div>
                  <span className="font-body font-semibold text-sm">$19.95</span>
                </label>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("info")} className="font-body">Back</Button>
                <Button size="lg" className="flex-1 font-body" onClick={() => setStep("payment")}>Continue to Payment</Button>
              </div>
            </>
          )}

          {step === "payment" && (
            <>
              <h2 className="font-display text-2xl">Payment</h2>
              <div className="border rounded-md p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-5 h-5 text-accent" />
                  <span className="font-body font-medium text-sm">Credit Card</span>
                </div>
                <input placeholder="Card number" className="w-full border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="MM/YY" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                  <input placeholder="CVC" className="border rounded-md px-4 py-3 text-sm font-body focus:outline-none focus:ring-1 focus:ring-accent bg-background" />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep("shipping")} className="font-body">Back</Button>
                <Button size="lg" className="flex-1 gap-2 font-body" onClick={handlePlaceOrder}>
                  <Lock className="w-4 h-4" /> Place Order — ${total.toFixed(2)}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground font-body text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3" /> Your payment information is secure and encrypted
              </p>
            </>
          )}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-2">
          <div className="bg-secondary rounded-lg p-6 sticky top-32 space-y-4">
            <h3 className="font-display text-lg">Order Summary</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {items.map(item => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative">
                    <img src={item.product.images[0]} alt="" className="w-14 h-16 object-cover rounded" />
                    <span className="absolute -top-1.5 -right-1.5 bg-foreground text-background w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-body font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-body font-medium">{item.product.name}</p>
                    {item.size && <p className="text-xs font-body text-muted-foreground">Size: {item.size}</p>}
                  </div>
                  <span className="text-sm font-body font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-body">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-body font-bold border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            {/* Promo code */}
            <div className="flex gap-2">
              <input placeholder="Promo code" className="flex-1 border rounded-md px-3 py-2 text-sm font-body bg-background focus:outline-none focus:ring-1 focus:ring-accent" />
              <Button variant="outline" className="font-body text-sm">Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
