import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/store";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";

interface Props {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[11px] font-semibold px-2.5 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Button
              variant="hero"
              className="w-full"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
            >
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-foreground leading-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
