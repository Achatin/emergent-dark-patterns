import { Link } from "react-router-dom";
import { Shield, Truck, RotateCcw, Lock } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-secondary/30 mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <Truck className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">Free shipping over $50</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <RotateCcw className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">30-day free returns</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Shield className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">Secure checkout</span>
        </div>
        <div className="flex flex-col gap-2 items-center text-center">
          <Lock className="h-5 w-5 text-accent" />
          <span className="text-sm font-medium">Privacy protected</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-heading text-lg mb-3">Goodfolk</h4>
          <p className="text-muted-foreground leading-relaxed">
            Thoughtfully sourced goods for everyday living. We believe in honest pricing, transparent sourcing, and respecting your privacy.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold mb-3">Shop</h4>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <Link to="/shop" className="hover:text-foreground transition-colors">All Products</Link>
            <Link to="/shop?category=Kitchen" className="hover:text-foreground transition-colors">Kitchen</Link>
            <Link to="/shop?category=Home" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/shop?category=Accessories" className="hover:text-foreground transition-colors">Accessories</Link>
          </div>
        </div>
        <div>
          <h4 className="font-body font-semibold mb-3">Information</h4>
          <div className="flex flex-col gap-2 text-muted-foreground">
            <span>Shipping & Returns</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-center text-xs text-muted-foreground">
        © 2026 Goodfolk. All rights reserved. We never sell your data.
      </div>
    </div>
  </footer>
);

export default Footer;
