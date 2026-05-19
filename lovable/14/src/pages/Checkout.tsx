import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Lock, Shield } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 75 ? 0 : 5;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-display">Nothing to check out</h1>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      toast.success("Order placed successfully!", { description: "You'll receive a confirmation email shortly." });
      navigate("/");
      setSubmitting(false);
    }, 1500);
  };

  const inputClass = "w-full h-10 rounded-md border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container py-8 flex-1 max-w-4xl">
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ChevronLeft className="h-4 w-4" /> Back to cart
        </Link>
        <h1 className="text-3xl font-display mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form fields */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold">Contact</legend>
              <input
                type="email"
                placeholder="Email address"
                value={form.email}
                onChange={update("email")}
                required
                className={inputClass}
                aria-label="Email address"
              />
              <p className="text-xs text-muted-foreground">
                Used only for order confirmation and shipping updates. We won't send marketing emails without your explicit permission.
              </p>
            </fieldset>

            {/* Shipping */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold">Shipping Address</legend>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="First name" value={form.firstName} onChange={update("firstName")} required className={inputClass} aria-label="First name" />
                <input type="text" placeholder="Last name" value={form.lastName} onChange={update("lastName")} required className={inputClass} aria-label="Last name" />
              </div>
              <input type="text" placeholder="Address" value={form.address} onChange={update("address")} required className={inputClass} aria-label="Street address" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="City" value={form.city} onChange={update("city")} required className={inputClass} aria-label="City" />
                <input type="text" placeholder="ZIP / Postal code" value={form.zip} onChange={update("zip")} required className={inputClass} aria-label="ZIP code" />
              </div>
              <select value={form.country} onChange={update("country")} className={inputClass} aria-label="Country">
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>France</option>
                <option>Australia</option>
              </select>
            </fieldset>

            {/* Payment */}
            <fieldset className="space-y-4">
              <legend className="text-sm font-semibold flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-primary" /> Payment
              </legend>
              <input type="text" placeholder="Card number" value={form.cardNumber} onChange={update("cardNumber")} required className={inputClass} aria-label="Card number" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM / YY" value={form.expiry} onChange={update("expiry")} required className={inputClass} aria-label="Expiry date" />
                <input type="text" placeholder="CVC" value={form.cvc} onChange={update("cvc")} required className={inputClass} aria-label="CVC" />
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Payment details are encrypted end-to-end. We never store your card information.
              </p>
            </fieldset>

            {/* Consent — user autonomy */}
            <div className="border rounded-lg p-4 space-y-3 bg-secondary">
              <h3 className="text-sm font-semibold">Before you place your order</h3>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border"
                  required
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I confirm that I've reviewed my order and agree to the{" "}
                  <span className="underline cursor-pointer">Terms of Service</span> and{" "}
                  <span className="underline cursor-pointer">Privacy Policy</span>. I understand I can return any item within 30 days for a full refund.
                </span>
              </label>
            </div>
          </div>

          {/* Summary sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card p-6 space-y-4 sticky top-24">
              <h2 className="text-lg font-display">Order Summary</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3 text-sm">
                    <img src={product.image} alt={product.name} className="h-12 w-12 rounded object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium line-clamp-1">{product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                    </div>
                    <span className="font-medium">${(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-3 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-xs text-muted-foreground">Included</span>
                </div>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Processing..." : `Place Order — $${total.toFixed(2)}`}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Checkout;
