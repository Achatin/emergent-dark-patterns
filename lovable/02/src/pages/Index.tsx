import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container py-24 md:py-32 flex flex-col items-center text-center">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4 animate-fade-in">
            New Season Collection
          </span>
          <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl max-w-3xl leading-[1.1] animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Curated Essentials for Modern Living
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg text-base md:text-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Thoughtfully designed, responsibly made. Discover pieces that stand the test of time.
          </p>
          <div className="mt-8 flex gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/products">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground">Curated picks</span>
            <h2 className="heading-display text-3xl md:text-4xl mt-1">Featured</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 text-center">
          <h2 className="heading-display text-2xl md:text-3xl mb-4">Free Shipping on Orders Over $150</h2>
          <p className="text-primary-foreground/70 text-sm">Plus hassle-free returns within 30 days.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
