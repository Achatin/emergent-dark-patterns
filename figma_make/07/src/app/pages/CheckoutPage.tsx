import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Check, CreditCard, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';

export function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const [shippingInfo, setShippingInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
  });

  const shipping = cartTotal >= 100 ? 0 : 15;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setStep(3);

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    toast.success('Order placed successfully!');

    // Clear cart and redirect after delay
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 5000);
  };

  if (cart.length === 0 && step !== 3) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[
              { number: 1, label: 'Shipping' },
              { number: 2, label: 'Payment' },
              { number: 3, label: 'Confirmation' },
            ].map((s, idx) => (
              <div key={s.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition ${
                      step > s.number
                        ? 'bg-green-600 text-white'
                        : step === s.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step > s.number ? <Check className="h-6 w-6" /> : s.number}
                  </div>
                  <span className={`text-sm mt-2 ${step === s.number ? 'font-semibold' : ''}`}>
                    {s.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={`w-24 h-1 mx-4 ${
                      step > s.number ? 'bg-green-600' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {step === 1 && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Shipping form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                <form onSubmit={handleShippingSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.firstName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.lastName}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Street Address</label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">City</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.city}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">State</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.state}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">ZIP Code</label>
                        <input
                          type="text"
                          required
                          value={shippingInfo.zip}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition mt-6"
                  >
                    Continue to Payment
                  </button>
                </form>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary cart={cart} cartTotal={cartTotal} shipping={shipping} tax={tax} total={total} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Lock className="h-6 w-6 text-green-600" />
                  <h2 className="text-2xl font-bold">Secure Payment</h2>
                </div>

                {/* Shipping summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold mb-2">Shipping to:</h3>
                  <p className="text-sm text-gray-700">
                    {shippingInfo.firstName} {shippingInfo.lastName}<br />
                    {shippingInfo.address}<br />
                    {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zip}<br />
                    {shippingInfo.phone}
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    className="text-sm text-blue-600 hover:text-blue-700 mt-2"
                  >
                    Edit shipping info
                  </button>
                </div>

                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Card Number</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={paymentInfo.cardNumber}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                        <CreditCard className="absolute right-4 top-3.5 h-6 w-6 text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.cardName}
                        onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Expiry Date</label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.expiry}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, expiry: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="MM/YY"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">CVV</label>
                        <input
                          type="text"
                          required
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="123"
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                      <Lock className="h-5 w-5 inline mr-2" />
                      Your payment information is encrypted and secure.
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 bg-white text-gray-700 py-4 rounded-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-400 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary cart={cart} cartTotal={cartTotal} shipping={shipping} tax={tax} total={total} />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-12 w-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
              <p className="text-gray-600 mb-2">Thank you for your purchase, {shippingInfo.firstName}!</p>
              <p className="text-gray-600 mb-8">Your order has been successfully placed and is being processed.</p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-semibold">#{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-semibold">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-semibold text-blue-600">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">{shippingInfo.email}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-8">
                A confirmation email has been sent to {shippingInfo.email} with your order details.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/')}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </button>
                <p className="text-sm text-gray-500">Redirecting to homepage in a few seconds...</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderSummary({ cart, cartTotal, shipping, tax, total }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {cart.map((item: any) => (
          <div key={item.id} className="flex space-x-3">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-gray-200" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="text-sm font-semibold text-blue-600">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          {shipping === 0 ? (
            <span className="font-semibold text-green-600">FREE</span>
          ) : (
            <span className="font-semibold">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between">
            <span className="text-lg font-bold">Total</span>
            <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
