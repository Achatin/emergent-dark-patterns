import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50 mt-auto">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg mb-3">Maison</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Curated goods for thoughtful living. Quality materials, timeless design.
          </p>
        </div>
        <div>
          <h5 className="font-sans text-sm font-semibold mb-3">Shop</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground transition-colors">All Products</Link></li>
            <li><Link to="/shop?cat=Electronics" className="hover:text-foreground transition-colors">Electronics</Link></li>
            <li><Link to="/shop?cat=Fashion" className="hover:text-foreground transition-colors">Fashion</Link></li>
            <li><Link to="/shop?cat=Home+%26+Living" className="hover:text-foreground transition-colors">Home & Living</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans text-sm font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-default">About</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Sustainability</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Careers</span></li>
          </ul>
        </div>
        <div>
          <h5 className="font-sans text-sm font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="hover:text-foreground transition-colors cursor-default">Contact</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">Shipping & Returns</span></li>
            <li><span className="hover:text-foreground transition-colors cursor-default">FAQ</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Maison. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
