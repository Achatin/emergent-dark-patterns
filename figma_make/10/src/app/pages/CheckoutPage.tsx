import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Lock, Shield, CreditCard, CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<"form" | "processing" | "success">("form");

  const shipping = total >= 50 ? 0 : 8.99;
  const tax = total * 0.08;
  const finalTotal = total + shipping + tax;

  if (items.length === 0 && step === "form") {
    navigate("/cart");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("processing");

    setTimeout(() => {
      setStep("success");
      clearCart();
    }, 2000);
  };

  if (step === "success") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-green-600" />
        </motion.div>
        <h1 className="text-4xl mb-4">Order Confirmed!</h1>
        <p className="text-neutral-600 mb-8">
          Your order has been successfully placed. You'll receive a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-neutral-900 text-white px-8 py-3 hover:bg-neutral-800 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  if (step === "processing") {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="w-16 h-16 mx-auto mb-6 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin" />
        <h2 className="text-2xl mb-2">Processing your order...</h2>
        <p className="text-neutral-600">Please wait while we securely process your payment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center gap-2 mb-8">
        <Lock className="w-5 h-5" />
        <h1 className="text-3xl">Secure Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Privacy Notice */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <div className="flex gap-3">
                <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-900 mb-1">Your privacy is protected</p>
                  <p className="text-blue-700">
                    We only collect information necessary to process your order. Your data is encrypted and never sold to third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <section>
              <h2 className="text-xl mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    placeholder="you@example.com"
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    Used only for order confirmation and shipping updates
                  </p>
                </div>
              </div>
            </section>

            {/* Shipping Address */}
            <section>
              <h2 className="text-xl mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
            </section>

            {/* Payment Information */}
            <section>
              <h2 className="text-xl mb-4">Payment Information</h2>
              <div className="bg-neutral-50 border border-neutral-200 p-4 mb-4 rounded">
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="w-4 h-4" />
                  <span>All payment information is encrypted and secure</span>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm mb-1">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm mb-1">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      required
                      placeholder="MM/YY"
                      className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm mb-1">
                      CVV *
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      required
                      placeholder="123"
                      className="w-full border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Consent */}
            <section className="border-t border-neutral-200 pt-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <span className="text-sm text-neutral-700">
                  I agree to the{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  . I understand my data will only be used to process this order.
                </span>
              </label>
            </section>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-colors text-lg"
            >
              Complete Order - ${finalTotal.toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="border border-neutral-200 p-6 sticky top-24">
            <h2 className="text-xl mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 bg-neutral-100 shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="mb-1">{item.name}</p>
                    <p className="text-neutral-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 pb-4 border-b border-neutral-200 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-600">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-lg pt-4">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
