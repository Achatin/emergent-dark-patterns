import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="container py-24 md:py-36 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight max-w-3xl"
          >
            Goods for
            <br />
            <span className="italic text-primary">Everyday</span> Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-muted-foreground text-base md:text-lg max-w-md"
          >
            Thoughtfully designed essentials crafted from quality materials that stand the test of time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="rounded-none px-8 tracking-wide uppercase text-xs font-semibold">
              <Link to="/shop">
                Shop Now <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Apparel", "Accessories", "Home", "Lifestyle"].map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to={`/shop?category=${cat}`}
                className="block p-8 text-center border border-border rounded-sm hover:border-primary hover:bg-primary/5 transition-all group"
              >
                <span className="text-sm font-medium uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                  {cat}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">Featured</h2>
          <Link to="/shop" className="text-sm text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-foreground text-background">
        <div className="container py-16 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold italic">Free shipping on orders over $100</h2>
          <p className="mt-3 text-sm opacity-70">Plus easy 30-day returns on everything.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
