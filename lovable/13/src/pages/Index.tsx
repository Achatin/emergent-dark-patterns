import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, RotateCcw, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const featured = products.filter((p) => p.badge).slice(0, 4);
const topRated = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);

const trustBadges = [
  { icon: Truck, label: "Free Shipping", desc: "On orders over $75" },
  { icon: Shield, label: "Secure Checkout", desc: "SSL encrypted" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day guarantee" },
  { icon: Star, label: "Top Rated", desc: "4.8★ avg reviews" },
];

const categoryCards = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&q=80", to: "/shop?category=Electronics" },
  { name: "Clothing", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&q=80", to: "/shop?category=Clothing" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&q=80", to: "/shop?category=Home+%26+Living" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", to: "/shop?category=Accessories" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container relative z-10 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground/90 mb-6">
              New Spring Collection
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight text-primary-foreground mb-6">
              Thoughtfully curated for modern living
            </h1>
            <p className="text-lg text-primary-foreground/75 mb-8 max-w-lg">
              Discover products that blend quality craftsmanship with timeless design. Free shipping on orders over $75.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
                <Link to="/shop">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline-hero" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/shop?category=Electronics">Trending</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10" />
      </section>

      {/* Trust Badges */}
      <section className="border-b">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-3 py-5 px-4 md:justify-center">
              <b.icon className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold">{b.label}</p>
                <p className="text-xs text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif">Shop by Category</h2>
          <Link to="/shop" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoryCards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={c.to}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-serif text-primary-foreground">{c.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/50 py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-serif">Featured Products</h2>
            <Link to="/shop" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
              Shop All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="container py-16">
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "var(--hero-gradient)" }}>
          <h2 className="text-2xl md:text-4xl font-serif text-primary-foreground mb-4">
            Get 10% Off Your First Order
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-md mx-auto">
            Sign up for our newsletter and receive an exclusive discount code.
          </p>
          <div className="flex max-w-sm mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg px-4 py-3 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button variant="hero" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Top Rated */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif">Customer Favorites</h2>
          <Link to="/shop" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            See More <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRated.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
