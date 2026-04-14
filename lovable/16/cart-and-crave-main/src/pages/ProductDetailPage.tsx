import { useParams, Link } from "react-router-dom";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Star, Minus, Plus, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-sm underline mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const related = getRelatedProducts(product.id);

  const handleAdd = () => {
    addItem(product, quantity, selectedColor, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="container py-8">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-[3/4] rounded-lg overflow-hidden bg-muted"
        >
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          {product.badge && (
            <span className={`self-start mb-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm ${
              product.badge === "sale" ? "bg-badge-sale text-accent-foreground" :
              product.badge === "new" ? "bg-badge-new text-accent-foreground" :
              "bg-primary text-primary-foreground"
            }`}>
              {product.badge}
            </span>
          )}

          <h1 className="text-3xl font-serif mb-2">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-semibold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="text-xs font-bold text-badge-sale">SAVE {discount}%</span>
              </>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          {/* Colors */}
          {product.colors && (
            <div className="mb-5">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">
                Color{selectedColor ? `: ${selectedColor}` : ""}
              </label>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-3 py-1.5 text-sm border rounded-md transition-colors ${
                      selectedColor === c ? "border-foreground bg-primary text-primary-foreground" : "border-border hover:border-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Size</label>
              <div className="flex gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 text-sm font-medium border rounded-md transition-colors ${
                      selectedSize === s ? "border-foreground bg-primary text-primary-foreground" : "border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-border rounded-md">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5">
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2.5">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 py-3.5 text-sm font-semibold uppercase tracking-wide rounded-lg transition-colors ${
                added ? "bg-success text-success-foreground" : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              {added ? (
                <span className="inline-flex items-center gap-2"><Check className="h-4 w-4" /> Added!</span>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>

          {/* Details list */}
          <div className="border-t border-border pt-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Details</h3>
            <ul className="space-y-2">
              {product.details.map((d) => (
                <li key={d} className="text-sm text-muted-foreground flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-serif mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
