import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const featured = products.slice(0, 4);
const trending = products.filter(p => p.badge === "new").slice(0, 3);

const perks = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
  { icon: Shield, title: "2-Year Warranty", desc: "On all products" },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container grid md:grid-cols-2 items-center gap-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-accent">Spring Collection 2026</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Objects for <br />
              <span className="italic">Everyday</span> Life
            </h1>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Thoughtfully designed goods that bring quality and intention to your daily rituals. Made to last, priced to love.
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/5] md:aspect-square rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="Curated home goods"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Perks Bar */}
      <section className="border-b">
        <div className="container grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
          {perks.map(p => (
            <div key={p.title} className="flex items-center gap-4 py-6 md:px-8">
              <p.icon className="h-6 w-6 text-accent shrink-0" />
              <div>
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-1">Curated For You</p>
            <h2 className="text-2xl md:text-3xl tracking-tight">Featured Products</h2>
          </div>
          <Link to="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 md:py-20 text-center space-y-4">
          <h2 className="text-3xl md:text-4xl tracking-tight">Quality Without Compromise</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">
            Every product in our collection is selected for exceptional materials, thoughtful design, and lasting value.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 mt-4">
            <Link to="/shop">Explore Collection</Link>
          </Button>
        </div>
      </section>

      {/* Trending */}
      {trending.length > 0 && (
        <section className="container py-16">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-1">Just Arrived</p>
            <h2 className="text-2xl md:text-3xl tracking-tight">New This Week</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trending.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
