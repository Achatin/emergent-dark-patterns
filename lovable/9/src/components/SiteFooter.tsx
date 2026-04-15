import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl mb-3">MAISON</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Thoughtfully curated goods for modern living. Quality you can feel, design you can see.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Clothing" className="hover:text-primary-foreground transition-colors">Clothing</Link></li>
              <li><Link to="/shop?category=Accessories" className="hover:text-primary-foreground transition-colors">Accessories</Link></li>
              <li><Link to="/shop?category=Home+%26+Living" className="hover:text-primary-foreground transition-colors">Home & Living</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><span className="cursor-default">About Us</span></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Careers</span></li>
              <li><span className="cursor-default">Press</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><span className="cursor-default">Contact Us</span></li>
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">FAQ</span></li>
              <li><span className="cursor-default">Size Guide</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs text-primary-foreground/50">
          © 2026 MAISON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
