import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const shipping = subtotal >= 75 ? 0 : 5;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto" />
            <h1 className="text-2xl font-display">Your cart is empty</h1>
            <p className="text-sm text-muted-foreground">Add some products to get started.</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-display mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 p-4 rounded-lg border bg-card">
                <Link to={`/product/${product.id}`} className="shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 rounded-md object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${product.id}`} className="text-sm font-medium hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </Link>
                  <p className="text-xs text-muted-foreground mt-0.5">{product.category}</p>
                  <p className="text-sm font-semibold mt-2">${product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="h-7 w-7 flex items-center justify-center rounded border hover:bg-secondary transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-sm w-6 text-center">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="h-7 w-7 flex items-center justify-center rounded border hover:bg-secondary transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="ml-auto text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label={`Remove ${product.name} from cart`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="text-sm font-semibold self-start">
                  ${(product.price * quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order summary — transparent pricing */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card p-6 space-y-4 sticky top-24">
              <h2 className="text-lg font-display">Order Summary</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-xs text-muted-foreground">Included in price</span>
                </div>
              </div>
              <div className="border-t pt-3 flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(75 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <Button asChild size="lg" className="w-full gap-2">
                <Link to="/checkout">
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link to="/products" className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Cart;
