import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Star, Minus, Plus, ChevronLeft, Truck, RotateCcw, Shield } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-heading mb-4">Product not found</h1>
        <Link to="/shop" className="text-accent hover:underline">Back to shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
    toast.success(`${product.name} added to cart`, { description: `Qty: ${quantity}` });
  };

  const savings = product.originalPrice ? product.originalPrice - product.price : 0;

  return (
    <div className="container py-8">
      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="text-3xl font-heading mb-3">{product.name}</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Transparent pricing */}
          <div className="bg-secondary/50 rounded-lg p-4 space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            {savings > 0 && (
              <p className="text-sm text-success font-medium">You save ${savings.toFixed(2)} ({Math.round(savings / product.originalPrice! * 100)}% off)</p>
            )}
            <p className="text-xs text-muted-foreground">Price includes all taxes. No hidden fees at checkout.</p>
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Details */}
          <div>
            <h3 className="font-body font-semibold text-sm mb-2">Product Details</h3>
            <ul className="space-y-1">
              {product.details.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to cart */}
          {product.inStock ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button onClick={handleAdd} className="flex-1">Add to Cart — ${(product.price * quantity).toFixed(2)}</Button>
            </div>
          ) : (
            <Badge variant="secondary" className="text-sm py-2 px-4">Currently Sold Out</Badge>
          )}

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-3 pt-4 border-t">
            <div className="flex flex-col items-center text-center gap-1">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Free shipping 50+</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <RotateCcw className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">30-day returns</span>
            </div>
            <div className="flex flex-col items-center text-center gap-1">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
