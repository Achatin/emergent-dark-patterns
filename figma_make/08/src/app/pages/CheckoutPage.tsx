import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Lock, CreditCard, Package, CheckCircle } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export function CheckoutPage() {
  const { cart, onClearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'payment' | 'complete'>('shipping');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
    window.scrollTo(0, 0);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('complete');
    onClearCart();
    window.scrollTo(0, 0);
  };

  if (cart.length === 0 && step !== 'complete') {
    navigate('/cart');
    return null;
  }

  if (step === 'complete') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="size-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="size-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-2">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            <p className="text-sm text-gray-600 mb-8">
              Order #12345 • Confirmation email sent
            </p>

            <Card className="p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/shop')}>
                Continue Shopping
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/')}>
                Back to Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 ${step === 'shipping' ? 'text-blue-600' : 'text-green-600'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${
                step === 'shipping' ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
              }`}>
                {step === 'shipping' ? '1' : <CheckCircle className="size-5" />}
              </div>
              <span className="font-medium hidden sm:inline">Shipping</span>
            </div>
            <div className="w-16 h-1 bg-gray-300">
              <div className={`h-full transition-all ${step === 'payment' ? 'bg-blue-600 w-full' : 'w-0'}`} />
            </div>
            <div className={`flex items-center gap-2 ${step === 'payment' ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`size-8 rounded-full flex items-center justify-center ${
                step === 'payment' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <span className="font-medium hidden sm:inline">Payment</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => step === 'payment' ? setStep('shipping') : navigate('/cart')}
            className="mb-4"
          >
            <ArrowLeft className="size-4 mr-2" />
            Back
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Forms */}
            <div className="lg:col-span-2">
              {step === 'shipping' && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                  <form onSubmit={handleSubmitShipping}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" required />
                      </div>

                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input id="address" required />
                      </div>

                      <div>
                        <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                        <Input id="apartment" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input id="city" required />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input id="state" required />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code *</Label>
                          <Input id="zip" required />
                        </div>
                      </div>

                      <Separator className="my-6" />

                      <div>
                        <h3 className="font-semibold mb-4">Shipping Method</h3>
                        <RadioGroup defaultValue="standard">
                          <div className="flex items-center justify-between p-4 border rounded-lg mb-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="standard" id="standard" />
                              <Label htmlFor="standard" className="cursor-pointer">
                                <div>
                                  <p className="font-medium">Standard Shipping</p>
                                  <p className="text-sm text-gray-600">5-7 business days</p>
                                </div>
                              </Label>
                            </div>
                            <span className="font-bold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                          </div>
                          <div className="flex items-center justify-between p-4 border rounded-lg mb-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="express" id="express" />
                              <Label htmlFor="express" className="cursor-pointer">
                                <div>
                                  <p className="font-medium">Express Shipping</p>
                                  <p className="text-sm text-gray-600">2-3 business days</p>
                                </div>
                              </Label>
                            </div>
                            <span className="font-bold">$9.99</span>
                          </div>
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="overnight" id="overnight" />
                              <Label htmlFor="overnight" className="cursor-pointer">
                                <div>
                                  <p className="font-medium">Overnight Shipping</p>
                                  <p className="text-sm text-gray-600">1 business day</p>
                                </div>
                              </Label>
                            </div>
                            <span className="font-bold">$19.99</span>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-6">
                      Continue to Payment
                    </Button>
                  </form>
                </Card>
              )}

              {step === 'payment' && (
                <Card className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                  <form onSubmit={handleSubmitPayment}>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-4">Payment Method</h3>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                          <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="cursor-pointer flex items-center gap-2">
                              <CreditCard className="size-5" />
                              Credit / Debit Card
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-4 border rounded-lg mb-2">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="cursor-pointer">
                              PayPal
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-4 border rounded-lg">
                            <RadioGroupItem value="apple" id="apple" />
                            <Label htmlFor="apple" className="cursor-pointer">
                              Apple Pay
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {paymentMethod === 'card' && (
                        <>
                          <Separator className="my-6" />
                          <div>
                            <Label htmlFor="cardNumber">Card Number *</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                          </div>

                          <div>
                            <Label htmlFor="cardName">Cardholder Name *</Label>
                            <Input id="cardName" required />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date *</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input id="cvv" placeholder="123" type="password" maxLength={4} required />
                            </div>
                          </div>
                        </>
                      )}

                      <Separator className="my-6" />

                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm cursor-pointer">
                          I agree to the Terms of Service and Privacy Policy
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="save" />
                        <Label htmlFor="save" className="text-sm cursor-pointer">
                          Save payment information for faster checkout
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full mt-6">
                      <Lock className="size-4 mr-2" />
                      Complete Order - ${total.toFixed(2)}
                    </Button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                      Your payment information is secure and encrypted
                    </p>
                  </form>
                </Card>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                <div className="space-y-3 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-16 object-cover rounded"
                        />
                        <Badge className="absolute -top-2 -right-2 size-5 flex items-center justify-center p-0 text-xs">
                          {item.quantity}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-2">{item.name}</p>
                        <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <Badge className="bg-green-600 h-5">FREE</Badge>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Package className="size-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-900">
                        {shipping === 0 ? 'Free Shipping Applied!' : 'Fast & Secure Delivery'}
                      </p>
                      <p className="text-blue-700">
                        {shipping === 0
                          ? 'You saved $9.99 on shipping'
                          : 'Track your order in real-time'}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}