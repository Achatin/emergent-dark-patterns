import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, ChevronLeft, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = products.find(p => p.id === id);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">Product not found</p>
            <Button asChild variant="outline"><Link to="/shop">Back to Shop</Link></Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    addItem(product, qty);
    toast.success(`${product.name} added to cart`, {
      action: { label: "View Cart", onClick: () => navigate("/cart") },
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground truncate">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square rounded-lg overflow-hidden bg-secondary"
          >
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-col"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl tracking-tight mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-sm font-semibold text-badge-sale">Save {discount}%</span>
                </>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            {product.features && (
              <div className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-3.5 w-3.5 text-success shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Add to cart */}
            <div className="flex items-center gap-3 mt-auto">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="px-3 py-2 text-sm hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 text-sm font-medium min-w-[2rem] text-center">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="px-3 py-2 text-sm hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
              <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-success" /> Free shipping on orders over $100
            </p>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xl md:text-2xl tracking-tight mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
