import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Shield, Truck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-accent hover:underline">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addItem({ productId: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <Link to={`/shop?category=${product.category}`} className="hover:text-foreground">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-secondary">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={600} height={600} />
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl mb-2">{product.name}</h1>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-sm">
                <span className="text-accent">★ {product.rating}</span>
                <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>
              <span className={`text-xs font-medium ${product.inStock ? "text-success" : "text-destructive"}`}>
                {product.inStock ? "In Stock" : "Sold Out"}
              </span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-xs bg-destructive text-destructive-foreground px-2 py-0.5 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>

          <Button
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            {product.inStock ? "Add to Cart" : "Sold Out"}
          </Button>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
            {[
              { icon: Truck, label: "Free shipping over $75" },
              { icon: RotateCcw, label: "30-day returns" },
              { icon: Shield, label: "1-year warranty" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center text-center gap-1">
                <t.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>

          {/* Product details */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Product Details</h3>
            <ul className="space-y-2">
              {product.details.map((d) => (
                <li key={d} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl mb-8">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
