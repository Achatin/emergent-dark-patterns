import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t bg-card mt-16">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-lg mb-3">Goodwares</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thoughtfully sourced everyday goods. We believe in transparency, quality, and fair pricing.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
            <li><Link to="/products?category=Kitchen" className="hover:text-foreground transition-colors">Kitchen</Link></li>
            <li><Link to="/products?category=Home+%26+Living" className="hover:text-foreground transition-colors">Home & Living</Link></li>
            <li><Link to="/products?category=Clothing" className="hover:text-foreground transition-colors">Clothing</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><span className="cursor-default">About Us</span></li>
            <li><span className="cursor-default">Sustainability</span></li>
            <li><span className="cursor-default">Contact</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Your Privacy</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We don't track you across the web. No data is sold to third parties. We collect only what's needed to fulfill your order.
          </p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
        <span>© {new Date().getFullYear()} Goodwares. All prices include applicable taxes.</span>
        <div className="flex gap-4">
          <span className="cursor-default hover:text-foreground transition-colors">Privacy Policy</span>
          <span className="cursor-default hover:text-foreground transition-colors">Terms of Service</span>
          <span className="cursor-default hover:text-foreground transition-colors">Cookie Preferences</span>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
