import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

const SHIPPING_THRESHOLD = 50;
const SHIPPING_COST = 5.99;

const Cart = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center space-y-4">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground" />
        <h1 className="text-2xl font-heading">Your cart is empty</h1>
        <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Button asChild>
          <Link to="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-heading mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 p-4 rounded-lg bg-card border animate-fade-in">
              <Link to={`/product/${product.id}`} className="w-20 h-20 rounded-md overflow-hidden bg-secondary flex-shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <Link to={`/product/${product.id}`} className="font-medium text-sm hover:text-accent transition-colors">{product.name}</Link>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  <button onClick={() => removeItem(product.id)} className="p-1 text-muted-foreground hover:text-destructive transition-colors" aria-label={`Remove ${product.name}`}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 hover:bg-secondary transition-colors" aria-label="Decrease">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-3 text-sm">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 hover:bg-secondary transition-colors" aria-label="Increase">
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <span className="font-medium text-sm">${(product.price * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card border rounded-lg p-6 space-y-4 h-fit lg:sticky lg:top-24">
          <h2 className="font-heading text-xl">Order Summary</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span>{shipping === 0 ? <span className="text-success">Free</span> : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-muted-foreground">Included</span>
            </div>
          </div>

          {shipping > 0 && (
            <p className="text-xs text-accent">Add ${(SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping!</p>
          )}

          <div className="border-t pt-3 flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Button asChild className="w-full group">
            <Link to="/checkout">
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Secure checkout. We only collect information needed to process your order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
