import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-3">MAISON</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thoughtfully crafted goods for everyday living. Quality materials, timeless design.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="text-foreground hover:text-primary transition-colors">All Products</Link></li>
            <li><Link to="/shop?category=Apparel" className="text-foreground hover:text-primary transition-colors">Apparel</Link></li>
            <li><Link to="/shop?category=Accessories" className="text-foreground hover:text-primary transition-colors">Accessories</Link></li>
            <li><Link to="/shop?category=Home" className="text-foreground hover:text-primary transition-colors">Home</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Info</h4>
          <ul className="space-y-2 text-sm text-foreground">
            <li>Free shipping on orders over $100</li>
            <li>30-day returns</li>
            <li>hello@maisongoods.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4 text-center text-xs text-muted-foreground">
          © 2026 Maison. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
