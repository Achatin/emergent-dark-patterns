import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { products } from "@/lib/store-data";
import { Shield, Eye, Heart, Lock } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <StoreHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBanner}
              alt="Cozy lifestyle scene with natural materials"
              width={1920}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="relative container py-24 md:py-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground leading-tight mb-4">
                Honest Goods,<br />Fairly Priced
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-8 font-body leading-relaxed">
                Every price is transparent. Every material is traceable. Every product is made to last.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/shop">Shop All Products</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: "Full Transparency", desc: "See the real cost breakdown for every product we sell." },
              { icon: Shield, title: "Trust by Design", desc: "No dark patterns, no hidden fees, no manipulative urgency." },
              { icon: Lock, title: "Privacy Respected", desc: "No tracking cookies. No data selling. Minimal data collection." },
              { icon: Heart, title: "Your Choice", desc: "No pre-checked boxes. No forced sign-ups. You decide everything." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-trust-muted mb-4">
                  <Icon className="h-5 w-5 text-trust" />
                </div>
                <h3 className="font-display text-lg mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl md:text-3xl">Featured Products</h2>
            <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Transparency promise */}
        <section className="bg-card border-y">
          <div className="container py-16 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl mb-4">Our Pricing Promise</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We believe you deserve to know what you're paying for. Every product page shows the materials, where it's made, and what goes into the price. No markups hidden behind "retail pricing."
            </p>
            <p className="text-sm text-muted-foreground">
              If you find a lower price elsewhere for the same quality, we'll match it.
            </p>
          </div>
        </section>
      </main>

      <StoreFooter />
    </div>
  );
};

export default Index;
