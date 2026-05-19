import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, CheckCircle } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container-shop flex flex-col items-center justify-center py-28 text-center">
          <CheckCircle className="mb-4 h-16 w-16 text-accent" />
          <h1 className="text-3xl text-foreground">Thank you!</h1>
          <p className="mt-2 text-muted-foreground">Your order has been placed successfully.</p>
          <Link to="/shop">
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">Continue Shopping</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-shop py-12">
        <Link to="/cart" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to cart
        </Link>
        <h1 className="mb-8 text-4xl text-foreground">Checkout</h1>

        <div className="grid gap-10 lg:grid-cols-3">
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-2">
            {/* Contact */}
            <fieldset className="space-y-4 rounded-lg border bg-card p-6">
              <legend className="font-display text-lg text-foreground">Contact</legend>
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" required placeholder="you@example.com" className="mt-1" />
              </div>
            </fieldset>

            {/* Shipping */}
            <fieldset className="space-y-4 rounded-lg border bg-card p-6">
              <legend className="font-display text-lg text-foreground">Shipping Address</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="first" className="text-foreground">First Name</Label>
                  <Input id="first" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="last" className="text-foreground">Last Name</Label>
                  <Input id="last" required className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="address" className="text-foreground">Address</Label>
                <Input id="address" required className="mt-1" />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <Label htmlFor="city" className="text-foreground">City</Label>
                  <Input id="city" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state" className="text-foreground">State</Label>
                  <Input id="state" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="zip" className="text-foreground">ZIP</Label>
                  <Input id="zip" required className="mt-1" />
                </div>
              </div>
            </fieldset>

            {/* Payment */}
            <fieldset className="space-y-4 rounded-lg border bg-card p-6">
              <legend className="font-display text-lg text-foreground">Payment</legend>
              <div>
                <Label htmlFor="card" className="text-foreground">Card Number</Label>
                <Input id="card" required placeholder="4242 4242 4242 4242" className="mt-1" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="expiry" className="text-foreground">Expiry</Label>
                  <Input id="expiry" required placeholder="MM / YY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="cvc" className="text-foreground">CVC</Label>
                  <Input id="cvc" required placeholder="123" className="mt-1" />
                </div>
              </div>
            </fieldset>

            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Place Order — ${totalPrice}
            </Button>
          </form>

          {/* Order summary sidebar */}
          <div className="h-fit rounded-lg border bg-card p-6">
            <h2 className="mb-4 font-display text-xl text-foreground">Your Order</h2>
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-3">
                  <div className="h-12 w-10 shrink-0 overflow-hidden rounded bg-secondary">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" width={40} height={48} />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <span className="text-sm font-medium text-foreground">${product.price * quantity}</span>
                </div>
              ))}
            </div>
            <div className="my-4 border-t" />
            <div className="flex justify-between text-lg font-semibold text-foreground">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
