import { Link } from "react-router-dom";
import { Shield, Truck, RotateCcw } from "lucide-react";

export function StoreFooter() {
  return (
    <footer className="border-t bg-card mt-16">
      <div className="container py-12">
        {/* Trust bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pb-10 border-b">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-trust shrink-0" />
            <div>
              <p className="text-sm font-medium">Free Shipping over $75</p>
              <p className="text-xs text-muted-foreground">No hidden fees, ever</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-trust shrink-0" />
            <div>
              <p className="text-sm font-medium">30-Day Returns</p>
              <p className="text-xs text-muted-foreground">No questions asked</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-trust shrink-0" />
            <div>
              <p className="text-sm font-medium">Privacy First</p>
              <p className="text-xs text-muted-foreground">We never sell your data</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-3">Goods & Co.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thoughtfully made goods for everyday living. Transparent pricing, ethical sourcing, honest business.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/shop" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Clothing" className="hover:text-foreground transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-foreground transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=Home+%26+Living" className="hover:text-foreground transition-colors">Home & Living</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Transparency</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Our Pricing Promise</li>
              <li>Supply Chain</li>
              <li>Materials Glossary</li>
              <li>Impact Report</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Shipping & Returns</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© 2026 Goods & Co. All rights reserved.</p>
          <p>No cookies are used for tracking. We respect your privacy.</p>
        </div>
      </div>
    </footer>
  );
}
