import { Link } from "react-router";
import { Star } from "lucide-react";
import { Product } from "../types";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-lg">
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-sm line-clamp-2 hover:text-gray-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          
          <div className="mt-2 flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>

          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            disabled={!product.inStock}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
