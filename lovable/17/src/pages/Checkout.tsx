import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, Lock, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center space-y-4">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground" />
        <h1 className="text-2xl font-heading">Nothing to check out</h1>
        <Button asChild><Link to="/shop">Browse Products</Link></Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Please agree to the terms to continue.");
      return;
    }
    clearCart();
    toast.success("Order placed successfully!", { description: "Thank you for your purchase." });
    navigate("/");
  };

  return (
    <div className="container py-10 max-w-4xl">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4" /> Back to cart
      </Link>

      <h1 className="text-3xl font-heading mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <fieldset className="space-y-4">
              <legend className="font-body font-semibold text-sm mb-2">Contact Information</legend>
              <p className="text-xs text-muted-foreground -mt-2 mb-3">Used only to send your order confirmation and shipping updates.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required maxLength={50} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={100} />
              </div>
            </fieldset>

            {/* Shipping */}
            <fieldset className="space-y-4">
              <legend className="font-body font-semibold text-sm mb-2">Shipping Address</legend>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" required maxLength={200} />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Region</Label>
                  <Input id="state" required maxLength={50} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP / Postal Code</Label>
                  <Input id="zip" required maxLength={20} />
                </div>
              </div>
            </fieldset>

            {/* Payment placeholder */}
            <fieldset className="space-y-4">
              <legend className="font-body font-semibold text-sm mb-2">Payment</legend>
              <div className="bg-secondary/50 rounded-lg p-6 text-center text-sm text-muted-foreground">
                <Lock className="h-5 w-5 mx-auto mb-2" />
                <p>Payment processing would be integrated here (e.g. Stripe).</p>
                <p className="text-xs mt-1">Your card details are never stored on our servers.</p>
              </div>
            </fieldset>

            {/* Consent */}
            <div className="space-y-3 border-t pt-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I agree to the Terms of Service and Privacy Policy. I understand my data is used only to fulfill this order. <span className="text-destructive">*</span>
                </Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={newsletter}
                  onCheckedChange={(v) => setNewsletter(v === true)}
                />
                <Label htmlFor="newsletter" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I'd like to receive occasional updates (you can unsubscribe anytime). Optional.
                </Label>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-5 space-y-4 lg:sticky lg:top-24">
              <h2 className="font-heading text-lg">Order Summary</h2>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3 text-sm">
                    <div className="w-12 h-12 rounded bg-secondary overflow-hidden flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{product.name}</p>
                      <p className="text-muted-foreground">Qty: {quantity}</p>
                    </div>
                    <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Tax</span><span>Included</span></div>
              </div>

              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button type="submit" className="w-full" disabled={!agreed}>
                <Lock className="mr-2 h-4 w-4" /> Place Order — ${total.toFixed(2)}
              </Button>

              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                256-bit SSL encryption. We never sell your data.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
