import { Link } from "react-router-dom";
import Layout from "@/components/store/Layout";
import ProductCard from "@/components/store/ProductCard";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-24 md:py-36 flex flex-col items-start gap-6 max-w-2xl">
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">New Collection</span>
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] text-foreground">
            Goods for<br />thoughtful living
          </h1>
          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Curated essentials crafted with care. Each piece chosen for its quality, beauty, and lasting character.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm mt-2"
          >
            Shop All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="container pb-24">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-heading text-3xl text-foreground">Featured</h2>
          <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-accent text-accent-foreground">
        <div className="container py-20 text-center space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl">Crafted with intention</h2>
          <p className="text-accent-foreground/70 max-w-lg mx-auto">
            We partner with makers who share our commitment to quality materials, ethical production, and timeless design.
          </p>
          <Link
            to="/shop"
            className="inline-block mt-4 border border-accent-foreground/30 text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent-foreground hover:text-accent transition-colors rounded-sm"
          >
            Our Story
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
