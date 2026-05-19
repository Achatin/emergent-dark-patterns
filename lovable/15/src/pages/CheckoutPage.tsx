import { useState } from "react";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { useCart } from "@/lib/cart-context";
import { getProductImage } from "@/lib/product-images";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Check } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 75 ? 0 : 8;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <StoreHeader />
        <main className="flex-1 container py-16 text-center">
          <p className="text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild>
            <Link to="/shop">Browse Products</Link>
          </Button>
        </main>
        <StoreFooter />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <StoreHeader />
        <main className="flex-1 container py-16 text-center max-w-lg mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-trust-muted mb-6">
            <Check className="h-8 w-8 text-trust" />
          </div>
          <h1 className="font-display text-3xl mb-3">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Thank you for your order. You'll receive a confirmation email with tracking details.
            We only use your email for order updates — nothing else.
          </p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </main>
        <StoreFooter />
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
    <div className="min-h-screen flex flex-col">
      <StoreHeader />
      <main className="flex-1 container py-8">
        <h1 className="font-display text-3xl mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <section>
                <h2 className="font-display text-xl mb-4">Contact Information</h2>
                <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1">
                  <Lock className="h-3 w-3" /> Used only for order updates. We never share or sell your data.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1 block">Email *</label>
                    <input id="email" type="email" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-1 block">Phone <span className="text-muted-foreground">(optional)</span></label>
                    <input id="phone" type="tel" className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" placeholder="For delivery updates only" />
                  </div>
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="font-display text-xl mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="text-sm font-medium mb-1 block">First Name *</label>
                    <input id="firstName" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm font-medium mb-1 block">Last Name *</label>
                    <input id="lastName" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="text-sm font-medium mb-1 block">Address *</label>
                    <input id="address" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="city" className="text-sm font-medium mb-1 block">City *</label>
                    <input id="city" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div>
                    <label htmlFor="zip" className="text-sm font-medium mb-1 block">ZIP Code *</label>
                    <input id="zip" required className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="font-display text-xl mb-4">Payment</h2>
                <div className="bg-trust-muted rounded-lg p-4 flex items-start gap-3 mb-4">
                  <Shield className="h-5 w-5 text-trust shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Secure Checkout</p>
                    <p className="text-xs text-muted-foreground">This is a demo store. No real payment will be processed.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="text-sm font-medium mb-1 block">Card Number *</label>
                    <input id="cardNumber" required placeholder="4242 4242 4242 4242" className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="text-sm font-medium mb-1 block">Expiry *</label>
                      <input id="expiry" required placeholder="MM/YY" className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="text-sm font-medium mb-1 block">CVC *</label>
                      <input id="cvc" required placeholder="123" className="w-full px-4 py-2.5 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Newsletter opt-in — explicitly opt-in, not pre-checked */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mt-1 rounded border-border"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  I'd like to receive occasional updates about new products. <span className="font-medium">Not pre-checked — your choice.</span>
                </label>
              </div>
            </div>

            {/* Order summary */}
            <div className="bg-card border rounded-lg p-6 h-fit sticky top-24">
              <h2 className="font-display text-xl mb-4">Order Summary</h2>
              <div className="space-y-3 mb-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <img
                      src={getProductImage(product.id)}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                    </div>
                    <span className="text-sm font-medium">${(product.price * quantity).toFixed(2)}</span>
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
                  <span>{shipping === 0 ? <span className="text-trust font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (estimated)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Button variant="trust" size="lg" className="w-full mt-6" type="submit">
                Place Order — ${total.toFixed(2)}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                All prices shown include the final amount. No surprise charges.
              </p>
            </div>
          </div>
        </form>
      </main>
      <StoreFooter />
    </div>
  );
};

export default CheckoutPage;
