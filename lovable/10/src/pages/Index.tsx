import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-lifestyle.jpg";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Curated lifestyle products"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative container flex h-full items-end pb-16">
          <div className="max-w-lg">
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground leading-tight">
              Thoughtfully made,
              <br />
              honestly priced.
            </h1>
            <p className="mt-4 text-primary-foreground/80 text-base max-w-md">
              Every product lists its full cost breakdown — materials, labor, and our margin.
              No hidden markups, ever.
            </p>
            <Link to="/shop">
              <Button className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-6">
                Shop the collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-b border-border bg-secondary/50 py-6">
        <div className="container flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm text-muted-foreground">
          <span>✦ Transparent pricing</span>
          <span>✦ Free shipping over $75</span>
          <span>✦ 30-day free returns</span>
          <span>✦ No data selling, ever</span>
        </div>
      </section>

      {/* Featured products */}
      <section className="container py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-2xl text-foreground">Featured</h2>
          <Link
            to="/shop"
            className="text-sm text-accent hover:underline underline-offset-4 flex items-center gap-1"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust / transparency section */}
      <section className="bg-secondary py-16">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">
            Radical transparency
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We believe you deserve to know exactly what you're paying for.
            Every product page shows the full material and labor cost.
            Our margin is a flat 2× — no inflated "retail" prices.
            We don't track you across the web, sell your data, or use dark patterns.
            Your cart is yours until you're ready.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
