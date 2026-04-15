import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              NOIR<span className="text-primary">.</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Premium merchandise for those who demand more. Curated essentials, elevated.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Shop</h4>
            <div className="flex flex-col gap-2">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link>
              <Link to="/shop?category=Apparel" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Apparel</Link>
              <Link to="/shop?category=Accessories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accessories</Link>
              <Link to="/shop?category=Footwear" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Footwear</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-3">Info</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Shipping & Returns</span>
              <span className="text-sm text-muted-foreground">Contact Us</span>
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© 2026 NOIR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
