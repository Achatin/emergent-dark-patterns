import { Link, useNavigate } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { toast } from 'sonner';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  const shipping = cartTotal >= 100 ? 0 : 15;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  // Get recommended products for upsell
  const recommendedProducts = PRODUCTS.filter(
    p => !cart.find(item => item.id === p.id)
  ).slice(0, 4);

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  const progressToFreeShipping = cartTotal >= 100 ? 100 : (cartTotal / 100) * 100;
  const amountToFreeShipping = Math.max(0, 100 - cartTotal);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length} items)</h1>

        {/* Free shipping progress bar */}
        {amountToFreeShipping > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-900">
                Add ${amountToFreeShipping.toFixed(2)} more to get FREE SHIPPING!
              </span>
              <span className="text-sm font-semibold text-blue-600">{progressToFreeShipping.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              ></div>
            </div>
          </div>
        )}

        {amountToFreeShipping === 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white">✓</div>
            <span className="text-sm font-semibold text-green-900">
              Congratulations! You qualify for FREE SHIPPING!
            </span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="p-6">
                  <div className="flex space-x-4">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                      />
                    </Link>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-semibold hover:text-blue-600 transition">{item.name}</h3>
                          </Link>
                          <p className="text-sm text-gray-600 mt-1">{item.category}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-lg font-bold text-blue-600">${item.price}</span>
                            {item.stock < 20 && (
                              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                                Only {item.stock} left
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                            toast.success('Item removed from cart');
                          }}
                          className="text-red-600 hover:text-red-700 transition"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition flex items-center justify-center"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => {
                              if (item.quantity < item.stock) {
                                updateQuantity(item.id, item.quantity + 1);
                              } else {
                                toast.error('Maximum stock reached');
                              }
                            }}
                            className="w-8 h-8 rounded-lg border border-gray-300 hover:bg-gray-100 transition flex items-center justify-center"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Subtotal</div>
                          <div className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Promo code */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6">
              <div className="flex items-center space-x-3">
                <Tag className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {shipping === 0 ? (
                    <span className="font-semibold text-green-600">FREE</span>
                  ) : (
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">Total</span>
                    <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2 mb-4"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <Link
                to="/products"
                className="block text-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>✓ Secure checkout</p>
                  <p>✓ 30-day return policy</p>
                  <p>✓ 24/7 customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended products (upsell) */}
        {recommendedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition group">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-blue-600 transition line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">${product.price}</span>
                      <button
                        onClick={() => {
                          const { addToCart } = useCart.getState?.() || {};
                          if (addToCart) {
                            addToCart(product);
                            toast.success(`${product.name} added to cart!`);
                          }
                        }}
                        className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
