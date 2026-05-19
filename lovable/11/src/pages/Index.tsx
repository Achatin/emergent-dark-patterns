import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Leaf, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const featured = products.slice(0, 4);
  const onSale = products.filter((p) => p.originalPrice);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="container py-20 md:py-32 flex flex-col items-center text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground mb-4 leading-tight">
            Everyday goods,<br />honestly made.
          </h1>
          <p className="text-primary-foreground/80 max-w-md text-lg mb-8">
            Transparent pricing. Sustainable materials. No hidden fees, ever.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-body font-semibold">
            <Link to="/products">
              Shop the collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground" />
          <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-primary-foreground" />
        </div>
      </section>

      {/* Value props */}
      <section className="container py-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { icon: Leaf, title: "Sustainably sourced", desc: "We trace every material back to its origin." },
          { icon: Shield, title: "Transparent pricing", desc: "See the real cost breakdown of every product." },
          { icon: Truck, title: "Free shipping over $75", desc: "No surprise fees at checkout." },
        ].map((v) => (
          <div key={v.title} className="flex items-start gap-4 p-5 rounded-lg bg-trust">
            <v.icon className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Featured */}
      <section className="container pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">Featured</h2>
          <Link to="/products" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* On sale */}
      {onSale.length > 0 && (
        <section className="bg-secondary/50">
          <div className="container py-16">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">On Sale</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {onSale.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
