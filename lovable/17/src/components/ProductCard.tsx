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
    <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {!product.inStock && (
        <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
          <Badge variant="secondary" className="text-xs">Sold Out</Badge>
        </div>
      )}
      {product.originalPrice && product.inStock && (
        <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs">
          Sale
        </Badge>
      )}
    </div>
    <div className="space-y-1">
      <h3 className="font-body font-medium text-sm group-hover:text-accent transition-colors">{product.name}</h3>
      <p className="text-xs text-muted-foreground">{product.category}</p>
      <div className="flex items-center gap-2">
        <span className="font-medium text-sm">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  </Link>
);

export default ProductCard;
