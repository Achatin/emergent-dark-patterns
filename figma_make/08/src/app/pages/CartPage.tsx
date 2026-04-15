import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../hooks/useCart';

export function CartPage() {
  const { cart, onUpdateQuantity, onRemoveItem, onAddToCart } = useCart();
  
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const recommendedProducts = products
    .filter(p => !cart.some(c => c.id === p.id))
    .slice(0, 4);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-md mx-auto p-12 text-center">
            <div className="size-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="size-10 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/shop">
              <Button size="lg">
                Start Shopping
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id}>
                    <div className="flex gap-4">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="size-24 object-cover rounded-lg hover:opacity-80 transition-opacity"
                        />
                      </Link>

                      <div className="flex-1">
                        <div className="flex justify-between mb-2">
                          <div>
                            <Link to={`/product/${item.id}`}>
                              <h3 className="font-semibold hover:text-blue-600 transition-colors">
                                {item.name}
                              </h3>
                            </Link>
                            <Badge variant="outline" className="mt-1">
                              {item.category}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <X className="size-4" />
                          </Button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="size-4" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="size-8"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="size-4" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="text-xl font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-600">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Separator className="mt-6" />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center">
                <Link to="/shop">
                  <Button variant="outline">Continue Shopping</Button>
                </Link>
              </div>
            </Card>

            {/* Free Shipping Progress */}
            {shipping > 0 && (
              <Card className="mt-4 p-4 bg-blue-50 border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingBag className="size-5 text-blue-600" />
                  <p className="text-sm font-medium">
                    Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                  </p>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                  />
                </div>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({cart.length} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <Badge className="bg-green-600">FREE</Badge>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between mb-6">
                <span className="text-xl font-bold">Total</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <Button size="lg" className="w-full mb-3">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </Link>

              <div className="text-center text-sm text-gray-600">
                <p>Secure checkout • Free returns</p>
              </div>

              <Separator className="my-6" />

              {/* Promo Code */}
              <div>
                <label className="text-sm font-medium mb-2 block">Promo Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  />
                  <Button variant="outline" size="sm">Apply</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}