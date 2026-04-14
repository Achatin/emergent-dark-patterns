import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-secondary mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-medium px-2.5 py-1 rounded-none">
              {product.badge}
            </Badge>
          )}
        </div>
        <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-0.5">${product.price}</p>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
