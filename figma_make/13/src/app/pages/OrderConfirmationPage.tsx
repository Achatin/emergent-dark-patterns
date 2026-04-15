import { Link } from 'react-router';
import { CheckCircle, Package } from 'lucide-react';

export function OrderConfirmationPage() {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>

      <h1 className="text-4xl mb-4">Order Confirmed!</h1>
      <p className="text-xl text-gray-600 mb-8">
        Thank you for your purchase. Your order has been successfully placed.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Order Details</h2>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Order Number</span>
            <span className="font-semibold">#{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Order Date</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Delivery</span>
            <span>{estimatedDelivery.toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 text-blue-900 rounded-lg p-4 mb-8">
        <p className="text-sm">
          A confirmation email has been sent to your email address with your order details and tracking information.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/products"
          className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
        <button className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-50">
          Track Order
        </button>
      </div>
    </div>
  );
}
