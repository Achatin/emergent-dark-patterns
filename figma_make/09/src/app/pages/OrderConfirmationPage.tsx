import { Link } from 'react-router';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export function OrderConfirmationPage() {
  const orderNumber = `ORD-${Date.now().toString().slice(-8)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>

              <h1 className="mb-4 text-3xl">Order Confirmed!</h1>
              <p className="mb-6 text-gray-600">
                Thank you for your purchase. Your order has been successfully placed.
              </p>

              <div className="mb-8 rounded-lg bg-gray-50 p-6">
                <p className="mb-2 text-sm text-gray-600">Order Number</p>
                <p className="text-2xl font-semibold">{orderNumber}</p>
              </div>

              <div className="mb-8 space-y-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Confirmation Email Sent</h3>
                    <p className="text-sm text-gray-600">
                      We've sent a confirmation email with your order details to your email address.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Estimated Delivery</h3>
                    <p className="text-sm text-gray-600">
                      Your order will arrive by {estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/products" className="flex-1">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
                <Link to="/" className="flex-1">
                  <Button className="w-full">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
