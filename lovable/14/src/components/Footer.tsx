import { Link } from "react-router-dom";
import { Shield, Truck, RotateCcw, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-12">
        {/* Trust bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b">
          {[
            { icon: Truck, label: "Free shipping over $75", sub: "Standard 3-5 business days" },
            { icon: RotateCcw, label: "30-day returns", sub: "No questions asked" },
            { icon: Shield, label: "1-year warranty", sub: "On all products" },
            { icon: Lock, label: "Secure checkout", sub: "SSL encrypted payments" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center gap-2">
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">{item.label}</span>
              <span className="text-xs text-muted-foreground">{item.sub}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg mb-3">Commongoods</h3>
            <p className="text-sm text-muted-foreground">Everyday essentials, thoughtfully made.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Shop</h4>
            <div className="flex flex-col gap-2">
              {["All Products", "Accessories", "Home & Living", "Bags"].map((l) => (
                <Link key={l} to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <div className="flex flex-col gap-2">
              {["About", "Sustainability", "Contact"].map((l) => (
                <span key={l} className="text-sm text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Policies</h4>
            <div className="flex flex-col gap-2">
              {["Privacy Policy", "Terms of Service", "Shipping & Returns", "Cookie Preferences"].map((l) => (
                <span key={l} className="text-sm text-muted-foreground">{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <span>© 2026 Commongoods. All rights reserved.</span>
          <span>We never sell your personal data. <Link to="/shop" className="underline">Learn more</Link></span>
        </div>
      </div>
    </footer>
  );
}
