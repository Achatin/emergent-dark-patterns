import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/product/${product.id}`}
    className="group block animate-fade-in"
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={800}
        height={1000}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {product.badge && (
        <Badge className="absolute left-3 top-3 bg-accent text-accent-foreground border-0 text-xs font-medium">
          {product.badge}
        </Badge>
      )}
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="font-body text-sm font-medium text-foreground">{product.name}</h3>
      <p className="text-sm text-muted-foreground">${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
