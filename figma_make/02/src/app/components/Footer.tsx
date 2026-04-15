import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4">ShopHub</h3>
            <p className="text-sm text-gray-600">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop?category=Electronics" className="text-gray-600 hover:text-black">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Sports" className="text-gray-600 hover:text-black">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Home" className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Accessories" className="text-gray-600 hover:text-black">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
