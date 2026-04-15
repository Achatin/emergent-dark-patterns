import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => (
  <Link
    to={`/product/${product.id}`}
    className="group block animate-fade-in"
  >
    <div className="overflow-hidden rounded-lg bg-secondary/30 aspect-square">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={800}
        height={800}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="mt-3 space-y-1">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        {product.category}
      </p>
      <h3 className="font-body font-medium text-foreground">{product.name}</h3>
      <p className="font-body text-sm text-muted-foreground">${product.price}</p>
    </div>
  </Link>
);

export default ProductCard;
