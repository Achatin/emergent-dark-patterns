import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded bg-card">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-heading text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground">${product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
}
