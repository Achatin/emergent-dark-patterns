import { Link } from "react-router-dom";
import { Product } from "@/lib/store-data";
import { getProductImage } from "@/lib/product-images";
import { Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = getProductImage(product.id);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block rounded-lg overflow-hidden bg-card border hover:shadow-md transition-shadow duration-300"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={product.name}
          loading="lazy"
          width={640}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-medium text-sm leading-tight mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-semibold">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-warning text-warning" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
