import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft, Star, Shield, Truck, RefreshCw, Package } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-primary hover:underline">
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-muted border border-border">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">{product.category}</span>
            </div>

            <h1 className="text-4xl mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-primary text-primary'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="text-4xl mb-6">
              ${product.price.toFixed(2)}
              <span className="text-sm text-muted-foreground ml-2">
                Tax included
              </span>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.inStock ? (
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <label htmlFor="quantity" className="text-sm">
                    Quantity
                  </label>
                  <div className="flex items-center border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center bg-transparent border-x border-border py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
                </button>
              </div>
            ) : (
              <div className="mb-8 p-4 bg-muted rounded-lg text-center">
                <p className="text-muted-foreground">Currently out of stock</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">On orders over $50</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm">30-Day Returns</div>
                  <div className="text-xs text-muted-foreground">No questions asked</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm">Secure Checkout</div>
                  <div className="text-xs text-muted-foreground">SSL encrypted</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">Ships within 24hrs</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {product.features && (
                <div>
                  <h3 className="mb-3">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(product.materials || product.dimensions || product.weight) && (
                <div>
                  <h3 className="mb-3">Specifications</h3>
                  <dl className="space-y-2 text-sm">
                    {product.materials && (
                      <div className="flex gap-4">
                        <dt className="text-muted-foreground w-24">Materials:</dt>
                        <dd>{product.materials}</dd>
                      </div>
                    )}
                    {product.dimensions && (
                      <div className="flex gap-4">
                        <dt className="text-muted-foreground w-24">Dimensions:</dt>
                        <dd>{product.dimensions}</dd>
                      </div>
                    )}
                    {product.weight && (
                      <div className="flex gap-4">
                        <dt className="text-muted-foreground w-24">Weight:</dt>
                        <dd>{product.weight}</dd>
                      </div>
                    )}
                  </dl>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
