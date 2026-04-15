import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [consent, setConsent] = useState(false);

  const shippingThreshold = 75;
  const shipping = subtotal >= shippingThreshold ? 0 : 8;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="container py-20 text-center">
        <p className="text-muted-foreground">Your cart is empty.</p>
        <Link to="/shop" className="text-accent hover:underline mt-4 inline-block">
          Back to shop
        </Link>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Please review our terms",
        description: "You must consent to our terms before placing the order.",
        variant: "destructive",
      });
      return;
    }
    clearCart();
    toast({ title: "Order placed!", description: "Thank you for your purchase." });
    navigate("/");
  };

  return (
    <main className="container py-10 max-w-3xl">
      <Link
        to="/cart"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to cart
      </Link>

      <h1 className="font-display text-3xl text-foreground mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-10">
        {/* Form fields */}
        <div className="md:col-span-3 space-y-6">
          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-foreground mb-2">Contact</legend>
            <Input type="email" placeholder="Email address" required className="bg-background" />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-foreground mb-2">Shipping Address</legend>
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="First name" required className="bg-background" />
              <Input placeholder="Last name" required className="bg-background" />
            </div>
            <Input placeholder="Address" required className="bg-background" />
            <div className="grid grid-cols-3 gap-3">
              <Input placeholder="City" required className="bg-background" />
              <Input placeholder="State" className="bg-background" />
              <Input placeholder="ZIP" required className="bg-background" />
            </div>
            <Input placeholder="Country" required className="bg-background" />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="text-sm font-medium text-foreground mb-2">Payment</legend>
            <Input placeholder="Card number" required className="bg-background" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="MM / YY" required className="bg-background" />
              <Input placeholder="CVC" required className="bg-background" />
            </div>
          </fieldset>

          {/* Consent */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              className="mt-0.5"
            />
            <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              I agree to the Terms of Service and Privacy Policy.
              I understand my data is used only to process this order and will not be sold or shared with third parties.
              I can request deletion of my data at any time.
            </label>
          </div>
        </div>

        {/* Order summary */}
        <div className="md:col-span-2">
          <div className="bg-secondary rounded-lg p-5 space-y-4 sticky top-24">
            <h2 className="font-display text-lg text-foreground">Summary</h2>
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {product.name} × {quantity}
                  </span>
                  <span className="text-foreground">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-medium text-foreground pt-2 border-t border-border">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              <Lock className="mr-2 h-4 w-4" /> Place order
            </Button>
            <p className="text-[11px] text-center text-muted-foreground">
              Your payment is encrypted end-to-end. We never store card details on our servers.
            </p>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Checkout;
