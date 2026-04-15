import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Star, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground">Product not found.</p>
        <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addItem(product, 1, selectedSize, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container py-8">
      <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Images */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="aspect-[3/4] rounded-sm overflow-hidden bg-secondary mb-3">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">{product.name}</h1>
          <p className="text-2xl text-foreground mt-2">${product.price}</p>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-muted-foreground mt-6 leading-relaxed">{product.longDescription}</p>

          {/* Colors */}
          {product.colors && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? "border-primary scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Size</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs font-medium border rounded-none transition-colors ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-foreground hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            onClick={handleAddToCart}
            size="lg"
            className="w-full mt-8 rounded-none uppercase tracking-widest text-xs font-semibold"
          >
            {added ? (
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Added to Cart</span>
            ) : (
              "Add to Cart"
            )}
          </Button>
        </motion.div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
