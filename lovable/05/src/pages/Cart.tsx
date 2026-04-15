import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="container py-20 text-center">
        <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
        <h1 className="font-display text-2xl mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some items to get started.</p>
        <Button asChild variant="outline" className="rounded-full px-8">
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="container py-12 max-w-3xl">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Continue Shopping
      </Link>

      <h1 className="font-display text-3xl mb-8">Cart</h1>

      <div className="space-y-6">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-4 border-b pb-6">
            <Link to={`/product/${product.id}`} className="shrink-0">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                width={100}
                height={100}
                className="h-24 w-24 rounded-lg object-cover bg-secondary/30"
              />
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <Link to={`/product/${product.id}`} className="font-medium truncate">
                  {product.name}
                </Link>
                <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-foreground ml-2">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">${product.price}</p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="h-7 w-7 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Minus className="h-3 w-3" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="h-7 w-7 rounded-full border flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t pt-6 space-y-4">
        <div className="flex justify-between text-lg font-medium">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <Button asChild className="w-full rounded-full py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </div>
    </main>
  );
};

export default Cart;
