const StoreFooter = () => (
  <footer className="border-t bg-secondary/50 mt-20">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div>
        <h4 className="font-display text-lg mb-3">GOODS&CO</h4>
        <p className="text-muted-foreground leading-relaxed">
          Curated everyday essentials crafted with care and intention.
        </p>
      </div>
      <div>
        <h4 className="font-display text-lg mb-3">Help</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li className="hover:text-foreground transition-colors cursor-pointer">Shipping & Returns</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">FAQ</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div>
        <h4 className="font-display text-lg mb-3">Follow</h4>
        <ul className="space-y-2 text-muted-foreground">
          <li className="hover:text-foreground transition-colors cursor-pointer">Instagram</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">Twitter</li>
          <li className="hover:text-foreground transition-colors cursor-pointer">Pinterest</li>
        </ul>
      </div>
    </div>
    <div className="border-t py-6 text-center text-xs text-muted-foreground">
      © 2026 GOODS&CO. All rights reserved.
    </div>
  </footer>
);

export default StoreFooter;
