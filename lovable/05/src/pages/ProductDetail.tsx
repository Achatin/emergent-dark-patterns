import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-sm underline">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main className="container py-12">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="overflow-hidden rounded-xl bg-secondary/30 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
            {product.category}
          </p>
          <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>
          <p className="text-2xl font-body font-semibold text-foreground mb-6">
            ${product.price}
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <Button
            onClick={handleAdd}
            className="w-full md:w-auto rounded-full px-10 py-6 text-base gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </>
            )}
          </Button>

          <div className="mt-10 border-t pt-6">
            <h3 className="font-display text-lg mb-3">Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {product.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
