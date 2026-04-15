import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import { products } from "@/data/products";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Curated everyday essentials"
          width={1920}
          height={800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
        <div className="relative container flex h-full flex-col items-start justify-end pb-16">
          <h1 className="font-display text-4xl md:text-6xl text-primary-foreground leading-tight max-w-xl">
            Everyday Essentials, Elevated
          </h1>
          <p className="mt-3 text-primary-foreground/80 max-w-md text-lg font-body">
            A curated collection of goods made to last.
          </p>
          <Button asChild className="mt-6 rounded-full px-8 gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/shop">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl">Featured</h2>
          <Link to="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Categories Banner */}
      <section className="container pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            to="/shop?category=Accessories"
            className="group relative overflow-hidden rounded-xl bg-secondary h-64 flex items-end p-8 transition-shadow hover:shadow-product-hover"
          >
            <div>
              <h3 className="font-display text-2xl text-foreground">Accessories</h3>
              <p className="text-sm text-muted-foreground mt-1">Watches, sunglasses & more</p>
            </div>
          </Link>
          <Link
            to="/shop?category=Footwear"
            className="group relative overflow-hidden rounded-xl bg-secondary h-64 flex items-end p-8 transition-shadow hover:shadow-product-hover"
          >
            <div>
              <h3 className="font-display text-2xl text-foreground">Footwear</h3>
              <p className="text-sm text-muted-foreground mt-1">Sneakers built to last</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
