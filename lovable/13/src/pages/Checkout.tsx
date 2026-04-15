import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

export default function Checkout() {
  const { items, totalPrice, totalSavings, clearCart } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const shipping = totalPrice >= 75 ? 0 : 9.99;
  const tax = totalPrice * 0.08;
  const orderTotal = totalPrice + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-2">No items to checkout</h1>
            <Link to="/shop" className="text-primary hover:underline">Browse Products</Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      toast.success("Order placed successfully!", { description: "Thank you for your purchase." });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <div className="container py-8 flex-1">
        <Link to="/cart" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact */}
              <section>
                <h2 className="text-lg font-serif mb-4">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="First Name" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="Last Name" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required type="email" placeholder="Email" className="sm:col-span-2 rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="text-lg font-serif mb-4">Shipping Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Address" className="sm:col-span-2 rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="City" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="State / Province" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="ZIP / Postal Code" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="Country" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </section>

              {/* Payment */}
              <section>
                <h2 className="text-lg font-serif mb-4">Payment Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Card Number" className="sm:col-span-2 rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="MM / YY" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required placeholder="CVC" className="rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </section>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-xl border bg-card p-6 sticky top-24">
                <h2 className="text-lg font-serif mb-4">Order Summary</h2>

                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-3">
                      <img src={item.product.image} alt={item.product.name} className="h-12 w-12 rounded-md object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  {totalSavings > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Savings</span>
                      <span>-${totalSavings.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-6"
                >
                  {submitting ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="h-4 w-4" /> Processing...
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Lock className="h-4 w-4" /> Place Order — ${orderTotal.toFixed(2)}
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  Your payment information is secure and encrypted.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <SiteFooter />
    </div>
  );
}
