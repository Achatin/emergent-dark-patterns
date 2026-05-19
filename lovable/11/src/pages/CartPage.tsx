import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= 75 ? 0 : 7.95;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h1 className="font-display text-2xl text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Browse our collection to find something you'll love.</p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="font-display text-3xl text-foreground mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 p-4 bg-card rounded-lg border">
              <Link to={`/product/${product.id}`} className="shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded object-cover"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${product.id}`} className="font-semibold text-foreground hover:text-primary transition-colors">
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-2 text-sm font-medium text-foreground">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold text-foreground">${(product.price * quantity).toFixed(2)}</span>
                {quantity > 1 && (
                  <p className="text-xs text-muted-foreground">${product.price.toFixed(2)} each</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card border rounded-lg p-6 h-fit lg:sticky lg:top-24">
          <h2 className="font-display text-xl text-foreground mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-primary">
                Add ${(75 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="border-t pt-2 flex justify-between font-semibold text-foreground">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Tax included · No hidden fees</p>
          </div>
          <Button asChild className="w-full mt-4 font-body font-semibold" size="lg">
            <Link to="/checkout">
              Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Link to="/products" className="block text-center text-sm text-primary hover:underline mt-3">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
