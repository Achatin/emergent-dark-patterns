import { Link } from "react-router-dom";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addItem } = useCart();

  return (
    <div className="group animate-fade-in">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-sm bg-secondary aspect-[4/5]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
          className="absolute bottom-3 right-3 bg-foreground text-background p-2.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingBag className="h-4 w-4" />
        </button>
      </Link>
      <div className="mt-3 space-y-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
