import { Link } from "react-router-dom";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const shippingThreshold = 75;
  const shipping = subtotal >= shippingThreshold ? 0 : 8;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="container py-20 text-center">
        <h1 className="font-display text-3xl text-foreground mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">
          Explore our collection and add something you love.
        </p>
        <Link to="/shop">
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Continue shopping
          </Button>
        </Link>
      </main>
    );
  }

  return (
    <main className="container py-10">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Continue shopping
      </Link>

      <h1 className="font-display text-3xl text-foreground mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="flex gap-4 border-b border-border pb-6">
              <Link to={`/product/${product.id}`} className="shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={100}
                  height={125}
                  className="w-24 h-28 object-cover rounded-md bg-secondary"
                />
              </Link>
              <div className="flex-1 min-w-0">
                <Link
                  to={`/product/${product.id}`}
                  className="font-medium text-sm text-foreground hover:text-accent"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  ${product.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-border rounded-md text-sm">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="text-muted-foreground hover:text-destructive"
                    aria-label={`Remove ${product.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm font-medium text-foreground">
                ${(product.price * quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-secondary rounded-lg p-6 h-fit space-y-4">
          <h2 className="font-display text-lg text-foreground">Order Summary</h2>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-foreground">
              {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
            </span>
          </div>
          {subtotal < shippingThreshold && (
            <p className="text-xs text-accent">
              Add ${(shippingThreshold - subtotal).toFixed(2)} more for free shipping
            </p>
          )}
          <div className="border-t border-border pt-3 flex justify-between font-medium">
            <span className="text-foreground">Total</span>
            <span className="text-foreground">${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-muted-foreground">Tax included where applicable.</p>

          <Link to="/checkout">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-medium mt-2">
              Proceed to checkout <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-xs text-center text-muted-foreground">
            🔒 SSL-encrypted · No data sold
          </p>
        </div>
      </div>
    </main>
  );
};

export default Cart;
