import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, CreditCard, Truck } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const shipping = subtotal >= 100 ? 0 : 9.95;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (submitted) {
    return (
      <main className="container py-20 text-center max-w-lg mx-auto">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="w-16 h-16 bg-success text-success-foreground rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif mb-3">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-8">Thank you for your purchase. You'll receive a confirmation email shortly.</p>
          <Link to="/shop" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg">
            Continue Shopping
          </Link>
        </motion.div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="container py-20 text-center">
        <p className="text-muted-foreground mb-4">Your cart is empty.</p>
        <Link to="/shop" className="text-sm underline">Start shopping</Link>
      </main>
    );
  }

  return (
    <main className="container py-8">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="text-3xl font-serif mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact */}
          <section>
            <h2 className="text-lg font-serif mb-4">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </section>

          {/* Shipping */}
          <section>
            <h2 className="text-lg font-serif mb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="First name" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <input placeholder="Last name" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <input placeholder="Address" className="col-span-2 px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <input placeholder="City" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <input placeholder="ZIP code" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-lg font-serif mb-4">Payment</h2>
            <div className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CreditCard className="h-4 w-4" /> Credit / Debit Card
              </div>
              <input placeholder="Card number" className="w-full px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="MM / YY" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
                <input placeholder="CVC" className="px-4 py-3 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring" />
              </div>
            </div>
          </section>

          <button
            onClick={() => {
              clearCart();
              setSubmitted(true);
            }}
            className="w-full py-4 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
          >
            <Lock className="h-4 w-4" /> Place Order — ${total.toFixed(2)}
          </button>
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl p-6 sticky top-24">
            <h2 className="font-serif text-lg mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="w-14 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Truck className="h-3.5 w-3.5" /> Shipping
                </span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t border-border">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
