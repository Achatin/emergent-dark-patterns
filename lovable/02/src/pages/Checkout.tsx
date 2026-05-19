import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const shipping = totalPrice >= 150 ? 0 : 12;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container flex-1 flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <CheckCircle className="h-16 w-16 mx-auto text-accent mb-4" />
            <h1 className="heading-display text-3xl mb-2">Thank You!</h1>
            <p className="text-muted-foreground mb-6">Your order has been placed successfully.</p>
            <Button className="rounded-full" onClick={() => navigate("/")}>Continue Shopping</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container py-10">
        <h1 className="heading-display text-3xl md:text-4xl mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" required />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required />
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" required />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-semibold mb-4">Payment</h2>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="•••• •••• •••• ••••" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry">Expiry</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="•••" required />
                  </div>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full">Place Order — ${totalPrice + shipping}</Button>
          </form>

          <div className="bg-secondary/50 rounded-lg p-6 h-fit sticky top-24">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <img src={product.image} alt={product.name} className="h-14 w-12 object-cover rounded" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <span className="text-sm font-medium">${product.price * quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${totalPrice + shipping}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
