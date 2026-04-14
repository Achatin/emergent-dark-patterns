import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/store/Layout";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Check } from "lucide-react";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    navigate("/cart");
    return null;
  }

  if (submitted) {
    return (
      <Layout>
        <div className="container py-24 text-center space-y-4 max-w-lg mx-auto animate-fade-in">
          <div className="h-16 w-16 rounded-full bg-accent flex items-center justify-center mx-auto">
            <Check className="h-8 w-8 text-accent-foreground" />
          </div>
          <h1 className="font-heading text-3xl">Order Confirmed</h1>
          <p className="text-muted-foreground">Thank you for your purchase! We'll send you a confirmation email shortly.</p>
          <Link
            to="/shop"
            className="inline-block mt-4 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to cart
        </Link>

        <h1 className="font-heading text-4xl mb-10">Checkout</h1>

        <div className="grid md:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-6">
            <div>
              <h2 className="text-sm font-medium mb-4">Contact</h2>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            <div>
              <h2 className="text-sm font-medium mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="First name" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                <input placeholder="Last name" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
              <input placeholder="Address" required className="w-full mt-3 border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              <div className="grid grid-cols-3 gap-3 mt-3">
                <input placeholder="City" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                <input placeholder="State" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                <input placeholder="ZIP" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium mb-4">Payment</h2>
              <input placeholder="Card number" required className="w-full border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              <div className="grid grid-cols-2 gap-3 mt-3">
                <input placeholder="MM / YY" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
                <input placeholder="CVC" required className="border border-border bg-card rounded-sm px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-foreground text-background py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
            >
              Place Order — ${totalPrice}
            </button>
          </form>

          <div className="md:col-span-2">
            <h2 className="text-sm font-medium mb-4">Order Summary</h2>
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-3">
                  <div className="w-14 h-16 rounded-sm overflow-hidden bg-secondary shrink-0">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                  </div>
                  <p className="text-sm font-medium">${product.price * quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border mt-6 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-muted-foreground">Free</span>
              </div>
              <div className="flex justify-between text-lg font-heading pt-2 border-t border-border">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
