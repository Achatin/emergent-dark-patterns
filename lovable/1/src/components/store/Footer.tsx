const Footer = () => (
  <footer className="border-t border-border mt-20">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-lg mb-3">Maison</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Curated goods for thoughtful living. Every piece tells a story.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">Shop</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Apparel</li>
          <li>Accessories</li>
          <li>Home</li>
          <li>Electronics</li>
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-3">Info</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Shipping & Returns</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 text-center text-xs text-muted-foreground">
        © 2026 Maison. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
