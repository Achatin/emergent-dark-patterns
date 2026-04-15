import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-accent hover:underline mt-4 inline-block">
          Back to shop
        </Link>
      </main>
    );
  }

  const handleAdd = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}× ${product.name}`,
    });
  };

  return (
    <main className="container py-8">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden rounded-lg bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={1024}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {product.category}
          </p>
          <h1 className="font-display text-3xl text-foreground">{product.name}</h1>
          <p className="text-2xl font-medium text-foreground mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Tax included. Shipping calculated at checkout.
          </p>

          <p className="text-foreground/80 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Details */}
          <div className="mt-6 space-y-2">
            {product.details.map((d) => (
              <div key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-success mt-0.5 shrink-0" />
                <span>{d}</span>
              </div>
            ))}
          </div>

          {/* Materials */}
          <div className="mt-6 p-4 rounded-lg bg-secondary">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Materials</p>
            <p className="text-sm text-foreground">{product.materials}</p>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-muted-foreground hover:text-foreground"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-medium text-foreground">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-muted-foreground hover:text-foreground"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <Button
              onClick={handleAdd}
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-medium"
            >
              Add to cart — ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            🔒 We never store payment info. Checkout is SSL-encrypted. We don't sell your data.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
