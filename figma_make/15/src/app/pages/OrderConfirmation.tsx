import { useLocation, Link, Navigate } from 'react-router';
import { CheckCircle2, Package, Mail, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function OrderConfirmation() {
  const location = useLocation();
  const { orderId, formData } = location.state || {};

  if (!orderId) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl">
          {/* Success Message */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-6">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl">Order Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Thank you for your purchase
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
                <Package className="h-5 w-5 shrink-0 text-blue-600" />
                <div>
                  <p className="font-medium">Order Number</p>
                  <p className="text-sm text-gray-600">{orderId}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-purple-50 p-4">
                <Mail className="h-5 w-5 shrink-0 text-purple-600" />
                <div>
                  <p className="font-medium">Confirmation Email</p>
                  <p className="text-sm text-gray-600">
                    A confirmation email has been sent to {formData?.email || 'your email'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600">
                <p className="font-medium text-gray-900">
                  {formData?.firstName} {formData?.lastName}
                </p>
                <p>{formData?.address}</p>
                <p>
                  {formData?.city}, {formData?.state} {formData?.zipCode}
                </p>
                <p className="mt-2">{formData?.phone}</p>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  1
                </div>
                <div>
                  <p className="font-medium">Order Processing</p>
                  <p className="text-sm text-gray-600">
                    We're preparing your items for shipment
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  2
                </div>
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-sm text-gray-600">
                    Your order will be shipped within 2-3 business days
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600">
                  3
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-sm text-gray-600">
                    Expected delivery in 5-7 business days
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/" className="flex-1">
              <Button size="lg" className="w-full gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Link to="/products" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
