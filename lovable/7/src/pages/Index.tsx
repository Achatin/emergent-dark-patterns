import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

export default function Index() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <img
          src={heroBanner}
          alt="NOIR Collection"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-foreground">
              Elevated
              <br />
              <span className="text-primary">Essentials</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground max-w-sm">
              Premium merchandise designed for those who demand more from every detail.
            </p>
            <Link to="/shop">
              <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-heading px-8 h-12 text-sm tracking-wide">
                Shop Collection <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="container py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-2xl font-bold text-foreground">Featured</h2>
          <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
            View All <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="container">
        <div className="rounded bg-card border border-border p-12 md:p-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Quality Over Everything<span className="text-primary">.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto text-sm">
            Every piece is crafted with premium materials and meticulous attention to detail. No compromises.
          </p>
          <Link to="/shop">
            <Button variant="outline" className="mt-8 border-border text-foreground hover:bg-secondary font-heading">
              Explore All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
