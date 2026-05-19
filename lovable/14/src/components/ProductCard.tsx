import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Star } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/product/${product.id}`}
    className="group block animate-fade-in"
    aria-label={`${product.name} — $${product.price.toFixed(2)}`}
  >
    <div className="aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
      <img
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <div className="space-y-1">
      <h3 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          <Star className="h-3 w-3 fill-accent text-accent" />
          <span className="text-xs text-muted-foreground">{product.rating}</span>
        </div>
        <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted-foreground line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      {!product.inStock && (
        <span className="text-xs text-destructive font-medium">Out of stock</span>
      )}
    </div>
  </Link>
);

export default ProductCard;
