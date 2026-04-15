import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/product/${product.id}`}
    className="group block animate-fade-in"
  >
    <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={800}
        height={1024}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-3 space-y-1">
      <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
        {product.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        ${product.price.toFixed(2)}
      </p>
    </div>
  </Link>
);

export default ProductCard;
