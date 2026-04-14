import { useParams, Link } from "react-router-dom";
import Layout from "@/components/store/Layout";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/store/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground">Product not found.</p>
          <Link to="/shop" className="text-primary underline mt-4 inline-block">Back to shop</Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Layout>
      <div className="container py-8">
        <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-secondary">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center space-y-6">
            {product.badge && (
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">{product.badge}</span>
            )}
            <h1 className="font-heading text-4xl md:text-5xl text-foreground">{product.name}</h1>
            <p className="text-2xl text-foreground">${product.price}</p>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <ul className="space-y-2">
              {product.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>

            <button
              onClick={handleAdd}
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm w-full md:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              {added ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-heading text-2xl mb-8">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
