import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50 mt-20">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-xl mb-3">MAISON</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Curated essentials for modern living. Quality craftsmanship, timeless design.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Shop</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <Link to="/products" className="block hover:text-foreground transition-colors">All Products</Link>
          <Link to="/products?category=Clothing" className="block hover:text-foreground transition-colors">Clothing</Link>
          <Link to="/products?category=Accessories" className="block hover:text-foreground transition-colors">Accessories</Link>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-3">Help</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <span className="block">Shipping & Returns</span>
          <span className="block">Contact Us</span>
          <span className="block">FAQ</span>
        </div>
      </div>
    </div>
    <div className="container pb-6">
      <p className="text-xs text-muted-foreground">© 2026 Maison. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
