import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { ArrowRight, Truck, RotateCcw, Shield, Star } from "lucide-react";

const FEATURED = PRODUCTS.slice(0, 4);
const COLLECTIONS = [
  { name: "Clothing", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop", href: "/shop?category=Clothing" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&h=800&fit=crop", href: "/shop?category=Accessories" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&h=800&fit=crop", href: "/shop?category=Home+%26+Living" },
];

const TRUST_SIGNALS = [
  { icon: Truck, label: "Free Shipping", desc: "On orders over $75" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day free returns" },
  { icon: Shield, label: "Secure Checkout", desc: "256-bit encryption" },
  { icon: Star, label: "Top Rated", desc: "4.8/5 avg rating" },
];

export default function Index() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm tracking-wider uppercase">New Collection</span>
              <h1 className="font-display text-4xl md:text-6xl mt-3 mb-6 leading-[1.1] text-foreground">
                Everyday Objects, Extraordinary Craft
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
                Discover our curated collection of premium goods designed for modern living. Quality that speaks for itself.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/shop">Shop Now <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/shop?category=Clothing">Explore Clothing</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&h=800&fit=crop"
                alt="Curated collection display"
                className="rounded-2xl shadow-2xl object-cover w-full max-h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_SIGNALS.map((ts) => (
              <div key={ts.label} className="flex items-center gap-3">
                <ts.icon className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{ts.label}</p>
                  <p className="text-xs text-muted-foreground">{ts.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl text-foreground">Featured Products</h2>
            <p className="text-muted-foreground mt-1">Handpicked favorites our customers love</p>
          </div>
          <Link to="/shop" className="text-sm font-medium text-accent hover:underline hidden md:block">
            View All <ArrowRight className="w-3 h-3 inline ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURED.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <h2 className="font-display text-3xl text-foreground mb-10">Shop by Category</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {COLLECTIONS.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={col.href} className="group relative block overflow-hidden rounded-xl aspect-[3/4]">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-2xl text-background">{col.name}</h3>
                  <span className="text-sm text-background/80 mt-1 inline-flex items-center gap-1">
                    Shop Now <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="font-display text-3xl text-foreground mb-3">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get 10% off your first order plus early access to new arrivals and exclusive deals.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-11 px-4 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="hero" size="lg">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
