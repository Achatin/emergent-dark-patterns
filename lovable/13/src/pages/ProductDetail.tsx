import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag, Check, Truck, RotateCcw, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif mb-2">Product Not Found</h1>
            <Link to="/shop" className="text-primary hover:underline">Back to Shop</Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`${product.name} added to cart`, { description: `Qty: ${qty}` });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <div className="container py-8">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-serif mb-3">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="rounded-full bg-badge px-2.5 py-0.5 text-xs font-semibold text-badge-foreground">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-success shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2.5 text-sm font-medium border-x">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <Button variant="hero" size="lg" className="flex-1" onClick={handleAdd}>
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart — ${(product.price * qty).toFixed(2)}
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground border-t pt-4">
              <span className="flex items-center gap-1"><Truck className="h-3.5 w-3.5" /> Free shipping over $75</span>
              <span className="flex items-center gap-1"><RotateCcw className="h-3.5 w-3.5" /> 30-day returns</span>
              <span className="flex items-center gap-1"><Shield className="h-3.5 w-3.5" /> 2-year warranty</span>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-serif mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
