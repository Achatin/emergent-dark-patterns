import { useCart } from "@/context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const shipping = totalPrice >= 100 ? 0 : 8;
  const total = totalPrice + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      toast.success("Order placed successfully!");
      navigate("/");
    }, 1500);
  };

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <Button variant="outline" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-4xl">
      <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <h1 className="font-heading text-3xl font-semibold text-foreground mb-8">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Contact</h2>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="email" className="text-xs uppercase tracking-wide text-muted-foreground">Email</Label>
                  <Input id="email" type="email" required className="rounded-none mt-1" placeholder="you@example.com" />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-xs uppercase tracking-wide text-muted-foreground">First Name</Label>
                  <Input id="firstName" required className="rounded-none mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-xs uppercase tracking-wide text-muted-foreground">Last Name</Label>
                  <Input id="lastName" required className="rounded-none mt-1" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address" className="text-xs uppercase tracking-wide text-muted-foreground">Address</Label>
                  <Input id="address" required className="rounded-none mt-1" />
                </div>
                <div>
                  <Label htmlFor="city" className="text-xs uppercase tracking-wide text-muted-foreground">City</Label>
                  <Input id="city" required className="rounded-none mt-1" />
                </div>
                <div>
                  <Label htmlFor="zip" className="text-xs uppercase tracking-wide text-muted-foreground">ZIP Code</Label>
                  <Input id="zip" required className="rounded-none mt-1" />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Payment</h2>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="card" className="text-xs uppercase tracking-wide text-muted-foreground">Card Number</Label>
                  <Input id="card" required className="rounded-none mt-1" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry" className="text-xs uppercase tracking-wide text-muted-foreground">Expiry</Label>
                    <Input id="expiry" required className="rounded-none mt-1" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-xs uppercase tracking-wide text-muted-foreground">CVC</Label>
                    <Input id="cvc" required className="rounded-none mt-1" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="md:col-span-2">
            <div className="bg-secondary p-6 rounded-sm sticky top-24">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.image} alt={item.product.name} className="w-14 h-16 object-cover rounded-sm" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-foreground">${item.product.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">{shipping === 0 ? "Free" : `$${shipping}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${total}</span>
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full mt-6 rounded-none uppercase tracking-widest text-xs font-semibold"
              >
                {submitting ? "Processing..." : `Pay $${total}`}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
