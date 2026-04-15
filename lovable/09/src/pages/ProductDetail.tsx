import { useParams, Link } from "react-router-dom";
import { PRODUCTS, formatPrice } from "@/lib/store";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Star, Truck, RotateCcw, Shield, Minus, Plus, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl">Product not found</h1>
        <Button variant="hero" className="mt-6" asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="relative overflow-hidden rounded-xl bg-secondary aspect-[3/4]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">{product.name}</h1>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-bold text-foreground">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  <span className="text-sm font-semibold text-accent">Save {formatPrice(savings)}</span>
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-md">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Button variant="hero" size="lg" className="flex-1" onClick={() => addItem(product, qty)}>
                Add to Cart · {formatPrice(product.price * qty)}
              </Button>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
              {[
                { icon: Truck, text: "Free shipping over $75" },
                { icon: RotateCcw, text: "30-day returns" },
                { icon: Shield, text: "2-year warranty" },
              ].map((ts) => (
                <div key={ts.text} className="flex flex-col items-center text-center gap-1">
                  <ts.icon className="w-4 h-4 text-accent" />
                  <span className="text-[11px] text-muted-foreground">{ts.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl text-foreground mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
