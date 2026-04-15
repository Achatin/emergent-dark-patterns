import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container pt-24 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-primary text-sm mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    if (product.sizes && !selectedSize) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container pt-24 pb-16">
      <Link to="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft size={14} /> Back to shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-[3/4] rounded overflow-hidden bg-card"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest">{product.category}</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">{product.name}</h1>
          <p className="font-heading text-2xl text-primary font-semibold mt-4">${product.price}</p>
          <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{product.description}</p>

          {product.sizes && (
            <div className="mt-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Size</p>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`h-10 min-w-[40px] px-3 rounded text-xs font-medium transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleAdd}
            disabled={product.sizes ? !selectedSize : false}
            className="mt-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-heading tracking-wide disabled:opacity-40"
          >
            {added ? (
              <span className="flex items-center gap-2"><Check size={16} /> Added to Cart</span>
            ) : (
              "Add to Cart"
            )}
          </Button>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Details</p>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
