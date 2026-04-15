import { useParams, Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Shield, Truck, RefreshCw, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p>Product not found</p>
        <Link to="/shop" className="text-sm underline mt-4 inline-block">
          Back to shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-neutral-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <p className="text-sm text-neutral-500 mb-2">{product.category}</p>
              <h1 className="text-4xl mb-4">{product.name}</h1>
              <p className="text-3xl">${product.price.toFixed(2)}</p>
              <p className="text-sm text-neutral-600 mt-1">Price includes estimated tax</p>
            </div>

            <p className="text-neutral-700 mb-8">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-sm mb-3">Features</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-neutral-900 text-white py-4 hover:bg-neutral-800 transition-colors mb-4"
            >
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
              className="w-full border border-neutral-900 py-4 hover:bg-neutral-50 transition-colors mb-8"
            >
              Buy Now
            </button>

            {/* Trust Indicators */}
            <div className="space-y-4 pt-8 border-t border-neutral-200">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 mt-0.5 text-neutral-700" />
                <div>
                  <p className="text-sm">Free shipping on orders over $50</p>
                  <p className="text-xs text-neutral-500">Estimated delivery: 3-5 business days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-5 h-5 mt-0.5 text-neutral-700" />
                <div>
                  <p className="text-sm">30-day return policy</p>
                  <p className="text-xs text-neutral-500">Free returns, no questions asked</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 mt-0.5 text-neutral-700" />
                <div>
                  <p className="text-sm">Secure checkout</p>
                  <p className="text-xs text-neutral-500">Your payment information is encrypted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-200 mt-16">
          <h2 className="text-2xl mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="group block"
              >
                <div className="aspect-square overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="group-hover:underline">{relatedProduct.name}</h3>
                <p className="text-lg mt-1">${relatedProduct.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
