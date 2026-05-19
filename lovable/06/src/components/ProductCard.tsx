import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 rounded-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground ${
                product.badge === "sale" ? "bg-badge-sale" : "bg-badge-new"
              }`}
            >
              {product.badge === "sale" ? `-${discount}%` : "New"}
            </span>
          )}
        </div>
        <div className="mt-3 space-y-1">
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <h3 className="text-sm font-medium leading-snug group-hover:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
