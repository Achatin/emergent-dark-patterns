import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Star, ShoppingCart, Heart, Truck, Shield, ArrowLeft, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../hooks/useCart';

export function ProductDetailPage() {
  const { onAddToCart } = useCart();
  
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const frequentlyBoughtTogether = products
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    toast.success(`Added ${quantity} ${product.name} to cart`);
  };

  const reviews = [
    { id: 1, name: 'Sarah Johnson', rating: 5, date: '2026-03-15', text: 'Absolutely love this product! Quality is outstanding and shipping was fast.' },
    { id: 2, name: 'Michael Chen', rating: 4, date: '2026-03-10', text: 'Great purchase. Exactly as described. Would recommend!' },
    { id: 3, name: 'Emily Davis', rating: 5, date: '2026-03-05', text: 'Best purchase I\'ve made in a while. Exceeded my expectations!' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-blue-600">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-blue-600">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <Link to="/shop">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="size-4 mr-2" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="size-full object-cover"
              />
            </div>
            {product.originalPrice && (
              <Badge className="bg-red-600 text-lg px-4 py-2">
                Save {discountPercentage}% - Limited Time!
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge variant="outline">{product.category}</Badge>
              {product.tags.includes('new') && (
                <Badge className="ml-2 bg-green-600">New Arrival</Badge>
              )}
            </div>

            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <Badge className="bg-red-600">-{discountPercentage}%</Badge>
                </>
              )}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <>
                  <Check className="size-5 text-green-600" />
                  <span className="text-green-600 font-medium">In Stock - Ready to Ship</span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!product.inStock}
                >
                  +
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="size-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="size-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <Card className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="size-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Free Shipping</p>
                    <p className="text-sm text-gray-600">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="size-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Secure Checkout</p>
                    <p className="text-sm text-gray-600">Your data is protected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="size-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Easy Returns</p>
                    <p className="text-sm text-gray-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="p-6 mb-12">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Premium quality materials</li>
                  <li>Durable and long-lasting</li>
                  <li>Easy to use and maintain</li>
                  <li>Satisfaction guaranteed</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">{product.rating}</div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviewCount} reviews</p>
                  </div>
                </div>
                {reviews.map(review => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-4 ${
                              i < review.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Options</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Standard Shipping (5-7 business days): Free on orders over $50</li>
                    <li>• Express Shipping (2-3 business days): $9.99</li>
                    <li>• Overnight Shipping (1 business day): $19.99</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Return Policy</h4>
                  <p className="text-gray-700">
                    We offer a 30-day return policy. Items must be unused and in original packaging.
                    Return shipping is free for defective items.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Frequently Bought Together */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Bought Together</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                {frequentlyBoughtTogether.map((item, index) => (
                  <div key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-square object-cover rounded-lg mb-2"
                    />
                    <p className="font-medium text-sm line-clamp-2">{item.name}</p>
                    <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Total Price:</p>
                <p className="text-3xl font-bold mb-4">
                  $
                  {(
                    frequentlyBoughtTogether.reduce((sum, p) => sum + p.price, 0)
                  ).toFixed(2)}
                </p>
                <Button className="w-full">Add All to Cart</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(p) => onAddToCart(p, 1)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}