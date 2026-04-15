import { Store } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Store className="h-6 w-6" />
              <span className="text-xl font-semibold">ShopHub</span>
            </div>
            <p className="text-sm text-gray-600">
              Your one-stop shop for quality products at amazing prices.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="/products" className="hover:text-gray-900">
                  All Products
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-900">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-900">
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
