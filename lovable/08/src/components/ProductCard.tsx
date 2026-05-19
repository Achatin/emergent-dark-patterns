import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { Star } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block animate-fade-in"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-body font-semibold rounded-sm ${
            product.badge === "Sale" ? "bg-sale text-accent-foreground" : "bg-foreground text-background"
          }`}>
            {product.badge}
          </span>
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="font-body text-sm font-medium text-foreground group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="text-xs font-body text-muted-foreground">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-body font-semibold text-sm">${product.price}</span>
          {product.originalPrice && (
            <span className="font-body text-xs text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
