import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ArrowRight, Leaf, Eye, Heart } from "lucide-react";

const Index = () => {
  const featured = products.filter(p => p.inStock).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading leading-tight">
            Honest goods for<br />everyday living
          </h1>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Thoughtfully sourced, transparently priced. No hidden fees, no dark patterns — just things worth having.
          </p>
          <Button asChild size="lg" className="group">
            <Link to="/shop">
              Shop All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/50 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-md bg-accent/10">
              <Eye className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-sm mb-1">Full Transparency</h3>
              <p className="text-sm text-muted-foreground">Every price breakdown and material source is listed clearly. No surprises at checkout.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-md bg-accent/10">
              <Leaf className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-sm mb-1">Ethically Sourced</h3>
              <p className="text-sm text-muted-foreground">We know where every product comes from. Materials and makers are documented.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-2 rounded-md bg-accent/10">
              <Heart className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h3 className="font-body font-semibold text-sm mb-1">Your Privacy Matters</h3>
              <p className="text-sm text-muted-foreground">We collect only what's needed to ship your order. No tracking, no selling data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading">Featured</h2>
          <Link to="/shop" className="text-sm text-accent hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
