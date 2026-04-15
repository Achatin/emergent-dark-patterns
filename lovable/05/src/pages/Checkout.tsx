import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <main className="container py-20 text-center">
        <h1 className="font-display text-2xl mb-2">Nothing to check out</h1>
        <Button asChild variant="outline" className="rounded-full px-8 mt-4">
          <Link to="/shop">Browse Products</Link>
        </Button>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="container py-20 text-center max-w-md mx-auto">
        <div className="h-16 w-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
          <span className="text-2xl">✓</span>
        </div>
        <h1 className="font-display text-3xl mb-3">Order Placed!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. You'll receive a confirmation email shortly.
        </p>
        <Button asChild className="rounded-full px-8 bg-primary text-primary-foreground">
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <main className="container py-12 max-w-2xl">
      <Link
        to="/cart"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Cart
      </Link>

      <h1 className="font-display text-3xl mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact */}
        <fieldset className="space-y-4">
          <legend className="font-display text-lg mb-2">Contact</legend>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required placeholder="you@example.com" className="mt-1" />
          </div>
        </fieldset>

        {/* Shipping */}
        <fieldset className="space-y-4">
          <legend className="font-display text-lg mb-2">Shipping Address</legend>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="first">First Name</Label>
              <Input id="first" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="last">Last Name</Label>
              <Input id="last" required className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" required className="mt-1" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="zip">ZIP</Label>
              <Input id="zip" required className="mt-1" />
            </div>
          </div>
        </fieldset>

        {/* Order Summary */}
        <div className="border rounded-xl p-6 bg-card space-y-3">
          <h3 className="font-display text-lg">Order Summary</h3>
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {product.name} × {quantity}
              </span>
              <span>${(product.price * quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-3 flex justify-between font-medium">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full rounded-full py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Place Order — ${totalPrice.toFixed(2)}
        </Button>
      </form>
    </main>
  );
};

export default Checkout;
