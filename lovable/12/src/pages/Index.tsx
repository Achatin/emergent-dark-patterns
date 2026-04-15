import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Index() {
  const featured = products.filter((p) => p.tags.includes("bestseller") || p.tags.includes("new")).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="aspect-[21/9] md:aspect-[3/1] relative">
          <img src={heroBanner} alt="Curated everyday essentials displayed on natural linen" className="w-full h-full object-cover" width={1920} height={800} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg space-y-4">
                <h1 className="text-3xl md:text-5xl font-display text-primary-foreground leading-tight">
                  Everyday Essentials, Thoughtfully Made
                </h1>
                <p className="text-primary-foreground/80 text-sm md:text-base max-w-sm">
                  Carefully sourced goods designed to last. Transparent pricing, honest materials.
                </p>
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/shop">
                    Shop All <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Transparent Pricing", desc: "No markups, no hidden fees. We show you what things cost to make." },
            { title: "Honest Materials", desc: "Every product page details exactly what it's made of and where." },
            { title: "Your Data, Your Choice", desc: "We never sell personal information. Minimal cookies, maximum respect." },
          ].map((v) => (
            <div key={v.title} className="space-y-2">
              <h3 className="font-display text-lg">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container pb-20">
        <div className="flex justify-between items-end mb-8">
          <h2 className="font-display text-2xl md:text-3xl">Featured Picks</h2>
          <Link to="/shop" className="text-sm font-medium text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
