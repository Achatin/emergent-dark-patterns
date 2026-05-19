import { Link } from "react-router-dom";
import { Shield, Truck, RotateCcw } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      {/* Trust bar */}
      <div className="container py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Truck className="h-4 w-4 text-primary" />
          Free shipping over $75
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <RotateCcw className="h-4 w-4 text-primary" />
          30-day hassle-free returns
        </div>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Shield className="h-4 w-4 text-primary" />
          Secure checkout
        </div>
      </div>

      <div className="border-t">
        <div className="container py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-display text-lg mb-3 text-foreground">Goods&nbsp;&&nbsp;Co.</h4>
            <p className="text-muted-foreground leading-relaxed">
              Thoughtfully curated everyday goods. Transparent pricing, honest materials.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Shop</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/products" className="hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/products?category=Kitchen" className="hover:text-foreground transition-colors">Kitchen</Link></li>
              <li><Link to="/products?category=Home" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/products?category=Apparel" className="hover:text-foreground transition-colors">Apparel</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Company</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><span className="cursor-default">About Us</span></li>
              <li><span className="cursor-default">Sustainability</span></li>
              <li><span className="cursor-default">Careers</span></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-foreground">Support</h5>
            <ul className="space-y-2 text-muted-foreground">
              <li><span className="cursor-default">Contact</span></li>
              <li><span className="cursor-default">Shipping & Returns</span></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <div className="container py-4 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Goods & Co. All rights reserved. · We never sell your data.
          </div>
        </div>
      </div>
    </footer>
  );
}
