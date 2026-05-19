import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Lock, Shield, CreditCard, CheckCircle, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ShippingOption } from '../types';

const shippingOptions: ShippingOption[] = [
  { id: 'standard', name: 'Standard Shipping', price: 5.99, estimatedDays: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 12.99, estimatedDays: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Shipping', price: 24.99, estimatedDays: '1 business day' },
];

export function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    saveInfo: false,
    marketingEmails: false,
  });

  const [selectedShipping, setSelectedShipping] = React.useState<string>('standard');
  const [orderComplete, setOrderComplete] = React.useState(false);

  if (items.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  const shipping = shippingOptions.find(opt => opt.id === selectedShipping)?.price || 0;
  const shippingDiscount = subtotal >= 50 ? shipping : 0;
  const finalShipping = subtotal >= 50 ? 0 : shipping;
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + estimatedTax + finalShipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. A confirmation email has been sent to {formData.email}.
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>What happens next:</strong>
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1 text-left">
              <li>• Your order is being processed</li>
              <li>• You'll receive tracking information within 24 hours</li>
              <li>• Estimated delivery: {shippingOptions.find(opt => opt.id === selectedShipping)?.estimatedDays}</li>
            </ul>
          </div>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Trust Banner */}
        <div className="bg-blue-600 text-white rounded-lg p-4 mb-8 flex items-center justify-center gap-2">
          <Shield className="w-5 h-5" />
          <span>Secure Checkout - Your information is encrypted and protected</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Used only for order confirmation and shipping updates
                    </p>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="marketingEmails"
                      checked={formData.marketingEmails}
                      onChange={(e) => setFormData({ ...formData, marketingEmails: e.target.checked })}
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="marketingEmails" className="text-sm text-gray-700">
                      I want to receive marketing emails about new products and special offers (optional)
                    </label>
                  </div>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP/Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      For delivery notifications only
                    </p>
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Method</h2>
                <div className="space-y-3">
                  {shippingOptions.map(option => (
                    <label
                      key={option.id}
                      className="flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                      style={{ borderColor: selectedShipping === option.id ? '#2563eb' : '#e5e7eb' }}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={selectedShipping === option.id}
                          onChange={(e) => setSelectedShipping(e.target.value)}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.name}</div>
                          <div className="text-sm text-gray-600">{option.estimatedDays}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        {subtotal >= 50 ? (
                          <div>
                            <div className="text-green-600 font-semibold">FREE</div>
                            <div className="text-xs text-gray-500 line-through">${option.price.toFixed(2)}</div>
                          </div>
                        ) : (
                          <div className="font-semibold text-gray-900">${option.price.toFixed(2)}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
                {subtotal >= 50 && (
                  <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm flex items-start gap-2">
                    <Info className="w-5 h-5 flex-shrink-0" />
                    <span>You qualify for free shipping on all methods!</span>
                  </div>
                )}
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Payment Information</h2>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  All transactions are secure and encrypted. We never store your card information.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVC <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-4 border-t border-gray-200">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      checked={formData.saveInfo}
                      onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                      className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="saveInfo" className="text-sm text-gray-700">
                      Securely save this information for faster checkout next time (optional)
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {item.product.name}
                        </div>
                        <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                        <div className="text-sm font-semibold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>
                      {finalShipping === 0 ? (
                        <span className="text-green-600 font-medium">FREE</span>
                      ) : (
                        `$${finalShipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shippingDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Shipping Discount</span>
                      <span>-${shippingDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-700">
                    <span>Estimated Tax</span>
                    <span>${estimatedTax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-2xl font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  Complete Order
                </button>

                <div className="mt-4 text-xs text-gray-500 text-center">
                  By completing this order, you agree to our Terms of Service and Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
