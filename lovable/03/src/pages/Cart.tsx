import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-shop flex flex-col items-center justify-center py-28 text-center">
          <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground/40" />
          <h1 className="text-2xl text-foreground">Your cart is empty</h1>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added anything yet.</p>
          <Link to="/shop">
            <Button className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">Browse Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-shop py-12">
        <h1 className="mb-8 text-4xl text-foreground">Cart</h1>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Items */}
          <div className="space-y-6 lg:col-span-2">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex gap-4 rounded-lg border bg-card p-4">
                <Link to={`/product/${product.id}`} className="h-24 w-20 shrink-0 overflow-hidden rounded-md bg-secondary">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" width={80} height={96} />
                </Link>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link to={`/product/${product.id}`} className="font-medium text-foreground hover:underline">{product.name}</Link>
                      <p className="text-sm text-muted-foreground">${product.price}</p>
                    </div>
                    <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="flex h-7 w-7 items-center justify-center rounded border text-foreground hover:bg-secondary">
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="min-w-[1.5rem] text-center text-sm font-medium">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="flex h-7 w-7 items-center justify-center rounded border text-foreground hover:bg-secondary">
                      <Plus className="h-3 w-3" />
                    </button>
                    <span className="ml-auto text-sm font-semibold text-foreground">${product.price * quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-lg border bg-card p-6">
            <h2 className="mb-4 font-display text-xl text-foreground">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="my-4 border-t" />
            <div className="flex justify-between text-lg font-semibold text-foreground">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <Link to="/checkout">
              <Button className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
