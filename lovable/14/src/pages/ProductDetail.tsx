import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ShoppingBag, Check, Info } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-display">Product not found</h1>
            <Link to="/products" className="text-primary hover:underline text-sm">← Back to shop</Link>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${product.name} added to cart`, {
      description: `Quantity: ${quantity}`,
      action: {
        label: "View Cart",
        onClick: () => window.location.href = "/cart",
      },
    });
  };

  const shipping = 5;
  const freeShippingThreshold = 75;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container py-8 flex-1">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
              <h1 className="text-3xl font-display leading-tight">{product.name}</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price — transparent */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Info className="h-3 w-3" />
                Price includes all applicable taxes. Shipping: {product.price >= freeShippingThreshold ? "Free" : `$${shipping.toFixed(2)} (free over $${freeShippingThreshold})`}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>

            {/* Materials & Origin — transparency */}
            {(product.materials || product.origin) && (
              <div className="bg-secondary rounded-lg p-4 space-y-2">
                {product.materials && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Materials</span>
                    <span className="font-medium">{product.materials}</span>
                  </div>
                )}
                {product.origin && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Origin</span>
                    <span className="font-medium">{product.origin}</span>
                  </div>
                )}
              </div>
            )}

            {/* Add to cart */}
            <div className="space-y-3 pt-2">
              {product.inStock ? (
                <>
                  <div className="flex items-center gap-3">
                    <label htmlFor="quantity" className="text-sm font-medium">Qty</label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="h-10 w-20 rounded-md border bg-background px-3 text-sm"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
                    <ShoppingBag className="h-4 w-4" /> Add to Cart — ${(product.price * quantity).toFixed(2)}
                  </Button>
                </>
              ) : (
                <Button size="lg" className="w-full" disabled>
                  Out of Stock
                </Button>
              )}
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="h-3 w-3 text-primary" />
                <span>30-day free returns · No questions asked</span>
              </div>
            </div>

            {/* Details */}
            <div className="border-t pt-6">
              <h3 className="text-sm font-semibold mb-3">Product Details</h3>
              <ul className="space-y-1.5">
                {product.details.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">·</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-display mb-6">You might also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <SiteFooter />
    </div>
  );
};

export default ProductDetail;
