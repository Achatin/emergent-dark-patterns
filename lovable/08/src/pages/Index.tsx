import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts, getNewArrivals, categories } from "@/data/products";

export default function Index() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-muted overflow-hidden">
        <div className="container grid lg:grid-cols-2 items-center min-h-[70vh]">
          <div className="py-16 lg:py-24 space-y-6 z-10">
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-accent">
              New Season
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Timeless pieces,
              <br />
              modern living
            </h1>
            <p className="font-body text-muted-foreground max-w-md text-lg leading-relaxed">
              Discover our curated collection of thoughtfully designed essentials. Quality materials, lasting style.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/shop">
                <Button size="lg" className="gap-2 font-body">
                  Shop Collection <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/shop?category=clothing">
                <Button variant="outline" size="lg" className="font-body">
                  New Arrivals
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative h-full">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop"
              alt="Fashion editorial"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b">
        <div className="container py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
              <Truck className="w-4 h-4 text-accent" /> Free shipping over $150
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
              <RefreshCw className="w-4 h-4 text-accent" /> 30-day free returns
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-body text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" /> 2-year warranty
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <h2 className="font-display text-3xl text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.filter(c => c.id !== "all").map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center"
            >
              <div className="text-center z-10">
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <span className="font-body font-semibold text-sm">{cat.name}</span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl">Bestsellers</h2>
          <Link to="/shop" className="text-sm font-body font-medium text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl">Join the MAISON community</h2>
          <p className="font-body text-primary-foreground/70 max-w-md mx-auto">
            Get early access to new arrivals, exclusive offers, and 10% off your first order.
          </p>
          <div className="flex max-w-sm mx-auto gap-2 pt-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-4 py-2.5 text-sm font-body placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl">New Arrivals</h2>
          <Link to="/shop" className="text-sm font-body font-medium text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="container pb-16">
        <div className="bg-secondary rounded-xl p-8 sm:p-12 text-center space-y-4">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
          </div>
          <blockquote className="font-display text-xl sm:text-2xl max-w-2xl mx-auto">
            "The quality is exceptional. Every piece feels considered and well-made. MAISON has become my go-to."
          </blockquote>
          <p className="text-sm font-body text-muted-foreground">— Sarah M., verified buyer</p>
        </div>
      </section>
    </div>
  );
}
