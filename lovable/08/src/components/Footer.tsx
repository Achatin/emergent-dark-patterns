import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl mb-4">MAISON</h3>
            <p className="text-sm opacity-70 font-body leading-relaxed">
              Thoughtfully designed essentials for modern living. Quality materials, timeless style.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2 text-sm opacity-70 font-body">
              <li><Link to="/shop?category=clothing" className="hover:opacity-100 transition-opacity">Clothing</Link></li>
              <li><Link to="/shop?category=accessories" className="hover:opacity-100 transition-opacity">Accessories</Link></li>
              <li><Link to="/shop?category=footwear" className="hover:opacity-100 transition-opacity">Footwear</Link></li>
              <li><Link to="/shop?category=home" className="hover:opacity-100 transition-opacity">Home & Living</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-2 text-sm opacity-70 font-body">
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Size Guide</span></li>
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">Contact Us</span></li>
              <li><span className="hover:opacity-100 transition-opacity cursor-pointer">FAQ</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-sm opacity-70 font-body mb-3">Subscribe for 10% off your first order.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-3 py-2 text-sm font-body rounded-l-md placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent text-accent-foreground px-4 py-2 text-sm font-body font-medium rounded-r-md hover:bg-accent/90 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs opacity-50 font-body">
          © 2026 MAISON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
