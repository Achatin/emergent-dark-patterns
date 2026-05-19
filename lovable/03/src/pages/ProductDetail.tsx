import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container-shop py-20 text-center">
          <h1 className="text-2xl text-foreground">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-accent hover:underline">Back to shop</Link>
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
      <div className="container-shop py-8">
        <Link to="/shop" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary">
            <img
              src={product.image}
              alt={product.name}
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {product.badge && (
              <span className="inline-block w-fit rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {product.badge}
              </span>
            )}
            <h1 className="text-3xl text-foreground md:text-4xl">{product.name}</h1>
            <p className="font-body text-2xl font-semibold text-foreground">${product.price}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{product.description}</p>

            <ul className="space-y-2">
              {product.details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              onClick={handleAdd}
              className="mt-4 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <ShoppingBag className="h-4 w-4" />
              {added ? "Added!" : "Add to Cart"}
            </Button>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 pb-12">
            <h2 className="mb-6 text-2xl text-foreground">You might also like</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
