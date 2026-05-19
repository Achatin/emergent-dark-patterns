import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link to={`/product/${product.id}`} className="group block animate-fade-in">
    <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      {product.badge && (
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-none text-xs">
          {product.badge}
        </Badge>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="text-sm font-medium group-hover:text-accent transition-colors">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
