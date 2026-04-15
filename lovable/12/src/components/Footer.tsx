import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-primary text-primary-foreground mt-20">
    <div className="container py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <h3 className="font-display text-xl mb-4">MAISON</h3>
        <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
          Thoughtfully designed essentials for everyday living. Quality materials, fair prices, radical transparency.
        </p>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Shop</h4>
        <div className="space-y-2 font-body text-sm">
          <Link to="/products" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">All Products</Link>
          <Link to="/products?category=clothing" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Clothing</Link>
          <Link to="/products?category=accessories" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Accessories</Link>
          <Link to="/products?category=home" className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
        </div>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Company</h4>
        <div className="space-y-2 font-body text-sm text-primary-foreground/70">
          <p>About Us</p>
          <p>Sustainability</p>
          <p>Careers</p>
        </div>
      </div>
      <div>
        <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-primary-foreground/50">Support</h4>
        <div className="space-y-2 font-body text-sm text-primary-foreground/70">
          <p>Shipping & Returns</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
      </div>
    </div>
    <div className="container border-t border-primary-foreground/10 py-6">
      <p className="text-xs text-primary-foreground/40 font-body text-center">© 2026 Maison. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
