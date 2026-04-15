import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const badgeColors: Record<string, string> = {
    sale: "bg-badge-sale text-accent-foreground",
    new: "bg-badge-new text-accent-foreground",
    bestseller: "bg-primary text-primary-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-3">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm ${badgeColors[product.badge]}`}>
              {product.badge}
            </span>
          )}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviewCount})</span>
          </div>
          <h3 className="font-sans text-sm font-medium">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        className="mt-2 w-full py-2 text-xs font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/90"
      >
        Quick Add
      </button>
    </motion.div>
  );
}
