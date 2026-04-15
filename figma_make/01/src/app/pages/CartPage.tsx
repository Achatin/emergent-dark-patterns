import { Link } from 'react-router';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotal } = useCart();

  // Recommended products based on cart items
  const recommendedProducts = products
    .filter((p) => !items.some((item) => item.product.id === p.id))
    .slice(0, 4);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto p-8 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-2xl mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Add some products to get started!
          </p>
          <Link to="/products">
            <Button size="lg">
              Continue Shopping
            </Button>
          </Link>
        </Card>

        {/* Show recommended products even when cart is empty */}
        <section className="mt-16">
          <h2 className="text-2xl mb-6 text-center">Recommended for You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    );
  }

  const subtotal = getTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id} className="p-6">
              <div className="flex gap-6">
                {/* Product Image */}
                <Link
                  to={`/products/${item.product.id}`}
                  className="flex-shrink-0"
                >
                  <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <div>
                      <Link to={`/products/${item.product.id}`}>
                        <h3 className="mb-1 hover:text-blue-600">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-600">
                        {item.product.category}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-4">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            Math.min(item.product.inStock, item.quantity + 1)
                          )
                        }
                        disabled={item.quantity >= item.product.inStock}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-xl">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-600">
                        ${item.product.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Stock warning */}
                  {item.quantity >= item.product.inStock && (
                    <p className="text-sm text-red-600 mt-2">
                      Maximum stock reached
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Free Shipping Progress */}
            {subtotal < 100 && (
              <div className="mb-6 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900 mb-2">
                  Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
                </p>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(subtotal / 100) * 100}%` }}
                  />
                </div>
              </div>
            )}

            <Link to="/checkout">
              <Button size="lg" className="w-full mb-4">
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link to="/products">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
              <p>✓ Secure checkout</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Price match guarantee</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
