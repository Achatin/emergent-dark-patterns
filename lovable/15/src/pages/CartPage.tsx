import { Link } from "react-router-dom";
import { StoreHeader } from "@/components/StoreHeader";
import { StoreFooter } from "@/components/StoreFooter";
import { useCart } from "@/lib/cart-context";
import { getProductImage } from "@/lib/product-images";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const CartPage = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= 75 ? 0 : 8;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <StoreHeader />
        <main className="flex-1 container py-16 text-center">
          <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h1 className="font-display text-2xl mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Browse our collection and find something you love.</p>
          <Button asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </main>
        <StoreFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StoreHeader />
      <main className="flex-1 container py-8">
        <h1 className="font-display text-3xl mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => {
              const image = getProductImage(product.id);
              return (
                <div
                  key={product.id}
                  className="flex gap-4 p-4 border rounded-lg bg-card"
                >
                  <Link to={`/product/${product.id}`} className="shrink-0">
                    <img
                      src={image}
                      alt={product.name}
                      loading="lazy"
                      width={100}
                      height={100}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${product.id}`}
                      className="font-medium text-sm hover:text-accent transition-colors"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-2 py-1 hover:bg-secondary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-1 text-sm">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-2 py-1 hover:bg-secondary transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm">${product.price * quantity}</span>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          aria-label={`Remove ${product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div className="bg-card border rounded-lg p-6 h-fit sticky top-24">
            <h2 className="font-display text-xl mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? <span className="text-trust font-medium">Free</span> : `$${shipping.toFixed(2)}`}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(75 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <div className="border-t pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Tax calculated at checkout. No hidden fees.
              </p>
            </div>
            <Button variant="trust" size="lg" className="w-full mt-6" asChild>
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
            <Link
              to="/shop"
              className="block text-center text-sm text-muted-foreground hover:text-foreground mt-3 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
      <StoreFooter />
    </div>
  );
};

export default CartPage;
