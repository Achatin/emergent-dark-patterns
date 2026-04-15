import { Link } from "react-router-dom";
import { ArrowRight, Truck, RotateCcw, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
  { icon: Shield, title: "Secure Checkout", desc: "SSL encrypted" },
];

export default function HomePage() {
  const featured = products.filter((p) => p.badge === "bestseller" || p.badge === "new").slice(0, 4);
  const onSale = products.filter((p) => p.badge === "sale");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Lifestyle hero"
          width={1920}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-3 font-sans font-medium">
              Spring Collection 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground leading-tight mb-6">
              Everyday Objects, Extraordinary Craft
            </h1>
            <p className="text-primary-foreground/80 mb-8 max-w-sm">
              Curated goods made to last. Natural materials, timeless design, thoughtful details.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground text-sm font-semibold uppercase tracking-wide rounded-lg hover:bg-accent/90 transition-colors"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex items-center gap-3 justify-center">
                <f.icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">Curated for You</p>
            <h2 className="text-3xl font-serif">Featured Products</h2>
          </div>
          <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Category Banner */}
      <section className="bg-surface-warm py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Apparel", img: "/images/sweater-1.jpg" },
              { label: "Accessories", img: "/images/bag-1.jpg" },
              { label: "Home", img: "/images/pourover-1.jpg" },
              { label: "Outdoor", img: "/images/hammock-1.jpg" },
            ].map((cat) => (
              <Link
                key={cat.label}
                to={`/shop?category=${cat.label}`}
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <img src={cat.img} alt={cat.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                <span className="absolute bottom-4 left-4 font-serif text-lg text-primary-foreground">{cat.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* On Sale */}
      {onSale.length > 0 && (
        <section className="container py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-badge-sale mb-2 font-bold">Limited Time</p>
              <h2 className="text-3xl font-serif">On Sale</h2>
            </div>
            <Link to="/shop" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Shop All Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {onSale.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-serif mb-3">Stay in the Loop</h2>
          <p className="text-sm opacity-70 mb-6">Get 10% off your first order plus early access to new arrivals and sales.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary-foreground/40"
            />
            <button className="px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
