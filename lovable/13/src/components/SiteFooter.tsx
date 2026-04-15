import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-3">MAISON</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Curated goods for modern living. Quality, sustainability, and timeless design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">All Products</Link></li>
            <li><Link to="/shop?category=Electronics" className="hover:text-foreground transition-colors">Electronics</Link></li>
            <li><Link to="/shop?category=Clothing" className="hover:text-foreground transition-colors">Clothing</Link></li>
            <li><Link to="/shop?category=Home+%26+Living" className="hover:text-foreground transition-colors">Home & Living</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground cursor-pointer transition-colors">Shipping & Returns</span></li>
            <li><span className="hover:text-foreground cursor-pointer transition-colors">FAQ</span></li>
            <li><span className="hover:text-foreground cursor-pointer transition-colors">Contact Us</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Stay Connected</h4>
          <p className="text-sm text-muted-foreground mb-3">Get 10% off your first order.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-xs text-muted-foreground">
          © 2026 MAISON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
