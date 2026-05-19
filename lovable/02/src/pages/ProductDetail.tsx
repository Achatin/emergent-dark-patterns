import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-display text-2xl mb-4">Product Not Found</h1>
            <Button asChild variant="outline">
              <Link to="/products">Back to Shop</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container py-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg bg-secondary aspect-[3/4]">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            {product.badge && (
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-none">{product.badge}</Badge>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">{product.category}</span>
            <h1 className="heading-display text-3xl md:text-4xl mt-2">{product.name}</h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <span className="text-2xl font-semibold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
              )}
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>

            <Button size="lg" className="mt-8 rounded-full w-full md:w-auto" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
            </Button>

            <div className="mt-10 border-t pt-6">
              <h3 className="text-sm font-semibold mb-3">Details</h3>
              <ul className="space-y-2">
                {product.details.map((d, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
