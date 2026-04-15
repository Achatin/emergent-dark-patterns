import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { products, reviews as allReviews } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ProductCard } from '../components/ProductCard';
import {
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  RefreshCw,
  Heart,
  Minus,
  Plus,
  Check,
} from 'lucide-react';
import { toast } from 'sonner';

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === id);
  const productReviews = allReviews[id || ''] || [];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl mb-4">Product not found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // Frequently bought together - products in same price range
  const frequentlyBought = products
    .filter(
      (p) =>
        p.id !== product.id &&
        Math.abs(p.price - product.price) < 100
    )
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  const discountPercent = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-blue-600">
          Products
        </Link>
        <span>/</span>
        <Link
          to={`/products?category=${product.category}`}
          className="hover:text-blue-600"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div>
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Could add thumbnail gallery here */}
        </div>

        {/* Product Info */}
        <div>
          {/* Badges */}
          <div className="flex gap-2 mb-4">
            {product.badge === 'bestseller' && (
              <Badge className="bg-yellow-500">Best Seller</Badge>
            )}
            {product.badge === 'new' && (
              <Badge className="bg-green-500">New Arrival</Badge>
            )}
            {discountPercent > 0 && (
              <Badge variant="destructive">Save {discountPercent}%</Badge>
            )}
          </div>

          <h1 className="text-3xl mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <Badge variant="destructive">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                </>
              )}
            </div>
            <p className="text-sm text-gray-600">Tax included. Shipping calculated at checkout.</p>
          </div>

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock > 0 ? (
              <div className="flex items-center gap-2 text-green-600">
                <Check className="w-5 h-5" />
                <span>
                  {product.inStock < 20
                    ? `Only ${product.inStock} left in stock - order soon!`
                    : 'In Stock'}
                </span>
              </div>
            ) : (
              <div className="text-red-600">Out of Stock</div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block mb-2">Quantity:</label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-6 py-2">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setQuantity(Math.min(product.inStock, quantity + 1))
                  }
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button
              size="lg"
              onClick={handleAddToCart}
              className="flex-1"
              disabled={product.inStock === 0}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="space-y-3 border-t pt-6">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-5 h-5 text-gray-600" />
              <span>Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <RefreshCw className="w-5 h-5 text-gray-600" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="w-5 h-5 text-gray-600" />
              <span>2-year warranty included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Bought Together */}
      {frequentlyBought.length > 0 && (
        <section className="mb-16">
          <Card className="p-6">
            <h2 className="text-2xl mb-6">Frequently Bought Together</h2>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="w-20 h-20 border rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {frequentlyBought.slice(0, 2).map((p, index) => (
                  <>
                    <span className="text-xl text-gray-400">+</span>
                    <div
                      key={p.id}
                      className="w-20 h-20 border rounded-lg overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </>
                ))}
              </div>
              <div className="flex-1 min-w-[200px]">
                <p className="mb-2">
                  Total:{' '}
                  <span className="text-2xl">
                    $
                    {(
                      product.price +
                      frequentlyBought
                        .slice(0, 2)
                        .reduce((sum, p) => sum + p.price, 0)
                    ).toFixed(2)}
                  </span>
                </p>
                <Button className="w-full">Add All to Cart</Button>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Reviews */}
      {productReviews.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl mb-6">Customer Reviews</h2>
          <div className="grid gap-6">
            {productReviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span>{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
