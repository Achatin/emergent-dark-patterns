import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-lg mb-4">Goods & Co.</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Thoughtfully curated goods for everyday life. Quality materials, timeless design.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Shop</h4>
            <div className="flex flex-col gap-2">
              {["All Products", "Apparel", "Accessories", "Home", "Outdoor"].map((item) => (
                <Link key={item} to="/shop" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Company</h4>
            <div className="flex flex-col gap-2">
              {["About", "Sustainability", "Careers", "Press"].map((item) => (
                <span key={item} className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Support</h4>
            <div className="flex flex-col gap-2">
              {["Shipping & Returns", "FAQ", "Contact", "Size Guide"].map((item) => (
                <span key={item} className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-xs opacity-50">© 2026 Goods & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
