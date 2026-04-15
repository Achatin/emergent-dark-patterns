import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const tagColor = {
    bestseller: "bg-accent text-accent-foreground",
    new: "bg-success text-success-foreground",
    sale: "bg-destructive text-destructive-foreground",
  };

  return (
    <Link to={`/product/${product.id}`} className="group block animate-fade-in">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={600}
          height={600}
        />
        {product.tags[0] && (
          <Badge className={`absolute top-3 left-3 text-xs ${tagColor[product.tags[0] as keyof typeof tagColor] || ""}`}>
            {product.tags[0]}
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">Sold Out</span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium group-hover:text-accent transition-colors">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>★ {product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}
