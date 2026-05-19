import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getProduct, getFeaturedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Star, Truck, RefreshCw, Shield, Minus, Plus, Check } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl mb-4">Product not found</h1>
        <Link to="/shop" className="text-accent font-body hover:underline">Back to shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize || undefined, selectedColor || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = getFeaturedProducts().filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="text-xs font-body text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Images */}
        <div className="space-y-3">
          <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 rounded-md overflow-hidden border-2 transition-colors ${
                    activeImage === i ? "border-accent" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          {product.badge && (
            <span className={`inline-block px-3 py-1 text-xs font-body font-semibold rounded-sm ${
              product.badge === "Sale" ? "bg-sale text-accent-foreground" : "bg-foreground text-background"
            }`}>
              {product.badge}
            </span>
          )}

          <h1 className="font-display text-3xl lg:text-4xl">{product.name}</h1>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm font-body text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-body font-bold">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg font-body text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="text-sm font-body font-semibold text-sale">
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          <p className="font-body text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Colors */}
          {product.colors && (
            <div>
              <label className="text-sm font-body font-medium mb-2 block">
                Color{selectedColor && `: ${selectedColor}`}
              </label>
              <div className="flex gap-2">
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === c.name ? "border-accent scale-110" : "border-border"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div>
              <label className="text-sm font-body font-medium mb-2 block">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[44px] h-10 px-3 border rounded-md text-sm font-body font-medium transition-colors ${
                      selectedSize === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity + Add to cart */}
          <div className="flex gap-3 items-center">
            <div className="flex items-center border rounded-md">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2.5 hover:bg-muted transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2.5 text-sm font-body font-medium min-w-[40px] text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2.5 hover:bg-muted transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button size="lg" className="flex-1 gap-2 font-body" onClick={handleAddToCart}>
              {added ? <><Check className="w-4 h-4" /> Added!</> : "Add to Bag"}
            </Button>
          </div>

          {/* Trust */}
          <div className="border-t pt-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Truck className="w-4 h-4 text-accent" /> Free shipping over $150
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <RefreshCw className="w-4 h-4 text-accent" /> 30-day free returns
            </div>
            <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Shield className="w-4 h-4 text-accent" /> 2-year warranty
            </div>
          </div>

          {/* Details */}
          <div className="border-t pt-6">
            <h3 className="font-body font-semibold text-sm mb-3">Product Details</h3>
            <ul className="space-y-1.5">
              {product.details.map((d, i) => (
                <li key={i} className="text-sm font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl mb-8">You may also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
