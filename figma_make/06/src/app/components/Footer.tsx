import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ShopHub</h3>
            <p className="text-sm mb-4">
              Your one-stop shop for quality products at great prices. Shop with confidence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop?category=Electronics" className="hover:text-white transition">Electronics</Link></li>
              <li><Link to="/shop?category=Fashion" className="hover:text-white transition">Fashion</Link></li>
              <li><Link to="/shop?category=Home" className="hover:text-white transition">Home & Living</Link></li>
              <li><Link to="/shop?category=Sports" className="hover:text-white transition">Sports & Outdoors</Link></li>
              <li><Link to="/shop" className="hover:text-white transition">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-3">Subscribe for exclusive deals and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-white"
              />
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 ShopHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
