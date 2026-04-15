import { Link } from "react-router-dom";
import { Shield, Truck, RefreshCw } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t border-border bg-secondary/50">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-sm text-foreground">Free shipping over $75</p>
            <p className="text-xs text-muted-foreground mt-1">Standard delivery 3–5 business days</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <RefreshCw className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-sm text-foreground">30-day returns</p>
            <p className="text-xs text-muted-foreground mt-1">No questions asked, free return shipping</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-sm text-foreground">Secure checkout</p>
            <p className="text-xs text-muted-foreground mt-1">SSL-encrypted, no data sold to third parties</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="font-display text-lg text-foreground">
          Maison
        </Link>
        <div className="flex gap-6 text-xs text-muted-foreground">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Shipping & Returns</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Maison. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
