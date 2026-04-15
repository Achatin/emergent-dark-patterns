import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, EyeOff, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CheckoutFormData } from '../types';

export function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [showDataUsage, setShowDataUsage] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    saveInfo: false,
    emailUpdates: false,
    smsUpdates: false
  });

  const shipping = cartTotal >= 50 ? 0 : 8.99;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setOrderComplete(true);

    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (cart.length === 0 && !orderComplete) {
    navigate('/cart');
    return null;
  }

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="mb-4">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-2">
            Thank you for your purchase.
          </p>
          <p className="text-sm text-muted-foreground">
            A confirmation email has been sent to {formData.email}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-2 mb-8">
          <Lock className="w-5 h-5 text-primary" />
          <h1>Secure Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@example.com"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Used for order confirmation and shipping updates only
                    </p>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(555) 123-4567"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Optional. Only used for delivery coordination
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-6">Shipping Address</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2 text-sm">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2 text-sm">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block mb-2 text-sm">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="123 Main Street"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block mb-2 text-sm">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block mb-2 text-sm">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="CA"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="zipCode" className="block mb-2 text-sm">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="12345"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block mb-2 text-sm">
                        Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="mb-2">Privacy Preferences</h3>
                    <p className="text-sm text-muted-foreground">
                      You have full control over your data
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowDataUsage(!showDataUsage)}
                    className="flex items-center gap-2 text-sm text-primary"
                  >
                    {showDataUsage ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    {showDataUsage ? 'Hide' : 'View'} Details
                  </button>
                </div>

                {showDataUsage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground"
                  >
                    <h4 className="mb-2 text-foreground">How We Use Your Data:</h4>
                    <ul className="space-y-2">
                      <li>• <strong>Order Processing:</strong> Name, address, email (required)</li>
                      <li>• <strong>Shipping Updates:</strong> Email or phone (your choice)</li>
                      <li>• <strong>Never Shared:</strong> We do not sell your data to third parties</li>
                      <li>• <strong>Retention:</strong> Deleted 90 days after delivery unless you choose to save</li>
                    </ul>
                  </motion.div>
                )}

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border"
                    />
                    <div>
                      <div className="text-sm">Save my information for faster checkout</div>
                      <div className="text-xs text-muted-foreground">
                        Optional. You can delete this anytime from your account settings
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="emailUpdates"
                      checked={formData.emailUpdates}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border"
                    />
                    <div>
                      <div className="text-sm">Email me about this order</div>
                      <div className="text-xs text-muted-foreground">
                        Order confirmation and shipping updates only
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="smsUpdates"
                      checked={formData.smsUpdates}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-border"
                    />
                    <div>
                      <div className="text-sm">Send SMS delivery updates</div>
                      <div className="text-xs text-muted-foreground">
                        Optional. Standard message rates apply
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Complete Secure Order
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                By completing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex gap-3 text-sm">
                      <div className="w-16 h-16 rounded overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="line-clamp-1">{item.product.name}</div>
                        <div className="text-muted-foreground">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-border text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-primary">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-3 border-t border-border flex justify-between text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-2 text-xs text-muted-foreground">
                  <p>✓ 256-bit SSL encryption</p>
                  <p>✓ PCI DSS compliant</p>
                  <p>✓ 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
