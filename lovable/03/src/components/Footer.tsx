import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-secondary/50 py-12">
    <div className="container-shop">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h4 className="mb-3 text-lg">Goods&Co.</h4>
          <p className="text-sm text-muted-foreground">
            Thoughtfully curated everyday essentials, made to last.
          </p>
        </div>
        <div>
          <h5 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">Shop</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="text-foreground/70 hover:text-foreground">All Products</Link></li>
            <li><Link to="/shop?category=Bags" className="text-foreground/70 hover:text-foreground">Bags</Link></li>
            <li><Link to="/shop?category=Home" className="text-foreground/70 hover:text-foreground">Home</Link></li>
            <li><Link to="/shop?category=Accessories" className="text-foreground/70 hover:text-foreground">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">Company</h5>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>About</li>
            <li>Contact</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Goods&Co. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
