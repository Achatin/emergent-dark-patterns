import { useParams, Link } from "react-router-dom";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { products } from "@/lib/store-data";
import { getProductImage } from "@/lib/product-images";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Star, Shield, Truck, RotateCcw, Minus, Plus, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <StoreHeader />
        <main className="flex-1 container py-16 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/shop" className="text-accent underline mt-4 inline-block">
            Back to Shop
          </Link>
        </main>
        <StoreFooter />
      </div>
    );
  }

  const image = getProductImage(product.id);

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

  return (
    <div className="min-h-screen flex flex-col">
      <StoreHeader />
      <main className="flex-1 container py-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="aspect-square rounded-lg overflow-hidden bg-muted"
          >
            <img
              src={image}
              alt={product.name}
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-warning text-warning"
                        : "text-border"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {product.longDescription}
            </p>

            {/* Product transparency info */}
            <div className="bg-trust-muted rounded-lg p-4 mb-6 space-y-2">
              <p className="text-sm font-medium text-trust flex items-center gap-2">
                <Shield className="h-4 w-4" /> Product Transparency
              </p>
              {product.materials && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Materials:</span> {product.materials}
                </p>
              )}
              {product.origin && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Origin:</span> {product.origin}
                </p>
              )}
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button variant="trust" size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart — ${product.price * quantity}
              </Button>
            </div>

            {/* Shipping info */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-trust" />
                <span>Free shipping on orders over $75</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4 text-trust" />
                <span>30-day free returns, no questions asked</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
};

export default ProductDetailPage;
