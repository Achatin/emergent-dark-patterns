import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, ChevronLeft, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-display text-2xl text-foreground mb-4">Product not found</h1>
        <Link to="/products" className="text-primary hover:underline">← Back to shop</Link>
      </div>
    );
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const savings = hasDiscount ? product.originalPrice! - product.price : 0;

  const handleAdd = () => {
    addItem(product, qty);
    toast.success(`${product.name} added to cart`, { description: `Qty: ${qty}` });
  };

  return (
    <div className="container py-8">
      <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ChevronLeft className="h-4 w-4 mr-1" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-3">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
          <h1 className="font-display text-3xl text-foreground mb-3">{product.name}</h1>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-foreground">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>

          {/* Price transparency */}
          <div className="bg-secondary/60 rounded-lg p-4 mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-foreground">${product.price.toFixed(2)}</span>
              {hasDiscount && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice!.toFixed(2)}</span>
                  <span className="text-sm font-medium text-primary">Save ${savings.toFixed(2)}</span>
                </>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Price includes all applicable taxes · No hidden fees
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.longDescription}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-2">Features</h3>
            <ul className="space-y-1.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>

          {product.materials && (
            <div className="text-sm text-muted-foreground mb-1">
              <strong className="text-foreground">Materials:</strong> {product.materials}
            </div>
          )}
          {product.dimensions && (
            <div className="text-sm text-muted-foreground mb-6">
              <strong className="text-foreground">Dimensions:</strong> {product.dimensions}
            </div>
          )}

          {/* Add to cart */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                −
              </button>
              <span className="px-3 py-2 text-sm font-medium text-foreground min-w-[2rem] text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                +
              </button>
            </div>
            <Button onClick={handleAdd} size="lg" className="flex-1 font-body font-semibold">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
