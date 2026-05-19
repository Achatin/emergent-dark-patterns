import React from 'react';
import { Link } from 'react-router';
import { Shield, Lock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About TrustMart</h3>
            <p className="text-sm leading-relaxed">
              We're committed to transparent pricing, ethical sourcing, and respecting your privacy. Shop with confidence.
            </p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
            </ul>
          </div>

          {/* Trust & Security */}
          <div>
            <h3 className="text-white font-semibold mb-4">Trust & Security</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Shield className="w-5 h-5 flex-shrink-0 text-green-400" />
                <span>SSL Encrypted Checkout</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Lock className="w-5 h-5 flex-shrink-0 text-green-400" />
                <span>Your Data Protected</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0 text-green-400" />
                <span>No Spam Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2026 TrustMart. All rights reserved. Built with transparency and trust.</p>
          <p className="mt-2 text-xs text-gray-400">
            We respect your privacy and never sell your data to third parties.
          </p>
        </div>
      </div>
    </footer>
  );
}
