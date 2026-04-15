import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lock, CreditCard, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const shipping = subtotal >= 75 ? 0 : 8.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (placed) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">🎉</span>
          </div>
          <h1 className="font-display text-3xl mb-3">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-2">Thank you for your purchase. Your order #MN-{Math.random().toString(36).substring(2, 8).toUpperCase()} has been placed.</p>
          <p className="text-sm text-muted-foreground mb-8">A confirmation email has been sent to your inbox.</p>
          <Button variant="hero" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl mb-4">Your cart is empty</h1>
        <Button variant="hero" asChild>
          <Link to="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Processing your order...");
    setTimeout(() => {
      clearCart();
      setPlaced(true);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">Checkout</span>
      </nav>

      <h1 className="font-display text-3xl md:text-4xl mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Contact Information</h2>
            <input required type="email" placeholder="Email address" className="w-full h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          </section>

          {/* Shipping */}
          <section>
            <h2 className="font-semibold text-lg mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="First name" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="Last name" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="Address" className="col-span-2 h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="City" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="ZIP code" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" /> Payment
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="Card number" className="col-span-2 h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="MM/YY" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              <input required placeholder="CVC" className="h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
          </section>

          <Button variant="hero" size="lg" type="submit" className="w-full">
            <Lock className="w-4 h-4 mr-2" /> Place Order · {formatPrice(total)}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your payment information is encrypted and secure. We never store your card details.
          </p>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-secondary rounded-xl p-6 sticky top-28">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="relative">
                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded-md object-cover" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground rounded-full text-[10px] font-bold flex items-center justify-center">{item.quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(item.product.price)}</p>
                  </div>
                  <p className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base border-t border-border pt-3 mt-3">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
